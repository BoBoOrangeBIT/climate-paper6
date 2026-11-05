# Methods

## A common exposure-reduction form

<!-- C06 -->
We wrote every cooling technology k as an equivalent temperature reduction ΔT_k that acts on the temperature entering the exposure–response function only inside an operating window,

T_exp = T_out − ΔT_k(T_out, RH_out) · 1[window_k],

where T_out and RH_out are outdoor dry-bulb temperature and relative humidity and 1[·] is the indicator function. Air conditioning already enters heat-health models in this form [@barreca2016adapting; @carleton2022valuing], so ΔT_AC = T_out − T_set whenever T_out > T_set. The Default rule holds 23 °C and 55 % RH and the decent living standards (DLS) rule 26 °C and 60 % RH, following the decent living standards literature [@kikstra2021decent; @mastrucci2019improving]. The humidity setpoint enters only an SET-consistent variant, where SET is the Standard Effective Temperature of the Gagge two-node model [@gagge1986standard]. Table 1 defines all four technologies in this form.

**Table 1.** Common exposure-reduction form for the four technologies.

| Technology | Equivalent temperature reduction ΔT | Operating window | Primary parameters | Sensitivity range |
|---|---|---|---|---|
| Air conditioning | T_out − T_set. SET-consistent variant solves SET(T_out − ΔT, RH_out, still air) = SET(T_set, RH_set, still air) | T_out > T_set | Default 23 °C, 55 % RH. DLS 26 °C, 60 % RH | SET-consistent variant |
| Electric fan | ASHRAE 55 cooling effect. ΔT solves SET(T_out − ΔT, RH_out, 0.1 m/s) = SET(T_out, RH_out, v_fan). Two-node model, met 1.1, clo 0.5, t_r = t_a | T_out > T_set and T_out < 38 °C, else ΔT = 0 | v_fan 1.2 m/s | v_fan 0.8 and 2.0 m/s. Window 35, 37, 39 °C, Foster rule, no window. Negative ΔT outside the window from the core-temperature variant |
| Direct evaporative cooler | T_s = T_out − ε (T_out − T_wb), RH_s from adiabatic saturation. ΔT solves SET(T_out − ΔT, RH_out, 0.1 m/s) = SET(T_s, RH_s, 0.1 m/s) | T_out > T_set, ΔT > 0 and RH_s ≤ 80 % | ε = 0.75 | ε 0.6 and 0.85. RH_s ≤ 70 %, no cap, T_wb ≤ 24 °C. Occupant in the 0.5 m/s supply airstream |
| Fan plus air conditioning | AC threshold and setpoint raised by 3 K. Fan ΔT below the raised threshold, AC holds T_set + 3 K above it with the fan running | Fan as above, AC when T_out > T_set + 3 K | 3 K (ASHRAE 55 elevated air speed allowance) | Benefit ratio relative to AC alone |

## Electric fans

<!-- C07 -->
We defined the fan ΔT with the cooling effect method of ASHRAE 55 [@ashrae2020thermal; @arens2009moving]. ΔT_fan is the dry-bulb reduction at still air (0.1 m/s) and unchanged humidity that yields the same SET as the outdoor state with air speed v_fan (Table 1), computed with the two-node model in pythermalcomfort 4.8 [@tartarini2020pythermalcomfort; @gagge1986standard] for a seated, lightly clothed adult (Table 1). The primary air speed was 1.2 m/s, the ASHRAE 55 limit with occupant control, with 0.8 m/s (the limit without occupant control) and 2.0 m/s (chamber trials [@morris2019effects; @oconnor2024effect]) as sensitivity cases. We solved for ΔT by bracketed root finding and allowed negative solutions [@schiavon2008energy; @zhang2015review].

<!-- C08 -->
SET assumes unlimited sweating and therefore rarely penalises air speed. Only 9.9 % <!-- R:K005 --> of cells on the temperature by humidity grid have a negative cooling effect at 1.2 m/s, all above 41.5 °C <!-- R:K005a --> with relative humidity of at least 49 % <!-- R:K005b -->, that is hot and humid air in which the skin is fully wet. The hot-dry harm reported in chamber trials is not reproduced by SET, which is why the window is imposed externally. We therefore imposed an external operating window. The primary window is T_out < 38 °C, the threshold derived for healthy older adults by Morris et al [@morris2021electric]. Sensitivity windows were 39 °C (healthy young adults) and 37 °C (adults on anticholinergic medication) from the same study, 35 °C from older public guidance [@meade2024critical], and the rule of Foster et al that fans are ineffective at or above 35 °C when RH is below 50 % [@foster2021quantifying]. Outside the window ΔT_fan = 0 in the main analysis, so the benefit is lost but no harm is counted. A sensitivity test lets ΔT_fan turn negative outside the window, derived from the two-node core temperature with sweating limits in the use_fans_heatwaves model [@tartarini2021application].

