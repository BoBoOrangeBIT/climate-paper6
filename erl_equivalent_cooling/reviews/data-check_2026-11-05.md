# Data check 2026-11-05

Scope: `sections/*.md`, `figures/captions.md` vs `results/key-numbers.csv` and its source files
(`global_summary.json`, `lookup_summary.json`, `lookup_tables.npz`, `lookup_evap.csv`, `rugani_check.csv`,
`cities.csv`, `era5_meta.json`). Work list: `reviews/numbers_2026-11-05.csv` (818 values). A format-editor
was trimming sections while this ran (e.g. `03_results.md` disappeared, several numbers left `04_results.md`),
so findings quote text instead of line numbers.

## Registry check (step 2)

All 235 rows of `key-numbers.csv` were recomputed from the named source files: every value matches after
rounding to the stated decimals (JSON keys, `cities.csv` columns, `lookup_summary.json` entries,
`rugani_check.csv` rows at RH_out 17.5, `lookup_tables.npz` shares/thresholds, `lookup_evap.csv` 35 °C/20 %).
No value mismatch. All rows remain `status=draft` (author has not confirmed any row).

## Text check, arithmetic, cross-location (steps 3–5)

Every R-tagged number in the current text matches its registry row after rounding, with scenario/period
consistent (Default/DLS, 2020, city names). Internal arithmetic checked: class area shares 68+22+10 = 100;
nominal AC ΔT 35−23 = 12 K vs 11.9 K; 3 K shift < 3.4 K fan ΔT; acset ratio 99.4 % = "less than 1 %";
Phoenix min / Paris max of Default avoided share and Lagos max of DLS avoided share confirmed from `cities.csv`;
Phoenix/Riyadh >38 °C hours; humid-city evaporative ratios ≤ 5 % (Lagos 5.01 % rounds to 5).

`evidence/evidence.md` contains only a header, so **no literature number has curated evidence**; all are
supported only by `evidence/claim_to_refs.md` notes (marked "(notes)" or "(outline)").

