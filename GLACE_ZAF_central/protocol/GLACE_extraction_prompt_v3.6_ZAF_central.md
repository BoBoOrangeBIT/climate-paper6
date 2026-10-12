# GLACE Data Extraction Prompt — South Africa × central (ZAF_central)

**Retail price and energy efficiency fields · Claude Code (Fable 5) × Claude in Chrome execution build**

Version v3.6-EN-ZAF (2026-10-12) · split out of v3.5-EN (2026-09-22) and made self-contained against the full v3.4 body as used in the POL build.
Companion files: GLACE Methodology v9, `platform_evidence_result_v4.xlsx`, JRAIA AC-type share analysis (2026-09-22).
Contains Phase A (retail extraction), Phase B (efficiency and capacity tracing), Phase C (final adjudication), and a separate installation-cost stream.

**Changes from v3.5:** single cell only; Sections 5–8 and 9.3 written out in full instead of referring to v3.4; Checkpoint 1 item count corrected to thirteen; rules added for multi-variant product pages, single- vs three-phase variants, unreliable dealer MPN fields, non-South-African spec sheets, and retail nominal BTU vs rated capacity; defect reporting (Section 10) restored.

---

## 0. Why this cell exists and how to use this file

The JRAIA demand series shows that GLACE v3 sampling of South Africa (split only) covers about 70% of the market (2017–2021). Commercial (PAC + VRF) is about 30%, window about 5%. This run re-opens **ZAF × central**, which v3.4 §9.1 listed as out of scope.

⚠️ **Scope caveat.** JRAIA "commercial" is PAC + VRF, dominated in South Africa by medium and large split and VRF systems for offices and retail. GLACE central is defined as **ducted whole-house systems sold as one priced set** (outdoor condensing unit + indoor ducted unit). It is not established that this product exists at retail in South Africa in a volume that supports 30–60 listings. The run therefore carries a scope gate (9.2) that can end with the cell formally recorded as **out of scope with evidence**, which is a valid, publishable outcome.

- **One run processes exactly one `country × ac_type` cell.** Do not merge with any other cell.
- Fill only the run-specific rows of Section 1 and the supplementary notes table in Section 9.6.
- Sections 2 onward are the body passed to the model and may be copied as a block into Claude Code.
- **Section 9 (South Africa × central rules) overrides the body wherever they conflict.**
- Two blocking human gates: Checkpoint 0 (before extraction, including the scope gate) and Checkpoint 1 (before Phase B). Neither may be self-approved.
- Methodological defects and uncovered page structures go to `prompt_defects.md`; they are not resolved autonomously.

### 0.1 Platform validation (before Step 0)

Platform candidates below are **unverified**. Before Step 0, run the platform-evidence procedure for this cell: open each candidate and confirm it (a) sells ducted systems as complete priced sets, (b) shows prices to a non-logged-in visitor, (c) has a stable, URL-fixable ducted category or search page, and (d) is reachable without CAPTCHA or geo-block. Record the result as a new row `South Africa / ZAF / central` in `platform_evidence_result_v4.xlsx`. **If no vertical dealer with visible ducted prices can be validated, report that to the operator and do not start the run on a marketplace primary.**

---

## 1. Parameter block — `ZAF × central`

| Parameter | Value | Note |
|---|---|---|
| `{COUNTRY}` / `{ISO3}` | South Africa / ZAF | |
| `{AC_TYPE}` | central | Ducted sets only: outdoor condensing unit + indoor ducted unit (ducted inverter, hideaway, concealed ducted, ducted fan-coil), one price for the set. See 9.1 |
| `{DELIVERY_CITY}` | Pretoria, Gauteng, 0002 | Administrative capital. If the platform prices nationally, set `delivery_city_set = false` and log it |
| `{CURRENCY}` | ZAR | |
| `{PLATFORM_1}` | *candidate:* a specialist HVAC online dealer with a populated, priced ducted category (`vertical_dealer`). Test first: AC Direct · acdirect.co.za (ducted category; prices and per-variant SKU/MPN observed in an exploratory pass in July 2026). Further candidates: online shops of national HVAC distributors and installers found with "ducted air conditioner price South Africa", "ducted inverter online" | Marketplaces carry almost no ducted systems; a vertical dealer is the only realistic primary |
| `{PLATFORM_2}` | *candidate:* Builders · builders.co.za · marketplace; alternative Takealot · takealot.com · marketplace | Expected to contribute few or no ducted listings; used mainly to document frame exhaustion |
| `{KEYWORDS}` | `ducted air conditioner`; fallback `ducted inverter` | Fixed per platform. Category navigation (ducted category) is acceptable under Step 1 fallback rules |
| `{SORT_PARAM}` | Platform default, written verbatim into the URL | |
| `{LABEL_SCHEME}` | No mandatory AC efficiency registry. Native metrics on spec sheets: EER / COP (W/W); imports may show EU SEER/SCOP or Australian AEER/ACOP | Phase B relies on T1b |
| `{REGISTRY_T1A}` | None (structural). See 9.3 | |
| `{CAPACITY_RANGE_W}` | 1,500–12,000 W | Same as v3.4. Ducted sets above ≈ 41k BTU/h will be flagged `capacity_out_of_range`; this is a flag for review, not an exclusion |
| `{N_MIN}` / `{N_CAP}` | 30 / 60 | Do not adjust. Below 30 across both platforms → apply the scope gate, never search for a third platform |
| `{RUN_ID}` | `ZAF_central_YYYYMMDD` | |
| `{CAPTURE_SEASON_PHASE}` | `____` | Southern hemisphere: Sep–Oct = `pre_season`; Nov–Feb = `peak`; Mar–Aug = `post_season` |
| `{CAPACITY_UNIT_MAP}` | kW dominant; BTU/h on many listings | See 9.4 |
| `{EFF_SUPPLEMENT}` | false | |
| `{AGGREGATOR_TIER}` | false | |

---

## 2. Role and task

You are the GLACE data extraction operator. You access `{PLATFORM_1}` through Claude in Chrome and extract retail price and efficiency-related fields for the `{COUNTRY} × {AC_TYPE}` cell.

