# GLACE South Africa — Run Log

**RUN_ID:** ZAF_central_20261012
**Cell:** ZAF × central · **Protocol:** GLACE Data Extraction Prompt v3.6-EN-ZAF (2026-10-12), copy of record in `protocol/`
**Operator instruction of record:** the human operator (dr.dr.boboorange@gmail.com) instructed on 2026-10-12: "基于prompt进行数据摘录" (perform the data extraction according to the prompt). No checkpoint pre-authorisation was given; Checkpoint 0 and Checkpoint 1 remain blocking human gates (prompt §0, §2).
**Capture season phase:** `pre_season` (October, southern hemisphere, §9.5).

---

## 1. Run record

| Item | Value |
|---|---|
| Run start (UTC) | 2026-10-12T20:34:22Z (first gate probe request) |
| Run end (UTC) | 2026-10-12T20:37:30Z (gate verdict; halt before §0.1 platform validation / Step 0) |
| Platform attempted | PLATFORM_1 candidate AC Direct, acdirect.co.za, `vertical_dealer` (unvalidated); PLATFORM_2 candidates Builders, builders.co.za and Takealot, takealot.com, `marketplace` (unvalidated) |
| §0.1 platform validation (a)–(d) | **Not performable.** No candidate page ever rendered; items (a) sells priced ducted sets, (b) prices visible to non-logged-in visitor, (c) stable ducted category or search URL could not be observed; (d) reachability = **no**, for a reason outside the platform (see halt narrative). No row could be validated for `platform_evidence_result_v4.xlsx`; the evidence row proposed for the operator is in `evidence/platform_evidence_row_ZAF_central_20261012.csv` |
| Full URL / sort parameter | **Not obtained.** No search or category page rendered; `{SORT_PARAM}` was never observed and may not be assumed (Step 1) |
| Delivery city | **Not set.** `delivery_city_set = false`; no product page ever rendered. Consumer-view confirmation (Step 0, §9.1) not performable |
| List-price / tax-basis determination (Step 1) | Not performable (`platform_shows_list_price`, `platform_price_tax_basis` undetermined) |
| Rank range | none — rank reached 0 |
| Actual N | 0 |
| Classification counters | accessory/component 0 · other-type 0 · no-new-price 0 · excluded 0 · duplicate 0 · qualified 0 · quote_only 0 |
| `scanned_items` / dilution | 0 / not computable |
| `category_total_listings` | Not measured (frame never opened) |
| stop_reason | **`platform_blocked`** (hard-constraint interruption, §3 item 6; run-level gap code **C-geo**, §6: public source blocked to this runner's egress, never circumvented). Coined run-level value carried from the NGA runs, still not in the Step 7 table — see defects |
| Scope gate (§9.2) | **Not run.** The gate is decided on counts of scanned items; zero items were observable. `scope_status` is therefore **undetermined**, explicitly **not** `out_of_scope_with_evidence` (that outcome requires 60 scanned items and the frame snapshot) and `sample_status` undetermined |
| Brand set evolution | none |
| Cross-platform dedup removals | none |
| Installation table (Step 3b) | 0 rows; no source tier reachable; nothing recorded as `quote_only` because no listing was observed |
| Promotion observed | none observable; capture date 2026-10-12 is outside the late-November Black Friday exclusion (§9.5) |

### Halt narrative (§0.1 / Step 0 environment gate)

1. **20:34:22–20:34:38 UTC** — Exploratory curl of PLATFORM_1 and PLATFORM_2 home pages and `robots.txt` with a browser User-Agent, ≥3 s spacing: every request failed with `CONNECT tunnel failed, response 403`. The 403 is returned by the session's egress proxy gateway to the CONNECT request; no TLS handshake with any target host ever occurred.
2. **20:34:52–20:35:19 UTC** — Control probe: `example.com` and `google.com`, plus the South African manufacturer hosts of the §9.3 brand list, all failed identically. A control host failing proves the cause is the environment's organisation network policy, not a platform-side block.
3. **20:35:57–20:36:53 UTC** — Formal logged gate probe of 17 URLs (`evidence/network_probe_20261012.log`): 17/17 refused at CONNECT with 403. The agent-proxy's own failure log (Phase 3 of the evidence file) records each as `connect_rejected … policy denial or upstream failure`.
4. **20:37:20–20:37:27 UTC** — Real-browser probe (Playwright/Chromium, fresh context per target, ≥3.2 s spacing) of acdirect.co.za, builders.co.za and example.com: all `net::ERR_TUNNEL_CONNECTION_FAILED` (Phase 2 of the evidence file). The alternative WebFetch tool path refused DNS resolution for acdirect.co.za (`ENOTFOUND`).
5. **Decision.** §0.1: "If no vertical dealer with visible ducted prices can be validated, report that to the operator and do not start the run." §3 item 6: "If any constraint cannot be met, stop immediately, log the reason and the rank reached, and do not improvise a workaround." Compliance (§3 item 1) cannot be affirmed either, because no `robots.txt` was retrievable. The run halted **before Step 0, at rank 0**, `stop_reason = platform_blocked`. No extraction, no record, no frame snapshot, no quote requested, no CAPTCHA or policy circumvention attempted.
6. **Not done, by design:** (i) substituting any other source or a cached/third-party copy of platform pages — all would be transcriptions outside the frame and outside T1b; (ii) estimating, carrying over, or "filling from experience" any price, capacity, efficiency, or installation value (§2, Step 3b); (iii) self-approving Checkpoint 0 (§2: "Never self-approve"). Checkpoint 0 is reported as **not approvable** in `checkpoints/checkpoint0_report_20261012.md`.
7. **Second, independent precondition failure (recorded for completeness):** the prompt's execution build is "Claude Code × Claude in Chrome". This session exposes no Claude-in-Chrome tools, so even with open egress the mandated browsing tool was absent; the previous Nigeria runs substituted Playwright/Chromium for the gate probe only, and that substitution is likewise noted in `prompt_defects.md` rather than ratified here.

### Checkpoint 0

Reported in `checkpoints/checkpoint0_report_20261012.md`. **Status: not approvable** — items 1–5 of Step 2 and the §9.2 scope-gate report and §9.8 variant-reading statement cannot be produced. Steps 3–14 not started (preconditions unmet by design).

### Phase B reachability pre-check (Step 9), opportunistic

T1a: structurally empty (§9.3) — `registry_match_type = none`, gap `B-struct` at tier level. T1b: samsung.com/za, midea.com/za, daikin.co.za, lg.com/za, hisense.co.za, alliance-air.co.za, mitsubishielectric.co.za, carrier.com, jetair.co.za — **all refused at CONNECT (policy denial)**; T1b admissibility by operating entity could not be judged for any host. T1c: empty (Phase A never ran). T1d: off by parameter.

---

## 2. Resource record (§7.1)

Token counts are **estimated** (the runtime exposes no counter), marked per §7.1.

| Step | Start–end (UTC) | Elapsed | Input tokens | Output tokens | Items processed |
|---|---|---|---|---|---|
| Step 0 (environment gate; §0.1 validation attempted; halted) | 2026-10-12T20:34:22Z – 20:37:30Z | ~3 min | ~95,000 (estimated; includes reading the v3.6 prompt, the two NGA run logs and reports, and the environment documentation) | ~9,000 (estimated) | 0 |
| Step 1 | not run | — | — | — | 0 |
| Step 2 | not run (report written as not approvable; counted in close-out) | — | — | — | 0 |
| Step 3 / 3b | not run | — | — | — | 0 |
| Steps 4–6 | not run | — | — | — | 0 |
| Steps 9–12 | not run (reachability pre-check only, counted in Step 0 row) | — | — | — | 0 |
| Steps 13–14 | not run | — | — | — | 0 |
| Close-out (this log, checkpoint report, scaffolds, evidence manifest, defects, commit) | 2026-10-12T20:37:30Z – ~20:50Z | ~13 min | ~25,000 (estimated) | ~14,000 (estimated) | 0 |
| **Total** | 2026-10-12T20:34Z – ~20:50Z | ~16 min | ~120,000 (estimated) | ~23,000 (estimated) | **0** |

Per-record means: not computable (0 records).

---

## 3. Defects subsection (§10)

Full entries in `prompt_defects.md`. Summary:

1. **No Step 0 environment/egress gate and no run-level stop value (blocking, carried from NGA runs).** The prompt assumes Claude in Chrome on a consumer network. A managed runner whose organisation egress policy denies all HTTPS is uncovered; `platform_blocked` remains a coined value absent from the Step 7 table, and gap code `C-geo` is defined as field-level.
2. **Scope gate cannot distinguish "unobservable" from "out of scope".** §9.2 outcome (c) requires 60 scanned items; with zero observable items no `scope_status` value applies. A fourth value such as `undetermined_platform_blocked` is needed so a blocked run is not misread as out-of-scope evidence.
3. **§0.1 validation outcome has no storage form in this cell's outputs** beyond a row in `platform_evidence_result_v4.xlsx`, which is not in the repository; the proposed row is written as CSV.
4. **`notes` and gap-code storage are referenced but not in the field list (§5)**; the scaffold adds `notes` and a single `gap_codes` map column pending the template owner's decision (carried from NGA defect #2).
5. **Mandated tool absent in this runtime** (Claude in Chrome); real-browser substitution used for the gate probe only.
6. **Token accounting** (carried): estimates marked `estimated`; a standard basis (characters ÷ 4) would make estimates comparable across cells.

---

## 4. File manifest

SHA-256 of every file written by this run is in `evidence/manifest_20261012.sha256` (computed at close-out, see that file). `snapshots/` is empty by construction — N = 0; no page qualified as a record source.
