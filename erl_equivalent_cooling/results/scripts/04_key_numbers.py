#!/usr/bin/env python3
"""Draft results/key-numbers.csv from the derived files. Every row status=draft until the author confirms."""
from __future__ import annotations
import os, json, csv
import numpy as np, pandas as pd
HERE = os.path.dirname(os.path.abspath(__file__)); DER = os.path.join(HERE, "..", "derived"); RES = os.path.join(HERE, "..")
S = json.load(open(os.path.join(DER, "global_summary.json")))
L = json.load(open(os.path.join(DER, "lookup_summary.json")))
lut = np.load(os.path.join(DER, "lookup_tables.npz")); T = lut["T"]; RH = lut["RH"]
rug = pd.read_csv(os.path.join(DER, "rugani_check.csv"))
cities = pd.read_csv(os.path.join(DER, "cities.csv"))
meta = json.load(open(os.path.join(DER, "era5_meta.json")))
rows = []
def add(id_, value, unit, dec, scenario="", region="", period="", src="", how=""):
    rows.append(dict(id=id_, value=round(float(value), dec), unit=unit, ci_low="", ci_high="", decimals=dec, scenario=scenario,
                     region=region, period=period, source_file=src, how=how, status="draft"))
pct = lambda x: 100 * x
GS = "results/derived/global_summary.json"; LS = "results/derived/lookup_summary.json"; LT = "results/derived/lookup_tables.npz"
D = S["Default"]; DL = S["DLS"]
# headline
add("K001", D["fan_mean_dT_T38"], "K", 1, "Default", "global land", "2020", GS, "Default.fan_mean_dT_T38: area-weighted mean fan dT (1.2 m/s) over AC hours inside the 38 C window")
add("K002", pct(D["fan_cov_T38"]), "%", 0, "Default", "global land", "2020", GS, "100*Default.fan_cov_T38: share of AC hours with T<38 C")
add("K003", pct(D["fan_ratio_T38"]), "%", 0, "Default", "global land", "2020", GS, "100*Default.fan_ratio_T38: fan degree-hours / AC degree-hours")
add("K004", pct(D["ac_hours_avoided_frac"]), "%", 0, "Default", "global land", "2020", GS, "100*Default.ac_hours_avoided_frac: 1 - hours(T>26)/hours(T>23)")
# SET behaviour and Rugani check
f = lut["fan_1.2"]; add("K005", pct(np.mean(f < 0)), "%", 1, "", "lookup grid", "", LT, "share of (T 20-50, RH 5-100) grid cells with negative SET cooling effect at 1.2 m/s")
neg = np.argwhere(f < 0); add("K005a", T[neg[:, 1]].min(), "°C", 1, "", "lookup grid", "", LT, "lowest T with negative SET cooling effect at 1.2 m/s")
add("K005b", RH[neg[:, 0]].min(), "%", 0, "", "lookup grid", "", LT, "lowest RH with negative SET cooling effect at 1.2 m/s")
r = rug[(rug.RH_out == 17.5)]
add("K006", r[r.v_room == "0.1"].dT_equivalent.iloc[0], "K", 1, "Rugani 2026 room state", "chamber", "", "results/derived/rugani_check.csv", "RH_out 17.5, v_room 0.1: equivalent dT of measured room state 29.2 C/52 % vs 32 C/17.5 %")
add("K007", r[r.v_room == "0.3"].dT_equivalent.iloc[0], "K", 1, "Rugani 2026 room state", "chamber", "", "results/derived/rugani_check.csv", "same with 0.3 m/s at the occupant")
add("K008", r[r.v_room == "0.5"].dT_equivalent.iloc[0], "K", 1, "Rugani 2026 room state", "chamber", "", "results/derived/rugani_check.csv", "same with 0.5 m/s at the occupant")
add("K009", rug[(rug.RH_out == 17.5) & (rug.v_room.str.contains("0.75"))].dT_drybulb_measured.iloc[0], "K", 1, "supply-state model eps 0.75", "chamber", "", "results/derived/rugani_check.csv", "dry-bulb supply drop predicted by the supply-state model at 32 C/17.5 %")
# lookup fan
for k, key, how in [("K010", "fan1.2_T30_RH50", "fan 1.2 m/s at 30 C, 50 %"), ("K011", "fan1.2_T35_RH50", "fan 1.2 m/s at 35 C, 50 %"), ("K012", "fan1.2_T38_RH50", "fan 1.2 m/s at 38 C, 50 %"),
                    ("K013", "fan1.2_T35_RH20", "fan 1.2 m/s at 35 C, 20 %"), ("K014", "fan1.2_T35_RH80", "fan 1.2 m/s at 35 C, 80 %"), ("K015", "fan0.8_T35_RH50", "fan 0.8 m/s at 35 C, 50 %"),
                    ("K016", "fan2.0_T35_RH50", "fan 2.0 m/s at 35 C, 50 %"), ("K017", "fan1.2_min_T26-38", "minimum fan 1.2 m/s dT over T 26-38 C, all RH"), ("K018", "fan1.2_max_T26-38", "maximum fan 1.2 m/s dT over T 26-38 C, all RH"),
                    ("K019", "fancore1.2_T45_RH15", "core-temperature variant, 1.2 m/s at 45 C, 15 %"), ("K019a", "fancore1.2_T38_RH80", "core-temperature variant, 1.2 m/s at 38 C, 80 %")]:
    add(k, L[key], "K", 1, "", "lookup", "", LS, how)
