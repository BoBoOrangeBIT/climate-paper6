#!/usr/bin/env python3
"""Stream ERA5 hourly 2 m temperature and dew point for 2020 (ARCO-ERA5, Google Cloud public bucket),
apply the lookup tables hour by hour on land points, and accumulate annual metrics.

Source: gs://gcp-public-data-arco-era5/co/single-level-reanalysis.zarr  (reduced Gaussian N320, 542 080 points,
hourly 1979-01-01 .. 2021-08-31). Land mask: ar/1959-2022-6h-1440x721.zarr/land_sea_mask (0.25 deg, nearest neighbour).

For each AC rule r (Default 23 C, DLS 26 C) and each hour, over land points with T > T_set(r):
  AC          dT = T - T_set ;  SET-consistent variant from lookup
  fan         dT from lookup (v 0.8/1.2/2.0), windows T<35/37/38/39, Foster rule, negative-outside-window variant
  evaporative dT from lookup (eps 0.6/0.75/0.85), windows: dT>0 & RH_supply<=80 (primary), <=70, no cap, T_wb<=24, airstream variant
  fan + AC    AC threshold raised by 3 K
Outputs: results/derived/era5_2020_accum.npz, results/derived/cities_hourly_2020.csv, results/derived/era5_meta.json
"""
from __future__ import annotations
import os, sys, time, json
import numpy as np, pandas as pd
import zarr
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
DER = os.path.join(HERE, "..", "derived")
YEAR = 2020
START_IDX = 359400          # 2020-01-01 00:00 in the store's time axis (hours since 1979-01-01)
N_HOURS = 8784              # leap year
CKPT = os.path.join(DER, "era5_2020_checkpoint.npz")
AC_RULES = {"Default": (23.0, 55.0), "DLS": (26.0, 60.0)}
SHIFT = 3.0
CITIES = {  # name: (lat, lon)
    "Phoenix": (33.45, -112.07), "Riyadh": (24.71, 46.68), "Cairo": (30.04, 31.24), "Tehran": (35.69, 51.39),
    "Delhi": (28.61, 77.21), "Karachi": (24.86, 67.01), "Guangzhou": (23.13, 113.26), "Singapore": (1.35, 103.82),
    "Lagos": (6.52, 3.38), "Miami": (25.76, -80.19), "Beijing": (39.90, 116.40), "Paris": (48.86, 2.35),
}

def magnus_rh(t, td):
    es = lambda x: 6.1094 * np.exp(17.625 * x / (243.04 + x))   # Alduchov & Eskridge 1996
    return np.clip(100.0 * es(td) / es(t), 1.0, 100.0)

class Lookup:
    def __init__(self, path):
        d = np.load(path)
        self.T = d["T"]; self.RH = d["RH"]; self.dT = self.T[1] - self.T[0]; self.dRH = self.RH[1] - self.RH[0]
        self.g = {k: d[k] for k in d.files if k not in ("T", "RH")}
    def __call__(self, name, t, rh):
        g = self.g[name]
        x = np.clip((t - self.T[0]) / self.dT, 0, len(self.T) - 1.0001)
        y = np.clip((rh - self.RH[0]) / self.dRH, 0, len(self.RH) - 1.0001)
        i = x.astype(int); j = y.astype(int); fx = x - i; fy = y - j
        return ((1 - fx) * (1 - fy) * g[j, i] + fx * (1 - fy) * g[j, i + 1] + (1 - fx) * fy * g[j + 1, i] + fx * fy * g[j + 1, i + 1])

