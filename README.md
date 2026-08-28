# climate-paper6 — GLACE data collection (Kenya cell)

Working repository for the GLACE retail price / efficiency extraction and tracing runs
for the **KEN × split** cell, following the two operating prompts in `prompts/`.

## Status — 2026-08-28

Second run attempt, `KEN_split_20260828`, from a rebuilt environment with the custom
egress allowlist: **network egress now works** (pre-check passed; browser runtime
verified after fixing a gateway TLS incompatibility), but the run again **terminated
at Step 0** — this time by the platform, not the environment. Jumia (PLATFORM_1)
serves a Cloudflare interactive "Verify you are human" (Turnstile) interstitial to
this egress IP on the homepage and on the Step 1 search URL; per Section 3 (never
bypass a CAPTCHA; Interruption rule) and the operator's standing instruction the run
stopped with 0 records and no workaround attempted. Kilimall (PLATFORM_2) renders
fully and is collectable. Evidence, the browser-level reachability table, and the
operator decision options (run Jumia from Claude in Chrome on a residential network;
or authorize a Kilimall-first frame in a prompt v1.1; or retry later) are in
`runs/KEN_split_20260828/KEN_split_20260828_run_log.md`.

First attempt `KEN_split_20260827` (terminated at Step 0, environment egress blocked)
is retained under `runs/KEN_split_20260827/`.

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

## Getting an environment that can reach the sources

The blocking constraint is the cloud environment's **Network access** level. The
**Default** environment uses **Trusted**, which allows package registries and GitHub
only. To run this cell from a cloud session, create an environment with **Network
access = Custom** and paste `rerun_egress_allowlist.txt` into its **Allowed domains**
field (tick "Also include default list of common package managers"), then select that
environment before starting the session. **Full** works too, if a broad allowlist is
acceptable.

Editing an environment affects sessions started afterwards, not ones already running,
so the rerun needs a **new session** in the reconfigured environment.

First command in the rerun, before Step 0:

```
python3 tooling/precheck_egress.py --out runs/<RUN_ID>/reachability_precheck_raw.txt
```

It probes all 19 source domains, writes the evidence file the log requires, and exits
non-zero if either Phase A platform is unreachable — in which case the run must not
start.

Alternatively, run the cell in Claude in Chrome on your own machine, which is the
runtime both prompts were written for and needs no environment change.
