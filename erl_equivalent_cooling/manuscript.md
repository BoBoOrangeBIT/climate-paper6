# Title

Equivalent cooling of fans and evaporative coolers relative to air conditioning in a common form for heat-health models

# Abstract

<!-- C01 -->
Heat-health and adaptation models represent cooling almost exclusively as air conditioning, written as a rule that operates above a threshold temperature and holds a setpoint. Electric fans and direct evaporative coolers, the most widespread and affordable cooling devices in hot regions, have no such representation and cannot be priced by the same exposure–response function. We write both technologies in the air-conditioning form, namely an equivalent temperature reduction ΔT applied inside an operating window. ΔT is the still-air dry-bulb reduction at outdoor humidity that gives the same Standard Effective Temperature as the intervention state, and windows follow published fan safety envelopes and the supply humidity of evaporative cooling. We tabulate ΔT on a temperature by humidity grid and apply it hour by hour to ERA5 2020 over global land and in 12 cities. Under the Default rule (23 °C, 55 % relative humidity (RH)), a 1.2 m/s fan provides a mean equivalent temperature reduction of 3.6 K and its window covers 96 % of the hours in which air conditioning would operate, removing 61 % of the exposure degree-hours that air conditioning removes. Raising the air-conditioning threshold by 3 K when a fan runs avoids 34 % of air-conditioning operating hours with no loss of aggregate exposure benefit inside the fan window. Direct evaporative coolers reach an equivalence ratio of 72.8 % globally, 112 % in dry climates and 9 % in humid climates. Any model that contains the air-conditioning rule can add both technologies through two lookup tables and two window rules.

# Introduction

<!-- C01 -->
Heat-health and adaptation models represent adaptation almost only as air conditioning. The twentieth-century decline in temperature-related mortality in the United States is attributed mainly to residential air conditioning [@barreca2016adapting; @deschenes2011climate], and higher air-conditioning prevalence coincides with lower heat-related mortality across countries and cities [@sera2020air; @chua2023net]. Global damage functions price adaptation through income and climate-driven responses of the same kind [@carleton2022valuing; @deschenes2022impact], and the cooling modules of integrated assessment models write it as a threshold-and-setpoint rule, namely the appliance operates once outdoor temperature exceeds a threshold and then holds an indoor setpoint [@colelli2020cooling]. The same framing underlies maps of air-conditioning need [@biardeau2020heat] and projections of a cooling gap for households that cannot afford the appliance [@davis2021air; @pavanello2021air; @andrijevic2021future; @falchetta2024inequalities].

<!-- C02 -->
Households in hot regions mostly own something else. About 2.3 billion residential fans were in use in 2016 [@iea2018future], and in India in 2022 households owning only a direct evaporative cooler far outnumbered those owning any air conditioner [@agarwal2026spatializing]. Direct evaporative coolers serve the same role in Iran and Pakistan [@naderi2020simulation; @noor2020evaporative]. A pedestal fan draws roughly one fiftieth of the power of a room air conditioner [@ravanelli2016electric], and a fan-first strategy that switches air conditioning on only above the adaptive comfort limit has been estimated to cut residential cooling electricity by about 76 % [@malik2022potential; @dedear2002thermal]. Fan-first cooling is accordingly recommended for low-carbon heat adaptation [@jay2021reducing; @jay2019fanning; @unep2023global; @who2024heat], yet none of these strategies can be evaluated by a model whose only adaptation lever is air conditioning, the most expensive and energy-intensive option.

<!-- C03 -->
The health evidence for fans is physiological rather than epidemiological and remains contested. A Cochrane review found no eligible trials [@gupta2012electric]. Biophysical analyses show that fans help above 35 °C in humid air but harm in very dry heat [@jay2015should; @brode2023temperature], and crossover trials found benefit at 40 °C and 51 % relative humidity (RH) but harm at 47 °C and 15 % RH [@morris2019effects; @ravanelli2015heart]. Model-derived upper limits for safe fan use are 39 °C for healthy young adults, 38 °C for older adults and 37 °C for people on anticholinergic medication [@morris2021electric], and another analysis places the limit at 35 °C when RH is below 50 % [@foster2021quantifying]. Trials in older adults found minimal benefit at 38 °C and 60 % RH and a rise in core temperature at 45 °C and 15 % RH [@oconnor2024effect; @chaseling2025thermal]. For direct evaporative coolers the health evidence consists of one chamber study [@rugani2026creating], field comfort surveys in India [@tewari2019field] and one heat-mortality model for India in which they confer less protection than air conditioning [@pavanello2025adaptation].

