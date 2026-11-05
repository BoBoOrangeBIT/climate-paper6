# Figure specifications (author-owned)

Journal: ERL (IOP). Single column 85 mm, double column 170 mm. Fonts 6 to 7 pt. Panel labels (a), (b) lowercase in parentheses. Legend label "Figure N."

## Fig. 1 (F1) Equivalent temperature reduction surfaces
- Message: On the SET scale a fan is worth 2 to 4 K almost everywhere, an evaporative cooler is worth a humidity-discounted wet-bulb depression, and both can be compared with the air-conditioning rules directly.
- Panels: (a) ΔT_fan at 1.2 m/s on a T (24 to 46 °C) by RH (10 to 90 %) grid, filled contours, with the Morris 2021 window boundaries (37, 38, 39 °C) and the Foster 2021 exclusion (≥ 35 °C and RH < 50 %) overlaid. (b) ΔT_evap at ε = 0.75 on the same grid, with the window boundary (ΔT > 0 and supply RH ≤ 80 %). (c) ΔT versus outdoor temperature at RH = 20, 50, 80 % for AC Default, AC DLS, fan 1.2 m/s, evaporative ε = 0.75 (lines, colour by technology, line style by RH). (d) ΔT_fan versus temperature at RH 50 % for 0.8, 1.2, 2.0 m/s and the negative-ΔT sensitivity.
- Data: results/derived/lookup_fan.csv, lookup_evap.csv, lookup_fan_tcore.csv
- Encoding: filled contours (sequential, cividis or viridis), lines coloured by technology (style.yaml)
- Size: double column 170 mm, height about 130 mm
- Numbers in caption: K010, K020

## Fig. 2 (F2) Global application, ERA5 2020
- Message: The fan window covers nearly all air-conditioning hours, fans deliver a sizeable fraction of air-conditioning exposure reduction, and evaporative coolers beat air conditioning only in dry climates.
- Panels: (a) exposure degree-hours removed by AC under the Default rule (K h per year), (b) share of AC Default hours inside the fan window (%), (c) fan equivalence ratio (fan 1.2 m/s over AC Default), (d) evaporative equivalence ratio (ε 0.75 over AC Default), masked where AC Default hours < 100.
- Data: results/derived/global_05deg.nc or .npz (0.5° land grid)
- Encoding: maps, Robinson or PlateCarree, sequential colour maps, diverging centred at 1 for ratios.
- Size: double column 170 mm, height about 110 mm
- Numbers in caption: K030, K032, K040

## Fig. 3 (F3) Cities and the fan plus air-conditioning combination
- Message: Across 12 cities, fans deliver most of the air-conditioning exposure reduction, evaporative coolers split by humidity, and the 3 K shift removes a large share of air-conditioning hours.
- Panels: (a) horizontal bars per city, exposure degree-hours removed by AC Default, AC DLS, fan 1.2 m/s, evaporative ε 0.75 (with whiskers spanning 0.8 to 2.0 m/s and ε 0.6 to 0.85). (b) AC operating hours per city under Default and DLS, and with the 3 K fan shift, as grouped bars or dumbbells. (c) sensitivity of the global fan coverage and equivalence ratio to the window threshold (35, 37, 38, 39 °C, Foster rule, negative ΔT).
- Data: results/derived/cities.csv, results/derived/sensitivity.csv
- Size: double column 170 mm, height about 100 mm
- Numbers in caption: K050, K060