- Record only facts visible on the page. Do not infer, complete, or estimate. Cooling capacity and power input are recorded verbatim as printed. **No unit conversion is performed during extraction**; conversion happens in the data-processing stage.
- Do not judge efficiency class, do not compare products, do not screen products.
- Phase A records retail-layer visible values only and does not adjudicate their truth. Phase B traces values to authoritative sources, which then override the retail values.
- Final efficiency and capacity values come from a registry or a manufacturer specification sheet. Retail values are used only when neither carries the model, and the source tier is recorded truthfully.
- **Stopping depends only on a record's position in the sampling frame**, never on its price or efficiency value.
- The target price basis is **tax-inclusive, equipment only**. `price_current` is the equipment price excluding installation and every other service charge. Where the page offers a with-installation and a without-installation configuration, switch to without-installation before reading the price. Where the platform can only display tax-exclusive prices, Section 9 governs how this is recorded.
- Installation cost is never folded into `price_current`. It is extracted separately under Step 3b and output as a separate table.
- Where a page contradicts itself, do not adjudicate during extraction. Retain both values, set `qc_flag = internal_inconsistency`, and escalate the record to tracing priority 1.
- On hitting an implausible value, report it to the operator in the dialogue immediately and flag it. Records are always retained. They are never deleted or silently corrected.
- **Checkpoints are blocking.** Raise every checkpoint as a blocking question to the operator (use the question tool where available) and wait for an explicit answer. Never print a checkpoint report and continue. Never self-approve.

---

## 3. Hard constraints (violation terminates the run)

1. **Compliance.** Respect `robots.txt` and platform rate limits. Interval between page opens and pagination is at least 3 seconds. Do not bypass CAPTCHA, login walls, or paywalls. Do not use any automated interface other than the platform's public pages. When operating through Claude in Chrome, click, paginate, and expand page elements at a normal browsing rhythm, and use no technique whose purpose is to evade access detection.
2. **Privacy.** Do not record seller names, shop entities, or buyer reviews. From energy label images extract numeric values only.
3. **Completeness.** Never skip a record because a field is missing. Leave the field empty and enter a gap code. Never enter an estimate.
4. **Order.** Advance strictly in `rank` order. No skipping and no selection on content. Sponsored placements count toward `rank` as normal.
5. **Evidence.** A record without a full-page snapshot is invalid and must be re-collected or marked failed.
6. **Interruption.** If any constraint cannot be met, stop immediately, log the reason and the `rank` reached, and do not improvise a workaround.

---

## 4. Workflow — Phase A (retail extraction)

### Step 0 — Environment and delivery location

- Open `{PLATFORM_1}` and set the delivery address to `{DELIVERY_CITY}`.
- Confirm the session shows **consumer (retail) pricing**, not a trade, contractor, business, or logged-in account view. Record the view confirmed and the method used. See Section 9 for the platform-specific check.
- Refresh the search page and confirm on any product detail page that delivery to that city is displayed, verifying that the setting took effect.
- If the platform does not support setting a delivery location, set `delivery_city_set = false` and state in the log whether prices are nationally uniform.
- Write delivery city, view, method used, and verification result into the run log before proceeding to Step 1.

### Step 1 — Fixing the sampling frame

- Search using `{KEYWORDS}`. Fix the sort to `{SORT_PARAM}`, write it into the URL, and do not change the sort during the run.
- Enter the search in the platform search box first. If the search box is unusable or the result set cannot be fixed in a URL, fall back to on-site category navigation and record the fallback and the category path in the log. ⚠️ Neither route may search on a specific model string.
- **List-price determination (platform level, once).** Observe whether the first ten results display a struck-through price and set `platform_shows_list_price = always / sometimes / never` in the run log.
- **Tax-basis determination (platform level, once).** Observe whether displayed prices include sales tax / VAT and set `platform_price_tax_basis = vat_inclusive / vat_exclusive / mixed`. ⚠️ Where an incl./excl. tax toggle exists, switch to tax-inclusive, record the switching method and the state selected, and verify that the state persists across pagination and refresh. Step 3 may not begin until this is done.
- **Sort rule.** Use the platform default sort (relevance or recommended), because it exists on every GLACE platform and is the only cross-national comparable basis. Fall back to a sales or popularity sort only when the default cannot be fixed in the URL (it changes on refresh), and record the fallback.
- Record `capture_date` (UTC) and the observed total listing count for the category, `category_total_listings`.
- Number consecutively from 1 as `rank`. Sponsored placements are numbered and marked `is_sponsored = true`.
- Save one full-page snapshot of the search results page as frame evidence.

### Step 2 — Checkpoint 0 (blocking human approval; extraction may not proceed without it)

Output the following and wait for the operator's explicit approval:

1. Platform name and channel type (`marketplace` / `vertical_dealer`)
2. Search term and category path
3. The complete URL with the fixed sort and any frame-level filter
4. The first ten product names, prices, and raw efficiency data from that URL
5. Any cell-specific Checkpoint 0 addendum listed in Section 9

**Rationale.** Choosing the wrong primary platform is the only failure mode that is both systematic and invisible to downstream quality control. A human must close it before measurement begins.

**Checkpoint 0b.** When Step 6 escalates to `{PLATFORM_2}`, pause again with the same items and wait for approval. Do not continue automatically.

### Step 3 — Record-by-record extraction

**Classify each item before deciding whether to extract. Apply the table in order and stop at the first match.**

| # | Test | Otherwise | Handling |
|---|---|---|---|
| 1 | Is it a complete air conditioner? | Brackets, covers, WiFi modules, remotes, filters, condensate pumps, line sets, pads, and other accessories; indoor-unit-only or outdoor-unit-only listings unless Section 9 says otherwise | Not in `rank`; increment the accessory counter |
| 2 | Is it this cell's type (`{AC_TYPE}`)? | Any other type (see the product boundary in Section 9) | Not in `rank`; increment the other-type counter |
| 3 | Is it new, and does a new-condition offer exist on the page? | Renewed, refurbished, used, open box, display or ex-demo; or the page carries only a third-party used offer | Not in `rank`; increment the no-new-price counter |
| 4 | Is it outside the excluded categories? | Categories excluded in Section 9 (e.g. VRF/VRV) | Not in `rank`; increment the excluded counter |
| 5 | Is this the first appearance of this model on this platform? | Same `manufacturer_mpn`, or a colour variant of the same brand plus normalized model string | Not in `rank`; increment the duplicate-listing counter and log the first `rank` it points to |
| 6 | All five passed | — | Enter `rank`, increment `rank`, proceed to full extraction |

**Variant boundary for test 5.** Colour variants are duplicates. ⚠️ **Capacity variants, size variants, and configuration variants with a different `manufacturer_mpn` are not duplicates** and each enters `rank` separately. Treating them as duplicates removes both tails of the price distribution. Where one product page carries several selectable variants, each variant is a separate candidate item, taken in the order the page lists them. This is within-platform deduplication; cross-platform deduplication is Step 6.