<!-- C04 -->
A metric that could bridge these literatures already exists in building science. ASHRAE Standard 55 expresses the effect of elevated air speed as a shift of the comfort zone at equal Standard Effective Temperature (SET), the index of the Gagge two-node model, and permits 0.8 m/s without and 1.2 m/s with occupant control [@ashrae2020thermal; @gagge1986standard; @arens2009moving]. On that basis the cooling of moving air has been written as an equivalent reduction in dry-bulb temperature [@schiavon2008energy; @zhang2015review], shown to hold in warm humid conditions [@zhai2013comfort; @zhou2023effects], and used to justify higher setpoints, with a rise from 22.2 to 25 °C saving about 29 % of cooling energy [@hoyt2015extending]. No study has connected this SET-based metric to the threshold-and-setpoint form through which air conditioning enters exposure–response models, and no comparable metric exists for direct evaporative coolers.

<!-- C05 -->
This letter writes all three technologies in one form, namely that inside an operating window the technology reduces the exposure temperature entering the exposure–response function by an equivalent temperature reduction ΔT that depends on outdoor temperature and humidity. RQ1 asks whether electric fans and direct evaporative coolers can be written in the same form as air conditioning without changing the exposure–response function. RQ2 asks how large their equivalent cooling is relative to air conditioning across climates. RQ3 asks how much air-conditioning operation a fan plus air-conditioning combination avoids at no exposure cost. Under the Default air-conditioning rule, 96 % of the hours in which air conditioning would run fall inside the 38 °C fan window, a 1.2 m/s fan removes 61 % of the exposure degree-hours that air conditioning removes, and raising the air-conditioning threshold by 3 K with a fan avoids 34 % of air-conditioning operating hours.

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
SET assumes unlimited sweating and therefore rarely penalises air speed. Only 9.9 % of cells on the temperature by humidity grid have a negative cooling effect at 1.2 m/s, all above 41.5 °C with relative humidity of at least 49 %, that is hot and humid air in which the skin is fully wet. The hot-dry harm reported in chamber trials is not reproduced by SET, which is why the window is imposed externally. We therefore imposed an external operating window. The primary window is T_out < 38 °C, the threshold derived for healthy older adults by Morris et al [@morris2021electric]. Sensitivity windows were 39 °C (healthy young adults) and 37 °C (adults on anticholinergic medication) from the same study, 35 °C from older public guidance [@meade2024critical], and the rule of Foster et al that fans are ineffective at or above 35 °C when RH is below 50 % [@foster2021quantifying]. Outside the window ΔT_fan = 0 in the main analysis, so the benefit is lost but no harm is counted. A sensitivity test lets ΔT_fan turn negative outside the window, derived from the two-node core temperature with sweating limits in the use_fans_heatwaves model [@tartarini2021application].

## Direct evaporative coolers

<!-- C09 -->
For a direct evaporative cooler (DEC) the supply dry-bulb temperature is T_s = T_out − ε (T_out − T_wb), where T_wb is the outdoor wet-bulb temperature and ε the saturation effectiveness [@duan2012indirect], and the supply humidity RH_s follows the adiabatic saturation line. We used ε = 0.75 as the primary value and 0.6 and 0.85 as bounds, consistent with measured pad performance [@camargo2005experimental; @harby2019investigation] and with the 65 to 80 % efficiency assumed in a recent heat-mortality study [@lo2023optimal]. We converted the supply state to the common scale by SET equivalence at still air and outdoor humidity (Table 1), so that ΔT_DEC discounts the dry-bulb drop by the added moisture. The operating window requires ΔT_DEC > 0 and RH_s ≤ 80 %, with the sensitivity cases listed in Table 1. The cap reflects the moisture and bioaerosol burden of evaporative cooling in humid air [@johnston2022bioaerosol; @tewari2019field].

