# GLACE run log — KEN × split — RUN_ID KEN_split_20260828

Prompts: GLACE_extraction_prompt_KEN_v1 (Phase A), GLACE_tracing_prompt_KEN_v1 (Phase B/C).
Operator: Claude Code remote session (cloud container with a custom egress allowlist per
`rerun_egress_allowlist.txt`), on standing authorization from dr.dr.boboorange@gmail.com
given 2026-08-28: checkpoints pre-approved, run to proceed without interactive
confirmation, results reviewed by the operator afterwards. Standing instruction for this
rerun: **if either Phase A platform is unreachable, stop per Section 3 — no workarounds.**

**Outcome: run terminated at Step 0 under the Section 3 Interruption rule.**
`stop_reason = platform_blocked_captcha` (gap code C on PLATFORM_1 — platform-side
anti-bot gate; this time a genuine Section-6 code-C case, unlike the 20260827 run's
environment-side block). Actual N = 0. No sampling frame was fixed, no listing was
opened, no record row exists. PLATFORM_2 (Kilimall) is fully collectable from this
environment; see "What the operator needs to decide" at the end.

---

## Part 1 — Run record

| Item | Value |
|---|---|
| Platform (intended) | Jumia Kenya, jumia.co.ke, marketplace |
| Full URL after sort fixed | none — the Step 1 search URL (`/catalog/?q=air+conditioner`) itself answers the CAPTCHA interstitial |
| Sort parameter / fallback | none — never reached |
| Interface language | n/a (only the Cloudflare interstitial was served) |
| Delivery city | not set (Step 0 not completable); `delivery_city_set = false` |
| Login state | anonymous throughout; no login, no member pricing, no coupons |
| Start / end (UTC) | 2026-08-28T04:20Z / 2026-08-28T05:05Z |
| Rank range | none |
| Actual N | 0 |
| Classification counts | accessory 0 · other-type 0 · no-new-price 0 · excluded 0 · qualified 0 |
| scanned_items / dilution | 0 / n/a |
| stop_reason | platform_blocked_captcha (Interruption rule, Section 3; gap code C) |
| category_total_listings | not measured |
| Brand set evolution | none |
| Cross-platform dedup removals | none |
| Collection window | 2026-08-28, inside the preferred late-August-to-September window; no promotional-event check performed since no extraction occurred |

### What happened

**Network egress works this time.** The environment was rebuilt with the custom
allowlist; the scripted pre-check (`tooling/precheck_egress.py`, raw output in
`reachability_precheck_raw.txt`) passed its gate: both Phase A platforms answered
(Jumia HTTP 403, Kilimall HTTP 200 — the script counts any HTTP response as
reachable), and 14 of 17 probed Phase B domains answered. Blocked at the network
layer, recorded for Phase B as C/C-geo had tracing been reached: www.epra.go.ke
(connection timeout), www.daikin.co.ke (connection reset), vonhouseholds.com and
mika.co.ke (gateway CONNECT 502 — not on the session allowlist).

**Browser runtime was brought up and verified.** Chromium 141 (Playwright-driven,
headless) through the session proxy, with the proxy CA trusted via the NSS store.
One environment defect had to be fixed first: the egress gateway's TLS-inspection
stack resets any TLS ClientHello carrying post-quantum (ML-KEM) key shares —
Chromium's default — so every Chromium connection died mid-handshake while curl
(classical ClientHello) passed. Fix: Chromium enterprise policy
`PostQuantumKeyAgreementEnabled: false` (plus ECH off, DoH off) in
`/etc/chromium/policies/managed/`. This configures our own client's TLS mode; it
does not touch TLS *verification* and does not interact with any target platform.
Control page (example.com) then rendered HTTP 200. Verified working before any
platform was judged.

**PLATFORM_1 is gated by an interactive CAPTCHA.** Two separate browser sessions
(04:37 and 04:43 UTC) received HTTP 403 with the Cloudflare interstitial
"Performing security verification" and an **interactive "Verify you are human"
checkbox (Turnstile)** on the homepage; the interstitial did not clear after 40 s
and 60 s of passive waiting. The exact Step 1 search URL is gated identically
(04:44 UTC). The full-page PNG + MHTML of the challenge page and of the Kilimall
control are in `snapshots/` with SHA-256 in the manifest; the per-URL results are
in `reachability_browser_check.txt`.

Section 3 states "Never bypass a CAPTCHA" and "If any constraint cannot be met,
stop immediately, log the reason and the current rank, and do not improvise a
workaround"; the operator's rerun instruction adds "stop if either Phase A
platform is unreachable, no workarounds". The checkbox was therefore never
interacted with, no alternate entry points or user-agent/fingerprint variations
were tried, and the run stopped at Step 0, rank 0.

**PLATFORM_2 is open.** Kilimall's homepage renders fully to the anonymous
visitor (HTTP 200, evidence snapshot on disk). No Kilimall extraction was
performed: the prompt's ladder fixes the frame on PLATFORM_1 first, escalation to
PLATFORM_2 presupposes a completed Jumia frame plus Checkpoint 0b, and the
standing instruction was to stop rather than adapt.

### Reachability summary (network layer + browser layer)