# lookup evap
for k, key, how in [("K020", "evap0.75_T35_RH20", "evaporative eps 0.75 at 35 C, 20 %"), ("K021", "evap0.75_T35_RH50", "eps 0.75 at 35 C, 50 %"), ("K022", "evap0.75_T35_RH80", "eps 0.75 at 35 C, 80 %"),
                    ("K023", "evap0.75_T40_RH15", "eps 0.75 at 40 C, 15 %"), ("K024", "evap0.75_T30_RH70", "eps 0.75 at 30 C, 70 %"), ("K027", "acset_Default_T35_RH50", "SET-consistent AC Default dT at 35 C, 50 %"), ("K028", "acset_Default_T35_RH80", "SET-consistent AC Default dT at 35 C, 80 %")]:
    add(k, L[key], "K", 1, "", "lookup", "", LS, how)
rhs = lut["evaprhs_0.75"]; add("K025", rhs[np.searchsorted(RH, 20), np.searchsorted(T, 35)], "%", 0, "", "lookup", "", LT, "supply RH for eps 0.75 at 35 C, 20 %")
add("K025a", rhs[np.searchsorted(RH, 50), np.searchsorted(T, 35)], "%", 0, "", "lookup", "", LT, "supply RH for eps 0.75 at 35 C, 50 %")
e = lut["evap_0.75"]; add("K026", pct(np.mean(e <= 0)), "%", 1, "", "lookup grid", "", LT, "share of grid cells with evaporative dT <= 0 at eps 0.75")
ev_db = pd.read_csv(os.path.join(DER, "lookup_evap.csv")); q = ev_db[(ev_db.eps == 0.75) & (ev_db["T"] == 35) & (ev_db.RH == 20)].iloc[0]
add("K026a", q.dT_db_supply, "K", 1, "", "lookup", "", "results/derived/lookup_evap.csv", "dry-bulb supply drop at 35 C, 20 %, eps 0.75 (compare K020 after humidity penalty)")
add("K026b", q.T_wb, "°C", 1, "", "lookup", "", "results/derived/lookup_evap.csv", "wet-bulb at 35 C, 20 %")
# global fan
add("K030", pct(D["land_share_ac_ge100h"]), "%", 0, "Default", "global land", "2020", GS, "100*Default.land_share_ac_ge100h")
add("K031", D["mean_ac_hours_per_land_point"], "h", 0, "Default", "global land", "2020", GS, "Default.mean_ac_hours_per_land_point (area-weighted)")
add("K032", pct(D["fan_cov_T38"]), "%", 1, "Default", "global land", "2020", GS, "100*Default.fan_cov_T38")
add("K033", pct(D["fan_ratio_T38"]), "%", 1, "Default", "global land", "2020", GS, "100*Default.fan_ratio_T38")
add("K034", pct(D["area_share_fan_cov_ge95"]), "%", 0, "Default", "global land, >=100 AC h", "2020", GS, "100*Default.area_share_fan_cov_ge95")
add("K034a", pct(D["area_share_fan_cov_ge99"]), "%", 0, "Default", "global land, >=100 AC h", "2020", GS, "100*Default.area_share_fan_cov_ge99")
add("K035", pct(D["pt_fan_ratio_p50"]), "%", 0, "Default", "global land, >=100 AC h", "2020", GS, "100*Default.pt_fan_ratio_p50 (area-weighted median across points)")
add("K036", pct(D["pt_fan_ratio_p10"]), "%", 0, "Default", "global land, >=100 AC h", "2020", GS, "100*Default.pt_fan_ratio_p10")
add("K037", pct(D["pt_fan_ratio_p90"]), "%", 0, "Default", "global land, >=100 AC h", "2020", GS, "100*Default.pt_fan_ratio_p90")
add("K038", D["mean_dT_ac_when_on"], "K", 1, "Default", "global land", "2020", GS, "Default.mean_dT_ac_when_on")
add("K039", pct(D["fan_cov_T38foster"]), "%", 1, "Default", "global land", "2020", GS, "100*Default.fan_cov_T38foster")
add("K040", DL["mean_ac_hours_per_land_point"], "h", 0, "DLS", "global land", "2020", GS, "DLS.mean_ac_hours_per_land_point")
add("K041", pct(DL["fan_cov_T38"]), "%", 1, "DLS", "global land", "2020", GS, "100*DLS.fan_cov_T38")
add("K042", pct(DL["fan_ratio_T38"]), "%", 1, "DLS", "global land", "2020", GS, "100*DLS.fan_ratio_T38")
add("K043", DL["fan_mean_dT_T38"], "K", 1, "DLS", "global land", "2020", GS, "DLS.fan_mean_dT_T38")
add("K044", DL["mean_dT_ac_when_on"], "K", 1, "DLS", "global land", "2020", GS, "DLS.mean_dT_ac_when_on")
add("K045", pct(DL["land_share_ac_ge100h"]), "%", 0, "DLS", "global land", "2020", GS, "100*DLS.land_share_ac_ge100h")
# global evaporative
add("K050", pct(D["evap_cov_rh80"]), "%", 1, "Default", "global land", "2020", GS, "100*Default.evap_cov_rh80")
add("K051", pct(D["evap_ratio_rh80"]), "%", 1, "Default", "global land", "2020", GS, "100*Default.evap_ratio_rh80")
add("K052", pct(D["area_share_evap_ratio_ge1"]), "%", 0, "Default", "global land, >=100 AC h", "2020", GS, "100*Default.area_share_evap_ratio_ge1")
add("K053", pct(D["area_share_evap_ratio_lt0.25"]), "%", 0, "Default", "global land, >=100 AC h", "2020", GS, "100*Default.area_share_evap_ratio_lt0.25")
for cls, kk in (("dry", "K054"), ("humid", "K055"), ("intermediate", "K056")):
    add(kk, pct(D[f"class_{cls}_evap_ratio"]), "%", 0, "Default", f"{cls} class", "2020", GS, f"100*Default.class_{cls}_evap_ratio")
    add(kk + "a", pct(D[f"class_{cls}_fan_ratio"]), "%", 0, "Default", f"{cls} class", "2020", GS, f"100*Default.class_{cls}_fan_ratio")
    add(kk + "b", pct(D[f"class_{cls}_area_share"]), "%", 0, "Default", f"{cls} class", "2020", GS, f"100*Default.class_{cls}_area_share (of land with >=100 AC h)")
    add(kk + "c", pct(D[f"class_{cls}_fan_cov"]), "%", 1, "Default", f"{cls} class", "2020", GS, f"100*Default.class_{cls}_fan_cov")