| # | Severity (阻断/重要/建议) | File:line | Original text | Problem | Suggested fix |
|---|---|---|---|---|---|
| 1 | 阻断 | sections/03_methods.md (C08) | "Only 9.9 % of cells on the temperature by humidity grid have a negative cooling effect at 1.2 m/s, all hot and very dry" | Contradicted by `lookup_tables.npz` and by the registry itself: negative `fan_1.2` cells span T 41.5–50 °C and RH **49–100 %** (K005a = 41.5 °C, K005b = lowest RH 49 %). They are hot and humid, not dry. | Rewrite: "all at or above 41.5 °C <!-- R:K005a --> and at relative humidity of 49 % <!-- R:K005b --> or more", and reconsider the following clause, which presently argues from dry heat. |
| 2 | 阻断 | sections/04_results.md (C13) | "The largest value is 13.1 K <!-- R:K023 --> at 40 °C and 15 % RH." | Not the largest value on the grid: within the evaporative window `evap_0.75` reaches 19.4 K at 50 °C/5 % RH, and 17.5 K at 40 °C/5 % RH. 13.1 K is only the largest of the quoted examples. | "At 40 °C and 15 % RH the value reaches 13.1 K" or state the true grid maximum (add a registry row). |
| 3 | 重要 | 01_abstract, 02_introduction (C05), 05_discussion (C19, C20, C21), 06_conclusion vs 04_results (C14, C16, 3.4), captions Fig. 2/3 | "96 % <!-- R:K002 -->", "61 % <!-- R:K003 -->", "34 % <!-- R:K004 -->" vs "95.8 % <!-- R:K032 -->", "60.6 % <!-- R:K033 -->", "34.4 % <!-- R:K070 -->" | Same quantity quoted with two roundings across sections (rule 5: identical value and rounding). Registry carries duplicate rows (K002/K032, K003/K033, K004/K070) differing only in `decimals`. | Pick one rounding per quantity (suggest 1 decimal in Results/captions and the same in abstract, or 0 decimals everywhere) and retire the duplicate rows. |
| 4 | 重要 | sections/02_introduction.md (C02) | "About 2.3 billion residential fans were in use in 2016 [@iea2018future]" | Only supported by notes in claim_to_refs.md; evidence.md empty. | evidence-curator to confirm against IEA 2018 Future of Cooling. |
| 5 | 重要 | 02_introduction (C02), 05_discussion (C19) | "cut residential cooling electricity by about 76 % [@malik2022potential]" / "the 76 % reduction in air-conditioning electricity reported by Malik et al" | Notes only (5592→1344 GWh). Note the two sentences name different quantities ("residential cooling electricity" vs "air-conditioning electricity"). | Confirm value and wording against Malik et al 2022; use one phrase. |
| 6 | 重要 | 02_introduction (C02) | "roughly one fiftieth of the power of a room air conditioner [@ravanelli2016electric]" | Notes only (55–100 W vs 1500–5000 W). | Confirm. |
| 7 | 重要 | 02_introduction (C03) | "fans help above 35 °C in humid air but harm in very dry heat [@jay2015should; @brode2023temperature]"; "benefit at 40 °C and 51 % RH but harm at 47 °C and 15 % RH [@morris2019effects; @ravanelli2015heart]" | Notes only. ravanelli2015heart note describes 36/42 °C humidity ramps, not 40/47 °C; the 40/47 °C figures belong to morris2019effects alone. | Confirm; consider citing morris2019effects alone for the 40/47 °C numbers. |
| 8 | 重要 | 02_introduction (C03), 03_methods (C08), 05_discussion (C19) | "39 °C ... 38 °C ... 37 °C [@morris2021electric]"; "beneficial on 96.6 % of hot days for young adults" | Notes only. | Confirm. |
| 9 | 重要 | 02_introduction (C03), 03_methods (C08, Table 1), captions Fig. 1 | "35 °C when RH is below 50 % [@foster2021quantifying]"; "advises against fans above 35 °C [@meade2024critical]" | Notes only. | Confirm. |
| 10 | 重要 | 02_introduction (C03), 05_discussion (C20) | "minimal benefit at 38 °C and 60 % RH and a rise in core temperature at 45 °C and 15 % RH [@oconnor2024effect; @chaseling2025thermal]"; Discussion: "ineffective at 38 °C and 60 % RH and harmful at 45 °C and 15 % RH [@oconnor2024effect]" | Notes only and marked "second-hand" in claim_to_refs. Discussion upgrades "minimal benefit" to "ineffective" and "core temperature rise ~0.3 °C" to "harmful". | Confirm against the paper; align wording between Introduction and Discussion. |
| 11 | 重要 | 02_introduction (C04), 03_methods (C10), 05_discussion (C19) | "a rise from 22.2 to 25 °C saving about 29 % of cooling energy [@hoyt2015extending]" | Supported only by "(outline)" (author's own notes), not even lit notes. | Confirm against Hoyt et al 2015. |
| 12 | 重要 | 03_methods (C09), 04_results (C13), 05_discussion (C19) | "Rugani et al ... 32 °C and 15 to 20 % RH ... room cooling of 2.8 K, room RH of 52 % and a manikin cooling effect of about 3 K" | Supported only by "(outline)". These values also drive the K006–K009 check (inputs 29.2 °C/52 %, 17.5 % RH). | Confirm the four chamber numbers against Rugani et al 2026 before K006–K009 are confirmed. |
| 13 | 重要 | 05_discussion (C19) | "0.8 m/s raises the critical operative temperature by up to 14 °C [@tartarini2021application]" | Notes only (and conditional on RH > 22 %). | Confirm; consider adding the RH condition. |
| 14 | 重要 | 03_methods (C06, Table 1) | "the DLS rule holds 26 °C and 60 % RH, following ... [@kikstra2021decent; @mastrucci2019improving]" | claim_to_refs carries "[[AUTHOR TO CONFIRM: source of 26 °C / 60 % RH DLS rule]]"; no number in either note. | Author to supply the source of 26 °C/60 % or state it as this study's assumption. |
| 15 | 重要 | 03_methods (C09) | "the 65 to 80 % efficiency assumed in a recent heat-mortality study [@lo2023optimal]" | Notes only. | Confirm. |
| 16 | 重要 | 05_discussion (C21) | "the WHO advice of 27 °C plus a fan [@who2024heat]" | Notes only. | Confirm. |
| 17 | 建议 | 05_discussion (C20) | "lowers it to 28 % <!-- R:K087 -->" vs Results "28.0 % <!-- R:K087 -->"; "from 61 % <!-- R:K003 --> to 60.4 % <!-- R:K086 -->" | Mixed rounding of the same quantities within one sentence/section. | Use 28.0 % and 60.6 % → 60.4 % (or round both). |
| 18 | 建议 | 04_results (C13), captions Fig. 1 | "the fan contributes a nearly constant 3 to 4 K" | Untagged; registry range over 26–38 °C and all RH is 0.7–4.4 K (K017/K018); 3–4 K holds only for the RH 20/50/80 % lines shown. | Add "at the humidities shown" or tag with K014/K013. |
| 19 | 建议 | 03_methods (C09, Rugani check) | "The supply-state model predicts a dry-bulb drop of 11.6 K <!-- R:K009 -->" | Value correct, but it is read from column `dT_drybulb_measured` of `rugani_check.csv`, which for the model rows holds the modelled drop. | Rename the column in the derived file (e.g. `dT_drybulb`) and name it in K009 `how`. |
| 20 | 建议 | 04_results (C13) | "The SET-consistent air-conditioning variant gives 11.9 K <!-- R:K027 --> at 35 °C and 50 % RH, close to the nominal 12 K" | Correct (35−23 = 12); untagged "12 K" is derivable arithmetic. | None; optionally write "nominal 35 − 23 = 12 K". |

## Registry problems

- Duplicate quantities with different `decimals`: K002/K032 (fan_cov_T38), K003/K033 (fan_ratio_T38), K004/K070 (ac_hours_avoided_frac). This is the root of finding 3. Keep one row each.
- K005b (`lowest RH with negative SET cooling effect` = 49 %) is correct but contradicts the Methods wording "very dry" (finding 1).
- No row for the grid maximum of the evaporative ΔT; the text's "largest value" (K023) is a sample point (finding 2).
- K009 `how` says "dry-bulb supply drop predicted by the supply-state model" but the source column is named `dT_drybulb_measured` (finding 19).
- K076 `source_file` is `era5_meta.json`; `how` should name the key `fan_dT_at_shifted_setpoint.Default` (value 3.437 → 3.4 K, correct).
- K026a/K026b cite `lookup_evap.csv`, which is not in the list of derived files given to this check; values verified (11.7732 K, 19.3024 °C).
- All 235 rows are `status=draft`; none confirmed by the author. Rows K006–K009 depend on literature inputs (Rugani 32 °C/15–20 %/2.8 K/52 %) that are themselves unconfirmed (finding 12).
- Rows no longer cited in the current text after trimming (e.g. K024, K028, K034a, K039, K044, K045, K054c–K056c, K059, K060, K080d–K097d, K100): harmless, but prune or keep deliberately.

结论：需修改后重查