<!-- C09 -->
We checked the conversion step against the chamber measurements of Rugani et al [@rugani2026creating] (32 °C, 15 to 20 % RH, room cooling 2.8 K, room RH 52 %, manikin cooling effect about 3 K) by applying the SET conversion to the measured room state (section 3.1). The supply-state model predicts a dry-bulb drop of 11.6 K for that chamber because it describes pad outlet air rather than the mixed room, so it is an upper bound for an occupant in the airstream.

## Fan plus air conditioning

<!-- C10 -->
We represented the combination as air conditioning with threshold and setpoint raised by 3 K, the ASHRAE 55 comfort-zone allowance for 1.2 m/s [@ashrae2020thermal; @hoyt2015extending; @zhou2023effects] and the shift seen in fan-first field studies [@malik2022potential]. The fan runs inside its window whenever T_out exceeds the original setpoint, and air conditioning holds T_set + 3 K above the raised threshold. Because the fan lookup gives 3.4 K at the raised Default setpoint, the exposure benefit inside the fan window is in aggregate at least that of air conditioning alone.

## Data, lookup tables and metrics

<!-- C11 -->
We applied the four rules hour by hour to ERA5 reanalysis [@hersbach2020era5] 2 m temperature and 2 m dew point for 2020 on the native reduced Gaussian N320 grid of about 31 km, with 542 080 points globally and 157 163 land points (land-sea mask at least 0.5). We converted dew point to RH with the Magnus formula [@alduchov1996improved], and computed the wet-bulb temperature with the psychrometric functions of pythermalcomfort [@tartarini2020pythermalcomfort] . We precomputed ΔT and the windows on a grid from 20 to 50 °C in 0.25 K steps and 5 to 100 % RH in 1 % steps and interpolated bilinearly in the hourly pass. For each rule r and technology k, AC hours are hours with T_out > T_set(r). Exposure degree-hours removed are Σ_h ΔT_k(h)·1[window_k(h)] over the AC hours of the rule, in K h per year. The equivalence ratio is the exposure degree-hours removed by k divided by those removed by air conditioning under the same rule. Coverage is the share of AC hours inside the window of k. AC hours avoided under fan plus air conditioning are 1 − hours(T_out > T_set + 3 K)/hours(T_out > T_set), with the analogous ratio for cooling degree-hours. Global values are area-weighted means over land points, and maps and distributions use land points with at least 100 AC hours per year aggregated to 0.5°. We classified land points by the share of hours above 23 °C that have T_wb > 24 °C, namely dry below 10 %, intermediate 10 to 50 % and humid 50 % or more. We extracted hourly series for twelve cities spanning hot-dry, monsoon, hot-humid and temperate climates (table 2). All exposures are evaluated at outdoor conditions and all statistics are land-area based, not population weighted.

# Results

## 3.1 On the common scale, a fan is worth about 3 K and an evaporative cooler is worth the wet-bulb depression discounted by humidity

<!-- C12 -->
Figure 1(a) shows the fan ΔT at 1.2 m/s across the outdoor temperature and humidity grid. The surface is flat. At 50 % RH the fan is worth 3.6 K at 30 °C, 3.5 K at 35 °C and 3.3 K at 38 °C, the edge of the primary operating window. Humidity matters more than temperature. At 35 °C the fan delivers 4.1 K at 20 % RH but 2.6 K at 80 % RH, because the two-node model credits air speed mainly through evaporative heat loss. Over 26 to 38 °C and all humidities ΔT stays between 0.7 K and 4.4 K. Air speed scales the surface almost uniformly (figure 1(d)), from 3.0 K at 0.8 m/s to 4.1 K at 2.0 m/s for 35 °C and 50 % RH. The SET cooling effect never turns negative inside the window, whereas the core-temperature variant reaches −1.5 K at 45 °C and 15 % RH, which is why the main analysis applies the external 38 °C window of Morris et al [@morris2021electric].