**Exclusion counting.** Items failing a test get no record row, no `rank`, no detail page visit, and no snapshot. Only the corresponding counter increases, and `scanned_items` separately accumulates every item browsed. `rank` therefore always equals the number of qualifying records.

- Record `frame_position`, the item's ordinal position in the raw search results, as external evidence that collection advanced in order. It may be dropped as a whole column if not needed.
- At the end of the run, report counts and shares for all six classes in the log.
- Open each qualifying product detail page individually. Never extract specification fields from the search results page.
- Scroll to the bottom and expand every collapsed block and specification tab before reading. ⚠️ Specification tables are often collapsed by default; reading before expanding loses capacity and power fields systematically.
- Take each field per Section 5. Where a value cannot be obtained, leave it empty and enter a gap code.
- The Step 4 snapshot is taken in the expanded state.
- Write a checkpoint every 20 to 30 items, counted by `rank`.
- Process no more than 10 items per batch to avoid browser debug-protocol timeouts. After an interruption, resume directly at the detail page via `platform_sku`, not from the search page.

**Used and refurbished offers.** Decide once per item: if a new-condition offer exists, take that price and record `listing_condition = new`; if the price can come only from a used, third-party used, or ex-display offer, the item fails test 3. Never switch to a second-hand platform or a price-comparison site to obtain a price.

**Struck-through prices.** Record the label text verbatim in `price_list_label`. Where no struck-through price appears, leave `price_list` empty with gap code `B`. Never copy `price_current` into it.

**Single prices.** A single displayed price goes into `price_current`; `price_list` is left empty with gap code `B` and `promo_active = false`. On a platform judged `platform_shows_list_price = never`, use gap code `B-struct` instead.

**Price basis.** Set `price_scope = equipment_only`. Shipping, extended warranty, take-back, call-out, and coupon- or code-conditional discounts are excluded. Instalment figures are never a price. Where the page offers with/without installation, switch to without before reading and record the configuration in `notes`.

**Tax-exclusive display.** Where the platform shows tax-exclusive prices and cannot be switched, record the number verbatim, set `price_vat_included = false`, and fill `price_vat_rate`. ⚠️ No conversion during extraction.

**Inseparable bundles.** Where equipment and installation cannot be separated, leave `price_current` empty with gap code `F` and record `price_bundle_incl_vat` and `bundle_scope` (verbatim). ⚠️ The record is always retained; deleting bundle-only listings manufactures non-random missingness.

**Capacity units.** Record `capacity_raw_value`, `capacity_raw_unit`, and `capacity_raw_label` verbatim. Where the specification table also gives a rated value in W or kW, record it in `rated_cooling_capacity_w_retail`. ⚠️ Ton, HP, PK, and 匹 are nominal capacity classes, not power units; never convert 1 HP = 735 W. Apply Section 9.3 and set `capacity_from_nominal_class = true`. Nominal-class capacities may be used for price per kW but never for `rated_eer`.

**Values read from images.** Labels, efficiency classes, rated capacity, and rated power often appear only in gallery images. Read them, set `value_from_image_ocr = true`, and archive the image (Steps 4–5). If unreadable, leave empty with gap code `B` and log "image present but unreadable"; never guess. Cross-check image values against the specification text; on conflict set `qc_flag = image_read_conflict` and retain both.

**Within-page contradiction.** Title, specification table, description, gallery, and label disagree → retain both values, `qc_flag = internal_inconsistency`, tracing priority 1.

**Immediate outlier reporting.** Report to the operator in the dialogue and flag immediately, retaining the record: rated cooling capacity outside `{CAPACITY_RANGE_W}` → `capacity_out_of_range`; `rated_eer` outside 2.0–7.0 W/W → `eer_out_of_range`; price of zero or in the accessory price range → `price_outlier`. After collection ends, run one relative check: prices below one fifth or above five times the cell median → `price_outlier`.

### Step 3b — Installation cost extraction (parallel, separate table)

- Installation cost is part of capital expenditure, but its basis, tax rate, and disclosure differ from the equipment price. It is extracted and output separately and never folded into `price_current`.
- Installation is usually priced by capacity band or number of indoor units, so the table has one row per `country × ac_type × capacity band × service scope`, not one row per record.
- Sources, in priority order; stop at the first hit and record `source_tier = product_page_option / platform_service_listing / dealer_price_list / none`:
  1. **Product page installation option** bound to that model (most precise).
  2. **Platform installation service listing**, by type and capacity band.
  3. **Dealer or installer published price list.**
  4. **No public price** → `install_price_basis = quote_only`. ⚠️ Never estimate, never carry a value over from another country, never fill from experience. Never request a quote.
- Record the service scope verbatim per band (bracket, metres of pipe, core drilling, vacuum and commissioning, old-unit removal, ductwork) and `included_pipe_length_m`. A row with a number but no scope text is invalid.
- ⚠️ Installation tax may differ from the equipment rate. Record `install_vat_rate` verbatim from the source; never assume.
- Every row requires a full-page snapshot, SHA-256, and source URL (Step 4 rules).
- Assignment: match each record's `rated_cooling_capacity_w` to a band and record `install_cost_assigned` and `install_cost_source = direct_listing / band_match / none`. A product-page installation price overrides band matching. No match → empty with gap code.
- ⚠️ `install_cost_assigned` is never added to `price_current`. Both equipment-only and equipment-plus-installation results are reported in the analysis stage.
- Public installation prices are rare and non-random; report coverage by `platform_type` at close-out.

### Step 4 — Snapshot retention (every record)

- Full-page PNG of the price page (scroll capture covering price, model, and specification areas), taken in the expanded state.
- Same-name MHTML as redundant backup. Official label images are saved as separate PNGs.
- **Naming:** `{ISO3}_{AC_TYPE}_{platform}_{rank}_{platform_sku}_{YYYYMMDD}T{HHMMSS}Z.png` (UTC, consistent with `capture_date`).
- Compute SHA-256 and write it into `snapshot_id` and `snapshot_sha256`.
- Snapshots stay on institutional servers; the published dataset carries hashes and derived data only.

### Step 5 — Efficiency evidence captured in place

- Where the gallery contains an official label image, save it as a separate PNG, set `efficiency_source_type = label_image_official`, and read model, class, and values from it. Label images are for internal verification only and are never published.
- Where there is no label image but the specification table carries efficiency values, capture that table area separately with the suffix `_spec`.
- Efficiency values claimed on the retail page go into `efficiency_retail_claimed`, never into `efficiency_native`.
- Retail-layer and authoritative-layer evidence are both retained; Phase B never replaces the retail screenshots or `efficiency_source_url_retail`.
- Rated cooling capacity and rated power input are mandatory and stored as two separate fields. Never store only their quotient, and never back-calculate from a seasonal metric. Phase A values go into `_retail` fields.
- Where a label image or listing shows a registry certificate or reference number, record it in `registry_record_id` now and note it in `notes`; it turns a Phase B fuzzy match into an exact one.

