# GLACE Nigeria — Run Log

**RUN_ID:** NGA_split_20260827
**Cell:** NGA × split · **Protocol:** GLACE_NGA Parts 1–4 v1.0 (2026-08-26), mirroring Chinese master template v2.2
**Operator instruction of record:** the human operator (dr.dr.boboorange@gmail.com) instructed on 2026-08-27 that checkpoints not requiring mid-run confirmation be handled per the agent's recommended treatment, with full review the following day. All checkpoint outputs below are therefore *documented for retroactive review*, not silently skipped.

---

## 1. Run record

| Item | Value |
|---|---|
| Run start (UTC) | 2026-08-27T22:30:00Z |
| Run end (UTC) | 2026-08-27T22:33:03Z (halt at Step 0, Part 1) |
| Platform attempted | Jumia Nigeria, jumia.com.ng, marketplace (PLATFORM_1) |
| Full URL / sort parameter | **Not obtained.** The search page could never be opened, so no sort was selected and no URL was frozen. Per Part 1 Step 1 the sort parameter must be verified in the live sort control, not assumed; it is therefore left unrecorded. |
| Interface state | Not observable (site unreachable). |
| Delivery city | **Not set.** delivery_city_set = false. Abuja 900001 could not be entered because no page loaded. |
| Rank range | none — rank reached 0 |
| Actual N | 0 |
| Classification counters | accessory 0 · other-type 0 · no-new-price 0 · excluded 0 · qualified 0 |
| scanned_items / dilution | 0 / not computable |
| stop_reason | **platform_blocked** (hard-constraint interruption per Part 1 §3 "Interruption", gap class C / C-geo per Part 2 §5) |
| category_total_listings | Not measured (frame never opened). External indication only, not a frame measurement: an Anthropic server-side web search on 2026-08-27 returned the live Jumia category page titled "Air Conditioners Prices in Nigeria (1195 Products)" at https://www.jumia.com.ng/air-conditioners-d/, which suggests the pilot rank target of 150 would be reachable on this platform. |
| Brand set evolution | none |
| Cross-platform dedup removals | none (no records) |
| Counts by pilot_segment | production 0 · calibration 0 |
| Collection window check | 2026-08-27 falls inside the preferred "late August to September" window (Part 1, Nigeria rules). No promotional event was verifiable because the site was unreachable. |

### Halt narrative (Step 0, Part 1)

1. **22:30 UTC** — Attempted to open jumia.com.ng from the run environment (Claude Code remote container, session `a37d392e`). Every HTTPS CONNECT was refused by the session's policy-enforcing egress proxy with `403 (policy denial)`. This is not a Jumia-side block: the proxy denied the tunnel before any packet reached Jumia.
2. **22:30–22:33 UTC** — Systematic reachability probe (≥3 s spacing, honouring the rate constraint even for probes) of **every** source named in Parts 1–4: jumia.com.ng, konga.com, son.gov.ng, energycommission.gov.ng, energy.gov.ng, and the T1b manufacturer domains (LG, Samsung, Hisense, Midea, Gree, TCL, Haier, Daikin). **All 14 hosts denied**, including the neutral control host example.com — the egress policy blocks general web access from this environment entirely (only package registries and Anthropic endpoints are exempt). Raw output: `evidence/network_probe_20260827.log` (SHA-256 `0699e8cb258d0b9a9565b3146b7c01b319cb6aa664e04814cfaa0d703202e709`).
3. The harness-side WebFetch channel returned `EGRESS_BLOCKED` for jumia.com.ng — same policy. The harness-side WebSearch channel (Anthropic server-side, not subject to the container policy) succeeded and shows the platform itself is **up and listing ~1,195 products** in the AC category. Classification of the block: the source is public and live but blocked to this network egress — the definition of **gap code C-geo**.
4. Part 4 §1 states without exception: "Circumvention by proxy, VPN, mirror or cached copy is prohibited." Part 1 §3 states: "If any constraint cannot be met, stop immediately, log the reason and the current rank, and do not improvise a workaround." Collection through the server-side search/fetch channels was **considered and rejected**: (a) it would circumvent the egress policy in substance; (b) it cannot produce the mandatory full-page PNG + MHTML snapshots, and "a record without a full-page snapshot is not a valid record"; (c) content passes through a summarising model, violating "record only what is visible on the page."
5. Run halted at **rank 0, Step 0**. No product record was created, consistent with Part 1's own contract ("no records are created in this part").
6. `robots.txt` could not be retrieved (same block), so compliance could not be affirmatively verified — an independent reason the extraction loop must not start.