def main():
    t0 = time.time()
    lut = Lookup(os.path.join(DER, "lookup_tables.npz"))
    print("opening zarr stores ...", flush=True)
    st = zarr.storage.FsspecStore.from_url("gs://gcp-public-data-arco-era5/co/single-level-reanalysis.zarr", storage_options={"token": "anon"})
    g = zarr.open_group(st, mode="r", zarr_format=2)
    t2m, d2m = g["t2m"], g["d2m"]
    lat = g["latitude"][:]; lon = g["longitude"][:]
    tcoord = g["time"][START_IDX:START_IDX + N_HOURS]
    assert tcoord[0] == (np.datetime64(f"{YEAR}-01-01") - np.datetime64("1979-01-01")) / np.timedelta64(1, "h")
    st2 = zarr.storage.FsspecStore.from_url("gs://gcp-public-data-arco-era5/ar/1959-2022-6h-1440x721.zarr", storage_options={"token": "anon"})
    g2 = zarr.open_group(st2, mode="r", zarr_format=2)
    lsm = g2["land_sea_mask"][:]; lat25 = g2["latitude"][:]; lon25 = g2["longitude"][:]
    ilat = np.clip(np.rint((lat25[0] - lat) / 0.25).astype(int), 0, 720) if lat25[0] > lat25[-1] else np.clip(np.rint((lat - lat25[0]) / 0.25).astype(int), 0, 720)
    ilon = np.rint((lon % 360) / 0.25).astype(int) % 1440
    land = lsm[ilat, ilon] >= 0.5
    L = np.where(land)[0]; nL = len(L)
    print(f"points {len(lat)}, land points {nL}", flush=True)
    # cities -> nearest land point
    city_idx = {}
    for c, (clat, clon) in CITIES.items():
        la = np.radians(lat[L]); lo = np.radians(lon[L]); cla = np.radians(clat); clo_ = np.radians(clon % 360)
        d = np.arccos(np.clip(np.sin(la) * np.sin(cla) + np.cos(la) * np.cos(cla) * np.cos(lo - clo_), -1, 1))
        k = int(np.argmin(d)); city_idx[c] = k
        print(f"  {c}: land point {L[k]} at ({lat[L[k]]:.2f}, {lon[L[k]]:.2f}), {6371*d[k]:.0f} km from city", flush=True)

    # accumulators over land points
    keys = []
    for r in AC_RULES:
        keys += [f"{r}_ac_h", f"{r}_ac_dh", f"{r}_acset_dh", f"{r}_ac_dh2",
                 f"{r}_acshift_h", f"{r}_acshift_dh", f"{r}_fanac_dh", f"{r}_fanac_fanonly_h",
                 f"{r}_fancore_dh_all", f"{r}_fanneg_dh"]
        for w in ("T35", "T37", "T38", "T39", "foster", "T38foster", "none"):
            keys += [f"{r}_fan_h_{w}", f"{r}_fan_dh_{w}"]
        for v in ("0.8", "2.0"):
            keys += [f"{r}_fan_dh_v{v}_T38"]
        for w in ("rh80", "rh70", "nocap", "twb24"):
            keys += [f"{r}_evap_h_{w}", f"{r}_evap_dh_{w}"]
        for e in ("0.6", "0.85"):
            keys += [f"{r}_evap_h_eps{e}_rh80", f"{r}_evap_dh_eps{e}_rh80"]
        keys += [f"{r}_evapair_dh_rh80"]
    keys += ["h_T35", "h_T38", "h_T40", "sum_T", "max_T", "h_twb_gt24"]
    acc = {k: np.zeros(nL) for k in keys}
    acc["max_T"][:] = -99
    city_T = np.zeros((N_HOURS, len(CITIES)), np.float32); city_RH = np.zeros_like(city_T)
    done = 0
    if os.path.exists(CKPT):
        ck = np.load(CKPT)
        done = int(ck["done"]); city_T[:done] = ck["city_T"][:done]; city_RH[:done] = ck["city_RH"][:done]
        for k in keys: acc[k] = ck[k]
        print(f"resuming from checkpoint at hour {done}", flush=True)

    # constants for fan+AC
    fan_at_shift = {r: float(lut("fan_1.2", np.array([ts + SHIFT]), np.array([rs]))[0]) for r, (ts, rs) in AC_RULES.items()}
    print("fan dT at shifted setpoint:", fan_at_shift, flush=True)

    def fetch(i):
        return t2m[START_IDX + i, :], d2m[START_IDX + i, :]

    ex = ThreadPoolExecutor(16)
    WINDOW = 48
    futures = {}
    nxt = done
    def submit_upto(n):
        nonlocal nxt
        while nxt < min(n, N_HOURS):
            futures[nxt] = ex.submit(fetch, nxt); nxt += 1
    submit_upto(done + WINDOW)
    last_log = time.time()
    for h in range(done, N_HOURS):
        tk, dk = futures.pop(h).result()
        submit_upto(h + 1 + WINDOW)
        T = tk[L].astype(np.float64) - 273.15
        RH = magnus_rh(T, dk[L].astype(np.float64) - 273.15)
        ci = np.fromiter(city_idx.values(), int)
        city_T[h] = T[ci]; city_RH[h] = RH[ci]
        acc["h_T35"] += T > 35; acc["h_T38"] += T > 38; acc["h_T40"] += T > 40
        acc["sum_T"] += T; np.maximum(acc["max_T"], T, out=acc["max_T"])
        hot = np.where(T > 23.0)[0]
        if len(hot):
            Th = T[hot]; RHh = RH[hot]
            f12 = lut("fan_1.2", Th, RHh); f08 = lut("fan_0.8", Th, RHh); f20 = lut("fan_2.0", Th, RHh)
            fc = lut("fancore_1.2", Th, RHh)
            ev = {e: lut(f"evap_{e}", Th, RHh) for e in ("0.6", "0.75", "0.85")}
            evrhs = {e: lut(f"evaprhs_{e}", Th, RHh) for e in ("0.6", "0.75", "0.85")}
            evair = lut("evapair_0.75", Th, RHh)
            twb = lut("twb", Th, RHh)
            acc["h_twb_gt24"][hot] += twb > 24
            fwin = {"T35": Th < 35, "T37": Th < 37, "T38": Th < 38, "T39": Th < 39,
                    "foster": ~((Th >= 35) & (RHh < 50)), "none": np.ones_like(Th, bool)}
            fwin["T38foster"] = fwin["T38"] & fwin["foster"]
            ewin = {"rh80": (ev["0.75"] > 0) & (evrhs["0.75"] <= 80), "rh70": (ev["0.75"] > 0) & (evrhs["0.75"] <= 70),
                    "nocap": ev["0.75"] > 0, "twb24": twb <= 24}
            for r, (ts, rs) in AC_RULES.items():
                m = Th > ts
                if not m.any(): continue
                idx = hot[m]
                dTac = Th[m] - ts
                acc[f"{r}_ac_h"][idx] += 1; acc[f"{r}_ac_dh"][idx] += dTac; acc[f"{r}_ac_dh2"][idx] += dTac ** 2
                acc[f"{r}_acset_dh"][idx] += lut(f"acset_{r}", Th[m], RHh[m])
                for w, wm in fwin.items():
                    sel = wm[m]
                    acc[f"{r}_fan_h_{w}"][idx] += sel; acc[f"{r}_fan_dh_{w}"][idx] += np.where(sel, f12[m], 0)
                sel38 = fwin["T38"][m]
                acc[f"{r}_fan_dh_v0.8_T38"][idx] += np.where(sel38, f08[m], 0)
                acc[f"{r}_fan_dh_v2.0_T38"][idx] += np.where(sel38, f20[m], 0)
                acc[f"{r}_fancore_dh_all"][idx] += fc[m]
                acc[f"{r}_fanneg_dh"][idx] += np.where(sel38, f12[m], np.minimum(fc[m], 0))
                for w, wm in ewin.items():
                    sel = wm[m]
                    acc[f"{r}_evap_h_{w}"][idx] += sel; acc[f"{r}_evap_dh_{w}"][idx] += np.where(sel, ev["0.75"][m], 0)
                for e in ("0.6", "0.85"):
                    sel = ((ev[e] > 0) & (evrhs[e] <= 80))[m]
                    acc[f"{r}_evap_h_eps{e}_rh80"][idx] += sel; acc[f"{r}_evap_dh_eps{e}_rh80"][idx] += np.where(sel, ev[e][m], 0)
                acc[f"{r}_evapair_dh_rh80"][idx] += np.where(ewin["rh80"][m], evair[m], 0)
                # fan + AC with threshold shifted by 3 K
                above = Th[m] > ts + SHIFT
                acc[f"{r}_acshift_h"][idx] += above
                acc[f"{r}_acshift_dh"][idx] += np.where(above, Th[m] - ts - SHIFT, 0)
                acc[f"{r}_fanac_fanonly_h"][idx] += ~above
                acc[f"{r}_fanac_dh"][idx] += np.where(above, Th[m] - ts - SHIFT + fan_at_shift[r], f12[m])
        if (h + 1) % 240 == 0 or h == N_HOURS - 1:
            el = time.time() - t0
            print(f"hour {h+1}/{N_HOURS}  elapsed {el/60:.1f} min  rate {(h+1-done)/max(el,1e-9):.2f} h/s", flush=True)
        if (h + 1) % 1008 == 0 and h + 1 < N_HOURS:
            np.savez_compressed(CKPT, done=h + 1, city_T=city_T, city_RH=city_RH, **acc)
    ex.shutdown(wait=False)
    acc["mean_T"] = acc["sum_T"] / N_HOURS
    np.savez_compressed(os.path.join(DER, "era5_2020_accum.npz"), lat=lat[L], lon=lon[L], land_index=L, **acc)
    tidx = pd.date_range(f"{YEAR}-01-01", periods=N_HOURS, freq="h", tz="UTC")
    df = pd.DataFrame(np.concatenate([city_T, city_RH], axis=1), index=tidx,
                      columns=[f"T_{c}" for c in CITIES] + [f"RH_{c}" for c in CITIES])
    df.to_csv(os.path.join(DER, "cities_hourly_2020.csv"), float_format="%.2f")
    json.dump({"year": YEAR, "start_index": START_IDX, "n_hours": N_HOURS, "n_points": int(len(lat)), "n_land": int(nL),
               "cities": {c: {"lat": float(lat[L[k]]), "lon": float(lon[L[k]])} for c, k in city_idx.items()},
               "fan_dT_at_shifted_setpoint": fan_at_shift, "lookup_file": "lookup_tables.npz",
               "source": "gs://gcp-public-data-arco-era5/co/single-level-reanalysis.zarr (t2m, d2m)",
               "land_mask": "gs://gcp-public-data-arco-era5/ar/1959-2022-6h-1440x721.zarr land_sea_mask >= 0.5, nearest neighbour",
               "rh_formula": "Magnus (Alduchov & Eskridge 1996), clipped 1-100 %", "runtime_min": (time.time() - t0) / 60},
              open(os.path.join(DER, "era5_meta.json"), "w"), indent=1)
    if os.path.exists(CKPT): os.remove(CKPT)
    print("done in %.1f min" % ((time.time() - t0) / 60), flush=True)

if __name__ == "__main__":
    main()