### Step 6 — Deduplication and platform ladder

- Deduplicate on `manufacturer_mpn`; where absent, on brand plus normalized model string with `mpn_missing = true`.
- This is cross-platform deduplication; within-platform duplicates were handled by test 5.
- A model on several platforms keeps the record from the higher-ladder platform; deletions are logged.
- If fewer than `{N_MIN}` valid models remain, activate `{PLATFORM_2}` after Checkpoint 0b. The brand set accumulates across platforms.
- The ladder has exactly two rungs. If both are exhausted below `{N_MIN}`, stop, record `frame_exhausted`, and report to the operator. Never look for a third platform.

### Step 7 — Stopping rules

`rank` counts qualifying records only, so the 30–60 window is judged on `rank`. `scanned_items` counts every item browsed.

| Condition | Determination and `stop_reason` |
|---|---|
| Floor | Below 30 after deduplication: do not stop for any reason except the conditions below |
| Saturation | 10 consecutive records add no new brand: `brand_saturation` |
| Cap | Stop at 60. Saturated: `cap_reached`; otherwise `cap_not_saturated` |
| Frame exhausted | Both rungs exhausted below 30: `frame_exhausted`; report counts per platform |
| Dilution warning | At `scanned_items = 60` with `rank` share below 50%: warn and report, do not stop |
| Scan cap | At `scanned_items = 120` and `rank` below 30: `scan_cap_reached`; stop and report for the operator to reset the search conditions |

### Step 7b — Efficiency supplement layer (off when `{EFF_SUPPLEMENT} = false`)

- Skipped in this run. It may only be proposed after Phase B, and efficiency values may never decide whether Phase A continues collecting.
- **Threshold-value probe (always runs).** Where more than half the records in the cell have `efficiency_retail_claimed` within ±1% of each other, set `qc_flag = threshold_value_suspected` on all of them. The retail efficiency layer is then unusable and the cell relies wholly on Phase B values.

### Step 8 — Phase A close-out and Checkpoint 1 (blocking; Phase B may not begin without it)

Produce the three Phase A files of Section 7, then report the following thirteen items plus any Section 9 addendum, and wait for explicit operator confirmation:

1. Actual N, `rank` range, `stop_reason`
2. Six classification counts and shares, `scanned_items`, dilution rate
3. Brand set and record count per brand
4. Gap distribution of retail efficiency fields by gap code
5. Tracing worklist in two priorities. **Priority 1**: records with empty retail rated capacity or rated power input (no fallback value; failure is a permanent gap; a registry miss must still be followed by the manufacturer site). **Priority 2**: records with retail values (tracing upgrades the source tier and creates the deviation columns)
6. Model recovery: count and rate of `mpn_missing` records recovered, by recovery source
7. Phase B source list and reachability pre-check (Step 9)
8. Phase A resource use (elapsed time and tokens)
9. `threshold_value_suspected` result with the distribution of `efficiency_retail_claimed`
10. `capacity_raw_unit` distribution and share of nominal-class records
11. Outlier, within-page contradiction, and unreadable-image lists by `qc_flag`
12. Price-basis composition: `price_scope`, `price_vat_included`, count and share of gap code `F`
13. Installation table: row count, source tiers, coverage by `platform_type`, `install_cost_source` distribution

The operator confirms whether the tracing worklist is complete, whether re-sampling is needed, and which sources are approved.

---

## Phase B — Efficiency and capacity tracing

Phase B replaces retail claims with authoritative values. Retail values are retained as the comparison group.

### Step 9 — Source list and reachability pre-check

Open each source's homepage and run one search; write the results into the Checkpoint 1 report.

| Tier | Source | Note |
|---|---|---|
| T1a | Official efficiency registry | `{REGISTRY_T1A}` — see Section 9 |
| T1b | Manufacturer specification sheets and manufacturer-operated stores | Model pages, manufacturer-hosted PDFs, brand stores and official flagship stores whose operator is the manufacturer or its wholly owned sales entity. Judged by operating entity, not domain. Dealer, agent, distributor, and third-party transcriptions do not qualify |
| T1c | Official label image from the retail gallery | Saved in Phase A; quasi-first tier |
| T1d | Third-party specification aggregators | Off: `{AGGREGATOR_TIER} = false`. Never enable autonomously |
| T2 | Retail-page claim | `efficiency_retail_claimed`, used only when every tier above fails |

- Sources blocked to this country's network egress → gap code `C-geo`; report, never circumvent.
- Registries follow the same 3-second rule; never bulk-traverse a registry to raise hit rates.

### Step 10 — Registry matching (T1a)

Match on `manufacturer_mpn`. Only where `mpn_missing = true`, first run model recovery in the order product title → specification-table model row → label image, recording `mpn_recovered_from`. On conflict the label image governs.

**`platform_sku` is not a model string.** Platform-assigned identifiers are absent from registries and are never used for matching or deduplication.

| Order | Method | `registry_match_type` |
|---|---|---|
| 0 | Model recovery (`mpn_missing` only) | record `mpn_recovered_from`; recovered records return to order 1 |
| 1 | Exact `manufacturer_mpn`, or direct lookup of a recovered registry reference number | `exact_mpn` |
| 2 | Wildcard match stripping colour, region, and packaging suffixes | `wildcard_mpn` |
| 3 | Brand plus model fragment plus capacity class | `brand_model` |
| 4 | No hit | `none`; gap code `B`; go to Step 11 |

- Multiple candidates whose efficiency differs by more than 5% → `match_ambiguous = true`, `registry_match_type = none`, operator decision. Within 5% → one may be taken, still `match_ambiguous = true` with all candidates listed.
- Every `brand_model` hit carries `match_ambiguous = true` and `match_candidate_count`.
- ⚠️ **Indoor/outdoor pairing.** Split and ducted systems are rated as a combination of an indoor and an outdoor unit, and one outdoor unit may appear in several rated combinations. Match to the combination that corresponds to the retail listing's paired units. Where the listing does not identify both units, set `match_ambiguous = true`, record the candidate count, and never pick the highest-efficiency combination.
- Wildcard suffix rules go into the log for human review, never invented per record.
- Records with no recoverable model are never deleted; they skew toward local and white-label brands.
- ⚠️ Multi-model source pages: locate the exact row or column, set `auth_page_multi_model = true`; the snapshot must show the model row and the value column together.