add("K057", D["evap_mean_dT_rh80"], "K", 1, "Default", "global land", "2020", GS, "Default.evap_mean_dT_rh80: mean evaporative dT inside its window")
add("K058", pct(DL["evap_ratio_rh80"]), "%", 1, "DLS", "global land", "2020", GS, "100*DLS.evap_ratio_rh80")
add("K059", pct(DL["evap_cov_rh80"]), "%", 1, "DLS", "global land", "2020", GS, "100*DLS.evap_cov_rh80")
add("K060", pct(D["pt_evap_ratio_p50"]), "%", 0, "Default", "global land, >=100 AC h", "2020", GS, "100*Default.pt_evap_ratio_p50")
add("K061", pct(D["pt_evap_ratio_p10"]), "%", 0, "Default", "global land, >=100 AC h", "2020", GS, "100*Default.pt_evap_ratio_p10")
add("K062", pct(D["pt_evap_ratio_p90"]), "%", 0, "Default", "global land, >=100 AC h", "2020", GS, "100*Default.pt_evap_ratio_p90")
# fan + AC
add("K070", pct(D["ac_hours_avoided_frac"]), "%", 1, "Default", "global land", "2020", GS, "100*Default.ac_hours_avoided_frac")
add("K071", pct(D["ac_dh_avoided_frac"]), "%", 1, "Default", "global land", "2020", GS, "100*Default.ac_dh_avoided_frac: cooling degree-hours avoided")
add("K072", pct(D["fanac_benefit_ratio"]), "%", 0, "Default", "global land", "2020", GS, "100*Default.fanac_benefit_ratio")
add("K073", pct(DL["ac_hours_avoided_frac"]), "%", 1, "DLS", "global land", "2020", GS, "100*DLS.ac_hours_avoided_frac")
add("K074", pct(DL["ac_dh_avoided_frac"]), "%", 1, "DLS", "global land", "2020", GS, "100*DLS.ac_dh_avoided_frac")
add("K075", pct(DL["fanac_benefit_ratio"]), "%", 0, "DLS", "global land", "2020", GS, "100*DLS.fanac_benefit_ratio")
add("K076", meta["fan_dT_at_shifted_setpoint"]["Default"], "K", 1, "Default", "", "", "results/derived/era5_meta.json", "fan 1.2 m/s dT at 26 C, 55 % RH")
for cls, kk in (("dry", "K077"), ("humid", "K078"), ("intermediate", "K079")):
    add(kk, pct(D[f"class_{cls}_ac_hours_avoided_frac"]), "%", 0, "Default", f"{cls} class", "2020", GS, f"100*Default.class_{cls}_ac_hours_avoided_frac")
