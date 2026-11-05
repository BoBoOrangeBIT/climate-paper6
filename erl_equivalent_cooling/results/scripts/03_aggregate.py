#!/usr/bin/env python3
"""Aggregate the ERA5 2020 accumulators: global land summaries, 0.5 deg maps, city table, sensitivity table,
and a draft of results/key-numbers.csv (status=draft, the author confirms).

Weights: ERA5 N320 reduced Gaussian points are quasi equal-area; we still weight each point by cos(lat)/n_points_in_row
(proportional to the area it represents). "AC hours" = hours with T_out > T_set of the rule. Ratios are
sum(dT_tech over AC hours in window) / sum(dT_AC over AC hours), area-weighted sums over land.
"""
from __future__ import annotations
import os, json, csv
import numpy as np, pandas as pd

HERE = os.path.dirname(os.path.abspath(__file__))
DER = os.path.join(HERE, "..", "derived"); RES = os.path.join(HERE, "..")
d = np.load(os.path.join(DER, "era5_2020_accum.npz"))
lat = d["lat"]; lon = d["lon"]
rows_per_lat = pd.Series(lat).round(4).map(pd.Series(lat).round(4).value_counts())
# full-row counts (land+sea) are needed for area per point; N320 row counts are in the store attrs, but a point's share of
# its latitude band is 1/N_row; we approximate N_row from the known N320 "pl" distribution via cos(lat) scaling (max 1280).
n_row_full = np.clip(np.rint(1280 * np.cos(np.radians(lat))), 18, 1280)
w = np.cos(np.radians(lat)) / n_row_full
w = w / w.sum()
A = {k: d[k] for k in d.files}
RULES = ["Default", "DLS"]
MIN_H = 100   # mask for maps and point distributions: at least 100 AC hours per year

def wsum(x, m=None):
    return float(np.sum((w * x) if m is None else (w * x)[m]))

