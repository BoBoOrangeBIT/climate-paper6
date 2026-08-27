GLACE Efficiency Tracing Prompt — Kenya
Phase B and Phase C only · retail extraction already complete · Claude Code with Claude in Chrome
v1.0 · 2026-08-26 · Mirrors the Chinese master template v2.2, Steps 9 to 14 · Cell covered: KEN × split
How to use
Phase A retail extraction is finished and Checkpoint 1 has been approved. This prompt starts from the completed retail file and does not revisit e-commerce listings except where a step says so explicitly.
Run one cell at a time.
Section 8 holds country-specific rules and overrides the general procedure wherever the two conflict.
1. Inputs
Item | Content
Retail records file | The completed Phase A output for this cell, keyed on manufacturer_mpn, containing brand, manufacturer_mpn, mpn_missing, platform_sku, ac_type, capacity_raw_value, capacity_raw_unit, rated_cooling_capacity_w, rated_power_input_w, rated_eer, capacity_source, efficiency_retail_claimed, efficiency_metric_claimed, label_grade_reported, label_version, efficiency_source_type, efficiency_source_url, match_ambiguous, gap_codes, qc_flag, notes
Label images | Energy label images saved during Phase A, with their file names and hashes
Checkpoint 1 worklist | The priority 1 and priority 2 tracing lists built and approved at the close of Phase A. Priority 1 is rows whose rated cooling capacity or rated input power is blank, which have no fallback and where a tracing failure is a permanent hole. Priority 2 is rows with retail values present. Do not rebuild the worklist here; deduplicate it on manufacturer_mpn, set tracing_priority on every row, and report any discrepancy against the approved list before starting.
Country | Kenya / KEN
Native metric | Kenya Energy Label under the Energy (Appliances Energy Performance and Labelling) Regulations 2016, administered by EPRA. One to five stars. Test basis KS 2463 for non-ducted air conditioners. Native metric: EER.
2. Role and task
You are tracing efficiency and capacity values to authoritative sources and adjudicating the final values. Retail values stay in the file as a comparison set and are never overwritten in place.
The final rated efficiency and rated capacity come from a registry or a manufacturer specification sheet. Retail values are used only when neither carries the model.
Record only what the source states. The single permitted computation is rated_eer, plus the two deviation columns in Step 13.
Never infer a missing value from a seasonal metric, a star rating, a class letter or a nominal size class.
Match rates are the object of study, not a target. Do not raise a hit rate by loosening the match criteria.
3. Hard constraints
Registries and manufacturer sites are subject to the same rate discipline as retail platforms: at least three seconds between page loads, robots.txt respected, no CAPTCHA or login bypass.
Where a bulk export or downloadable dataset exists, use it instead of querying record by record.
A source blocked to your network egress is recorded as gap code C-geo. Circumvention by proxy, VPN, mirror or cached copy is prohibited without exception.
Never delete a record because tracing failed. Leave the field blank, assign a gap code, and keep the row.
Do not record personal data from any source.
4. Procedure
Step 9　Source inventory and reachability check
Open each source below and run one test query. Report reachability before proceeding.
Tier | Source | Notes
T1a | EPRA appliance register | EPRA maintains a register of appliances meeting the MEPS, covering refrigerators, air conditioners, motors and fluorescent lamps. Establish at the pre-check whether the register is publicly searchable, whether it exposes model-level records, and whether a downloadable list exists. If it is reachable only as a periodic PDF list, download it and match offline.
T1a | KEBS, Kenya Bureau of Standards | Holder of KS 2463, the non-ducted air conditioner test and rating standard, which is limited to single-circuit systems with one evaporator and one condenser. A standards catalogue rather than a product register.
T1b | Manufacturer sites | LG, Samsung, Hisense, Midea, Gree, TCL, Haier, Daikin, Carrier for international brands; Ramtons, Von, Bruhm, Armco, Mika, Nunix, Roch for regional brands. Locate each site by searching the brand name plus Kenya rather than constructing a domain, and log the domain actually used. Official specification sheets and product pages only.
T1c | Label images from Phase A | Already on disk. No further retrieval needed.
Report which sources are reachable, which are blocked, and which offer a bulk export.
If the tier ordering for this market differs from the general T1a to T1b to T1c order, state the working order explicitly before starting.
Step 10　Registry matching
manufacturer_mpn is the join key. It is the manufacturer model code and the only identifier registries carry.
platform_sku is not a model code. A platform item id is assigned by the platform, appears in no registry, and must never be used for matching. Colour and size variants of one model carry different platform_sku values, and sellers sometimes fill the model row of a specification table with one, so check the format before using the value.
Order | Method | Result
0 | Model recovery, only for rows where mpn_missing is true: read the model code from the product title, the specification table, or the energy label image, in that order | Record mpn_recovered_from; on success return to order 1
1 | Exact match on manufacturer_mpn | Proceed to extraction
2 | Wildcard match after stripping colour codes, regional codes, model-year and packaging suffixes | Log the suffix rule used
3 | Brand plus the model fragment in the product name plus capacity class | Set match_ambiguous to true and record the candidate count
4 | No match | Gap code B, continue to Step 11
Where the three model sources disagree, the label image wins, because the model printed on a label must match the registered record.
Where several candidates match and their efficiency values differ by more than five percent, do not pick one. Set match_ambiguous to true, leave the value blank, and list the candidates for human adjudication.
Suffix stripping rules are defined once for the run and written to the log. Do not invent a rule per record.
Order 3 hits very easily return several model years and efficiency tiers within one series, and the error is invisible in the data. Every order 3 hit carries match_ambiguous true.
A row with no recoverable model string is never deleted for failing to match. Such products skew toward local and unbranded models, so deletion manufactures non-random missingness.
Extract the native efficiency value, the native metric name, the grade, the label version, rated cooling capacity and rated input power. Capacity and power go into the fields with the _auth suffix.
Step 11　Manufacturer specification sheets and label images
Models the registry did not resolve go to the manufacturer own site. Priority 1 rows come here even when the registry supplied an efficiency value, if capacity or input power is still blank.
Only the manufacturer own pages and the PDFs they host qualify. Dealer pages, price comparison sites and third-party databases do not, however accurate they look.
Where a model has several market versions, take the version for this country. If it cannot be determined, set match_ambiguous to true and list the candidates.
A specification sheet is also the route to a missing rated capacity or input power, which is what decides whether rated_eer can be computed at all.
Where the registry and the manufacturer site both fail, fall back to the T1c label images already saved in Phase A. Do not return to the retail listing for this. Read the model, the grade, the label version and the efficiency value, and set efficiency_source_tier to t1c_label_image.
A label carries the efficiency figure and the grade but not always the rated input power, so a label-sourced row may still need a specification sheet before rated_eer can be computed.
Step 12　Evidence capture
Save a full-page PNG of every source that produced a value; save hosted specification PDFs in their original form.
Capture evidence for hits only. Searches that found nothing get no snapshot; record in the log which sources were searched and how.
Naming: {ISO3}_{ac_type}_auth_{registry or manufacturer}_{manufacturer_mpn}_{YYYYMMDD}T{HHMMSS}Z.png
Compute SHA-256 into snapshot_auth_id and snapshot_auth_sha256.
efficiency_source_url now points at the authoritative source rather than the retail page. Each record thereby carries a price URL and an efficiency URL from different origins, which is the traceability property that distinguishes this dataset.
Step 13　Adjudication and deviation
Decide each field independently. Capacity and input power may come from different tiers as long as each is labelled honestly.
Priority | Source | capacity_source / efficiency_source_tier
1 | Registry | registry / t1_registry
2 | Manufacturer specification sheet | manufacturer_spec / t1_manufacturer_spec
3 | Official energy label image | label_image / t1c_label_image
4 | Retail listing | retail_page / t2_retail_claim
Fall back to tier 4 only when the first three carry nothing for that model, and record the fallback rather than hiding it.
Recompute rated_eer from the adjudicated capacity and input power, to two decimals.
Convert the authoritative capacity to watts before comparing, so that a unit mismatch is never read as a real deviation.
Where retail and authoritative values both exist, compute capacity_deviation_pct and eer_deviation_pct against the authoritative value as denominator, to two decimals.
Deviations above ten percent in absolute value set qc_flag to large_deviation. Keep both numbers unchanged and refer them for human review.
Where the retail metric and the authoritative metric differ, compute no deviation and set qc_flag to metric_mismatch, recording both metric names.
The deviation distribution measures how wrong retail listings are. It is evidence for the technical validation section and is not to be trimmed because it looks poor.
Step 14　Outputs
Produce the files in Section 6 and close with hit rates by tier, hit rates by brand tier, the fallback share, and the count of deviations above threshold.
Split hit rates across international, regional and local brands. A single headline rate hides non-random missingness, and that missingness is one of the central findings of this dataset.
Report the fallback share to tier 4 explicitly. In a market with a thin or absent registry it is the single most informative number in the run.
5. Fields
5.1　Tracing layer
Field | Values and format | Source | Required
efficiency_source_tier | t1_registry / t1_manufacturer_spec / t1c_label_image / t2_retail_claim / none | derived | yes
mpn_recovered_from | title / spec_table / label_image / none; required only where mpn_missing is true | Step 10 | conditional
tracing_priority | 1 or 2, per the Checkpoint 1 worklist | derived | yes
registry_name | name of the register that produced the hit | Step 10 | conditional
registry_record_id | record identifier in the registry | Step 10 | conditional
registry_match_type | exact_mpn / wildcard_mpn / brand_model / none | Step 10 | yes
match_candidate_count | integer | Step 10 | conditional
efficiency_native | native efficiency value from the authoritative source | Steps 10 to 11 | conditional
efficiency_metric | native metric name, verbatim | Steps 10 to 11 | conditional
label_grade_auth | grade recorded by the authoritative source, verbatim | Step 10 | conditional
label_version_auth | label edition, year or standard part; none where the source does not state it | Step 10 | conditional
capacity_raw_value_auth | capacity figure as printed by the source | Steps 10 to 11 | conditional
capacity_raw_unit_auth | unit as printed by the source | Steps 10 to 11 | conditional
rated_cooling_capacity_w_auth | numeric, watts | Steps 10 to 11 | conditional
rated_power_input_w_auth | numeric, watts | Steps 10 to 11 | conditional
efficiency_source_url | URL of the authoritative source | Step 12 | yes
snapshot_auth_id | snapshot file name | Step 12 | conditional
snapshot_auth_sha256 | 64 hex characters | Step 12 | conditional
5.2　Final layer
Field | Values and format | Source | Required
rated_cooling_capacity_w | adjudicated value per Step 13 | adjudication | yes
rated_power_input_w | adjudicated value per Step 13 | adjudication | yes
capacity_source | registry / manufacturer_spec / label_image / retail_page | adjudication | yes
rated_eer | adjudicated capacity divided by adjudicated input power, two decimals | computed | yes
capacity_deviation_pct | retail minus authoritative, over authoritative, times 100, two decimals | computed | conditional
eer_deviation_pct | same basis | computed | conditional
qc_flag | blank / eer_out_of_range / large_deviation / metric_mismatch / unresolved_match | derived | yes
match_ambiguous | true / false, already present in the Phase A file; update it here | derived | yes
Column naming follows the existing Phase A file. Add the _auth columns, write adjudicated results into the unsuffixed columns, and keep the original retail values in _retail columns rather than renaming anything already collected.
6. Deliverables
File | Contents
{RUN_ID}_records.xlsx | The Phase A record file with the tracing and final layers appended, columns per Section 5. Phase A columns unaltered
{RUN_ID}_run_log.md | The Phase A log with two sections appended. Tracing section: source reachability, working tier order, suffix rules, sources searched and how, model recovery rate by source, hit rates by tier and by brand tier, fallback share, unresolved candidate list, deviations above threshold. Defects section: registry behaviour anomalies, systematic gaps, situations this prompt does not cover
snapshots/ | Authoritative source PNGs and PDFs with a sha256 manifest
6.1　Resource record
Append one row on completing each step, not from memory at the end. Where the runtime gives no token count, enter an estimate marked estimated. Record per-record means separately for registry matching and for manufacturer lookups, since the two differ substantially in cost.
Step | Start and end (UTC) | Elapsed | Input tokens | Output tokens | Records
9 |  |  |  |  | 
10 |  |  |  |  | 
11 to 12 |  |  |  |  | 
13 to 14 |  |  |  |  | 
Total |  |  |  |  | 
7. Pre-submission checklist
Checkpoint 1 was approved before this run began, and source reachability is reported with any blocked source recorded as C-geo and no circumvention attempted.
Priority 1 rows went through both the registry and the manufacturer site; none were skipped.
manufacturer_mpn was the join key throughout; platform_sku was never used for matching.
Model recovery was run only for rows with mpn_missing true, and mpn_recovered_from is filled for those rows.
Suffix stripping rules are defined once and logged.
Every value-producing source has a snapshot and a SHA-256; failed searches have none.
efficiency_source_url points at the authoritative source, not the retail page.
efficiency_source_tier and capacity_source are filled on every row, including fallbacks.
label_version_auth is filled on every matched row, and no version was inferred from a grade.
Capacity was converted to a common unit before any deviation was computed.
rated_eer recomputed from adjudicated values; deviations computed and flagged where above threshold, and metric mismatches flagged rather than computed.
Hit rates reported by tier and by brand tier; the fallback share is reported explicitly.
No record was deleted because tracing failed.
8. Kenya specific rules
These override the general procedure wherever they conflict.
Item | Rule
Register scope | The EPRA register lists appliances that met the MEPS and were granted a label. Models sold without registration do not appear. A registry miss is therefore not evidence that the model does not exist, and every miss is routed to the manufacturer site rather than closed as absent.
Capacity units | Kenyan sources state cooling capacity in BTU per hour. Record the printed figure and unit in the _auth raw columns, then convert at 0.29307 watts per BTU per hour. This is a unit conversion, not a computation.
Star rating | The star rating is a label output, not an efficiency value, and must never be converted into one. Record it in label_grade_auth and record EER separately in efficiency_native.
Regional brand documentation | East African house brands publish little or no specification documentation, and several are rebadged imports whose model codes do not resolve on any manufacturer site. A high fallback share for that tier is expected. Report it by brand tier rather than compensating for it.
Regional variants | International brands sell Kenyan or wider African variants whose model codes differ from the global catalogue. Always take the Kenyan page where one exists. Where the site offers no country selector, set match_ambiguous to true and list the candidates.