# sensitivity (Default)
for kk, key, how in [("K080", "fan_ratio_T35", "window 35 C"), ("K081", "fan_ratio_T37", "window 37 C"), ("K082", "fan_ratio_T39", "window 39 C"), ("K083", "fan_ratio_foster", "Foster rule"),
                     ("K084", "fan_ratio_T38foster", "38 C and Foster rule"), ("K085", "fan_ratio_none", "no window"), ("K086", "fan_ratio_neg_outside", "negative dT outside 38 C window"),
                     ("K087", "fan_ratio_core_all", "core-temperature dT, no window"), ("K088", "fan_ratio_v0.8_T38", "0.8 m/s, 38 C window"), ("K089", "fan_ratio_v2.0_T38", "2.0 m/s, 38 C window"),
                     ("K090", "evap_ratio_rh70", "evap RH_s<=70"), ("K091", "evap_ratio_nocap", "evap no cap"), ("K092", "evap_ratio_twb24", "evap T_wb<=24 rule"), ("K093", "evap_ratio_eps0.6_rh80", "eps 0.6"),
                     ("K094", "evap_ratio_eps0.85_rh80", "eps 0.85"), ("K095", "evap_ratio_air_rh80", "evap airstream 0.5 m/s"), ("K096", "acset_ratio", "SET-consistent AC dT over nominal"),
                     ("K097", "fan_cov_T35", "coverage window 35 C"), ("K098", "fan_cov_foster", "coverage Foster rule"), ("K099", "fan_cov_T39", "coverage window 39 C"), ("K099a", "fan_cov_T37", "coverage window 37 C")]:
    add(kk, pct(D[key]), "%", 1, "Default", "global land", "2020", GS, f"100*Default.{key}: {how}")
for kk, key, how in [("K080d", "fan_ratio_T35", "window 35 C"), ("K086d", "fan_ratio_neg_outside", "negative outside"), ("K088d", "fan_ratio_v0.8_T38", "0.8 m/s"), ("K089d", "fan_ratio_v2.0_T38", "2.0 m/s"), ("K093d", "evap_ratio_eps0.6_rh80", "eps 0.6"), ("K094d", "evap_ratio_eps0.85_rh80", "eps 0.85"), ("K097d", "fan_cov_T35", "coverage 35 C")]:
    add(kk, pct(DL[key]), "%", 1, "DLS", "global land", "2020", GS, f"100*DLS.{key}: {how}")
# context
C = S["context"]
add("K100", C["mean_hours_T_gt35"], "h", 0, "", "global land", "2020", GS, "context.mean_hours_T_gt35 (area-weighted mean per land point)")
add("K101", pct(C["land_share_any_hour_gt38"]), "%", 0, "", "global land", "2020", GS, "100*context.land_share_any_hour_gt38")
add("K102", meta["n_land"], "points", 0, "", "global land", "2020", "results/derived/era5_meta.json", "n_land")
add("K103", meta["n_points"], "points", 0, "", "global", "2020", "results/derived/era5_meta.json", "n_points")
# cities: K2xx = 200 + 10*i + metric
metrics = [("ac_h", "Default_ac_h", "h", 0, 1), ("fan_cov", "Default_fan_cov", "%", 0, 100), ("fan_ratio", "Default_fan_ratio", "%", 0, 100), ("evap_ratio", "Default_evap_ratio", "%", 0, 100),
           ("ac_avoided", "Default_ac_hours_avoided_frac", "%", 0, 100), ("dls_ac_h", "DLS_ac_h", "h", 0, 1), ("dls_fan_ratio", "DLS_fan_ratio", "%", 0, 100), ("dls_evap_ratio", "DLS_evap_ratio", "%", 0, 100),
           ("dls_ac_avoided", "DLS_ac_hours_avoided_frac", "%", 0, 100), ("hours_gt38", "hours_T_gt38", "h", 0, 1)]
for i, c in cities.iterrows():
    for j, (nm, col, unit, dec, mult) in enumerate(metrics):
        v = c[col]
        if pd.isna(v): continue
        add(f"K{200 + 10 * i + j}", mult * v, unit, dec, "Default" if not col.startswith("DLS") else "DLS", c.city, "2020", "results/derived/cities.csv", f"{col} for {c.city} ({nm})")
pd.DataFrame(rows).to_csv(os.path.join(RES, "key-numbers.csv"), index=False)
print(len(rows), "rows written")
print(pd.DataFrame(rows)[["id", "value", "unit", "scenario", "region"]].head(60).to_string())