summary = {}
for r in RULES:
    ac_h = A[f"{r}_ac_h"]; ac_dh = A[f"{r}_ac_dh"]
    S = {}
    S["land_share_any_ac"] = wsum(ac_h > 0)
    S["land_share_ac_ge100h"] = wsum(ac_h >= MIN_H)
    S["mean_ac_hours_per_land_point"] = wsum(ac_h)
    S["mean_ac_degree_hours"] = wsum(ac_dh)
    S["mean_dT_ac_when_on"] = wsum(ac_dh) / wsum(ac_h)
    S["acset_ratio"] = wsum(A[f"{r}_acset_dh"]) / wsum(ac_dh)
    for wn in ("T35", "T37", "T38", "T39", "foster", "T38foster", "none"):
        S[f"fan_cov_{wn}"] = wsum(A[f"{r}_fan_h_{wn}"]) / wsum(ac_h)
        S[f"fan_ratio_{wn}"] = wsum(A[f"{r}_fan_dh_{wn}"]) / wsum(ac_dh)
        S[f"fan_mean_dT_{wn}"] = wsum(A[f"{r}_fan_dh_{wn}"]) / wsum(A[f"{r}_fan_h_{wn}"])
    for v in ("0.8", "2.0"):
        S[f"fan_ratio_v{v}_T38"] = wsum(A[f"{r}_fan_dh_v{v}_T38"]) / wsum(ac_dh)
        S[f"fan_mean_dT_v{v}_T38"] = wsum(A[f"{r}_fan_dh_v{v}_T38"]) / wsum(A[f"{r}_fan_h_T38"])
    S["fan_ratio_neg_outside"] = wsum(A[f"{r}_fanneg_dh"]) / wsum(ac_dh)
    S["fan_ratio_core_all"] = wsum(A[f"{r}_fancore_dh_all"]) / wsum(ac_dh)
    for wn in ("rh80", "rh70", "nocap", "twb24"):
        S[f"evap_cov_{wn}"] = wsum(A[f"{r}_evap_h_{wn}"]) / wsum(ac_h)
        S[f"evap_ratio_{wn}"] = wsum(A[f"{r}_evap_dh_{wn}"]) / wsum(ac_dh)
        S[f"evap_mean_dT_{wn}"] = wsum(A[f"{r}_evap_dh_{wn}"]) / max(wsum(A[f"{r}_evap_h_{wn}"]), 1e-12)
    for e in ("0.6", "0.85"):
        S[f"evap_ratio_eps{e}_rh80"] = wsum(A[f"{r}_evap_dh_eps{e}_rh80"]) / wsum(ac_dh)
        S[f"evap_cov_eps{e}_rh80"] = wsum(A[f"{r}_evap_h_eps{e}_rh80"]) / wsum(ac_h)
    S["evap_ratio_air_rh80"] = wsum(A[f"{r}_evapair_dh_rh80"]) / wsum(ac_dh)
    S["acshift_hours_frac"] = wsum(A[f"{r}_acshift_h"]) / wsum(ac_h)
    S["ac_hours_avoided_frac"] = 1 - S["acshift_hours_frac"]
    S["ac_dh_avoided_frac"] = 1 - wsum(A[f"{r}_acshift_dh"]) / wsum(ac_dh)
    S["fanac_benefit_ratio"] = wsum(A[f"{r}_fanac_dh"]) / wsum(ac_dh)
    # point distributions (land points with >= MIN_H AC hours)
    m = ac_h >= MIN_H
    fr = np.where(m, A[f"{r}_fan_dh_T38"] / np.maximum(ac_dh, 1e-9), np.nan)
    er = np.where(m, A[f"{r}_evap_dh_rh80"] / np.maximum(ac_dh, 1e-9), np.nan)
    cov = np.where(m, A[f"{r}_fan_h_T38"] / np.maximum(ac_h, 1e-9), np.nan)
    def wq(x, q):
        ok = ~np.isnan(x); xs = x[ok]; ws = w[ok]; o = np.argsort(xs); cw = np.cumsum(ws[o]) / ws.sum()
        return float(xs[o][np.searchsorted(cw, q)])
    S["pt_fan_ratio_p10"], S["pt_fan_ratio_p50"], S["pt_fan_ratio_p90"] = wq(fr, .1), wq(fr, .5), wq(fr, .9)
    S["pt_evap_ratio_p10"], S["pt_evap_ratio_p50"], S["pt_evap_ratio_p90"] = wq(er, .1), wq(er, .5), wq(er, .9)
    S["pt_fan_cov_p10"], S["pt_fan_cov_p50"] = wq(cov, .1), wq(cov, .5)
    wm = w[m] / w[m].sum()
    S["area_share_fan_cov_ge95"] = float(np.sum(wm * (cov[m] >= 0.95)))
    S["area_share_fan_cov_ge99"] = float(np.sum(wm * (cov[m] >= 0.99)))
    S["area_share_evap_ratio_ge1"] = float(np.sum(wm * (er[m] >= 1.0)))
    S["area_share_evap_ratio_lt0.25"] = float(np.sum(wm * (er[m] < 0.25)))
    S["area_share_fan_ratio_ge0.2"] = float(np.sum(wm * (fr[m] >= 0.2)))
    # humidity classes among masked points by share of AC hours with T_wb > 24 C
    hs = A["h_twb_gt24"] / np.maximum(A[f"{r}_ac_h"], 1e-9)   # note: h_twb_gt24 counted over hours T>23 (same as Default AC hours)
    for name, sel in {"dry": hs < 0.10, "intermediate": (hs >= 0.10) & (hs < 0.50), "humid": hs >= 0.50}.items():
        mm = m & sel
        if mm.any():
            S[f"class_{name}_area_share"] = float(np.sum(w[mm]) / np.sum(w[m]))
            S[f"class_{name}_fan_ratio"] = wsum(A[f"{r}_fan_dh_T38"], mm) / wsum(ac_dh, mm)
            S[f"class_{name}_evap_ratio"] = wsum(A[f"{r}_evap_dh_rh80"], mm) / wsum(ac_dh, mm)
            S[f"class_{name}_fan_cov"] = wsum(A[f"{r}_fan_h_T38"], mm) / wsum(ac_h, mm)
            S[f"class_{name}_ac_hours_avoided_frac"] = 1 - wsum(A[f"{r}_acshift_h"], mm) / wsum(ac_h, mm)
    summary[r] = S
