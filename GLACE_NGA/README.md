# GLACE Nigeria — NGA × split — run NGA_split_20260827

**Outcome: run halted at Part 1, Step 0 — `platform_blocked` (run-level C-geo). 0 records. This is a protocol-compliant halt, not a crash.**

Every source named in Parts 1–4 (Jumia, Konga, SON, ECN, and all eight T1b manufacturer sites) is denied by this session's network egress policy — the proxy refuses the CONNECT before any packet leaves. A server-side check confirms Jumia itself is live (~1,195 AC listings), so the block is local to the run environment. The protocol forbids circumvention without exception and requires an immediate logged stop when a hard constraint cannot be met; that is what happened.

| Path | Contents |
|---|---|
| `NGA_split_20260827_run_log.md` | Run record · resource record · defects (Part 3 §4.2 format) |
| `checkpoints/checkpoint0_report.md` | The four Checkpoint 0 items as far as producible; status NOT APPROVABLE; decisions needed for the re-run |
| `evidence/network_probe_20260827.log` (+ `.sha256`) | Timestamped probe of all 14 hosts, proxy status excerpt |
| `records/NGA_split_20260827_records.xlsx` | Schema scaffold, 0 rows: sheet `records` has the 48 Part 2 §4 columns in exact order; sheet `part4_append_layer` lists the tracing/final columns; sheet `run_state` states the halt |
| `prompt_defects.md` | Five template gaps found by this run |
| `snapshots/` | Empty by construction — no page rendered, no snapshot; N=0 |

## To actually collect the data (decisions for the reviewer)

1. **Re-run environment.** Either run in **Claude in Chrome** (the environment the protocol was written for), or create/select a Claude Code remote **environment whose network policy allows** at minimum: `jumia.com.ng`, `konga.com`, `son.gov.ng`, `energycommission.gov.ng`, `energy.gov.ng`, plus the T1b manufacturer domains (LG, Samsung, Hisense, Midea, Gree, TCL, Haier, Daikin — Nigerian country sites located per Part 4 Table 1). Environment network policy is set at claude.ai when creating/editing the environment (docs: https://code.claude.com/docs/en/claude-code-on-the-web).
2. **Confirm the rank target 150** (Checkpoint 0 asks for this in the same reply).
3. **Window.** Today is inside the preferred late-Aug–Sep window; re-running before end of September avoids the November Black Friday exclusion.

Everything in this directory is re-usable on the re-run: the xlsx scaffold is the correct column order, and the run log's structure follows Part 3 Table 2.
