# Checkpoint 0 — Frame approval report

**RUN_ID:** NGA_split_20260827 · **Prepared:** 2026-08-27T22:35Z (UTC) · **Status: NOT APPROVABLE — frame could not be produced**

Part 1 Step 2 requires four items. Two of the four cannot be produced because the platform is unreachable from the run environment (egress policy denial; see `../evidence/network_probe_20260827.log`).

| # | Required item | Value |
|---|---|---|
| 1 | Platform name, domain, channel type | Jumia Nigeria · jumia.com.ng · marketplace *(from parameters; not verified live)* |
| 2 | Search terms / category path | "air conditioner", English interface *(from parameters; the actual landing category path could not be observed)* |
| 3 | Full URL after the sort is fixed | **UNOBTAINABLE** — no page loaded; the sort control was never seen, so per the Part 1 rule ("Do not assume the parameter name, verify it") no URL is reported |
| 4 | First ten product names and prices | **UNOBTAINABLE** — search results never rendered |

**category_total_listings:** not measured. External indication only (Anthropic server-side web search, 2026-08-27): the live Jumia category page title reads "Air Conditioners Prices in Nigeria (1195 Products)" (https://www.jumia.com.ng/air-conditioners-d/). If that count survives verification on the re-run, the pilot rank target of **150** is comfortably reachable. This is *not* a substitute for the frame measurement.

**Rank target 150:** confirmation deferred to the human together with re-run authorisation.

## Decision taken (per operator delegation of 2026-08-27)

The operator delegated mid-run handling to the agent's recommendation. The recommendation here is **halt** — this is not a judgement call but the protocol's own hard rule (Part 1 §3 Interruption; Part 4 §1 no-circumvention). Part 2 was not started.

## What the human should decide tomorrow

1. Approve a **re-run environment**: either Claude in Chrome (as the protocol assumes), or a remote environment whose network policy allowlists at minimum `jumia.com.ng`, `konga.com`, `son.gov.ng`, `energycommission.gov.ng`, and the T1b manufacturer domains.
2. Confirm the **rank target of 150** for the re-run.
3. Confirm the collection window: the preferred late-August–September window closes soon; a re-run before end of September stays inside it.
