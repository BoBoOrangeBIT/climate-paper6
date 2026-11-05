# Storyline (author-owned)

## One-sentence message
If fans and evaporative coolers are written in the same form as air conditioning, namely "inside an operating window, reduce the exposure temperature by ΔT", a single exposure–response function can price all three, and on that common scale a 1.2 m/s fan delivers roughly 3 K of equivalent cooling across almost all hours in which air conditioning would run, while a direct evaporative cooler matches or exceeds air conditioning in dry climates and fails in humid ones.

## Why it matters (broad stakes)
Heat-health and adaptation models (Barreca 2016, Carleton 2022, integrated assessment cooling modules) represent adaptation almost exclusively as air conditioning, which is the most expensive and energy-intensive option and is unaffordable for most households exposed to extreme heat. Fans are already the most widespread cooling appliance in the world, and evaporative coolers dominate in hot dry regions such as northern India, Pakistan and Iran. Because the models cannot represent them, they cannot evaluate fan-first and low-energy cooling policies.

## Gap
Building science has a standard way to express the cooling of moving air as an equivalent temperature reduction (the ASHRAE 55 elevated air speed method based on the Standard Effective Temperature, SET). Physiology has produced operating envelopes for safe fan use (Morris 2021, Foster 2021, Tartarini 2021). Neither has been connected to the threshold-plus-setpoint way in which heat-health models represent air conditioning. Evaporative coolers have no health-model representation at all.

## What we do (approach in plain words)
1. State the air-conditioning rule already used in the model (operate above a threshold, hold the setpoint, so ΔT = T_out − T_set) under two rules, Default (23 °C, 55 % RH) and DLS (26 °C, 60 % RH).
2. Write fans in the same form. ΔT_fan is the SET-equivalent dry-bulb reduction of elevated air speed at the outdoor humidity. The operating window is the published fan safety envelope. Outside it ΔT is zero in the main analysis and negative in a sensitivity test.
3. Write direct evaporative coolers in the same form. The supply state is T_db − ε(T_db − T_wb) along the adiabatic saturation line, converted to an SET-equivalent dry-bulb reduction at the outdoor humidity. ε spans 0.6 to 0.85. The conversion step is checked against the −2.8 K room cooling and about 3 K manikin cooling effect measured by Rugani 2026.
4. Write the fan plus air-conditioning combination as an air-conditioning threshold shifted up by 3 K, which keeps the health benefit inside the fan envelope unchanged and cuts air-conditioning operating hours.
5. Tabulate ΔT and the windows on a temperature by humidity grid, then apply them hour by hour to ERA5 2020 over global land and in 12 cities, and report exposure degree-hours removed, equivalence ratios relative to air conditioning, and the reduction in air-conditioning operating hours.

## Key findings (3 to 5, each with its K-ID)
1. Fan equivalent cooling at 1.2 m/s lies between about 2 and 4 K over the whole hot range and increases with temperature and air speed (K-IDs from lookup table).
2. The fan window (Morris 2021, older adults 38 °C) covers a very large share of the hours in which air conditioning would operate under either rule, globally and in most cities (K-IDs from ERA5 2020).
3. Evaporative coolers deliver more equivalent cooling than the Default air-conditioning rule in dry climates and little or none in humid climates, and the window follows wet-bulb depression (K-IDs).
4. Shifting the air-conditioning threshold by 3 K with a fan removes a substantial share of air-conditioning operating hours while leaving the exposure benefit unchanged (K-IDs).
5. Results are robust to fan speed, threshold choice and ε within stated ranges (K-IDs).

## Implications
Any model that already contains the air-conditioning rule can add fans and evaporative coolers by two lookup tables and two window rules, with no change to the exposure–response function. Fan-first guidance can be evaluated with the same machinery used for air conditioning.

## What we do NOT claim (scope limits)
- We do not estimate mortality. We provide exposure reductions in a form that any exposure–response function can take.
- Equivalence is on the SET scale for a seated, lightly clothed adult. It is not evidence of equal physiological protection for every population.
- We model exposure at outdoor conditions, not indoor temperatures.
- ERA5 2020 is a single year and results are land-area based, not population weighted.
