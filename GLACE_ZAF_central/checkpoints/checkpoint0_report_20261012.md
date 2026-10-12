# Checkpoint 0 — Frame approval report

**RUN_ID:** ZAF_central_20261012 · **Prepared:** 2026-10-12T20:45Z (UTC) · **Status: NOT APPROVABLE — frame could not be produced; run halted before Step 0**

Checkpoint 0 is a blocking human gate (prompt §0, §2, Step 2) and was **not** pre-authorised for this run. It is raised here as a blocking question; none of its items can be answered because every candidate platform, every manufacturer host, and two control hosts are refused at the egress-proxy CONNECT stage with HTTP 403 (organisation network policy). Evidence: `../evidence/network_probe_20261012.log`.

| # | Required item (Step 2) | Value |
|---|---|---|
| 1 | Platform name and channel type | AC Direct · acdirect.co.za · `vertical_dealer` *(from the parameter block; candidate only — §0.1 validation (a)–(d) not performable)* |
| 2 | Search term and category path | `ducted air conditioner` / ducted category *(from the parameter block; neither observed)* |
| 3 | Complete URL with fixed sort and frame filter | **UNOBTAINABLE** — no page rendered; the sort parameter may not be assumed (Step 1) |
| 4 | First ten product names, prices, raw efficiency data | **UNOBTAINABLE** — no results rendered |
| 5 | §9.8 addendum: scope-gate report (§9.2) for the first 60 scanned items; how variant SKU, MPN and price are read on the primary platform | **UNOBTAINABLE** — 0 items scanned; variant structure never observed |

**`category_total_listings`:** not measured. **`platform_shows_list_price` / `platform_price_tax_basis`:** not determined. **Delivery city:** not set (`delivery_city_set = false`). **Consumer-view confirmation (§9.1):** not performable.

## Decision taken

**Halt, `stop_reason = platform_blocked`, run-level gap code `C-geo`, rank 0.** This follows §0.1 (no validated vertical dealer → report and do not start), §3 item 1 (robots.txt unverifiable, so compliance cannot be affirmed) and §3 item 6 (stop immediately, no workaround). Steps 1–14 were not started. No substitute source, cached copy, estimate, or quote was used. Checkpoint 0 was not self-approved.

## Scope-gate status (§9.2, must appear in the Checkpoint 1 report whatever the outcome)

**Undetermined.** The gate decides on counts of scanned items; 0 items were observable. This is **not** outcome (c) `out_of_scope_with_evidence`: that result requires 60 scanned items and a frame snapshot, and recording it here would convert a network-policy block into a false market finding. `scope_status` and `sample_status` are left undetermined (see `../prompt_defects.md` #2).

## What the operator needs to decide

1. **Network access for the environment.** The session's cloud-environment network policy denied every host probed, including the control hosts. Allow a broader access level, or add at least these domains to Allowed domains: `acdirect.co.za`, `builders.co.za`, `takealot.com`, and the T1b hosts `samsung.com`, `midea.com`, `daikin.co.za`, `lg.com`, `hisense.co.za`, `alliance-air.co.za`, `mitsubishielectric.co.za`, `carrier.com`, `jetair.co.za`. Steps: https://code.claude.com/docs/en/cloud-environments#network-access. Then re-run from §0.1.
2. **Execution environment.** The prompt mandates Claude in Chrome; this runtime has no such tool. Running on an operator machine with Claude in Chrome (residential egress, human-attended browser) is the environment the prompt was written for and also avoids the datacenter-IP anti-bot challenges seen on NGA_split_20260828. If a managed runner with Playwright/Chromium is to be accepted instead, the template owner should say so explicitly.
3. **Season window.** `pre_season` (Sep–Oct) closes at the end of October; November is `peak` and late November (Black Friday) is excluded by §9.5. A re-run inside October keeps the planned season phase.
4. **Template amendments** (not takeable by this run): run-level `platform_blocked` stop value; a fourth `scope_status` value for an unobservable frame; storage form for the §0.1 validation result and for gap codes.