<!-- C13 -->
The direct evaporative cooler follows the wet-bulb depression discounted by the humidity it adds (figure 1(b)). At 35 °C and 20 % RH the supply air is 11.8 K cooler in dry-bulb terms and the equivalent reduction after the humidity penalty is 11.2 K, with a supply RH of 66 %. At the same temperature the value falls to 3.8 K at 50 % RH, where the supply air reaches 81 % RH and leaves the window, and to 0.7 K at 80 % RH. For example, the value reaches 13.1 K at 40 °C and 15 % RH. Only 1.3 % of grid cells have ΔT at or below zero, so the window is set by the supply humidity cap rather than by the sign of ΔT. Figure 1(c) places both technologies beside the air-conditioning rules, whose ΔT grows linearly with outdoor temperature, while the fan contributes a nearly constant 3 to 4 K and the evaporative cooler crosses the air-conditioning line only at low humidity. The SET-consistent air-conditioning variant gives 11.9 K at 35 °C and 50 % RH, close to the nominal 12 K. Applying the same conversion to the room state measured by Rugani et al [@rugani2026creating] gives 0.6 K at still air, 2.4 K at 0.3 m/s and 3.7 K at 0.5 m/s, which brackets the manikin cooling effect of about 3 K once the airstream at the occupant is included.

## 3.2 The fan window covers almost all hours in which air conditioning would run, and fans deliver a large fraction of its exposure reduction

<!-- C14 -->
In ERA5 2020, air conditioning under the Default rule would run for at least 100 hours per year on 76 % of land area, for an area-weighted mean of 2870 h per land point with a mean ΔT when on of 5.6 K (figure 2(a)). Of those hours 95.8 % fall below 38 °C and inside the primary fan window (figure 2(b)). Among land points with at least 100 air-conditioning hours, 81 % of the area has coverage of 95 % or more, and the losses are confined to hot deserts, since only 35 % of land sees any hour above 38 °C. Inside its window the fan delivers a mean ΔT of 3.6 K, giving a global fan equivalence ratio of 60.6 % (figure 2(c)). The point-level distribution is wide, with an area-weighted median of 82 % and a 10th to 90th percentile range of 42 % to 147 %. Ratios above 100 % occur where air conditioning runs mostly just above 23 °C, so the fan removes more than the small excess. Under the DLS rule air conditioning runs for 1884 h, fan coverage is 93.6 % and the equivalence ratio rises to 69.6 % because the higher setpoint shrinks the air-conditioning denominator more than the fan numerator.

<!-- C15 -->
Evaporative coolers split the world by humidity (figure 2(d)). Globally they are inside their window during 42.5 % of Default air-conditioning hours, yet with a mean ΔT of 9.6 K they reach an equivalence ratio of 72.8 %. Among land points with at least 100 air-conditioning hours, 44 % of the area has a ratio at or above 100 % and 22 % has a ratio below 25 %, with a 10th to 90th percentile range from 5 % to 178 %. The dry class, 68 % of the area with meaningful air-conditioning demand, has an evaporative ratio of 112 % against a fan ratio of 56 %. The humid class, 10 % of that area, reverses the ranking with 9 % for the evaporative cooler and 72 % for the fan. The intermediate class sits between with 45 % and 63 %. Under the DLS rule the global evaporative ratio rises to 110.8 %, because the hours removed by the higher setpoint are disproportionately mild and humid.

## 3.3 Raising the air-conditioning threshold by 3 K with a fan avoids a large share of air-conditioning hours at no exposure cost

