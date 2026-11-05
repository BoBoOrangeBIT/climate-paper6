# results/

`key-numbers.csv` is the single source of truth for every number in the paper (K-IDs, `status` draft → confirmed by the author).

## Scripts (run in order, system python3, no conda env in this container)
| script | what it does | writes |
|---|---|---|
| `scripts/01_lookup_tables.py` | SET-based equivalent temperature reduction ΔT on a T (20–50 °C, 0.25 K) × RH (5–100 %, 1 %) grid for fans (0.8, 1.2, 2.0 m/s), direct evaporative coolers (ε 0.6, 0.75, 0.85, plus 0.5 m/s airstream variant), SET-consistent AC variant, core-temperature fan variant, windows, Rugani 2026 check | `derived/lookup_*.csv`, `derived/lookup_tables.npz`, `derived/rugani_check.csv`, `derived/lookup_summary.json` |
| `scripts/02_era5_stream.py` | streams ERA5 hourly t2m and d2m for 2020 (ARCO-ERA5, N320 reduced Gaussian, 157 163 land points), applies the lookup tables hour by hour, accumulates annual metrics, extracts 12 city series | `derived/era5_2020_accum.npz`, `derived/cities_hourly_2020.csv`, `derived/era5_meta.json`, `derived/era5_stream.log` |
| `scripts/03_aggregate.py` | area-weighted global summaries, 0.5° maps, city table, sensitivity table | `derived/global_summary.json`, `derived/global_maps_05deg.npz`, `derived/cities.csv`, `derived/sensitivity.csv` |
| `scripts/04_key_numbers.py` | writes the draft registry from the derived files | `key-numbers.csv` |

## Definitions used everywhere
- AC hours (rule r): hours with outdoor T > T_set(r). Default 23 °C/55 % RH, DLS 26 °C/60 % RH.
- Exposure degree-hours removed: Σ_h ΔT_k(h)·1[window_k(h)] over AC hours of the rule. Units K h per year.
- Equivalence ratio: degree-hours removed by technology k divided by degree-hours removed by AC under the same rule.
- Coverage: share of AC hours that fall inside the technology window.
- Fan window (primary): T < 38 °C (Morris 2021, healthy older adults). Sensitivity 35, 37, 39 °C, Foster 2021 rule (exclude T ≥ 35 °C with RH < 50 %), negative ΔT outside window (two-node core temperature), no window.
- Evaporative window (primary): ΔT > 0 and supply RH ≤ 80 %. Sensitivity RH ≤ 70 %, no cap, T_wb ≤ 24 °C.
- Fan plus AC: AC threshold and setpoint raised by 3 K, fan at 1.2 m/s runs whenever T > T_set. AC hours avoided = 1 − hours(T > T_set + 3)/hours(T > T_set).
- Area weights: cos(lat)/n_row, maps and point distributions restricted to land points with ≥ 100 AC hours per year.
- Humidity classes: share of hours with T > 23 °C that have T_wb > 24 °C, dry < 10 %, intermediate 10–50 %, humid ≥ 50 %.
