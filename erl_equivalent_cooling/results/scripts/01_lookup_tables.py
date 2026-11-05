#!/usr/bin/env python3
"""Build the equivalent-temperature-reduction (dT) lookup tables.

Common form used in the paper:  T_exp = T_out - dT_k(T_out, RH_out) * 1[window_k]

Technologies
  AC    : dT = T_out - T_set above the setpoint (Default 23 C/55 %, DLS 26 C/60 %).
          SET-consistent variant: dT such that SET(T_out - dT, RH_out, still air) = SET(T_set, RH_set, still air).
  fan   : dT such that SET(T_out - dT, RH_out, still air 0.1 m/s) = SET(T_out, RH_out, v_fan)  (ASHRAE 55 cooling effect).
          Core-temperature variant (sensitivity, allows negative values):
          dT_core = (t_core_still - t_core_fan) / (d t_core_still / d T) using the two-node model with sweating limits.
  evap  : supply state T_s = T - eps (T - T_wb), humidity ratio from adiabatic saturation (constant enthalpy),
          dT such that SET(T_out - dT, RH_out, still) = SET(T_s, RH_s, still).

All SET values: Gagge two-node model via pythermalcomfort (set_tmp), met 1.1, clo 0.5, tr = tdb, standing.
Outputs (results/derived): lookup_fan.csv, lookup_evap.csv, lookup_ac_set.csv, lookup_tables.npz, rugani_check.csv
"""
from __future__ import annotations
import os, sys, warnings, json
import numpy as np, pandas as pd
warnings.filterwarnings("ignore")
from pythermalcomfort.models import set_tmp, use_fans_heatwaves
from pythermalcomfort import psychrometrics as psy

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "derived"); os.makedirs(OUT, exist_ok=True)

MET, CLO = 1.1, 0.5
V_STILL = 0.1                     # ASHRAE 55 still-air reference used by the cooling-effect method
V_FANS = [0.8, 1.2, 2.0]          # 0.8 no occupant control, 1.2 with occupant control (ASHRAE 55), 2.0 chamber trials
V_PRIMARY = 1.2
EPS_LIST = [0.6, 0.75, 0.85]
EPS_PRIMARY = 0.75
V_EVAP_AIR = 0.5                  # sensitivity: occupant inside the cooler's supply airstream
AC_RULES = {"Default": (23.0, 55.0), "DLS": (26.0, 60.0)}

T_GRID = np.round(np.arange(20.0, 50.0 + 1e-9, 0.25), 2)   # outdoor dry-bulb, C
RH_GRID = np.arange(5.0, 100.0 + 1e-9, 1.0)                 # outdoor RH, %
T_FINE = np.round(np.arange(-5.0, 60.0 + 1e-9, 0.05), 2)    # inversion grid for still-air SET

def SET(tdb, rh, v):
    tdb = np.asarray(tdb, float); rh = np.asarray(rh, float)
    v = np.broadcast_to(np.asarray(v, float), tdb.shape)
    r = set_tmp(tdb=tdb, tr=tdb, v=v, rh=rh, met=MET, clo=CLO, limit_inputs=False, round_output=False)
    return np.asarray(r.set, float)

def still_air_set_table():
    """SET0[i_rh, j_t] on (RH_GRID x T_FINE) at still air. Monotone in T for each RH."""
    TT, RR = np.meshgrid(T_FINE, RH_GRID)
    S = SET(TT.ravel(), RR.ravel(), V_STILL).reshape(TT.shape)
    # enforce monotonicity numerically (tiny non-monotone wiggles would break inversion)
    S = np.maximum.accumulate(S, axis=1)
    return S

def invert_T(S0, target, rh_index):
    """For each (target SET, rh row) return the still-air dry-bulb with the same SET (linear interp on T_FINE)."""
    out = np.empty_like(target, dtype=float)
    for k, (s, ir) in enumerate(zip(target, rh_index)):
        out[k] = np.interp(s, S0[ir], T_FINE)
    return out