<!-- C16 -->
Globally the fan plus air-conditioning combination avoids 34.4 % of Default air-conditioning hours and 44.1 % of cooling degree-hours, while the exposure degree-hours removed reach 118 % of air conditioning alone because the fan keeps running above the raised setpoint. Under the DLS rule the avoided shares are 41.1 % of hours and 49.0 % of cooling degree-hours. The avoided share varies little by humidity class, from 32 % in the dry class to 37 % in the humid class, because it depends on the hours between 23 and 26 °C rather than on humidity. Figure 3(a) and (b) and table 2 give the city results. In the humid cities Singapore, Lagos and Miami the fan window covers every air-conditioning hour, the fan ratio is 74 to 80 % and the evaporative ratio is at or below 5 %. In Phoenix and Riyadh, 1015 h and 1527 h exceed 38 °C, so fan coverage falls and the evaporative cooler exceeds air conditioning. Delhi and Karachi keep high fan coverage but evaporative ratios below 25 %, because their hot hours are dry while their air-conditioning hours as a whole are humid. The Default avoided share ranges from 12 % in Phoenix to 57 % in Paris, and under the DLS rule reaches 64 % in Lagos.

**Table 2.** Twelve cities, ERA5 2020. Air-conditioning hours under the Default (T > 23 °C) and DLS (T > 26 °C) rules, fan coverage (share of Default air-conditioning hours below 38 °C), fan (1.2 m/s) and evaporative (ε = 0.75) equivalence ratios under the Default rule, and share of Default air-conditioning hours avoided by fan plus air conditioning.

| City | AC hours Default (h) | AC hours DLS (h) | Fan coverage (%) | Fan ratio (%) | Evaporative ratio (%) | AC hours avoided (%) |
|---|---|---|---|---|---|---|
| Phoenix | 4595 | 4049 | 78 | 30 | 111 | 12 |
| Riyadh | 5765 | 4980 | 74 | 27 | 112 | 14 |
| Cairo | 4278 | 2874 | 98 | 59 | 76 | 33 |
| Tehran | 3005 | 2255 | 97 | 54 | 150 | 25 |
| Delhi | 5289 | 4413 | 97 | 46 | 23 | 17 |
| Karachi | 6458 | 5566 | 100 | 49 | 24 | 14 |
| Guangzhou | 5080 | 3705 | 100 | 67 | 3 | 27 |
| Singapore | 8784 | 5634 | 100 | 75 | 0 | 36 |
| Lagos | 8689 | 5843 | 100 | 74 | 5 | 33 |
| Miami | 6878 | 4515 | 100 | 80 | 2 | 34 |
| Beijing | 2545 | 1650 | 99 | 71 | 66 | 35 |
| Paris | 797 | 343 | 100 | 103 | 115 | 57 |

## 3.4 Sensitivity

<!-- C17 -->
The global fan result is robust to the operating window (figure 3(c)). Thresholds of 35, 37 or 39 °C move the Default equivalence ratio from 60.6 % to 56.6 %, 59.5 % and 61.6 %, with coverage of 90.2 %, 94.3 % and 97.0 %. The Foster rule gives 56.7 % with coverage of 90.3 %. Removing the window raises the ratio only to 64.0 % and allowing negative ΔT outside the window lowers it only to 60.4 %, because hours above 38 °C are few. The core-temperature variant without any window is the one assumption that changes the picture, giving 28.0 %, because it credits the fan with much less cooling at all temperatures. Air speed matters more than the window, with 50.3 % at 0.8 m/s and 72.4 % at 2.0 m/s. The evaporative result is more sensitive to the humidity cap than to the pad. A supply RH cap of 70 % lowers the Default ratio from 72.8 % to 48.4 %, no cap raises it to 95.9 %, and a wet-bulb rule of 24 °C gives 87.4 %. Saturation effectiveness of 0.6 and 0.85 gives 64.9 % and 54.3 %, where the higher effectiveness lowers the ratio because more hours breach the humidity cap. Crediting a 0.5 m/s airstream at the occupant raises the ratio to 92.7 %. The SET-consistent air-conditioning variant changes the denominator by less than 1 % (ratio 99.4 %), so the equivalence ratios are insensitive to how the humidity setpoint is treated.

# Discussion

