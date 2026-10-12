# GLACE Canada × split — Run Log

**RUN_ID:** CAN_split_20261012 · **Cell:** CAN × split · **Prompt:** GLACE_extraction_prompt_v3.6_CAN_split (v3.6-EN-CAN, 2026-10-12)
**Operator:** dr.dr.boboorange@gmail.com · **Instruction of record:** "基于prompt进行CAN split数据摘录" (run the CAN split extraction per the prompt). No checkpoint pre-authorization was given.
**`{CAPTURE_SEASON_PHASE}`:** `post_season` (capture month October, Section 1 rule).

---

## 1. Run record

| Item | Value |
|---|---|
| Run start (UTC) | 2026-10-12T20:36:52Z (Section 0.1 probe start) |
| Run end (UTC) | 2026-10-12T20:40:02Z (halt before Step 0) |
| Platform attempted | HVAC Market · hvacmarket.ca · vertical_dealer (`{PLATFORM_1}` candidate, **unvalidated**) |
| Secondary | Amazon Canada / Home Depot Canada (`{PLATFORM_2}` candidates) — not reached, not validated |
| Full URL / sort parameter | **Not obtained.** No page ever rendered; Step 1 forbids assuming the parameter. |
| Delivery city | **Not set.** `delivery_city_set = false`. Consumer-view check not performed. |
| `platform_shows_list_price` / `platform_price_tax_basis` | Not determined |
| Rank range / actual N | none / 0 |
| Six classification counters | accessory 0 · other-type 0 · no-new-price 0 · excluded 0 · duplicate 0 · qualified 0; `price_hidden` 0 |
| `scanned_items` / dilution | 0 / not computable |
| `category_total_listings` | Not measured |
| `stop_reason` | **`platform_blocked`** (run-level; coined value carried from the NGA runs, not in the Step 7 table — see defects) |
| Brand set / deduplication deletions | none |
| Threshold-value probe, capacity-unit distribution, outlier/contradiction/unreadable lists | empty (N = 0) |
| Installation table | 0 rows; coverage by `platform_type` not computable |

### Halt narrative (Section 0.1 → Section 3 rule 6)

1. **20:36:52–20:37:51Z** — Section 0.1 platform-validation probe, curl via the runner's agent proxy, 3.2 s spacing, 17 hosts: `{PLATFORM_1}` and its robots.txt, both `{PLATFORM_2}` candidates and their robots.txt, the three `{REGISTRY_T1A}` hosts (NRCan, ENERGY STAR Canada, AHRI), seven Section 9.2 T1b manufacturer hosts, and the control host example.com. **Every target returned HTTP 000, curl exit 56 "CONNECT tunnel failed, response 403".** The proxy's own status endpoint recorded `connect_rejected … gateway answered 403 to CONNECT (policy denial or upstream failure)` for every host, including the control host. Evidence: `evidence/network_probe_20261012.log`.
2. **20:39–20:40Z** — Out-of-band check with the WebFetch tool (server-side fetch, not through the agent proxy): `getaddrinfo ENOTFOUND` on hvacmarket.ca, www.hvacmarket.ca, amazon.ca, homedepot.ca, oee.nrcan-rncan.gc.ca **and the control host www.example.com**. DNS resolution is disabled on that channel too.
3. **Classification.** Both channels fail on the control host, so the cause is the environment's network policy, not any platform. This reproduces the NGA_split_20260827 condition (organisation egress policy denies all general web traffic). The environment documentation names the remedy: the environment's Network access setting (broader level, or the needed hosts under Allowed domains).
4. **Decision.** Section 0.1 cannot be executed (no candidate can be opened), so `{PLATFORM_1}` cannot be filled; Step 0 and Step 1 cannot start; Section 3 rule 5 makes any record without a snapshot invalid; Section 3 rule 6 requires an immediate halt with reason and rank logged and no improvised workaround; the proxy README additionally forbids retrying or circumventing 403 policy denials. **Halted at rank 0 before Step 0.** No extraction, no record, no frame snapshot, no checkpoint approvable.
5. **Not done, by design:** no attempt to route around the proxy, no use of cached/third-party page copies, no fabricated or estimated records, no self-approval of Checkpoint 0.

### Section 0.1 result

Written as `evidence/platform_evidence_result_v4_CAN_split_row.csv` (the companion `platform_evidence_result_v4.xlsx` is not in this repository). All four validation criteria `not_tested`; result `NOT_VALIDATED_runner_no_egress` for all three candidates.

### Checkpoint 0

`checkpoints/checkpoint0_report_20261012.md` — **NOT APPROVABLE**; items 1–5 unobtainable. Phases A (Step 3 onward), B and C not started. Checkpoint 1 not reached.

### Phase B reachability pre-check (Step 9)

Not possible; all T1a/T1b hosts denied at the CONNECT level (same probe). Nothing can be inferred about the sources themselves.

---

## 2. Resource record (Section 7.1)

Token counts are **estimated** (runtime exposes no counter).

| Step | Start–end (UTC) | Elapsed | Input tokens | Output tokens | Items |
|---|---|---|---|---|---|
| Pre-run (prompt + prior NGA run review) | 20:33 – 20:36 | ~3 min | ~45,000 (estimated) | ~2,000 (estimated) | 0 |
| Section 0.1 gate (halted) | 20:36:52 – 20:40:02 | ~3 min | ~25,000 (estimated) | ~5,000 (estimated) | 0 |
| Step 0 – Step 14 | not run | — | — | — | 0 |
| Close-out (log, checkpoint, scaffolds, defects, commit) | 20:40 – ~20:46 | ~6 min | ~15,000 (estimated) | ~9,000 (estimated) | 0 |
| **Total** | 20:33 – ~20:46 | ~13 min | ~85,000 (estimated) | ~16,000 (estimated) | **0** |

Per-record means: not computable.

---

## 3. Defects subsection

See `prompt_defects.md` (6 items): no branch for a runner without egress; companion xlsx absent; gap-code column convention; token accounting; `{PLATFORM_1}` domain unverified at DNS level; checkpoint delegation undefined.

---

## 4. File manifest

| File | SHA-256 |
|---|---|
| `evidence/network_probe_20261012.log` | `6bad04b03506e2a0b3aeed26d93278099240ffe841fa5096b6a0c153a088bff4` |
| `evidence/platform_evidence_result_v4_CAN_split_row.csv` | `31c45d15568f5e6974828017af3169bfbcc09a63d24897f636becad9fafebf03` |
| `records/CAN_split_20261012_records.xlsx` (scaffold, 81 columns per Section 5 + 9.5 + `notes` + `gap_codes`, 0 rows) | `97fd2aee87d9dbc668a45fffe9f4d7599647cff24d566629e9d1dc12b94d44a5` |
| `installation/CAN_split_20261012_installation_costs.xlsx` (scaffold, 19 columns per Section 7, 0 rows) | `00b7d88151267f1e52fc450069fb99c6953fe7dca2d2405b63e37916cd12c6cc` |
| `snapshots/` | empty — N = 0 |
