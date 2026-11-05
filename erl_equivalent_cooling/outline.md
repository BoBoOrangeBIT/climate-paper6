# Outline (author-owned, claim IDs are permanent)

Rules: one line per paragraph. Claim IDs C01 ... are permanent. Journal: ERL Letter, main text ≤ 4000 words (excludes abstract, captions, references). Order of writing: Methods → Results → Discussion → Introduction → Conclusion → Abstract → Title.

## Introduction (budget: 750 words)
- P1 C01 Heat-health and adaptation models represent adaptation almost only as air conditioning, written as "above a threshold, hold a setpoint". Evidence: Barreca 2016, Deschênes & Greenstone 2011, Carleton 2022, Chua 2023, Colelli & Mistry 2020 (IAM cooling modules), Biardeau 2020, Davis 2021, Falchetta 2024 (cooling gap and inequality).
- P2 C02 Fans and direct evaporative coolers are the cooling appliances most households in hot regions actually own, at a small fraction of the energy of air conditioning. Evidence: IEA 2018 (2.3 billion fans, 55 % of households), Agarwal 2026 (India evaporative coolers), Jay 2021 Lancet, Malik 2022 (fan-first cuts AC demand), Ravanelli 2016 (fan uses about 2 % of AC electricity), UNEP cooling report.
- P3 C03 The health evidence for fans is physiological and contested, with recommended upper temperatures between 35 and 40 °C that depend on humidity and population, and evaporative coolers are nearly absent from the health literature. Evidence: Jay 2015, Morris 2019, Morris 2021, Tartarini 2021, Foster 2021 part II, Meade 2024, O'Connor 2024, Bröde 2023, WHO guidance; Rugani 2026, Tewari 2019, Pavanello & Sue Wing.
- P4 C04 Gap. Building science expresses moving air as an SET-based equivalent temperature reduction (ASHRAE 55 elevated air speed, Arens 2009, Hoyt 2015, Zhou 2023, Schiavon & Melikov 2008 or similar), but no study has connected that metric to the threshold-and-setpoint form used by exposure–response models, and no common metric exists for evaporative coolers.
- P5 C05 This letter. Research questions: (RQ1) can fans and evaporative coolers be written in the same form as air conditioning, (RQ2) how large is their equivalent cooling relative to air conditioning across climates, (RQ3) how much air-conditioning operation does a fan plus air-conditioning combination avoid. Contributions in sentences. Results: K001 to K004 headline.