<!-- C18 -->
The main contribution of this letter is a form rather than a number. Models that already carry the air-conditioning rule of Barreca et al [@barreca2016adapting], Carleton et al [@carleton2022valuing] or the integrated assessment cooling module of Colelli and Mistry [@colelli2020cooling] can add electric fans and direct evaporative coolers with two lookup tables on a temperature by humidity grid and two operating windows, while the exposure–response function itself, for example the multi-country curves of Gasparrini et al [@gasparrini2015mortality] or the attribution framework of Vicedo-Cabrera et al [@vicedocabrera2021burden], stays untouched. Technology choice matters for simulated adaptation benefits [@pavanello2025adaptation], and the common form supplies the two technologies that most exposed households actually own.

<!-- C19 -->
Our estimates agree with prior work where the metrics overlap. The 38 °C window covers 96 % of the hours in which air conditioning would run, close to the finding of Morris et al that fan use was beneficial on 96.6 % of hot days for young adults [@morris2021electric]. Tartarini et al report that 0.8 m/s raises the critical operative temperature by up to 14 °C in the same two-node model [@tartarini2021application], which measures the shift of a survivability threshold rather than an equivalent reduction at a comfort setpoint. The fan equivalence ratio of 61 % and the 34 % of air-conditioning hours avoided by the fan plus air conditioning combination are of the same sign and order as the 76 % reduction in air-conditioning electricity reported by Malik et al for a fan-first strategy [@malik2022potential] and the 29 % cooling energy saving that Hoyt et al simulate for a setpoint extension from 22.2 to 25 °C [@hoyt2015extending], although those studies count energy, which responds nonlinearly to setpoint, whereas ours counts hours and degree-hours. For evaporative coolers, the check against the chamber test of Rugani et al [@rugani2026creating] (section 3.1) shows that the humidity penalty in SET is large and that the air movement delivered by the cooler itself is part of its benefit, so the still-air primary estimate is conservative in dry climates.

<!-- C20 -->
Four limitations bound the interpretation. First, SET with unlimited sweating never penalises air speed, so the operating window had to be imposed from outside. Chamber trials in older adults found fans ineffective or harmful in extreme heat [@oconnor2024effect], dehydration worsens the balance [@graham2025electric], some authors advise older adults to switch fans off in extreme heat [@gagnon2017electric], and the critical review of Meade et al still advises against fans above 35 °C [@meade2024critical]. Letting ΔT turn negative outside the window barely changes the global equivalence ratio, because few air-conditioning hours lie above 38 °C, but a core-temperature definition of ΔT without any window lowers it to 28 %, so the choice of physiological criterion matters more than the threshold itself. Second, equivalence is on the SET scale for one seated, lightly clothed adult [@gagge1986standard], SET may be biased in hot-humid air [@li2018modified], and humidity enters only through SET and not through the exposure–response function, whereas large epidemiological studies find little added explanatory power from humidity [@armstrong2019role; @lo2023optimal], a disagreement with physiology that remains unresolved [@baldwin2023humidity; @vanos2023physiological]. Our humid-climate penalty for evaporative coolers should therefore be read as a physiological upper bound. Third, exposure is evaluated at outdoor ERA5 conditions for a single year with land-area weighting, not at indoor temperatures, which are poorly observed and can exceed outdoor values in overheating dwellings [@edwards2025residential; @kenny2024indoor]. Fourth, evaporative coolers consume water, raise indoor humidity in practice [@tewari2019field] and can increase bioaerosol exposure [@johnston2022bioaerosol], and appliance ownership and electricity access are not modelled [@agarwal2026spatializing].

<!-- C21 -->
The results nonetheless carry direct policy relevance. Fan-first guidance in Australia [@bone2025fanfirst] and the WHO advice of 27 °C plus a fan [@who2024heat] can now be scored with the same exposure accounting used for air-conditioning subsidies, and the 3 K allowance it relies on holds across 96 % of the hours that matter. Cooling access programmes in hot-dry regions can treat the direct evaporative cooler as at least equivalent to air conditioning under the Default rule, while the same device is close to useless in monsoon and coastal climates, so programme design should follow wet-bulb depression rather than temperature alone [@davis2021air; @andrijevic2021future]. Where models find air-conditioning subsidies cost-effective [@pavanello2025adaptation], the comparison can now include the two cheaper options.

