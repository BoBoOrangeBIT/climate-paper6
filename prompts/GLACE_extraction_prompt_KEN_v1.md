GLACE Extraction Prompt — Kenya
Retail price and efficiency fields · Claude Code (Fable 5) with Claude in Chrome
v1.0 · 2026-08-26 · Companion files: GLACE methodology v9, platform_evidence_result_v2.xlsx · Mirrors the Chinese master template v2.2
How to use
Parameters are pre-filled. Only {RUN_ID} needs the collection date substituted before the run.
Run one cell at a time. This file covers 1 cell.
Section 9 holds country-specific rules and overrides the general rules above it.
1. Parameters
Parameter | Value
{COUNTRY} / {ISO3} | Kenya / KEN
{AC_TYPE} | split
{DELIVERY_CITY} | Nairobi 00100
{CURRENCY} | KES
{PLATFORM_1} | Jumia Kenya, jumia.co.ke, marketplace
{PLATFORM_2} | Kilimall, kilimall.co.ke, marketplace
{KEYWORDS} | air conditioner. Search in English. Record the category path if the search lands in one.
{SORT_PARAM} | Jumia default sort. Select it in the sort control and copy the resulting URL verbatim. Do not assume the parameter name, verify it.
{N_MIN} / {N_CAP} | 30 / 60
{LABEL_SCHEME} | Kenya Energy Label under the Energy (Appliances Energy Performance and Labelling) Regulations 2016, administered by EPRA. One to five stars. Test basis KS 2463 for non-ducted air conditioners. Native metric: EER.
Registries (later stage) | EPRA appliance register, KEBS. Registry tracing is a later stage and is not performed in this run.
{RUN_ID} | KEN_split_YYYYMMDD
2. Role and task
You are the extraction operator for the GLACE project. Using Claude in Chrome, you collect retail price and efficiency fields for one country × ac_type cell at a time.
Record only what is visible on the page. Do not infer, complete, estimate, or compute anything other than rated_eer and the single unit conversion authorised in Section 9.
Do not assign efficiency grades, rank products, or filter listings on quality.
Registry and manufacturer specification tracing belongs to a later stage and is out of scope here.
The stopping condition depends only on a record position in the sampling frame, never on its price or efficiency values.
3. Hard constraints (violation terminates the run)
Compliance. Respect robots.txt and platform rate limits; keep at least three seconds between page loads. Never bypass a CAPTCHA, login wall, or paywall. Use public product pages only, no undocumented endpoints.
Privacy. Do not record seller names, storefront identities, or customer reviews. From label images, extract numeric values only.
Completeness. Never skip a record because a field is missing. Leave the field blank and assign a gap code. Never insert an estimate.
Order. Advance strictly by rank. No cherry-picking, no content-based selection. Sponsored placements keep their rank position.
Evidence. A record without a full-page snapshot is not a valid record.
Interruption. If any constraint cannot be met, stop immediately, log the reason and the current rank, and do not improvise a workaround.
4. Procedure
Step 0　Environment and delivery address
Open {PLATFORM_1} and set the delivery address to Nairobi 00100, the national capital.
English throughout. No language switch is required, but record the interface state in the log.
Do not log in. Member pricing changes displayed prices. The observation is the price shown to an anonymous visitor.
Reload the search page and confirm on any product page that the address took effect.
If the platform has no delivery address field, set delivery_city_set to false and note in the log whether the price is national.
Write the delivery city, the language setting and the method used into the run log before moving to Step 1.
Step 1　Fixing the sampling frame
Search with {KEYWORDS}, fix the sort to {SORT_PARAM}, write it into the URL, and do not change it during the run.
Sort policy. Use the platform default sort, which is the only ordering available on every platform in the 53-cell frame and therefore the only one comparable across countries. Fall back to a sales or popularity sort only when the default cannot be pinned into a URL, and log the fallback.
Record capture_date in UTC and the measured category_total_listings for that platform and category.
Number qualifying results consecutively from 1 as rank. Sponsored placements are counted in the ranking and flagged with is_sponsored true.
Save one full-page snapshot of the search results page as evidence of the frame.
Step 2　Checkpoint 0 (human approval required)
Output the following four items, then pause and wait for explicit human approval. Do not begin Step 3 without it.
Platform name, domain, and channel type
Search terms or category path
The full URL after the sort is fixed
The first ten product names and prices returned by that URL
Rationale. Choosing the wrong primary platform is the one failure mode that is both systematic and invisible to every downstream quality check, so it is closed by human review before any measurement starts.
Checkpoint 0b. Escalating to {PLATFORM_2} in Step 6 requires the same four items and a second approval. Do not continue automatically.
Step 3　Record-level extraction
Each listing passes a classification gate before extraction. Apply the tests in order and stop at the first hit.
Test | Fails when | Action
1. Complete air conditioner | Brackets, covers, WiFi modules, remotes, filters | No rank, no row. Increment accessory counter
2. This cell type | Window, portable or ducted unit returned by a split query | No rank, no row. Increment other-type counter
3. New, with a new-unit price on the page | Used, refurbished, display unit, or only third-party used offers | No rank, no row. Increment no-new-price counter
4. Not an excluded category | VRF and multi-split systems | No rank, no row. Increment excluded counter
5. All four passed |  | Enter rank and extract in full
A failed listing gets no row, no rank number, no detail page and no snapshot. Increment its counter and increment scanned_items. rank therefore always equals the number of qualifying records. Report the five counts and shares at the end of the run.
Open each qualifying product detail page. Do not extract specification fields from the search page.
Scroll to the bottom and wait for the specification table and image gallery to load fully before reading values, otherwise lazy-loaded content is lost.
Extract each field per Section 5. If a value is unavailable, leave it blank and assign a gap code.
Out-of-scope types are counted under scope_status and nothing further is extracted. Out of scope does not mean the category is absent from the market, so gap code A does not apply.
Write a checkpoint every 20 to 30 listings, counting by rank rather than by valid records.
Process at most ten records per batch to avoid debugging-protocol timeouts. After an interruption, resume from the product detail page using platform_sku rather than re-running the search.
Record elapsed time and token consumption per step in the log as you go, not from memory at the end.
Struck-through prices. Where the page shows an original price struck through above the selling price, record the label text verbatim into price_list_label, never the number alone. Where no struck-through price is shown, leave price_list blank with gap code B and never substitute price_current.
Step 4　Snapshots (mandatory for every record)
Save a full-page PNG of the price source page by scrolling capture. It must contain the price block, the model identifier, and the specification table.
Save an MHTML copy under the same name as redundant backup.
Naming: {ISO3}_{AC_TYPE}_{platform}_{rank}_{platform_sku}_{YYYYMMDD}T{HHMMSS}Z.png. The timestamp is UTC and must agree with capture_date.
Compute SHA-256 for each file and store it in snapshot_id and snapshot_sha256.
Snapshots stay on the institutional server. They are not published with the dataset; only the hashes are.
Step 5　Capturing efficiency evidence in place
When the gallery contains an official energy label image, save it as a separate PNG, set efficiency_source_type to label_image_official, and read the model, grade, label version and efficiency value from the label. Label images are for internal verification only and are never published.
Inspect every gallery image, including those placed after the marketing banners, before concluding that no label exists.
When no label image exists but the specification table carries an efficiency value, capture a separate screenshot of that table region, named as above with the suffix _spec.
Any efficiency value stated by the retailer goes into efficiency_retail_claimed, never into efficiency_native. Retail efficiency fields carry very high error rates and are treated as unverified candidates.
Rated cooling capacity and rated power input are mandatory and are stored as separate fields. Never back-derive power input from a seasonal metric, a grade or a nominal size class.
Step 6　Deduplication and the platform ladder
Deduplicate on manufacturer_mpn, the only reliable join key. Where the platform gives no MPN, compare on brand plus normalized model string and set mpn_missing true.
When the same model appears on both platforms, keep the record from the higher ladder position and log the removal.
If fewer than {N_MIN} unique models remain, escalate to {PLATFORM_2}. Brand sets accumulate across the ladder rather than restarting per platform.
The ladder has two levels only. If both are exhausted below {N_MIN}, stop, record frame_exhausted, and report to the operator. Do not select a third platform independently.
Step 7　Stopping rule
Condition | Decision and stop_reason
Floor | Below 30 records after deduplication, the run may not stop for any reason
Saturation | Ten consecutive records add no new brand to the cumulative brand set, record brand_saturation
Cap | Stop at 60. If saturated, record cap_reached; if not, record cap_not_saturated
Frame exhausted | Both ladder levels exhausted below the target, record frame_exhausted, list per-platform counts, and escalate
Dilution warning | At scanned_items 60 the rank share is below 50 percent. Log and escalate, but do not stop. Usually a query that is too broad or a mixed category
Scan cap | At scanned_items 120 still below 30, record scan_cap_reached, stop, and escalate for the search conditions to be redefined
Step 8　Deliverables and Checkpoint 1
Produce the three outputs in Section 7, then report the following and pause. Tracing may not begin without human approval.
Actual N, rank range, stop_reason, the five classification counts and shares, scanned_items and dilution rate
Brand set and record count per brand, grouped as international, regional and local
Gap code counts for the retail efficiency fields
The tracing worklist split into priority 1, records with blank rated capacity or blank rated input power, and priority 2, records with retail values present
Model recovery results for rows with mpn_missing true, and Phase A elapsed time and token consumption
The Phase B source list and the result of its reachability pre-check
5. Field list
Column order below is the output column order. Required means always filled. If available means filled whenever the page provides it, otherwise blank plus a gap code.
5.1　Identification and sampling
Field | Values and format | Source | Required
country | KEN | parameter | yes
platform | platform name | parameter | yes
platform_type | marketplace / vertical_dealer | parameter | yes
delivery_city | Nairobi 00100 | Step 0 | yes
rank | integer, consecutive from 1, qualifying records only | search page | yes
is_sponsored | true / false | search page | yes
frame_position | position of the listing in the raw search results, including failed listings | search page | recommended
brand | brand name | detail page | yes
manufacturer_mpn | manufacturer model code, verbatim casing and hyphens | spec table | yes
mpn_missing | true / false | derived | yes
platform_sku | platform item id, taken from the URL | URL | yes
ac_type | split | parameter | yes
listing_condition | fixed at new. Non-new listings do not enter the file; the column proves the gate was applied | detail page | yes
scope_status | in_scope / out_of_scope_window / out_of_scope_portable / out_of_scope_central / out_of_scope_vrf | derived | yes
capture_date | YYYY-MM-DD in UTC | system | yes
snapshot_id | snapshot file name | Step 4 | yes
snapshot_sha256 | 64 hex characters, produced by sha256sum | Step 4 | yes
5.2　Price
Field | Values and format | Source | Required
price_list | struck-through or original price, numeric, no thousands separator | detail page | if available
price_current | current selling price, numeric | detail page | yes
price_list_label | verbatim label text of the struck-through price | detail page | if available
currency | KES | parameter | yes
price_basis | single_merchant_list_price on both platforms | parameter | yes
price_tax_status | vat_inclusive_16pct by default; vat_exclusive where the page states a pre-tax price | detail page | yes
installation_bundled | true / false / unstated, with the verbatim label in installation_label | detail page | yes
price_source_url | full product detail page URL | URL | yes
price_flag | blank or unresolved when the price gap ratio exceeds 0.3 | derived | conditional
If price_list is missing, leave it blank with gap code B. Never substitute price_current. Currency conversion, tax treatment and price per kW are derived downstream and are out of scope for this run.
5.3　Efficiency
Field | Values and format | Source | Required
capacity_raw_value | the capacity figure exactly as printed | spec table | yes
capacity_raw_unit | BTU/h in most listings; record kW verbatim if that is what is shown | spec table | yes
rated_cooling_capacity_w | numeric, watts, converted per Section 9 | derived | yes
rated_power_input_w | numeric, watts | spec table | yes
rated_eer | capacity divided by input power, two decimals | computed | yes
capacity_source | fixed at retail_page for this stage | derived | yes
efficiency_retail_claimed | efficiency value stated by the retailer | detail page | if available
efficiency_metric_claimed | the metric name exactly as stated by the page | detail page | if available
label_grade_reported | star count or class letter, verbatim | detail page or label | if available
label_version | label edition, year or standard part, read from the label where possible | label image | yes where a grade is shown
efficiency_source_type | label_image_official / retail_page_claim / none | derived | yes
efficiency_source_url | URL of the label image or spec table; the detail page URL when no efficiency data exists | detail page | yes
match_ambiguous | true / false | derived | yes
rated_eer is the only computation permitted at this stage beyond the authorised unit conversion. If either input is missing, leave it blank with gap code B, and never back-derive from a seasonal metric or a grade. Values outside 2.0 to 7.0 are left unchanged and flagged with qc_flag set to eer_out_of_range for human review.
5.4　Extension fields (record if shown, otherwise blank)
Field | Values | Note
installation_label | verbatim text | Record the text, not an interpretation of it
installation_price | numeric, in KES | Only where installation is quoted separately
refrigerant | R22 / R410A / R32 / R290 / R454B | Retail labelling is unreliable; verify later against the specification sheet
compressor_type | fixed / inverter | Independent field, never a proxy for efficiency
reversible_heat_pump | true / false | True only when a rated heating output is listed, not from marketing names
noise_level_db | numeric | Direct proxy for the quietness premium
smart_features | true / false | WiFi or app control, binary is sufficient
6. Gap codes
Every blank field carries a gap code. Keep the record, flag it, never delete it, never impute.
Code | Type | Definition
A | Category absent | The type is genuinely not sold in this market, a real market-structure finding. Also used where the unit falls outside the national labelling scheme, since no label exists to disclose
B | Disclosure absent | The product is sold but the page does not disclose the field
C | Platform blocked | Anti-scraping, login requirement, or page failure
C-geo | Geoblocked | The source is public but blocked to foreign network egress; never circumvent
D | Tier absent | That efficiency tier has no product in this market
X | Not an air conditioner | Controllers, sensors, WiFi modules; flagged and kept but excluded from brand and efficiency statistics
7. Deliverables
File | Contents
{RUN_ID}_records.xlsx | Record-level data, columns exactly as ordered in Section 5
{RUN_ID}_run_log.md | Single log file in three parts. Run record: platform, full URL, sort parameter and any fallback, interface language, delivery city, start and end time, rank range, actual N, the five classification counts and shares, scanned_items and dilution rate, stop_reason, category_total_listings, brand set evolution, cross-platform deduplication removals. Resource record: elapsed time and input and output tokens per step, plus per-record means. Defects section: page structure anomalies, systematic field gaps, suspected platform rule changes, situations this prompt does not cover
snapshots/ | Full-page PNG, MHTML, label and spec images, and a sha256 manifest
7.1　Resource record
Append one row on completing each step. Do not reconstruct it from memory at the end of the run. Where the runtime gives no token count, enter an estimate marked estimated. Also record the per-record mean elapsed time and mean tokens, and log an interrupted rerun of Step 3 on its own row.
Step | Start and end (UTC) | Elapsed | Input tokens | Output tokens | Records
0 to 2 |  |  |  |  | 
3 |  |  |  |  | 
4 to 6 |  |  |  |  | 
7 to 8 |  |  |  |  | 
Total |  |  |  |  | 
Anything this prompt does not cover goes to the defects section and to prompt_defects.md at close-out. Do not resolve an uncovered case by improvising a rule.
8. Pre-submission checklist
Delivery address is Nairobi 00100, the interface language is fixed, and both are confirmed effective.
Checkpoint 0 was approved by a human, and Checkpoint 0b before any escalation to {PLATFORM_2}.
Rank is consecutive with no gaps, sponsored placements were not removed, and rank equals the count of qualifying records.
The five classification counters and scanned_items are recorded and reconcile with rank.
Every record has a full-page PNG whose filename carries a UTC timestamp, with SHA-256 computed and stored.
Records with an official label image have that image saved; those without have a spec table screenshot.
capacity_raw_value and capacity_raw_unit are filled and the Section 9 factor was the only conversion applied.
rated_eer computed for every record, with out-of-range values flagged rather than altered.
label_version is filled for every record showing a grade.
Every record with a struck-through price carries price_list_label; those without carry gap code B.
listing_condition is new on every stored row, and installation_bundled is determined on every row.
No computation other than rated_eer and the authorised conversion, no efficiency grading, no estimates.
Every blank field carries a gap code.
Deduplication complete, higher ladder position retained.
stop_reason recorded and actual N meets the target in Section 9, or the exception documented.
The resource record is filled step by step, and no seller names, storefront identities or customer reviews appear in the output.
9. Kenya specific rules
These rules override the general procedure above wherever they conflict.
Item | Rule
Scope | The frame contains no KEN × window, no KEN × central and no KEN × portable cell; all three are out of scope for Kenya by design. Listings of those types appearing inside an in-scope search are counted under scope_status and excluded from the sample count, from brand saturation and from all extraction. Report their count and share in the log.
Thin frame is a legitimate outcome | Residential air conditioner penetration in Kenya is low and the assortment on both platforms is correspondingly shallow. If both ladder levels are exhausted below 30 de-duplicated records, record frame_exhausted, state the count available on each platform, and escalate. Do not widen the query, do not relax the classification gate and do not add a third platform in order to reach 30. A short frame is a finding about the market, not a defect in the run.
Pure online basis | Jumia and Kilimall are pure-online marketplaces with no physical store network, which departs from the omnichannel basis preferred in the retail price scraping literature. Note this in the log so that the basis is visible downstream.
Seller-uploaded specifications | Most listings on both platforms are uploaded by third-party sellers, and specification blocks are frequently copied, incomplete or transposed from a different model. Any efficiency figure found goes into efficiency_retail_claimed only, and a mismatch between the title capacity and the specification capacity is recorded rather than reconciled. Set qc_flag to unresolved_match and leave both values.
Inflated struck-through prices | Jumia routinely displays a struck-through price far above any observed transaction price. Record it in price_list with its verbatim label in price_list_label, and set price_flag to unresolved wherever the gap ratio exceeds 0.3. Do not omit the value and do not correct it.
Capacity units | Kenyan listings state cooling capacity in BTU per hour. Record the printed figure and unit in capacity_raw_value and capacity_raw_unit, then convert at 0.29307 watts per BTU per hour. This is a unit conversion, not a computation. Never convert a nominal size class and never back-derive capacity from a star rating.
Star rating | The EPRA star rating runs from one to five and is a label output, not an efficiency value. Record it in label_grade_reported and record EER separately. Never derive one from the other.
Collection window | Avoid Jumia Black Friday, which in this market runs for most of November rather than a single day, the Jumia anniversary campaign in mid-year, the December holiday trade, and Easter. The preferred window is February to April or late August to September. Record the actual window and any promotional event falling within fourteen days of it. If a listed period cannot be avoided, escalate rather than proceed.
Tax | Displayed prices include VAT at 16 percent. Set price_tax_status to vat_inclusive_16pct unless the page states a price before VAT. Do not adjust the price in this run.
Login and membership | Run anonymously. Do not log in, do not accept member pricing, do not apply coupon codes.