summary["context"] = {"land_points": int(len(lat)), "mean_hours_T_gt35": wsum(A["h_T35"]), "mean_hours_T_gt38": wsum(A["h_T38"]),
                      "mean_hours_T_gt40": wsum(A["h_T40"]), "land_share_any_hour_gt38": wsum(A["h_T38"] > 0)}
json.dump(summary, open(os.path.join(DER, "global_summary.json"), "w"), indent=1)

# ---------------- 0.5 deg maps
glat = np.arange(89.75, -90, -0.5); glon = np.arange(-179.75, 180, 0.5)
ilat = np.clip(((90 - lat) / 0.5).astype(int), 0, len(glat) - 1)
lon180 = ((lon + 180) % 360) - 180
ilon = np.clip(((lon180 + 180) / 0.5).astype(int), 0, len(glon) - 1)
def grid(x, mask=None):
    num = np.zeros((len(glat), len(glon))); den = np.zeros_like(num)
    sel = np.ones(len(x), bool) if mask is None else mask
    np.add.at(num, (ilat[sel], ilon[sel]), x[sel]); np.add.at(den, (ilat[sel], ilon[sel]), 1)
    out = np.full_like(num, np.nan); ok = den > 0; out[ok] = num[ok] / den[ok]; return out
maps = {"lat": glat, "lon": glon}
for r in RULES:
    ac_h = A[f"{r}_ac_h"]; ac_dh = A[f"{r}_ac_dh"]; m = ac_h >= MIN_H
    maps[f"{r}_ac_hours"] = grid(ac_h)
    maps[f"{r}_ac_dh"] = grid(ac_dh)
    maps[f"{r}_fan_cov"] = grid(np.where(m, A[f"{r}_fan_h_T38"] / np.maximum(ac_h, 1), np.nan), m)
    maps[f"{r}_fan_ratio"] = grid(np.where(m, A[f"{r}_fan_dh_T38"] / np.maximum(ac_dh, 1e-9), np.nan), m)
    maps[f"{r}_evap_ratio"] = grid(np.where(m, A[f"{r}_evap_dh_rh80"] / np.maximum(ac_dh, 1e-9), np.nan), m)
    maps[f"{r}_evap_cov"] = grid(np.where(m, A[f"{r}_evap_h_rh80"] / np.maximum(ac_h, 1), np.nan), m)
    maps[f"{r}_ac_hours_avoided_frac"] = grid(np.where(m, 1 - A[f"{r}_acshift_h"] / np.maximum(ac_h, 1), np.nan), m)
    maps[f"{r}_fan_mean_dT"] = grid(np.where(m, A[f"{r}_fan_dh_T38"] / np.maximum(A[f"{r}_fan_h_T38"], 1), np.nan), m)
maps["mean_T"] = grid(A["mean_T"]); maps["h_T35"] = grid(A["h_T35"])
np.savez_compressed(os.path.join(DER, "global_maps_05deg.npz"), **maps)

