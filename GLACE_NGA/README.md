# GLACE Nigeria — NGA × split

Two runs so far, both protocol-compliant halts at Part 1 Step 0, for **different** reasons:

| Run | Outcome |
|---|---|
| `NGA_split_20260827` | Halted: organisation **egress policy** denied all web traffic (run-level C-geo). 0 records. |
| `NGA_split_20260828` (re-run, egress open) | Halted: **jumia.com.ng serves a Cloudflare interactive challenge** (Turnstile checkbox) on every path — home, robots.txt, category — to this runner's egress IP class. CAPTCHA bypass is prohibited without exception; robots.txt is unverifiable behind the same challenge. stop_reason `platform_blocked`, 0 records. Konga/SON/ECN/most T1b hosts **are** reachable this run; only the frame platform is gated. |

| Path | Contents |
|---|---|
| `NGA_split_20260828_run_log.md` | Re-run log: gate results, halt narrative, resource record, defects |
| `checkpoints/checkpoint0_report_20260828.md` | Checkpoint 0 (NOT APPROVABLE) + the three realistic paths to actual collection |
| `evidence/network_probe_20260828.log` (+ screenshots, `gate_evidence_20260828.sha256`) | curl + real-browser gate probe of all 14+ hosts, Turnstile screenshots, jumia/konga robots.txt captures |
| `NGA_split_20260827_run_log.md`, `checkpoints/checkpoint0_report.md`, `evidence/network_probe_20260827.log` | First run's reports (egress-policy halt) |
| `records/NGA_split_20260827_records.xlsx` | Schema scaffold, 0 rows, 48 Part 2 §4 columns — still reusable |
| `prompt_defects.md` | Template gaps from both runs (now 7 items) |
| `snapshots/` | Empty by construction — N = 0 |

## Decision needed from the operator (see checkpoint0_report_20260828.md §What changed)

1. **(a) Run in Claude in Chrome** on an operator machine (residential egress; the environment the protocol assumes) — recommended; or **(b)** template-owner amendment authorizing a Konga-first *category-path* frame (Konga robots.txt disallows `/search`); or **(c)** record the cell as blocked from managed runners.
2. The late-Aug–September collection window closes at end of September; November is excluded.
3. Part 4 source list correction: ECN lives at `energy.gov.ng` (old `energycommission.gov.ng` is dead).