### Step 11 — Manufacturer specification sheets (T1b)

- Registry misses go to the manufacturer site for rated cooling capacity, rated power input, and the native efficiency metric. Priority 1 records go there even after a registry hit if capacity or power input is still empty.
- Also extract the manufacturer suggested retail price into `price_msrp_manufacturer` and `price_msrp_source_url`; gap code `B` if unpublished. Not used in the main analysis.
- If every tier fails, keep the record, leave fields empty with gap code `B`, leave `rated_eer` empty; never back-calculate from a seasonal metric or a nominal class.
- Several market versions of one model → take the domestic version; if undecidable, `match_ambiguous = true` with all candidates. Section 9 may refine this rule.

### Step 12 — Authoritative-source evidence

- Full-page PNG of every successful source page; original PDF for specification sheets. Multi-model pages must show the model row and value column together.
- Evidence only for hits; misses are logged (sources and search methods) without snapshots.
- **Naming:** `{ISO3}_{AC_TYPE}_auth_{registry or manufacturer}_{manufacturer_mpn}_{YYYYMMDD}T{HHMMSS}Z.png`; SHA-256 into `snapshot_auth_id` and `snapshot_auth_sha256`.
- `efficiency_source_url` must point to the authoritative page, not the retail page.

---

## Phase C — Final adjudication

### Step 13 — Field adjudication and deviation flags

Adjudication is per field: capacity and power input may come from different tiers, provided each is labelled truthfully in `capacity_source` and `power_source`.

| Priority | Source | `capacity_source` / `efficiency_source_tier` |
|---|---|---|
| 1 | Registry | `registry` / `t1_registry` |
| 2 | Manufacturer specification sheet or manufacturer-operated store | `manufacturer_spec` or `manufacturer_store` / `t1_manufacturer_spec` |
| 3 | Official label image | `label_image` / `t1c_label_image` |
| 4 | Verified aggregator (not enabled in this run) | `aggregator_verified` / `t1d_aggregator` |
| 5 | Retail page | `retail_page` / `t2_retail_claim` |

- Fall back one tier only when the higher tier has no data; record every fallback; never delete.
- Recompute `rated_eer` = final capacity (W) ÷ final power input (W), two decimals.
- Where retail and authoritative values coexist, compute `capacity_deviation_pct` and `eer_deviation_pct` with the authoritative value as denominator, two decimals. |deviation| > 10% → `qc_flag = large_deviation`, both values kept, operator review.
- The deviation distribution is evidence for the Technical Validation section; never trim it.

### Step 14 — Phase B outputs

Produce the Phase B files of Section 7 and report hit rates by tier (T1a, T1b, T1c, T1d = n/a, T2), by brand tier (international / regional / domestic), the `rated_power_input_w` fill rate by source tier, and the count of records above the deviation threshold.

---

## 5. Field list

Column order is the output column order. "Required" means mandatory; "if present" means mandatory where the page provides it, otherwise empty with a gap code.

### 5.1 Identification and sampling

| Field | Value and format | Source | Required |
|---|---|---|---|
| `country` | ISO 3166 alpha-3 | Parameter | Required |
| `platform` | Platform name | Parameter | Required |
| `platform_type` | `marketplace` / `vertical_dealer` | Parameter | Required |
| `delivery_city` | City name | Step 0 | Required |
| `rank` | Integer, consecutive from 1 | Search page | Required |
| `is_sponsored` | `true` / `false` | Search page | Required |
| `brand` | Brand name | Detail page | Required |
| `manufacturer_mpn` | Manufacturer model code, case and hyphens verbatim. For split and ducted sets record indoor and outdoor codes separated by ` + ` | Specification table | Required |
| `mpn_missing` | `true` / `false` | Determination | Required |
| `platform_sku` | Platform product or variant identifier | URL or page | Required |
| `ac_type` | `split` / `window` / `central` / `portable` | Parameter | Required |
| `listing_condition` | Fixed at `new` | Detail page | Required |
| `frame_position` | Ordinal position in the raw results | Search page | Recommended |
| `capture_date` | YYYY-MM-DD (UTC) | System | Required |
| `snapshot_id` | Snapshot filename | Step 4 | Required |
| `snapshot_sha256` | 64 hex characters | Step 4 | Required |
| `sampling_mode` | `rank_frame` / `efficiency_supplement` / `census` | Determination | Required |
| `capture_season_phase` | `pre_season` / `peak` / `post_season` | Parameter | Required |
| Cell-specific fields | See Section 9 | | |

### 5.2 Price

| Field | Value and format | Source | Required |
|---|---|---|---|
| `price_list` | Struck-through or original price, plain number | Detail page | Required; else gap code `B`, `promo_active = false` |
| `price_current` | Current selling price, plain number, equipment only | Detail page | Required |
| `currency` | ISO 4217 | Parameter | Required |
| `price_source_url` | Full product detail URL | URL | Required |
| `price_list_label` | Struck-through price label verbatim | Detail page | If present |
| `price_flag` | Empty / `unresolved` (price ratio above 0.3) | Determination | Conditional |
| `promo_active` | `true` / `false` / `unknown` | Determination | Required |
| `platform_shows_list_price` | `always` / `sometimes` / `never` | Step 1 | Required |
| `price_msrp_manufacturer` | Manufacturer suggested retail price | Step 11 | Must be sought |
| `price_msrp_source_url` | Source URL of the MSRP | Step 11 | Conditional |
| `price_scope` | `equipment_only` / `equipment_plus_installation` / `equipment_plus_delivery` | Determination | Required |
| `price_vat_included` | `true` / `false`, displayed state verbatim | Detail page | Required |
| `price_vat_rate` | Tax rate applying to that price, % | Detail page or Section 9 | Required |
| `price_bundle_incl_vat` | Inseparable bundle total | Detail page | Conditional |
| `bundle_scope` | Bundle contents verbatim | Detail page | Conditional |
| `install_cost_assigned` | Matched installation cost; never folded into `price_current` | Step 3b | Conditional |
| `install_cost_source` | `direct_listing` / `band_match` / `none` | Step 3b | Required |
| `install_cost_band_id` | Matched installation table row | Step 3b | Conditional |

### 5.3 Efficiency — Phase A retail layer

