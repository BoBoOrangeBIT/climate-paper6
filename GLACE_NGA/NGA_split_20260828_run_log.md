# GLACE Nigeria — Run Log

**RUN_ID:** NGA_split_20260828 (re-run of NGA_split_20260827)
**Cell:** NGA × split · **Protocol:** GLACE_NGA Parts 1–4 v1.0 (2026-08-26), mirroring Chinese master template v2.2
**Operator instruction of record:** the human operator (dr.dr.boboorange@gmail.com) instructed on 2026-08-28: run the network gate first (probe the 20260827 host list and fetch jumia robots.txt before starting); Checkpoints 0, 0b and 1 pre-authorized with full outputs written for retroactive review; rank target 150 confirmed; and — verbatim constraint — "若关键源仍不可达，按协议记 platform_blocked 停机并更新 run log，不得绕行" (if key sources are still unreachable, record platform_blocked per protocol and halt; do not circumvent).

---

## 1. Run record

| Item | Value |
|---|---|
| Run start (UTC) | 2026-08-28T04:23:48Z (gate probe start) |
| Run end (UTC) | 2026-08-28T04:38:37Z (halt at network gate / Part 1 Step 0) |
| Platform attempted | Jumia Nigeria, jumia.com.ng, marketplace (PLATFORM_1) |
| Full URL / sort parameter | **Not obtained.** The search page never rendered past the anti-bot challenge, so no sort control was ever seen and no URL was frozen (Part 1 Step 1 forbids assuming the parameter). |
| Interface state | Not observable behind the challenge. The challenge interstitial itself was English. |
| Delivery city | **Not set.** delivery_city_set = false — no product or search page ever rendered. |
| Rank range | none — rank reached 0 |
| Actual N | 0 |
| Classification counters | accessory 0 · other-type 0 · no-new-price 0 · excluded 0 · qualified 0 |
| scanned_items / dilution | 0 / not computable |
| stop_reason | **platform_blocked** (hard-constraint interruption per Part 1 §3; gap class C per Part 2 §5 — anti-scraping block; same coined run-level value as 20260827, still not in Part 3 Table 1, see defects) |
| category_total_listings | Not measured (frame never opened). |
| Brand set evolution | none |
| Cross-platform dedup removals | none (no records) |
| Counts by pilot_segment | production 0 · calibration 0 |
| Collection window check | 2026-08-28 falls inside the preferred "late August to September" window. No promotional event verifiable on-platform (page never rendered). |

### Halt narrative (network gate → Part 1 Step 0)

