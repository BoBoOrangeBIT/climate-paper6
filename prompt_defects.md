# prompt_defects.md — close-out defect register

Per GLACE_extraction_prompt_KEN_v1 Section 7: situations the prompts do not cover,
recorded at close-out. One entry per run that surfaced a defect.

## KEN_split_20260827

- **Uncovered case: operator-side network egress block.** Both prompts assume the
  runtime can reach the retail platforms, registries and manufacturer sites, and only
  define source-side failure codes (C: platform anti-scraping/login/page failure;
  C-geo: source geoblocked to foreign egress). In this run the execution environment's
  own egress policy denied every target domain at the proxy CONNECT stage, so the run
  terminated at Step 0 under the Interruption rule with nothing extracted.
  - Suggested prompt change: insert an environment pre-flight before Step 0 — one
    reachability probe of {PLATFORM_1} — with a distinct
    `stop_reason = environment_blocked`, so the failure is detected in seconds and is
    not conflated with platform-side blocking when comparing cells across countries.
  - Secondary note: the prompts name "Claude in Chrome" as the runtime. If a cell may
    be run from a cloud session instead, the prompt should state the minimum egress
    allowlist for the run (platform domains + registry + manufacturer domains) so the
    environment can be validated against it up front.

## KEN_split_20260828

- **Uncovered case: PLATFORM_1 gated by an interactive CAPTCHA while PLATFORM_2 is
  open.** Jumia served a Cloudflare "Verify you are human" (Turnstile) interstitial
  on the homepage and on the Step 1 search URL to the anonymous browser session;
  Kilimall rendered fully. Section 3 forbids bypassing a CAPTCHA and the Interruption
  rule forbids improvising, so the run stopped at Step 0 — but the prompt offers no
  authorized continuation: the ladder cannot start at level 2, Checkpoint 0 is
  defined on PLATFORM_1, and `frame_exhausted` misdescribes a level that was never
  enterable.
  - Suggested prompt change: define `stop_reason = platform_blocked` for an
    anti-bot-gated platform, and state explicitly whether the operator may authorize
    a P2-first frame (with a single-platform comparability note) or must move the
    run to a human-attended browser.
- **Pre-check definition of "reachable" is too weak for anti-bot platforms.** An
  HTTP-level probe accepts a 403 challenge interstitial as proof of reachability
  (any HTTP response counts), so a platform can pass the pre-check and still be
  closed to collection. Suggested fix: probe with the actual browser runtime and
  classify challenge interstitials (title "Just a moment...", response header
  `cf-mitigated: challenge`) as blocked.
- **Environment note for cloud reruns (fixed in-run):** the cloud egress gateway's
  TLS-inspection layer resets TLS ClientHellos carrying post-quantum (ML-KEM) key
  shares — the Chromium 141 default — so the browser runtime fails on every domain
  while curl succeeds, which can mislead the pre-check. Fix: Chromium enterprise
  policy `PostQuantumKeyAgreementEnabled: false` (ECH and DoH also off) in
  `/etc/chromium/policies/managed/`. This adjusts the client's own TLS offer, not
  certificate verification.