| Field | Value and format | Source | Required |
|---|---|---|---|
| `capacity_raw_value` | Verbatim number | Retail page or image | Required |
| `capacity_raw_unit` | `kW` / `W` / `BTU_h` / `ton` | Retail page or image | Required |
| `capacity_raw_label` | Verbatim string | Retail page or image | Required |
| `capacity_from_nominal_class` | `true` / `false` (Section 9.3) | Determination | Required |
| `value_from_image_ocr` | `true` / `false` | Determination | Required |
| `rated_cooling_capacity_w_retail` | Number, W | Retail spec table; else converted in processing | Required |
| `rated_power_input_w_retail` | Number, W | Retail spec table | Required |
| `rated_eer_retail` | Quotient, two decimals; not computed for nominal-class records | Computed | Required |
| `efficiency_retail_claimed` | Efficiency value claimed on the page | Detail page | If present |
| `efficiency_metric_claimed` | Metric name exactly as shown | Detail page | If present |
| `label_grade_reported` | Class or tier verbatim | Detail page or label | If present |
| `efficiency_source_url_retail` | URL of the retail page carrying the value | Detail page | Required |

**Column name compatibility.** If existing data use unsuffixed names (`rated_cooling_capacity_w`, `rated_power_input_w`, `rated_eer`, `capacity_source`), do not rename retroactively: Phase B adds `_auth` columns, Phase C writes adjudicated values to the unsuffixed columns and keeps retail originals in `_retail` columns.

### 5.4 Efficiency — Phase B tracing layer

| Field | Value and format | Required |
|---|---|---|
| `efficiency_source_tier` | `t1_registry` / `t1_manufacturer_spec` / `t1c_label_image` / `t1d_aggregator` / `t2_retail_claim` / `none` | Required |
| `registry_name` | Registry name | Conditional |
| `registry_record_id` | Registry record or reference number | Conditional |
| `mpn_recovered_from` | `title` / `spec_table` / `label_image` / `none` | Conditional |
| `registry_match_type` | `exact_mpn` / `wildcard_mpn` / `brand_model` / `none` | Required |
| `match_candidate_count` | Candidate or combination count | Conditional |
| `tracing_priority` | 1 / 2 | Required |
| `match_ambiguous` | `true` / `false` | Required |
| `efficiency_native` | Native efficiency value from the authoritative source | Conditional |
| `efficiency_metric` | Native metric name and unit exactly as published | Conditional |
| `rated_cooling_capacity_w_auth` | Number, W | Conditional |
| `rated_power_input_w_auth` | Number, W | Conditional |
| `efficiency_source_url` | Authoritative page URL | Required |
| `snapshot_auth_id` / `snapshot_auth_sha256` | Filename / 64 hex | Conditional |
| `auth_page_multi_model` | `true` / `false` | Required |
| `spec_sheet_market` | Market or region the specification sheet is issued for, verbatim | Conditional (T1b hits) |

### 5.5 Efficiency — Phase C adjudicated layer

| Field | Value and format | Required |
|---|---|---|
| `rated_cooling_capacity_w` | Final value per Step 13 | Required |
| `rated_power_input_w` | Final value per Step 13 | Required |
| `capacity_source` | `registry` / `manufacturer_spec` / `manufacturer_store` / `label_image` / `aggregator_verified` / `retail_page` | Required |
| `power_source` | Same value set plus `none`; labelled separately from `capacity_source` | Required |
| `rated_eer` | Final capacity ÷ final power input, W/W, two decimals | Required |
| `capacity_deviation_pct` | (retail − authoritative) ÷ authoritative × 100 | Conditional |
| `eer_deviation_pct` | Same basis | Conditional |
| `qc_flag` | Empty / `eer_out_of_range` / `large_deviation` / `unresolved_match` / `threshold_value_suspected` / `internal_inconsistency` / `image_read_conflict` / `price_outlier` / `capacity_out_of_range` / `aggregator_conflict`, plus any Section 9 flag; semicolon separated | Required |

`rated_eer` and the two deviation columns are the only computed columns. Missing input → empty with gap code `B`. ⚠️ **Seasonal metrics never generate `rated_eer`.** Outside 2.0–7.0 → keep the value, flag `eer_out_of_range`, refer to the operator.

### 5.6 Extension fields (record if present)

| Field | Values | Note |
|---|---|---|
| `refrigerant` | R22 / R410A / R32 / R290 / R454B | Verify against the specification sheet |
| `compressor_type` | `fixed` / `inverter` | Never an efficiency proxy |
| `heating_capable` | `true` / `false` / `unknown` | From a rated heating value on the specification sheet, never from the title |
| `noise_level_db` | Number | |
| `smart_features` | `true` / `false` | |

---

## 6. Gap codes

Any empty field carries a gap code. Retain the record, flag it, never delete, never impute.

| Code | Type | Determination |
|---|---|---|
| `A` | Category absent | The type is genuinely not sold in this market |
| `B` | Disclosure absent | Sold, but the page or source did not disclose the field |
| `C` | Platform blocked | Anti-bot, login, page error, or other technical cause |
| `C-geo` | Geographic block | Public source blocked to foreign egress; never circumvented |
| `D` | Class absent | That efficiency class has no product in this market |
| `B` (tracing layer) | Not carried by an authoritative source | Registry, manufacturer site, and manufacturer store lack the model or field; used when falling back to the retail value |
| `X` | Non-AC accessory | Retained and flagged, excluded from statistics |
| `B-struct` | Field structurally absent | The platform or registry never carries the field |
| `E` | Disclosed value untrustworthy | A number judged wrong and not accepted; original kept in the log |
| `F` | Bundle price only | Equipment and installation inseparable; `price_bundle_incl_vat` and `bundle_scope` recorded instead |

---

## 7. Output files

| File | Contents |
|---|---|
| `{RUN_ID}_records.xlsx` | Record-level data, column order of Section 5 |
| `{RUN_ID}_run_log.md` | **Run record**: platform, full URL, sort and filter parameters and any fallback, delivery city and view confirmation, start and end times, `rank` range, N, six-class counts, `scanned_items`, dilution rate, `stop_reason`, `category_total_listings`, brand set evolution, deduplication deletions, `platform_shows_list_price`, tax-basis determination, capacity unit distribution, outlier, contradiction, and unreadable-image lists, threshold probe result. **Resource subsection** (7.1). **Tracing subsection**: reachability pre-check, model recovery, sources and search methods, wildcard rules, tier hit rates overall and by brand tier, unresolved multi-candidate list, deviation list, MSRP extraction rate. **Defects subsection** (Section 10). Plus any Section 9 log addendum |
| `snapshots/` | Retail PNG and MHTML, label and spec PNGs, authoritative PNGs and PDFs, `sha256` manifest |
| `{RUN_ID}_installation_costs.xlsx` | One row per `country × ac_type × capacity band × service scope`. Columns: `install_id`, `country`, `ac_type`, `capacity_band_min_w`, `capacity_band_max_w`, `indoor_units_count`, `install_price_incl_vat`, `install_currency`, `install_vat_rate`, `install_price_basis`, `install_scope_text`, `included_pipe_length_m`, `source_tier`, `source_url`, `snapshot_id`, `snapshot_sha256`, `capture_date`, `linked_ranks`, `notes` |