# ---------------- cities, recomputed from hourly series with the same lookup and definitions
import importlib.util
spec = importlib.util.spec_from_file_location("s02", os.path.join(HERE, "02_era5_stream.py")); s02 = importlib.util.module_from_spec(spec); spec.loader.exec_module(s02)
lut = s02.Lookup(os.path.join(DER, "lookup_tables.npz"))
ch = pd.read_csv(os.path.join(DER, "cities_hourly_2020.csv"), index_col=0)
cities = [c[2:] for c in ch.columns if c.startswith("T_")]
crow = []
for c in cities:
    T = ch[f"T_{c}"].values.astype(float); RH = ch[f"RH_{c}"].values.astype(float)
    rec = {"city": c, "mean_T": T.mean(), "max_T": T.max(), "hours_T_gt35": int((T > 35).sum()), "hours_T_gt38": int((T > 38).sum())}
    f12 = lut("fan_1.2", T, RH); f08 = lut("fan_0.8", T, RH); f20 = lut("fan_2.0", T, RH); fc = lut("fancore_1.2", T, RH)
    ev = {e: lut(f"evap_{e}", T, RH) for e in ("0.6", "0.75", "0.85")}; rhs = {e: lut(f"evaprhs_{e}", T, RH) for e in ("0.6", "0.75", "0.85")}
    evair = lut("evapair_0.75", T, RH); twb = lut("twb", T, RH)
    for r, (ts, rs) in s02.AC_RULES.items():
        on = T > ts; ac_dh = np.where(on, T - ts, 0).sum(); ac_h = on.sum()
        rec[f"{r}_ac_h"] = int(ac_h); rec[f"{r}_ac_dh"] = ac_dh
        if ac_h == 0:
            continue
        w38 = on & (T < 38)
        rec[f"{r}_fan_cov"] = w38.sum() / ac_h
        rec[f"{r}_fan_dh"] = f12[w38].sum(); rec[f"{r}_fan_ratio"] = f12[w38].sum() / ac_dh
        rec[f"{r}_fan_ratio_v0.8"] = f08[w38].sum() / ac_dh; rec[f"{r}_fan_ratio_v2.0"] = f20[w38].sum() / ac_dh
        rec[f"{r}_fan_mean_dT"] = f12[w38].mean() if w38.any() else np.nan
        for thr in (35, 37, 39):
            wt = on & (T < thr); rec[f"{r}_fan_ratio_T{thr}"] = f12[wt].sum() / ac_dh; rec[f"{r}_fan_cov_T{thr}"] = wt.sum() / ac_h
        wf = on & ~((T >= 35) & (RH < 50)); rec[f"{r}_fan_ratio_foster"] = f12[wf].sum() / ac_dh; rec[f"{r}_fan_cov_foster"] = wf.sum() / ac_h
        rec[f"{r}_fan_ratio_neg"] = (f12[w38].sum() + np.minimum(fc[on & ~w38], 0).sum()) / ac_dh
        we = on & (ev["0.75"] > 0) & (rhs["0.75"] <= 80)
        rec[f"{r}_evap_cov"] = we.sum() / ac_h; rec[f"{r}_evap_dh"] = ev["0.75"][we].sum(); rec[f"{r}_evap_ratio"] = ev["0.75"][we].sum() / ac_dh
        rec[f"{r}_evap_mean_dT"] = ev["0.75"][we].mean() if we.any() else np.nan
        for e in ("0.6", "0.85"):
            wee = on & (ev[e] > 0) & (rhs[e] <= 80); rec[f"{r}_evap_ratio_eps{e}"] = ev[e][wee].sum() / ac_dh
        wn = on & (ev["0.75"] > 0); rec[f"{r}_evap_ratio_nocap"] = ev["0.75"][wn].sum() / ac_dh
        w70 = on & (ev["0.75"] > 0) & (rhs["0.75"] <= 70); rec[f"{r}_evap_ratio_rh70"] = ev["0.75"][w70].sum() / ac_dh
        rec[f"{r}_evap_ratio_air"] = evair[we].sum() / ac_dh
        above = T > ts + s02.SHIFT
        rec[f"{r}_acshift_h"] = int(above.sum()); rec[f"{r}_ac_hours_avoided_frac"] = 1 - above.sum() / ac_h
        rec[f"{r}_ac_dh_avoided_frac"] = 1 - np.where(above, T - ts - s02.SHIFT, 0).sum() / ac_dh
        fan_shift = float(lut("fan_1.2", np.array([ts + s02.SHIFT]), np.array([rs]))[0])
        rec[f"{r}_fanac_benefit_ratio"] = (np.where(above, T - ts - s02.SHIFT + fan_shift, 0).sum() + f12[on & ~above].sum()) / ac_dh
    rec["share_hot_hours_twb_gt24"] = float(((T > 23) & (twb > 24)).sum() / max((T > 23).sum(), 1))
    crow.append(rec)