## Methods (budget: 1100 words)
- P1 C06 Common form. T_exp = T_out − ΔT_k(T_out, RH_out)·1[window_k]. Air conditioning under the Default rule (23 °C, 55 % RH) and the DLS rule (26 °C, 60 % RH), ΔT_AC = T_out − T_set when T_out > T_set. Humidity setpoint affects only the SET sensitivity variant. Table 1 defines all four technologies.
- P2 C07 Fan ΔT. Gagge two-node SET (pythermalcomfort 4.8, Tartarini & Schiavon 2020), cooling effect method of ASHRAE 55 (still air 0.1 m/s, same humidity, met 1.1, clo 0.5, tr = ta). Air speeds 1.2 m/s (ASHRAE 55 upper limit with occupant control, primary), 0.8 m/s (upper limit without occupant control) and 2.0 m/s (chamber trials, Morris 2019, O'Connor 2024). Solved by root finding allowing negative values.
- P3 C08 Fan window. Primary 38 °C (older adults, Morris 2021), sensitivity 39 °C (healthy adults), 37 °C (anticholinergic medication), 35 °C (older guidance, Meade 2024), and the Foster 2021 rule (ineffective at ≥ 35 °C when RH < 50 %). Outside the window ΔT = 0 in the main analysis. Sensitivity with negative ΔT derived from the two-node core temperature with sweating limits (use_fans_heatwaves, Tartarini 2021). Why an external window is needed (SET with unlimited sweating never penalises air speed, K005).
- P4 C09 Evaporative cooler ΔT. Supply state T_s = T_db − ε(T_db − T_wb), humidity along the adiabatic saturation line, ε = 0.75 primary, 0.6 and 0.85 bounds. SET of the supply state at still air converted back to an equivalent dry-bulb at the outdoor humidity. Window: ΔT > 0 and supply RH ≤ 80 % (sensitivity 70 % and no cap). Check against Rugani 2026 (chamber 32 °C, RH 15 to 20 %, room −2.8 K, RH to 52 %, manikin cooling effect about 3 K): applying the conversion to the measured room state gives K006.
- P5 C10 Fan plus air conditioning. Threshold and setpoint raised by 3 K (ASHRAE 55 elevated air speed allowance, Hoyt 2015, Malik 2022, Zhou 2023). The fan runs inside its window whenever T_out exceeds the original setpoint. Health benefit identical by construction to air conditioning alone inside the fan window, air-conditioning hours and cooling degree-hours fall.
- P6 C11 Data and metrics. ERA5 hourly 2 m temperature and dew point, 2020, reduced Gaussian N320 (about 31 km), 542 080 points, land points from the ERA5 land-sea mask, aggregated to 0.5° for maps. RH from Magnus formula, wet-bulb from pythermalcomfort psychrometrics (Stull-type or iterative). Lookup tables on a 0.25 K by 1 % grid with bilinear interpolation. Metrics: hours inside each window, exposure degree-hours removed, equivalence ratio relative to AC under the same rule, coverage (share of AC hours inside fan window), AC operating hours avoided. Twelve cities (hot-dry, hot-humid, temperate, monsoon). Code and lookup tables released.

## Results (budget: 1250 words)
### R1 On the common scale, a fan is worth about 3 K and an evaporative cooler is worth the wet-bulb depression discounted by humidity [Fig. 1, Table 1]
- P1 C12 Fan ΔT surfaces by temperature, humidity and air speed. Results: K010 to K016.
- P2 C13 Evaporative ΔT surface, humidity penalty, emergent window, comparison with air conditioning Default and DLS along transects. Results: K020 to K026. Rugani check K006.
### R2 The fan window covers almost all hours in which air conditioning would run, and fans deliver a large fraction of its exposure reduction [Fig. 2]
- P1 C14 Global land 2020: AC hours under Default and DLS, share inside the fan window, fan equivalence ratio. Results: K030 to K036.
- P2 C15 Evaporative coolers: equivalence ratio by climate, dry versus humid regions, map. Results: K040 to K046.
### R3 Raising the air-conditioning threshold by 3 K with a fan avoids a large share of air-conditioning hours at no exposure cost [Fig. 3, Table 2]
- P1 C16 AC hours and cooling degree-hours avoided under Default and DLS, global and city results. Results: K050 to K056.
### R4 Sensitivity
- P1 C17 Fan speed, window threshold, Foster rule, negative ΔT, ε, RH cap. Results: K060 to K070.

## Discussion (budget: 700 words)
- P1 C18 What the common form buys for models (plug-in lookup tables, no change to exposure–response function, fan-first policies become evaluable). Positions against Barreca 2016, Carleton 2022, Colelli & Mistry 2020.
- P2 C19 Comparison with prior estimates in the same units: Morris 2021 (fan beneficial on 96.6 % of hot days for young adults), Tartarini 2021 (0.8 m/s raises critical operative temperature by 14 °C), Malik 2022 (fan-first cuts AC electricity by more than 70 %), Hoyt 2015 (setpoint 22.2 to 25 °C saves 29 % cooling energy), Rugani 2026 (−2.8 K).
- P3 C20 Limitations: outdoor not indoor exposure, SET for one reference person (met 1.1, clo 0.5), unlimited sweating in SET so the window is external, older adults and medication, humidity acts only through SET not the exposure–response function, single year and land-area weighting, evaporative coolers need water and raise indoor humidity (Johnston 2022 bioaerosols), fan ownership and electricity access not modelled.
- P4 C21 Policy relevance: fan-first guidance (Bone 2025, WHO 27 °C plus fan), cooling access programmes in dry regions, air conditioning subsidy evaluation.

## Conclusion (budget: 200 words)
- P1 C22 Answers to RQ1 to RQ3 and the main implication.

## Abstract (budget: 250 words, unreferenced)
Background, aim, methods, 3 numeric results (K001 to K004), implication.

## Tables
- Table 1 (in Methods): technology, ΔT definition, operating window, primary parameters, sensitivity range (extends the author's table).
- Table 2 (in Results): 12 cities, AC hours Default and DLS, fan coverage, fan and evaporative equivalence ratios, AC hours avoided with fan plus AC.