# Conclusion

<!-- C22 -->
Electric fans and direct evaporative coolers can be written in the same form as air conditioning, namely an equivalent temperature reduction applied inside an operating window, so that one exposure–response function prices all three technologies without modification. Under the Default rule, a 1.2 m/s fan operates in 96 % of the hours in which air conditioning would run over global land in 2020 and removes 61 % of the exposure degree-hours that air conditioning removes. A direct evaporative cooler removes 72.8 % of the air-conditioning benefit globally, exceeds air conditioning in dry climates and contributes little in humid ones. Pairing a fan with air conditioning and raising the threshold by 3 K avoids 34 % of air-conditioning operating hours at no exposure cost inside the fan window. These are exposure reductions on the SET scale for a seated, lightly clothed adult at outdoor conditions in a single year, not estimates of mortality or of indoor temperature. The lookup tables and window rules are released so that fan-first and low-energy cooling policies can be evaluated with the machinery that models already use for air conditioning.

# Statements

## Data availability

ERA5 hourly 2 m temperature and 2 m dew point temperature for 2020 were read from the public Analysis-Ready Cloud-Optimized ERA5 archive on Google Cloud (the public Google Cloud bucket gcp-public-data-arco-era5). The equivalent temperature reduction lookup tables, the operating window tables, the aggregated global and city results and the sensitivity tables are provided in the repository folder erl_equivalent_cooling/results.

## Code availability

Thermal comfort calculations use pythermalcomfort version 4.8. The scripts that build the lookup tables, stream ERA5, aggregate the results and write the number registry are provided in the repository folder erl_equivalent_cooling/results alongside the data files.

## Author contributions

[[AUTHOR TO COMPLETE]]

## Competing interests

The authors declare no competing interests.

## Funding

[[AUTHOR TO COMPLETE]]

# Figure legends

## Fig. 1

**Figure 1.** Equivalent temperature reduction of fans and evaporative coolers on the SET scale compared with the air conditioning rules. (a) Fan equivalent reduction ΔT at 1.2 m/s as a function of outdoor air temperature and relative humidity. The white vertical lines mark the Morris 2021 fan window upper bounds at 37, 38 and 39 °C and the hatched area marks the Foster 2021 exclusion (35 °C and above with relative humidity below 50 %). The white dashed curve is the zero contour above which the fan adds heat. At 30 °C and 50 % relative humidity the fan is worth 3.6 K <!-- R:K010 -->. (b) Evaporative cooler equivalent reduction ΔT at saturation effectiveness ε = 0.75 on the same grid. The orange line is the evaporative window boundary (ΔT above 0 and supply air relative humidity at or below 80 %). At 35 °C and 20 % relative humidity the cooler is worth 11.2 K <!-- R:K020 -->. (c) ΔT against outdoor temperature for the air conditioning Default rule (max(T − 23, 0)), the DLS rule (max(T − 26, 0)), the fan at 1.2 m/s and the evaporative cooler at ε = 0.75. Colour denotes technology and line style denotes relative humidity (20, 50 and 80 %). (d) Fan ΔT at 50 % relative humidity for 0.8, 1.2 and 2.0 m/s (solid lines) and the core temperature variant at 1.2 m/s (dashed line). Grey shading marks negative ΔT where the fan heats the body and the thin vertical lines repeat the 37, 38 and 39 °C window bounds. All values are deterministic outputs of the Gagge two-node model lookup tables (results/derived/lookup_tables.npz, lookup_fan.csv, lookup_evap.csv) for a standard person at rest, so no uncertainty band is shown. Source data are in figures/source-data/fig1.csv.

## Fig. 2