def humidity_ratio(tdb, rh, p=101325.0):
    pws = np.asarray(psy.p_sat(tdb), float)            # Pa
    pw = pws * np.asarray(rh, float) / 100.0
    return 0.621945 * pw / (p - pw)

def rh_from_w(tdb, w, p=101325.0):
    pw = w * p / (0.621945 + w)
    return 100.0 * pw / np.asarray(psy.p_sat(tdb), float)

def enthalpy(tdb, w):   # kJ/kg dry air
    return 1.006 * tdb + w * (2501.0 + 1.86 * tdb)

def evap_supply_state(tdb, rh, eps):
    twb = np.asarray(psy.wet_bulb_tmp(tdb, rh), float)
    ts = tdb - eps * (tdb - twb)
    w0 = humidity_ratio(tdb, rh)
    h0 = enthalpy(tdb, w0)
    ws = (h0 - 1.006 * ts) / (2501.0 + 1.86 * ts)      # adiabatic (constant-enthalpy) humidification
    rhs = np.clip(rh_from_w(ts, ws), 0, 100)
    return twb, ts, rhs

def main():
    print("still-air SET inversion table ...", flush=True)
    S0 = still_air_set_table()
    TT, RR = np.meshgrid(T_GRID, RH_GRID)
    T = TT.ravel(); RH = RR.ravel(); irh = np.repeat(np.arange(len(RH_GRID)), len(T_GRID))
    S_still = SET(T, RH, V_STILL)

    # ---------------- fan (SET cooling effect)
    fan_rows = []; fan_dT = {}
    for v in V_FANS:
        s = SET(T, RH, v)
        Teq = invert_T(S0, s, irh)
        dT = T - Teq
        fan_dT[v] = dT.reshape(TT.shape)
        fan_rows.append(pd.DataFrame({"T": T, "RH": RH, "v": v, "SET_still": S_still, "SET_fan": s, "dT_fan": dT}))
        print(f"fan v={v}: dT range {dT.min():.2f}..{dT.max():.2f} K", flush=True)
    fan = pd.concat(fan_rows, ignore_index=True)

    # ---------------- fan, core-temperature variant (two-node with sweating/blood-flow limits; negatives allowed)
    print("core-temperature variant ...", flush=True)
    def tcore(tdb, rh, v):
        r = use_fans_heatwaves(tdb=tdb, tr=tdb, v=np.full_like(tdb, v), rh=rh, met=MET, clo=CLO,
                               limit_inputs=False, round_output=False)
        return np.asarray(r.t_core, float)
    tc0 = tcore(T, RH, V_STILL)
    tc0_plus = tcore(T + 1.0, RH, V_STILL)
    slope = np.maximum(tc0_plus - tc0, 0.005)              # K core per K dry-bulb at still air (floor avoids blow-up)
    fan_core = {}
    for v in V_FANS:
        tcv = tcore(T, RH, v)
        dTc = (tc0 - tcv) / slope
        dTc = np.clip(dTc, -10, 10)
        fan_core[v] = dTc.reshape(TT.shape)
        print(f"core variant v={v}: dT range {dTc.min():.2f}..{dTc.max():.2f} K; share negative {np.mean(dTc<0):.2f}", flush=True)
    fan["dT_fan_core"] = np.concatenate([fan_core[v].ravel() for v in V_FANS])
    fan["t_core_still"] = np.tile(tc0, len(V_FANS))

    # ---------------- evaporative cooler
    evap_rows = []; evap_dT = {}; evap_rhs = {}; evap_ts = {}
    twb = np.asarray(psy.wet_bulb_tmp(T, RH), float)
    for eps in EPS_LIST:
        _, ts, rhs = evap_supply_state(T, RH, eps)
        s = SET(ts, rhs, V_STILL)
        Teq = invert_T(S0, s, irh)
        dT = T - Teq
        evap_dT[eps] = dT.reshape(TT.shape); evap_rhs[eps] = rhs.reshape(TT.shape); evap_ts[eps] = ts.reshape(TT.shape)
        evap_rows.append(pd.DataFrame({"T": T, "RH": RH, "eps": eps, "T_wb": twb, "T_supply": ts, "RH_supply": rhs,
                                       "dT_db_supply": T - ts, "SET_still": S_still, "SET_supply": s, "dT_evap": dT}))
        print(f"evap eps={eps}: dT range {dT.min():.2f}..{dT.max():.2f} K; share dT<=0 {np.mean(dT<=0):.2f}", flush=True)
    evap = pd.concat(evap_rows, ignore_index=True)
    # airstream variant (primary eps only): occupant exposed to the supply air at 0.5 m/s
    _, ts, rhs = evap_supply_state(T, RH, EPS_PRIMARY)
    s_air = SET(ts, rhs, V_EVAP_AIR)
    evap_air_dT = (T - invert_T(S0, s_air, irh)).reshape(TT.shape)
    print(f"evap airstream v={V_EVAP_AIR} eps={EPS_PRIMARY}: dT range {evap_air_dT.min():.2f}..{evap_air_dT.max():.2f} K", flush=True)

    # ---------------- AC, SET-consistent variant
    ac_rows = []; ac_set_dT = {}
    for name, (tset, rhset) in AC_RULES.items():
        s_set = SET(np.array([tset]), np.array([rhset]), V_STILL)[0]
        Teq = invert_T(S0, np.full_like(T, s_set), irh)
        dT = T - Teq
        ac_set_dT[name] = dT.reshape(TT.shape)
        ac_rows.append(pd.DataFrame({"T": T, "RH": RH, "rule": name, "T_set": tset, "RH_set": rhset,
                                     "dT_ac": np.maximum(T - tset, 0), "dT_ac_set": dT, "SET_setpoint": s_set}))
        print(f"AC {name}: SET at setpoint {s_set:.2f} C", flush=True)
    ac = pd.concat(ac_rows, ignore_index=True)

    # ---------------- windows (as columns, so the ERA5 stage and figures use identical definitions)
    fan_primary = fan[fan.v == V_PRIMARY].copy()
    for thr in (35, 37, 38, 39):
        fan_primary[f"win_T{thr}"] = (fan_primary["T"] < thr)
    fan_primary["win_foster"] = ~((fan_primary["T"] >= 35) & (fan_primary["RH"] < 50))
    ev_primary = evap[evap.eps == EPS_PRIMARY].copy()
    ev_primary["win_rh80"] = (ev_primary.dT_evap > 0) & (ev_primary.RH_supply <= 80)
    ev_primary["win_rh70"] = (ev_primary.dT_evap > 0) & (ev_primary.RH_supply <= 70)
    ev_primary["win_nocap"] = (ev_primary.dT_evap > 0)
    ev_primary["win_twb24"] = (ev_primary.T_wb <= 24)

    fan.to_csv(os.path.join(OUT, "lookup_fan.csv"), index=False, float_format="%.4f")
    evap.to_csv(os.path.join(OUT, "lookup_evap.csv"), index=False, float_format="%.4f")
    ac.to_csv(os.path.join(OUT, "lookup_ac_set.csv"), index=False, float_format="%.4f")
    fan_primary.to_csv(os.path.join(OUT, "lookup_fan_primary_windows.csv"), index=False, float_format="%.4f")
    ev_primary.to_csv(os.path.join(OUT, "lookup_evap_primary_windows.csv"), index=False, float_format="%.4f")
    np.savez_compressed(os.path.join(OUT, "lookup_tables.npz"), T=T_GRID, RH=RH_GRID,
        **{f"fan_{v}": fan_dT[v] for v in V_FANS}, **{f"fancore_{v}": fan_core[v] for v in V_FANS},
        **{f"evap_{e}": evap_dT[e] for e in EPS_LIST}, **{f"evaprhs_{e}": evap_rhs[e] for e in EPS_LIST},
        **{f"acset_{k}": ac_set_dT[k] for k in AC_RULES}, **{"evapair_0.75": evap_air_dT}, twb=twb.reshape(TT.shape), set_still=S_still.reshape(TT.shape))

    # ---------------- Rugani et al. 2026 check: chamber 32 C, RH 15-20 %; whole-room EC: -2.8 K, RH to 52 %; manikin CE ~3 K
    rows = []
    for rh0 in (15.0, 17.5, 20.0):
        s_base = SET(np.array([32.0]), np.array([rh0]), V_STILL)[0]
        for vroom in (V_STILL, 0.3, 0.5):
            s_room = SET(np.array([32.0 - 2.8]), np.array([52.0]), vroom)[0]
            Teq = np.interp(s_room, S0[np.searchsorted(RH_GRID, rh0)], T_FINE)
            rows.append({"RH_out": rh0, "v_room": vroom, "T_room": 29.2, "RH_room": 52.0, "SET_base": s_base,
                         "SET_room": s_room, "dT_equivalent": 32.0 - Teq, "dT_drybulb_measured": 2.8})
        # what our supply-state model would predict for this outdoor state
        for eps in EPS_LIST:
            twb_, ts_, rhs_ = evap_supply_state(np.array([32.0]), np.array([rh0]), eps)
            rows.append({"RH_out": rh0, "v_room": "supply-state model eps=%.2f" % eps, "T_room": float(ts_[0]), "RH_room": float(rhs_[0]),
                         "SET_base": s_base, "SET_room": float(SET(ts_, rhs_, V_STILL)[0]),
                         "dT_equivalent": float(32.0 - np.interp(SET(ts_, rhs_, V_STILL)[0], S0[np.searchsorted(RH_GRID, rh0)], T_FINE)),
                         "dT_drybulb_measured": float(32.0 - ts_[0])})
    pd.DataFrame(rows).to_csv(os.path.join(OUT, "rugani_check.csv"), index=False, float_format="%.3f")

    # ---------------- a few headline numbers for the registry draft
    def at(arr, t, rh): return float(arr[np.searchsorted(RH_GRID, rh), np.searchsorted(T_GRID, t)])
    summary = {
        "fan1.2_T30_RH50": at(fan_dT[1.2], 30, 50), "fan1.2_T35_RH50": at(fan_dT[1.2], 35, 50), "fan1.2_T38_RH50": at(fan_dT[1.2], 38, 50),
        "fan1.2_T35_RH20": at(fan_dT[1.2], 35, 20), "fan1.2_T35_RH80": at(fan_dT[1.2], 35, 80),
        "fan0.8_T35_RH50": at(fan_dT[0.8], 35, 50), "fan2.0_T35_RH50": at(fan_dT[2.0], 35, 50),
        "fan1.2_min_T26-38": float(fan_dT[1.2][:, (T_GRID >= 26) & (T_GRID <= 38)].min()),
        "fan1.2_max_T26-38": float(fan_dT[1.2][:, (T_GRID >= 26) & (T_GRID <= 38)].max()),
        "evap0.75_T35_RH20": at(evap_dT[0.75], 35, 20), "evap0.75_T35_RH50": at(evap_dT[0.75], 35, 50), "evap0.75_T35_RH80": at(evap_dT[0.75], 35, 80),
        "evap0.75_T40_RH15": at(evap_dT[0.75], 40, 15), "evap0.75_T30_RH70": at(evap_dT[0.75], 30, 70),
        "fancore1.2_T45_RH15": at(fan_core[1.2], 45, 15), "fancore1.2_T38_RH80": at(fan_core[1.2], 38, 80),
        "acset_Default_T35_RH50": at(ac_set_dT["Default"], 35, 50), "acset_Default_T35_RH80": at(ac_set_dT["Default"], 35, 80),
    }
    json.dump(summary, open(os.path.join(OUT, "lookup_summary.json"), "w"), indent=1)
    print(json.dumps(summary, indent=1))

if __name__ == "__main__":
    main()