1. **04:23:48–04:24:53 UTC** — curl reachability probe of the same 14-host list as 20260827, ≥3 s spacing (`evidence/network_probe_20260828.log`). Key change from 20260827: the egress policy is now **open** (control host example.com 200; Konga 200; most T1b hosts answer). jumia.com.ng returned HTTP 403 — this time from the **site side** (proxy CONNECT succeeded), not from the egress proxy.
2. **04:25 UTC** — `https://www.jumia.com.ng/robots.txt` fetched with a browser User-Agent: HTTP 403 carrying a **Cloudflare challenge page, cType `interactive`** (`evidence/robots_jumia_20260828.txt`). robots.txt content is therefore **unverifiable**.
3. **04:25–04:33 UTC** — Environment remediation so that the mandated collection tool (real Chromium via Playwright) could reach the network at all: agent-proxy CA imported into the browser NSS store (certutil, per the environment's own README) and `--ssl-version-max=tls1.2` applied on the browser→proxy MITM leg only (the proxy gateway's TLS 1.3 resets Chromium's ClientHello). No TLS verification was disabled; no target-site security control was touched.
4. **04:29–04:31 UTC** — Real-browser load of jumia.com.ng: Cloudflare **interactive Turnstile** ("Verify you are human" checkbox) rendered; it did **not** auto-resolve over a 75+ second wait. Screenshot `evidence/gate_jumia_turnstile_checkbox.png`.
5. **04:35–04:38 UTC** — Full browser gate probe, fresh context per target, ≥3.2 s spacing: Jumia home, robots.txt and the air-conditioners category page **all** serve the interactive challenge (screenshots in `evidence/`). Konga 200; son.gov.ng 200; energy.gov.ng 200 (titles "Energy Commission of Nigeria"; the old energycommission.gov.ng host is dead at the CONNECT level); T1b: Midea NG/Gree/TCL NG/Daikin/Samsung NG reachable, lg.com/africa 403, haier.com/ng 403, hisense-africa.com tunnel failed.
6. **Decision.** Completing the Turnstile challenge is bypassing a CAPTCHA — prohibited without exception (Part 1 §3; Part 4 §1), and additionally robots.txt compliance could not be affirmatively verified (same blocker as 20260827 defect #3). Per Part 1 §3 ("stop immediately, log the reason and the current rank, do not improvise a workaround") and the operator's explicit re-run instruction, the run halted at **rank 0, Part 1 Step 0**, stop_reason `platform_blocked`. No extraction, no record, no frame snapshot.
7. **Not done, by design:** starting collection on Konga instead. PLATFORM_2 is reachable, but the protocol's ladder escalates to Konga only from a completed Jumia frame in Part 3 Step 6 (< N_MIN unique models), and substituting the primary platform is exactly the systematic, invisible failure Checkpoint 0 exists to catch. There is no protocol branch for "PLATFORM_1 blocked pre-frame, PLATFORM_2 reachable"; the case is logged in defects and `prompt_defects.md`, not resolved by improvisation. Note for that future decision: Konga's robots.txt (`evidence/konga_robots_20260828.txt`) **disallows `/search` for all user agents**, so a Konga frame could not be search-URL-based anyway; a category-path frame may be permissible.

### Checkpoint 0

Reported in `checkpoints/checkpoint0_report_20260828.md`. **Status: not approvable** — items 3 (frozen URL) and 4 (first ten products) cannot be produced behind the challenge. Pre-authorization of Checkpoint 0 could not be exercised: its factual preconditions are unmet. Parts 2–4 not started (preconditions unmet by design).

### Part 4 reachability pre-check (opportunistic, for the reviewer's full picture)

T1a: son.gov.ng **reachable**; ECN live at **energy.gov.ng** (energycommission.gov.ng dead). T1b: Midea NG, Gree global, TCL NG, Daikin global, Samsung NG reachable in-browser; LG (africa path) and Haier NG bot-blocked at first touch; Hisense Africa domain unresolved (Part 4 would locate real domains by search). T1c: empty (Part 2 never ran).

---

## 2. Resource record

Token counts are **estimated** (runtime exposes no counter), marked per Part 3 §4.1.

| Part | Start–end (UTC) | Elapsed | Input tokens | Output tokens | Records |
|---|---|---|---|---|---|
| Network gate + Part 1 (halted at Step 0) | 2026-08-28T04:23:48Z – 04:38:37Z | ~15 min | ~120,000 (estimated; includes re-reading the four protocol documents and the 20260827 reports) | ~12,000 (estimated) | 0 |
| 2 Jumia | not run | — | — | — | 0 |
| 2 Konga | not run | — | — | — | 0 |
| 3 | not run | — | — | — | 0 |
| 4 | not run (opportunistic reachability pre-check only, included in gate row) | — | — | — | 0 |
| Close-out (this log, checkpoint report, evidence, commits) | 2026-08-28T04:38Z – ~04:50Z | ~12 min | ~15,000 (estimated) | ~10,000 (estimated) | 0 |
| **Total** | 2026-08-28T04:23Z – ~04:50Z | ~27 min | ~135,000 (estimated) | ~22,000 (estimated) | **0** |

Per-record means: not computable (0 records).

---

## 3. Defects section

1. **PLATFORM_1 CAPTCHA-gated while PLATFORM_2 is open (blocking, new).** The 20260827 blocker (organisation egress policy) is resolved; the new blocker is Jumia's own Cloudflare interactive challenge against this egress IP class (datacenter). The protocol covers per-listing anti-scraping (gap code C) and total unreachability, but has **no branch** for "primary platform interactively challenge-gated at Step 0 while the secondary platform is reachable". Options for the template owner / operator, none of which this run was authorized to take: (a) run from an egress the platform does not challenge (the protocol's original Claude-in-Chrome-on-operator-machine assumption — a residential browser session very likely passes or never sees the challenge); (b) amend the protocol to allow a Konga-first frame with its own Checkpoint 0 — noting Konga robots.txt disallows `/search`, so the frame would have to be a category path; (c) treat NGA × split as blocked from managed runners.
2. **robots.txt unverifiable is still unhandled** (defect carried from 20260827 #3): jumia robots.txt itself sits behind the challenge; this run again treated unverifiable-robots as blocking.
3. **Run-level stop_reason still missing** (carried from 20260827 #3 defect list): `platform_blocked` remains a coined value not in Part 3 Table 1.
4. **Gap-code storage convention still unspecified** (carried, unresolved; scaffold xlsx still ships without gap-code columns).
5. **Managed-runner browser/TLS friction (environment note, not a protocol defect).** Chromium in this runner required (i) the agent-proxy CA imported into the NSS store and (ii) `--ssl-version-max=tls1.2` toward the MITM gateway before any external page would load. Recorded so future runs do not misread `ERR_CONNECTION_RESET` as a platform block — on 20260828 the distinction mattered.
6. **Token accounting** (carried from 20260827 #4): no runtime counter; estimates marked estimated.

---

## 4. File manifest

| File | SHA-256 |
|---|---|
| `evidence/network_probe_20260828.log` | `3442785cac75511aa5c582185693e5e7f73a484256daa0a64a95a4819f3fc286` |
| `evidence/robots_jumia_20260828.txt` (challenge page served in place of robots.txt) | `e85a8b1656cc7930c63a994e6470ea4001012041b12aab6d8768b1119bcc05ff` |
| `evidence/konga_robots_20260828.txt` | `863a5a7a362acc200cb17d763a981a598778bbb3096b4c2cea5445d1cfff1793` |
| `evidence/gate_jumia_home_retry.png` | `befdb57bcc7f0032c186541cc1f474a2caab4426f4383182017ab053175a8ec1` |
| `evidence/gate_jumia_robots.png` | `ed1c50fdb1a6809b1f3d5223bc7a98124eb5f3b2a933d8462cfa9e0528220d65` |
| `evidence/gate_jumia_category.png` | `fb9b814898700e0360a6d5edd4dd89c71632ed106404813d9c3d6468b80581a4` |
| `evidence/gate_jumia_turnstile_checkbox.png` | `63f3185b1c2707c6b5aa2c8d296f2a42e07cdd42550cf6b16664307e859887c8` |
| (full list) `evidence/gate_evidence_20260828.sha256` | — |
| `records/NGA_split_20260827_records.xlsx` (scaffold, 0 rows, unchanged — reusable) | `3e0f7f7ac60bfd3efc2a3627235499cfe71483d2646f966948e357b0d7575c16` |
| `snapshots/` | empty — no page qualified as a record source; N = 0 |
