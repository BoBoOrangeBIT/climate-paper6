# Checkpoint 0 — Frame approval report (re-run)

**RUN_ID:** NGA_split_20260828 · **Prepared:** 2026-08-28T04:45Z (UTC) · **Status: NOT APPROVABLE — frame could not be produced**

Checkpoints 0/0b/1 were pre-authorized by the operator for this run, with full outputs to be written for retroactive review. The pre-authorization could not be exercised: two of the four required items cannot be produced, because jumia.com.ng serves a Cloudflare **interactive** challenge (Turnstile "Verify you are human" checkbox) on every path tested — home page, robots.txt, and the air-conditioners category page — in a real Chromium browser, on fresh contexts, after 75+ second waits. Completing the challenge would be a CAPTCHA bypass, prohibited by the protocol without exception, and the operator's own gate instruction for this run was "不得绕行" (do not circumvent). Evidence: `../evidence/network_probe_20260828.log`, screenshots `../evidence/gate_jumia_*.png`.

| # | Required item | Value |
|---|---|---|
| 1 | Platform name, domain, channel type | Jumia Nigeria · jumia.com.ng · marketplace *(from parameters; platform live but challenge-gated to this egress)* |
| 2 | Search terms / category path | "air conditioner", English interface *(from parameters; landing path not observable)* |
| 3 | Full URL after the sort is fixed | **UNOBTAINABLE** — the sort control was never rendered; per Part 1 Step 1 the parameter may not be assumed |
| 4 | First ten product names and prices | **UNOBTAINABLE** — no search results ever rendered |

**category_total_listings:** not measured (frame never opened).

**Rank target 150:** confirmed by the operator for this run; moot at N = 0.

## Decision taken (per operator instruction of 2026-08-28)

**Halt, stop_reason = platform_blocked.** This follows the protocol's hard rule (Part 1 §3 Interruption; no CAPTCHA bypass; robots.txt unverifiable) and the operator's explicit instruction for exactly this contingency. Part 2 was not started. Konga was **not** substituted as the frame platform: the ladder escalates only from a completed Jumia frame (Part 3 Step 6), and a primary-platform substitution is the wrong-platform failure Checkpoint 0 exists to catch — logged as an uncovered case in `../prompt_defects.md` instead.

## What changed since 20260827, and what the operator should decide next

1. **The egress policy block is fixed** — general web egress now works (control host, Konga, SON, ECN, most T1b hosts all reachable). The remaining blocker is **Jumia-side bot protection against this runner's egress IP class**. A retry from this environment will very likely hit the same interactive challenge; this is not a transient outage.
2. **Realistic paths to actual collection:**
   - **(a) Claude in Chrome on an operator machine** (the environment the protocol was written for): residential egress + a human-attended browser session typically does not face, or trivially clears, the challenge — and a human clicking it is not an agent bypassing it. Recommended.
   - **(b) Protocol amendment for a Konga-first frame** (template-owner decision, not takeable by this run): Konga is fully reachable, but its robots.txt **disallows `/search` for all user agents**, so the frame would have to be a *category path* (e.g. the air-conditioners category), not a search URL; product detail pages also sit under disallow patterns (`/product/*/details`, `/product/-`) that need review against Konga's actual product URL shapes before any extraction is authorized.
   - **(c) Accept the cell as blocked from managed runners** and record it as such in the 53-cell frame.
3. **Collection window:** the preferred late-August–September window is still open, but closes at end of September; November is excluded (Black Friday).
4. **Part 4 sources are healthy** (for whenever collection succeeds): son.gov.ng up; ECN lives at energy.gov.ng (old energycommission.gov.ng host is dead — protocol source list should be corrected); Midea NG / Gree / TCL NG / Daikin / Samsung NG reachable; LG and Haier bot-blocked at first touch; Hisense Africa domain to be located by search per Part 4 Table 1.