**Figure 2.** Global application of the equivalent temperature reduction framework to ERA5 hourly data for 2020 on a 0.5° land grid. (a) Exposure degree-hours removed per year by air conditioning under the Default operating rule (10³ K h per year, colour scale capped at the 99th percentile). (b) Share of Default air conditioning hours that fall inside the fan window (air temperature below 38 °C), which reaches 95.8% <!-- R:K032 --> of all air conditioning hours over land. (c) Fan equivalence ratio, exposure reduction of a 1.2 m/s fan divided by that of Default air conditioning, 60.6% <!-- R:K033 --> when aggregated over land. (d) Evaporative cooler equivalence ratio (ε 0.75 over Default air conditioning), 72.8% <!-- R:K051 --> aggregated over land, with values at or above 1 on 44% <!-- R:K052 --> of the land area shown. Ratios in (c) and (d) use a diverging scale centred at 1 (equal exposure reduction to air conditioning) and are capped at 2. Panels (b) to (d) are masked (light grey) where Default air conditioning runs for fewer than 100 hours per year, which leaves 76% <!-- R:K030 --> of the land area, and white denotes ocean. Equirectangular (plate carrée) projection, 60°S to 85°N. Values are single year point estimates without an uncertainty range. Source data in figures/source-data/fig2.csv.

## Fig. 3

**Figure 3.** Cities and the fan plus air-conditioning combination. (a) Exposure degree-hours removed per year in 12 cities (thousand K h) by air conditioning under the Default rule (black) and the DLS rule (grey), by a fan at 1.2 m/s inside the 38 °C window (blue) and by an evaporative cooler with ε 0.75 under the RH_s ≤ 80 % cap (orange), all evaluated over the Default air-conditioning hours. Whiskers span the fan speeds 0.8 to 2.0 m/s and the effectiveness values ε 0.6 to 0.85, each expressed as the sensitivity equivalence ratio times the Default air-conditioning exposure removal. Fans remove 30 % of the air-conditioning exposure in Phoenix <!-- R:K202 --> and 27 % in Riyadh <!-- R:K212 -->, rising to 75 % in Singapore <!-- R:K272 --> and 80 % in Miami <!-- R:K292 -->, whereas evaporative coolers reach 111 % in Phoenix <!-- R:K203 --> and 150 % in Tehran <!-- R:K233 --> but only 2 % in Miami <!-- R:K293 --> and 0 % in Singapore <!-- R:K273 -->. (b) Air-conditioning operating hours per year under the Default rule (black circles) and the DLS rule (grey squares), with the green marker showing the hours that remain once a 3 K fan shift is applied before air conditioning starts. The shift removes 12 % of Default hours in Phoenix <!-- R:K204 --> and 36 % in Singapore <!-- R:K274 -->, against 34.4 % of global land air-conditioning hours <!-- R:K070 -->. (c) Global land coverage (open circles) and equivalence ratio (filled circles) under the Default rule for fan variants (blue) and evaporative variants (orange). The fan equivalence ratio moves from 56.6 % with a 35 °C window <!-- R:K080 --> to 61.6 % with a 39 °C window <!-- R:K082 -->, is 56.7 % with the Foster rule <!-- R:K083 -->, 60.4 % when negative ΔT is counted outside the window <!-- R:K086 -->, and spans 50.3 % <!-- R:K088 --> to 72.4 % <!-- R:K089 --> for 0.8 and 2.0 m/s. The evaporative ratio is 48.4 % with RH_s ≤ 70 % <!-- R:K090 -->, 95.9 % with no humidity cap <!-- R:K091 -->, 87.4 % with the T_wb ≤ 24 °C rule <!-- R:K092 -->, 64.9 % for ε 0.6 <!-- R:K093 -->, 54.3 % for ε 0.85 <!-- R:K094 --> and 92.7 % with a 0.5 m/s airstream <!-- R:K095 -->. Data from results/derived/cities.csv and results/derived/sensitivity.csv for the year 2020. Whiskers in (a) are parameter ranges and not statistical confidence intervals.


## Table 1
**Table 1.** Common exposure-reduction form for the four technologies (definition of ΔT, operating window, primary parameters and sensitivity range). Table placed in Methods.

## Table 2
**Table 2.** Air-conditioning hours, fan coverage, fan and evaporative equivalence ratios and air-conditioning hours avoided for twelve cities in 2020. Table placed in Results.

# References

