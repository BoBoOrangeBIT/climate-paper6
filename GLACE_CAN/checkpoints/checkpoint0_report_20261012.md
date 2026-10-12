# Checkpoint 0 — Frame approval report

**RUN_ID:** CAN_split_20261012 · **Prepared:** 2026-10-12T20:41Z · **Status: NOT APPROVABLE — Section 0.1 could not be executed, no frame exists**

Checkpoint 0 is a blocking human gate (Section 0, Section 2). It cannot be raised in its required form because none of its five items can be produced: the runner has no outbound web access on any channel (agent proxy: HTTP 403 on every CONNECT including the control host; out-of-band fetch: DNS `ENOTFOUND` including the control host). Evidence: `../evidence/network_probe_20261012.log`.

| # | Required item | Value |
|---|---|---|
| 1 | Platform name and channel type | HVAC Market · hvacmarket.ca · vertical_dealer *(Section 1 candidate only; Section 0.1 validation not executed; domain not even confirmed to resolve)* |
| 2 | Search term and category path | `ductless mini split air conditioner` *(from parameters; never entered)* |
| 3 | Complete URL with fixed sort and filters | **UNOBTAINABLE** — no page rendered; Step 1 forbids assuming the sort parameter |
| 4 | First ten product names, prices, raw efficiency data | **UNOBTAINABLE** |
| 5 | Section 9.6 addendum: share of first 60 scanned items that are component-only, VRF, ducted indoor units, or price-hidden | **UNOBTAINABLE** — 0 items scanned |

`category_total_listings`: not measured. `platform_shows_list_price`, `platform_price_tax_basis`: not determined. Delivery city: not set.

## Decision taken

**Halt, `stop_reason = platform_blocked`, rank 0, before Step 0.** Grounds: Section 3 rule 6 (constraint unmeetable → stop, log, no workaround); Section 3 rule 5 (no snapshot → no valid record); Section 2 (never self-approve a checkpoint); runner policy (403 policy denials are reported, never retried or circumvented). `{PLATFORM_2}` was **not** substituted: the ladder escalates only from a completed `{PLATFORM_1}` frame (Step 6) and would in any case be equally unreachable.

## What the operator needs to decide

1. **Where to run.** Options, in order of fit with the prompt:
   - **(a) Re-run in this environment after the network policy is opened** — the environment's Network access setting (cloud environment menu → Edit) must allow general web access, or at minimum `hvacmarket.ca`, `amazon.ca`, `homedepot.ca`, `oee.nrcan-rncan.gc.ca`, `natural-resources.canada.ca`, `ahridirectory.org` and the Section 9.2 manufacturer hosts. Note from NGA_split_20260828: even with egress open, a datacenter egress IP may be served an interactive CAPTCHA by marketplace platforms (Amazon is a likely case); a human clearing it is not an agent bypass, but there is no human attending an unattended run.
   - **(b) Run in Claude in Chrome on an operator machine** — the environment this prompt was written for (Section 0 title block): residential egress, attended browser, checkpoints answered live.
   - **(c) Record CAN × split as blocked from managed runners** for this capture window.
2. **Capture window.** October = `post_season`; the window closes at end of October under the Section 1 rule. A re-run after that falls outside every defined phase.
3. **Confirm the `{PLATFORM_1}` domain** (`hvacmarket.ca`) before any re-run — see `prompt_defects.md` item 5.
4. **Checkpoint handling for an unattended re-run.** This session cannot wait for an answer mid-run. Either attend the run, or give a written delegation that names which checkpoints (0, 0b, 1) are pre-approved and under what conditions (`prompt_defects.md` item 6).