### Checkpoint 0

Reported in `checkpoints/checkpoint0_report.md`. **Status: not approvable** — items 3 (frozen URL) and 4 (first ten products) cannot be produced. Per Part 1 Step 2, Part 2 does not begin. No delegation question arises: the checkpoint's factual preconditions are unmet, so this is a protocol halt, not a withheld approval.

### Parts 2–4

Not started. Preconditions unmet by design (Part 2 requires the frozen URL, frame snapshot and Checkpoint 0 approval; Part 3 requires the Part 2 handoff; Part 4 requires Checkpoint 1). The Part 4 **source inventory and reachability pre-check** (Step 9) was nonetheless executed opportunistically during the probe so that tomorrow's review has the full picture: **all T1a and T1b sources are unreachable from this environment** (same egress policy). T1c (label images from Part 2) is empty because Part 2 did not run.

---

## 2. Resource record

Token counts are **estimated** (runtime exposes no counter), marked per Part 3 §4.1.

| Part | Start–end (UTC) | Elapsed | Input tokens | Output tokens | Records |
|---|---|---|---|---|---|
| 1 (halted at Step 0) | 2026-08-27T22:30:00Z – 22:33:03Z | ~3 min | ~90,000 (estimated; includes reading the four protocol documents) | ~6,000 (estimated) | 0 |
| 2 Jumia | not run | — | — | — | 0 |
| 2 Konga | not run | — | — | — | 0 |
| 3 | not run | — | — | — | 0 |
| 4 | not run (reachability pre-check only, included in Part 1 row) | — | — | — | 0 |
| Close-out (this log, scaffold, evidence) | 2026-08-27T22:33Z – 22:40Z (approx.) | ~7 min | ~30,000 (estimated) | ~12,000 (estimated) | 0 |
| **Total** | 2026-08-27T22:30Z – 22:40Z | ~10 min | ~120,000 (estimated) | ~18,000 (estimated) | **0** |

Per-record means: not computable (0 records).

---

## 3. Defects section

1. **Environment/protocol mismatch (blocking).** The protocol is written for "Claude in Chrome" on an operator machine with open consumer egress. This run was launched in a Claude Code remote container whose organisation egress policy denies all general web traffic (probe log in `evidence/`). The protocol has no branch for "runner environment has no web egress at all"; the closest codes are C ("platform blocked") and C-geo, both defined per-field rather than per-run. Recorded here as a run-level C-geo. **Suggested remediation for the re-run (choose one):** (a) run in Claude in Chrome as the protocol intends; (b) re-create the remote session on an environment whose network policy allows, at minimum: `jumia.com.ng`, `konga.com`, `son.gov.ng`, `energycommission.gov.ng`, and the T1b manufacturer domains (environment network policy is configurable at claude.ai under the environment's settings; see https://code.claude.com/docs/en/claude-code-on-the-web).
2. **Gap-code storage convention unspecified.** Part 2 §5 requires "every blank field carries a gap code" but the field list defines no column(s) to hold gap codes (one column per field? a single semicolon-delimited `gap_codes` column?). Not resolved by improvisation; flagged for the template owner. The scaffold xlsx ships without gap-code columns pending that decision.
3. **Run-level vs field-level block codes.** C/C-geo are defined as field-level gap codes; a whole-run block has no defined `stop_reason` value in Part 3 Table 1 (`frame_exhausted`, `brand_saturation`, `pilot_target_reached`, `scan_cap_reached` are all post-frame). `platform_blocked` used here is a coined value and is flagged as such.
4. **Token accounting.** The runtime exposes no token counter; all figures above are estimates marked estimated, as §4.1 permits.

---

## 4. File manifest

| File | SHA-256 |
|---|---|
| `evidence/network_probe_20260827.log` | `0699e8cb258d0b9a9565b3146b7c01b319cb6aa664e04814cfaa0d703202e709` |
| `records/NGA_split_20260827_records.xlsx` (schema scaffold, 0 rows) | `3e0f7f7ac60bfd3efc2a3627235499cfe71483d2646f966948e357b0d7575c16` |
| `snapshots/` | empty — no page was ever rendered, so no snapshot exists; consistent with N = 0 (no invalid records were created) |