cities_df = pd.DataFrame(crow); cities_df.to_csv(os.path.join(DER, "cities.csv"), index=False, float_format="%.4f")

# ---------------- sensitivity table (global, Default and DLS)
sens = []
for r in RULES:
    S = summary[r]
    for label, cov, ratio in [
        ("fan 1.2 m/s, window 38 C (primary)", S["fan_cov_T38"], S["fan_ratio_T38"]),
        ("fan 1.2 m/s, window 35 C", S["fan_cov_T35"], S["fan_ratio_T35"]),
        ("fan 1.2 m/s, window 37 C", S["fan_cov_T37"], S["fan_ratio_T37"]),
        ("fan 1.2 m/s, window 39 C", S["fan_cov_T39"], S["fan_ratio_T39"]),
        ("fan 1.2 m/s, Foster rule", S["fan_cov_foster"], S["fan_ratio_foster"]),
        ("fan 1.2 m/s, 38 C and Foster rule", S["fan_cov_T38foster"], S["fan_ratio_T38foster"]),
        ("fan 1.2 m/s, no window", S["fan_cov_none"], S["fan_ratio_none"]),
        ("fan 1.2 m/s, negative dT outside 38 C window", S["fan_cov_T38"], S["fan_ratio_neg_outside"]),
        ("fan 1.2 m/s, core-temperature dT, no window", S["fan_cov_none"], S["fan_ratio_core_all"]),
        ("fan 0.8 m/s, window 38 C", S["fan_cov_T38"], S["fan_ratio_v0.8_T38"]),
        ("fan 2.0 m/s, window 38 C", S["fan_cov_T38"], S["fan_ratio_v2.0_T38"]),
        ("evaporative eps 0.75, RH_s <= 80 % (primary)", S["evap_cov_rh80"], S["evap_ratio_rh80"]),
        ("evaporative eps 0.75, RH_s <= 70 %", S["evap_cov_rh70"], S["evap_ratio_rh70"]),
        ("evaporative eps 0.75, no RH cap", S["evap_cov_nocap"], S["evap_ratio_nocap"]),
        ("evaporative eps 0.75, T_wb <= 24 C rule", S["evap_cov_twb24"], S["evap_ratio_twb24"]),
        ("evaporative eps 0.6, RH_s <= 80 %", S["evap_cov_eps0.6_rh80"], S["evap_ratio_eps0.6_rh80"]),
        ("evaporative eps 0.85, RH_s <= 80 %", S["evap_cov_eps0.85_rh80"], S["evap_ratio_eps0.85_rh80"]),
        ("evaporative eps 0.75, airstream 0.5 m/s", S["evap_cov_rh80"], S["evap_ratio_air_rh80"]),
        ("AC, SET-consistent dT", 1.0, S["acset_ratio"]),
        ("fan + AC, benefit ratio", 1.0, S["fanac_benefit_ratio"]),
    ]:
        sens.append({"rule": r, "variant": label, "coverage": cov, "equivalence_ratio": ratio})
pd.DataFrame(sens).to_csv(os.path.join(DER, "sensitivity.csv"), index=False, float_format="%.4f")
print(json.dumps(summary, indent=1))
print(cities_df[["city", "Default_ac_h", "Default_fan_cov", "Default_fan_ratio", "Default_evap_ratio", "Default_ac_hours_avoided_frac", "DLS_ac_h", "DLS_fan_ratio", "DLS_evap_ratio", "DLS_ac_hours_avoided_frac"]].round(3).to_string())