## Direct evaporative coolers

<!-- C09 -->
For a direct evaporative cooler (DEC) the supply dry-bulb temperature is T_s = T_out − ε (T_out − T_wb), where T_wb is the outdoor wet-bulb temperature and ε the saturation effectiveness [@duan2012indirect], and the supply humidity RH_s follows the adiabatic saturation line. We used ε = 0.75 as the primary value and 0.6 and 0.85 as bounds, consistent with measured pad performance [@camargo2005experimental; @harby2019investigation] and with the 65 to 80 % efficiency assumed in a recent heat-mortality study [@lo2023optimal]. We converted the supply state to the common scale by SET equivalence at still air and outdoor humidity (Table 1), so that ΔT_DEC discounts the dry-bulb drop by the added moisture. The operating window requires ΔT_DEC > 0 and RH_s ≤ 80 %, with the sensitivity cases listed in Table 1. The cap reflects the moisture and bioaerosol burden of evaporative cooling in humid air [@johnston2022bioaerosol; @tewari2019field].

<!-- C09 -->
We checked the conversion step against the chamber measurements of Rugani et al [@rugani2026creating] (32 °C, 15 to 20 % RH, room cooling 2.8 K, room RH 52 %, manikin cooling effect about 3 K) by applying the SET conversion to the measured room state (section 3.1). The supply-state model predicts a dry-bulb drop of 11.6 K <!-- R:K009 --> for that chamber because it describes pad outlet air rather than the mixed room, so it is an upper bound for an occupant in the airstream.

## Fan plus air conditioning

<!-- C10 -->
We represented the combination as air conditioning with threshold and setpoint raised by 3 K, the ASHRAE 55 comfort-zone allowance for 1.2 m/s [@ashrae2020thermal; @hoyt2015extending; @zhou2023effects] and the shift seen in fan-first field studies [@malik2022potential]. The fan runs inside its window whenever T_out exceeds the original setpoint, and air conditioning holds T_set + 3 K above the raised threshold. Because the fan lookup gives 3.4 K <!-- R:K076 --> at the raised Default setpoint, the exposure benefit inside the fan window is in aggregate at least that of air conditioning alone.

## Data, lookup tables and metrics

<!-- C11 -->
We applied the four rules hour by hour to ERA5 reanalysis [@hersbach2020era5] 2 m temperature and 2 m dew point for 2020 on the native reduced Gaussian N320 grid of about 31 km, with 542 080 <!-- R:K103 --> points globally and 157 163 <!-- R:K102 --> land points (land-sea mask at least 0.5). We converted dew point to RH with the Magnus formula [@alduchov1996improved], and computed the wet-bulb temperature with the psychrometric functions of pythermalcomfort [@tartarini2020pythermalcomfort] . We precomputed ΔT and the windows on a grid from 20 to 50 °C in 0.25 K steps and 5 to 100 % RH in 1 % steps and interpolated bilinearly in the hourly pass. For each rule r and technology k, AC hours are hours with T_out > T_set(r). Exposure degree-hours removed are Σ_h ΔT_k(h)·1[window_k(h)] over the AC hours of the rule, in K h per year. The equivalence ratio is the exposure degree-hours removed by k divided by those removed by air conditioning under the same rule. Coverage is the share of AC hours inside the window of k. AC hours avoided under fan plus air conditioning are 1 − hours(T_out > T_set + 3 K)/hours(T_out > T_set), with the analogous ratio for cooling degree-hours. Global values are area-weighted means over land points, and maps and distributions use land points with at least 100 AC hours per year aggregated to 0.5°. We classified land points by the share of hours above 23 °C that have T_wb > 24 °C, namely dry below 10 %, intermediate 10 to 50 % and humid 50 % or more. We extracted hourly series for twelve cities spanning hot-dry, monsoon, hot-humid and temperate climates (table 2). All exposures are evaluated at outdoor conditions and all statistics are land-area based, not population weighted.