### 7.1 Resource consumption record

Append a row on completing each step; never reconstruct from memory at the end.

| Step | Start–end (UTC) | Elapsed | Input tokens | Output tokens | Items processed |
|---|---|---|---|---|---|
| Step 0 | | | | | |
| Step 1 | | | | | |
| Step 2 | | | | | |
| Step 3 | | | | | |
| Steps 4–6 | | | | | |
| Steps 9–12 | | | | | |
| Steps 13–14 | | | | | |
| Total | | | | | |

- Use measured token counts from the session usage report; where unavailable, enter an estimate marked `estimated`. Never leave blank.
- Also record mean elapsed time and tokens per record. An interrupted and re-run Step 3 takes its own row.

---

## 8. Pre-submission checklist

1. Delivery location set to `{DELIVERY_CITY}` and verified; consumer (retail) pricing view confirmed.
2. Checkpoint 0 received explicit human approval.
3. `rank` is consecutive with no gaps; sponsored placements were not removed.
4. Every record has a full-page PNG with a UTC timestamp in the filename and a stored SHA-256.
5. Label images saved separately where present; otherwise a specification-table screenshot.
6. `rated_eer` computed per record; values outside 2.0–7.0 carry a `qc_flag`.
7. No computation other than `rated_eer` and the deviation columns; no class judged; no estimates.
8. Every empty field carries a gap code.
9. Every browsed item completed the six-step classification; exclusions counted in the six counters.
10. Every stored record has `listing_condition = new`.
11. Struck-through prices have `price_list_label`; others carry gap code `B` or `B-struct`.
12. `scanned_items` and the dilution rate are in the log.
13. The resource table was filled step by step.
14. Cross-platform deduplication done; duplicates kept the higher-ladder record.
15. Checkpoint 1 received explicit human confirmation before Phase B.
16. Every traced record has an authoritative snapshot and SHA-256; `efficiency_source_url` points to the authoritative page.
17. `efficiency_source_tier`, `capacity_source`, and `power_source` filled per record; fallbacks labelled truthfully.
18. `rated_eer` recomputed from final values; deviation columns computed; `large_deviation` set where due.
19. Hit rates reported by brand tier.
20. Every priority 1 record completed both the registry and the manufacturer-site rounds.
21. Model recovery done before matching; `mpn_recovered_from` filled where applicable.
22. `stop_reason` recorded; N between 30 and 60 or the exception explained.
23. No seller names, shop entities, or buyer reviews in the output.
24. Tax-basis determination done before Step 2; any toggle switched to tax-inclusive and verified to persist.
25. `price_scope`, `price_vat_included`, and `price_vat_rate` filled per record.
26. With/without-installation pages read in the without configuration, recorded in `notes`.
27. Bundle-only records carry gap code `F` with `price_bundle_incl_vat` and `bundle_scope`, and were not removed.
28. Installation table filled by band and scope with verbatim scope text, tier, URL, and hash; no-price rows are `quote_only`.
29. `install_vat_rate` recorded separately and verbatim.
30. `install_cost_assigned` was never folded into `price_current`.
31. Installation coverage reported by `platform_type`.
32. T1b admissibility judged by operating entity; dealer, distributor, and third-party transcriptions rejected.
33. No T1d values used (`{AGGREGATOR_TIER} = false`).
34. Capacity recorded verbatim as value, unit, and label, unconverted.
35. Nominal-class records flagged and excluded from `rated_eer`.
36. Image-read values flagged with `value_from_image_ocr` and archived; unreadable ones carry gap code `B`.
37. Collapsed blocks expanded before reading; snapshots in the expanded state.
38. Within-platform duplicates handled by test 5; capacity and configuration variants not treated as duplicates.
39. Within-page contradictions flagged and escalated to priority 1.
40. Outliers reported immediately; no record deleted.
41. Retail-layer evidence and fields retained alongside the authoritative layer.
42. `price_list` and `price_current` both collected where available; `promo_active` and `platform_shows_list_price` filled.
43. `price_msrp_manufacturer` sought per record in Phase B.
44. Indoor/outdoor pairing respected in registry matching; no highest-efficiency combination picked by default.
45. Seasonal metrics never generated `rated_eer`.

Cell-specific checklist items continue in Section 9.

---

## 9. South Africa × central rules (override the body wherever they conflict)

### 9.1 Product boundary and page structure

| Topic | Rule |
|---|---|
| Included | Ducted whole-house sets: outdoor condensing unit + indoor ducted unit (ducted inverter, hideaway, concealed ducted, ducted fan-coil), one price for the set. Ducted split is the South African form of central and is included. Record `ducted_configuration` |
| Excluded, other type (test 2) | Wall-mounted split, cassette, under-ceiling, ceiling-and-floor, floor-standing, portable, window |
| Excluded, component (test 1) | Condenser-only, indoor-unit-only, coil-only, ductwork and grilles sold alone |
| Excluded category (test 4) | Multi-split, VRF/VRV, rooftop packaged units marketed for commercial use only. A packaged ducted unit sold for residential use is included with `ducted_configuration = packaged_unit` |
| Multi-variant product pages | Dealer pages often carry one product page with several selectable variants (capacity, phase), each with its own SKU, MPN, and price. Each variant is a separate candidate item in the order the page lists it. Take the variant's own SKU, MPN, and price (from the variant selector or the page's structured product data); never assign one variant's price to another |
| Phase variants | Single-phase and three-phase versions of the same capacity usually have different outdoor-unit codes and different rated power input. They are **separate products**, not duplicates, and each takes its own `rank`. Record `power_supply_phase` |
| Quote-only listings | Ducted systems are frequently listed without a price ("request a quote", "price on request"). Count them (`quote_only` counter) but do not rank them. Never request a quote and never use a quoted price |
| Consumer view (Step 0) | Confirm no trade, installer, or account pricing is active |

### 9.2 Scope gate (mandatory; part of Checkpoint 0)

For the first 60 scanned items on `{PLATFORM_1}`, report: priced ducted sets; ducted listings that are quote-only; commercial split, cassette, and VRF items; and component-only listings. Then, after both rungs if needed:

