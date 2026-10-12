# GLACE Canada — CAN × split

| Run | Outcome |
|---|---|
| `CAN_split_20261012` | **Halted before Step 0:** the runner's **network policy denies all outbound web traffic** (agent-proxy CONNECT 403 on every host incl. control; out-of-band DNS `ENOTFOUND` incl. control). Section 0.1 platform validation could not be executed; `{PLATFORM_1}` remains an unvalidated candidate. `stop_reason = platform_blocked`, N = 0, no snapshots. Same failure class as `GLACE_NGA/NGA_split_20260827`. |

| Path | Contents |
|---|---|
| `CAN_split_20261012_run_log.md` | Run record, halt narrative, resource record (estimated tokens), defects pointer, file manifest with SHA-256 |
| `checkpoints/checkpoint0_report_20261012.md` | Checkpoint 0 (NOT APPROVABLE) and the operator decisions needed before a re-run |
| `evidence/network_probe_20261012.log` (+ `gate_evidence_20261012.sha256`) | Section 0.1 probe of 17 hosts via proxy, WebFetch control check, verdict |
| `evidence/platform_evidence_result_v4_CAN_split_row.csv` | Section 0.1 result row for the companion `platform_evidence_result_v4.xlsx` (not in repo) — all candidates `NOT_VALIDATED_runner_no_egress` |
| `records/CAN_split_20261012_records.xlsx` | Schema scaffold, 0 rows, Section 5 + 9.5 columns in output order (+ `notes`, `gap_codes`) — reusable |
| `installation/CAN_split_20261012_installation_costs.xlsx` | Step 3b scaffold, 0 rows, Section 7 columns |
| `prompt_defects.md` | 6 items (Section 10) |
| `snapshots/` | Empty by construction — N = 0 |

## Decision needed from the operator

See `checkpoints/checkpoint0_report_20261012.md`: (1) open the environment's network access and re-run, or run in Claude in Chrome on an operator machine, or record the cell as blocked; (2) the `post_season` window closes end of October; (3) confirm the `hvacmarket.ca` domain; (4) state how Checkpoints 0/0b/1 are to be answered in an unattended re-run.
