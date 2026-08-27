# climate-paper6 — GLACE data collection (Kenya cell)

Working repository for the GLACE retail price / efficiency extraction and tracing runs
for the **KEN × split** cell, following the two operating prompts in `prompts/`.

## Status — 2026-08-27

The first run attempt, `KEN_split_20260827`, **terminated at Step 0**: the execution
environment's network egress policy blocks every retail platform, registry and
manufacturer domain (HTTP 403 at the proxy CONNECT stage, before any target is
reached). Per the prompt's Interruption rule the run stopped without improvising a
workaround; 0 records were extracted. Full detail, the per-domain reachability
pre-check, and the Phase B source discovery notes are in
`runs/KEN_split_20260827/KEN_split_20260827_run_log.md`.

The run is fully staged and executable as written from an environment that can reach
the target domains — Claude in Chrome on the operator's machine (as the prompts
specify), or a remote environment whose network policy allows jumia.co.ke,
kilimall.co.ke, epra.go.ke, kebs.org and the manufacturer sites.

## Layout

```
prompts/                       operating prompts (original .docx + plain-text .md copies)
runs/KEN_split_20260827/
  KEN_split_20260827_records.xlsx   records template: Phase A columns in exact Section 5
                                    order, Phase B append columns, field dictionary, legend
  KEN_split_20260827_run_log.md     run record · resource record · defects · rerun notes
  reachability_precheck_raw.txt     raw per-domain probe output (evidence of the block)
  snapshots/                        empty; populated at rerun, hashed via the manifest tool
prompt_defects.md              close-out defect register (uncovered situations)
tooling/
  make_records_template.py     regenerates the records template
  snapshot_manifest.py         writes/verifies sha256_manifest.txt for snapshots/
```

## Rerun checklist (short)

1. Environment can reach the domains listed in the run log's pre-check table.
2. Anonymous session, delivery address Nairobi 00100, English UI, no login.
3. Produce Checkpoint 0 items (platform, search terms, fixed-sort URL, first ten
   names + prices) and log them; operator authorization already on record.
4. Extract per the prompt; every record needs a full-page PNG + MHTML with UTC
   timestamp and SHA-256 (`tooling/snapshot_manifest.py`).
5. Collection window: late August–September preferred; log any promotion within 14 days.