| Tier | Source | Network probe (curl) | Browser check |
|---|---|---|---|
| Phase A P1 | www.jumia.co.ke | HTTP 403 (counts as reachable) | **blocked — interactive CAPTCHA (C)** |
| Phase A P2 | www.kilimall.co.ke | HTTP 200 | renders fully |
| T1a | www.epra.go.ke | timeout — blocked (C) | not tested (Phase B not reached) |
| T1a | kebs.org / webstore.kebs.org | HTTP 200 | not tested |
| T1b intl | LG, Samsung, Hisense, Midea, Gree, TCL, Haier, Carrier | HTTP 200/301/302 | not tested |
| T1b intl | www.daikin.co.ke | connection reset — blocked (C) | not tested |
| T1b reg | ramtons.com, hotpoint.co.ke, bruhm.com | HTTP 200/301 | not tested |
| T1b reg | vonhouseholds.com, mika.co.ke | CONNECT 502 — blocked (C-geo/allowlist) | not tested |
| T1c | label images from Phase A | n/a | none exist (0 records) |

Armco, Nunix, Roch official domains: still not located (Step 9 not reached).

---

## Part 2 — Resource record

Recorded per step at completion, not reconstructed. The runtime exposes no exact token
counter; entries are estimates marked estimated.

| Step | Start–end (UTC) | Elapsed | Input tokens | Output tokens | Records |
|---|---|---|---|---|---|
| Egress pre-check (scripted) | 04:20–04:21 | 1 min | ~15k (estimated) | ~1k (estimated) | 0 |
| Browser runtime bring-up + TLS diagnosis | 04:21–04:37 | 16 min | ~120k (estimated) | ~8k (estimated) | 0 |
| 0 (env + address; terminated) — Jumia attempts ×2 + search URL + Kilimall control | 04:37–04:45 | 8 min | ~25k (estimated) | ~3k (estimated) | 0 |
| Deliverable assembly (template, log, manifest) | 04:45–05:05 | 20 min | ~40k (estimated) | ~12k (estimated) | 0 |
| 1–8 (extraction) | not started | — | — | — | — |
| 9–14 (tracing) | not started | — | — | — | — |
| Total | 04:20–05:05 | 45 min | ~200k (estimated) | ~24k (estimated) | 0 |

Per-record means: n/a (0 records).

---

## Part 3 — Defects

1. **Pre-check false positive on challenge pages.** `tooling/precheck_egress.py`
   treats any HTTP response as "reachable", so Jumia's 403 CAPTCHA interstitial
   passed the gate and the run formally started before the browser-level check
   found the platform closed. Suggested fix: probe with the actual browser runtime
   and classify a "Just a moment..." / Turnstile interstitial as blocked
   (detectable from the title and the `cf-mitigated: challenge` response header),
   with a distinct exit status. Logged to `prompt_defects.md`.
2. **Uncovered situation — P1 gated, P2 open.** The prompt has no authorized path
   when PLATFORM_1 is blocked by an anti-bot gate while PLATFORM_2 is collectable:
   the ladder cannot start at level 2, and `frame_exhausted` does not describe
   this state (nothing was exhausted — level 1 was never enterable). A
   `platform_blocked` stop_reason with an explicit operator decision point
   (authorize a P2-first frame, or move the run to an operator-side browser)
   would close the gap. Logged to `prompt_defects.md`.
3. **Environment defect (fixed in-run, documented for reruns): egress gateway
   resets post-quantum TLS ClientHellos.** Chromium 141 defaults to ML-KEM key
   shares (~1.7 KB ClientHello) and every proxied handshake was reset at the
   gateway's TLS-inspection layer; curl's classical handshake passed, which can
   mislead diagnosis. Fixed via Chromium enterprise policy
   `PostQuantumKeyAgreementEnabled: false` (with ECH and DoH also off) in
   `/etc/chromium/policies/managed/glace.json`. Without this, every "reachable"
   domain is unreachable to the browser runtime in this environment.
4. **Anti-bot posture differs by platform, which is itself a finding for the
   cross-country comparability note:** on this cloud egress IP, Jumia (Cloudflare
   Turnstile) is closed to automated collection while Kilimall imposes no gate.
   Any KEN cell collected from a datacenter network will systematically observe
   Kilimall-only unless a human-attended or residential-network browser is used
   for Jumia.

---

## What the operator needs to decide (run cannot proceed without one of these)

1. **Run Phase A from Claude in Chrome on your own machine** (the runtime the
   prompts were written for). On a residential IP the Turnstile interstitial
   typically either does not appear or can be legitimately completed by you, the
   human operator; the prompts' constraints bind the automated agent, not a human
   passing a security check addressed to them. Everything else is staged and this
   cell can run as written.
2. **Amend the prompt (v1.1) to authorize a Kilimall-first frame** for the case
   "P1 anti-bot-gated, P2 open", accepting the single-platform basis and its
   comparability note. This environment can then complete Phase A on Kilimall and
   the reachable Phase B tiers immediately.
3. **Retry later from this environment** in case the Jumia edge relaxes; the
   browser-level check is now scripted and cheap to repeat.

Phase B/C (tracing) was not started: it requires the completed Phase A file and the
approved Checkpoint 1 worklist, neither of which exists. The Phase B network-layer
reachability table above is carried forward for the eventual run; note EPRA
(www.epra.go.ke) timed out at the network layer and needs attention — if it is
blocked to foreign egress generally, T1a will be C-geo and the register may need the
periodic-PDF route per Step 9.
