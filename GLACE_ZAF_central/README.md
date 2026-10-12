# GLACE South Africa — ZAF × central

One run so far, a protocol-compliant halt **before Step 0** (§0.1 platform validation), rank 0, 0 records.

| Run | Outcome |
|---|---|
| `ZAF_central_20261012` | Halted: the session's organisation **egress policy refused every host at the proxy CONNECT stage** (HTTP 403) — PLATFORM_1 acdirect.co.za, PLATFORM_2 builders.co.za / takealot.com, all nine T1b manufacturer hosts, and the control hosts example.com and google.com. Not a platform-side block. `stop_reason = platform_blocked`, run-level gap `C-geo`. Scope gate **undetermined** (not out-of-scope evidence). Same failure class as `NGA_split_20260827`. |

| Path | Contents |
|---|---|
| `ZAF_central_20261012_run_log.md` | Run record, halt narrative, resource record, defects summary |
| `checkpoints/checkpoint0_report_20261012.md` | Checkpoint 0 (NOT APPROVABLE) and the decisions the operator must take before a re-run |
| `evidence/network_probe_20261012.log` | curl gate probe of 17 URLs, real-browser probe, agent-proxy failure log, findings |
| `evidence/platform_evidence_row_ZAF_central_20261012.csv` | Proposed §0.1 rows for `platform_evidence_result_v4.xlsx` (all `not_validated`) |
| `evidence/manifest_20261012.sha256` | SHA-256 of every file written by the run |
| `records/ZAF_central_20261012_records.xlsx` | Schema scaffold, 0 rows: 84 columns in §5 order plus §9.7 cell fields, `notes`, `gap_codes`; sheets for cell parameters and classification counters |
| `records/ZAF_central_20261012_installation_costs.xlsx` | Step 3b scaffold, 0 rows, §7 columns |
| `protocol/GLACE_extraction_prompt_v3.6_ZAF_central.md` | Prompt of record for this run |
| `prompt_defects.md` | 8 template gaps (§10), 5 carried from the NGA runs |
| `snapshots/` | Empty by construction — N = 0 |

## Decision needed from the operator (see `checkpoints/checkpoint0_report_20261012.md`)

1. Open network access for the cloud environment (or allow the listed domains), or run on an operator machine with Claude in Chrome as the prompt mandates; then re-run from §0.1.
2. Re-run within October to keep `capture_season_phase = pre_season`; late November is excluded.
3. Template amendments: run-level `platform_blocked` stop value; an "undetermined" `scope_status`; storage form for §0.1 results and gap codes.
