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