| Outcome | Condition | Action |
|---|---|---|
| (a) | ≥ 30 priced ducted sets across both platforms | Proceed normally |
| (b) | 10–29 | Complete the run, record `sample_status = below_floor`, report. The cell enters GLACE only with a sensitivity note |
| (c) | < 10 | Stop with `stop_reason = frame_exhausted`, record `scope_status = out_of_scope_with_evidence`, save the frame snapshot and counts, report |

Outcome (c) is a valid, publishable result and replaces the v3.4 out-of-scope ruling with documented evidence. The scope-gate report is included in the Checkpoint 1 report whatever the outcome. The gate is decided on counts only, never on price or efficiency values.

### 9.3 Efficiency tracing sources

- **T1a is structurally empty.** South Africa has no mandatory AC efficiency registry and no public MEPS database for ACs. Record `registry_match_type = none` with gap code `B-struct` at the tier level in the log, not per record. Phase B runs on T1b (and T1c where a label image exists).
- **Brands.** Verify on the pages; do not assume. Brands seen in ducted listings include Samsung, Midea, Alliance, and Hisense; others possible include LG, Daikin, Mitsubishi Electric, Carrier, Jet-Air.
- **T1b admissibility.** Judge by operating entity. A South African distributor's site qualifies only if the distributor owns the brand or is the manufacturer's wholly owned sales entity; record the basis for that judgement in the log. Otherwise its PDFs are transcriptions and not T1b.
- ⚠️ **Non-South-African specification sheets.** South African manufacturer sites rarely publish numeric ducted specifications, so the matching sheet is often issued for another market (EU, Australia, Middle East). This rule refines Step 11:
  - Accept a non-South-African sheet only where the **full indoor and outdoor model codes match character for character**, including phase-specific outdoor codes. Record `spec_sheet_market`.
  - Region suffixes in model codes are not evidence of market; a suffix that looks like a country code may denote a different market. Record the suffix verbatim; do not interpret it.
  - Where suffixes differ, set `match_ambiguous = true` and list all candidates.
  - Record the test conditions printed on the sheet (e.g. EN 14511, ISO 5151 T1) in `notes`.
- ⚠️ **Dealer MPN fields can be wrong.** Where the dealer's MPN resolves on the manufacturer sheet to a different product type (e.g. a ceiling-and-floor code on a ducted listing) or the sheet does not list that capacity, do not use the sheet's values. Keep the price, set `qc_flag = internal_inconsistency;mpn_type_conflict`, leave efficiency, capacity, and power fields empty with gap code `E`, and log both strings. Where two listings share one MPN but show different capacities, flag both the same way.
- **Metrics.** Record the metric name exactly (EER, COP, AEER, ACOP, SEER, SCOP). Annualised (AEER/ACOP) and seasonal (SEER/SCOP) metrics never generate `rated_eer`. Where the sheet gives rated capacity and rated power input but no EER, `rated_eer` is computed under Step 13 as usual.

### 9.4 Capacity unit conversion (applied in processing, never during extraction)

| Raw unit | Conversion to W | Type |
|---|---|---|
| kW / W | × 1,000 / × 1 | Determinate |
| BTU/h, rated value from a specification table | × 0.29307 | Determinate |
| BTU/h, round figure from the title or variant name only (12,000 / 24,000 / 48,000…) | × 0.29307, set `capacity_from_nominal_class = true` | Nominal class |

⚠️ Retail BTU figures on ducted listings are marketing size classes and can differ materially from rated capacity (an exploratory pass found a "48,000 BTU" set rated at 13.4 kW ≈ 45,700 Btu/h). The rated value from the specification sheet governs under Step 13; the retail figure is kept in `capacity_raw_*` and the deviation is reported, never trimmed. Where a capacity range is given, take the rated (standard condition) value and record the full string.

### 9.5 Price, tax, installation, and season

| Topic | Rule |
|---|---|
| VAT | 15%, normally included in displayed retail prices. Dealer sites may show excl. VAT: apply the platform-level tax-basis determination and switch to incl. VAT where possible; otherwise `price_vat_included = false`, `price_vat_rate = 15` |
| Supply-and-install prices | A published "supply and install" price for an inseparable set is gap code `F` (bundle), never `price_current` |
| Installation | Ducted installation is quote-based; expect `install_price_basis = quote_only` for most bands. Record ductwork, grilles, and plenum scope verbatim where a published price exists |
| Load-shedding / inverter marketing | "Inverter" and "low amperage" claims reflect grid-outage concerns; `compressor_type` is recorded but is never an efficiency proxy |
| Season | Sep–Oct = `pre_season`; Nov–Feb = `peak`; Mar–Aug = `post_season`. Avoid Black Friday (late November) for the capture window and log any promotion observed |

### 9.6 Supplementary notes for this run

| # | Content |
|---|---|
| 1 | |
| 2 | |
| 3 | |

### 9.7 Cell-specific fields

| Field | Values | Required |
|---|---|---|
| `ducted_configuration` | `ducted_split` / `packaged_unit` / `other` | Required |
| `power_supply_phase` | `single` / `three` / `unknown` | Required |
| `sample_status` | `normal` / `below_floor` | Required (cell level, repeated per record) |
| `scope_status` | `in_scope` / `out_of_scope_with_evidence` | Required (cell level, repeated per record) |

Additional `qc_flag` value: `mpn_type_conflict`.

### 9.8 Checkpoint addenda

- **Checkpoint 0:** the full scope-gate report of 9.2; state how variant SKU, MPN, and price are read on the primary platform.
- **Checkpoint 1:** scope-gate outcome; `ducted_configuration` and `power_supply_phase` distributions; count of `mpn_type_conflict` records; `spec_sheet_market` distribution of T1b hits; the T1b admissibility basis for each distributor site used.

### 9.9 Additional checklist items

46. Every record is a complete ducted set with one price; components, wall split, cassette, ceiling-and-floor, multi-split, and VRF were counted and excluded.
47. `ducted_configuration` and `power_supply_phase` are filled for every record.
48. Each variant on a multi-variant page carries its own SKU, MPN, and price; phase variants were not treated as duplicates.
49. The scope-gate report is included in the Checkpoint 1 report, whatever the outcome.
50. No quote was requested and no quoted price was used.
51. Every non-South-African spec sheet used has a character-exact indoor and outdoor model match and `spec_sheet_market` recorded.
52. No values were taken from a manufacturer sheet whose model type or capacity conflicts with the dealer listing.

---

## 10. Defect reporting

Write to `prompt_defects.md` rather than resolving autonomously: page structures this prompt does not cover, systematic field-absence patterns, suspected platform rule changes, and any case where following this prompt literally would produce an evidently wrong record. Include `{RUN_ID}`, `rank`, and URL.
