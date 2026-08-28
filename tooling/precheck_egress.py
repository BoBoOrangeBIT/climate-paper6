#!/usr/bin/env python3
"""Probe every GLACE source domain through the session's network.

Run this FIRST in any rerun environment. If any Phase A platform is unreachable,
the extraction run cannot start (extraction prompt Section 3, Interruption).

Usage: python3 tooling/precheck_egress.py [--out runs/<RUN_ID>/reachability_precheck_raw.txt]
Exit status: 0 if both Phase A platforms are reachable, 1 otherwise.
"""
import argparse
import datetime
import subprocess
import sys

# (tier, label, domain) — mirrors the run log's pre-check table.
SOURCES = [
    ("Phase A P1", "Jumia Kenya", "www.jumia.co.ke"),
    ("Phase A P2", "Kilimall", "www.kilimall.co.ke"),
    ("T1a", "EPRA appliance register", "www.epra.go.ke"),
    ("T1a", "KEBS", "kebs.org"),
    ("T1a", "KEBS webstore", "webstore.kebs.org"),
    ("T1b intl", "LG", "www.lg.com"),
    ("T1b intl", "Samsung", "www.samsung.com"),
    ("T1b intl", "Hisense", "global.hisense.com"),
    ("T1b intl", "Midea", "www.midea.com"),
    ("T1b intl", "Gree", "global.gree.com"),
    ("T1b intl", "TCL", "www.tcl.com"),
    ("T1b intl", "Haier", "www.haier.com"),
    ("T1b intl", "Daikin Kenya", "www.daikin.co.ke"),
    ("T1b intl", "Carrier", "www.carrier.com"),
    ("T1b reg", "Ramtons", "ramtons.com"),
    ("T1b reg", "Von", "vonhouseholds.com"),
    ("T1b reg", "Von / Hotpoint", "hotpoint.co.ke"),
    ("T1b reg", "Bruhm", "bruhm.com"),
    ("T1b reg", "Mika", "mika.co.ke"),
]

PHASE_A = {"www.jumia.co.ke", "www.kilimall.co.ke"}


def probe(domain, timeout=12):
    """Return (ok, detail). ok means an HTTP response came back from the target."""
    try:
        r = subprocess.run(
            ["curl", "-sS", "-o", "/dev/null", "-w", "%{http_code}",
             "--max-time", str(timeout), f"https://{domain}/"],
            capture_output=True, text=True, timeout=timeout + 8,
        )
    except subprocess.TimeoutExpired:
        return False, "timeout"
    code = r.stdout.strip()
    if r.returncode != 0 or code in ("", "000"):
        return False, (r.stderr.strip().splitlines() or ["unknown error"])[-1]
    return True, f"HTTP {code}"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", help="also write the raw results to this file")
    args = ap.parse_args()

    stamp = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    lines = [f"# Egress reachability pre-check — {stamp}",
             "# method: curl https://DOMAIN/ from the session network"]
    blocked_phase_a = []
    for tier, label, domain in SOURCES:
        ok, detail = probe(domain)
        mark = "OK    " if ok else "BLOCK "
        line = f"{mark} {tier:<10} {label:<24} {domain:<24} {detail}"
        print(line, flush=True)
        lines.append(f"{domain} | {tier} | {label} | {'reachable' if ok else 'blocked'} | {detail}")
        if not ok and domain in PHASE_A:
            blocked_phase_a.append(domain)

    if args.out:
        with open(args.out, "w") as f:
            f.write("\n".join(lines) + "\n")
        print(f"\nwrote {args.out}")

    if blocked_phase_a:
        print(f"\nFAIL: Phase A platform(s) unreachable: {', '.join(blocked_phase_a)}."
              "\nDo not start the run — fix the environment's network access first.")
        return 1
    print("\nOK: both Phase A platforms reachable. Blocked Phase B sources, if any,"
          "\nare recorded above and carry gap code C / C-geo in the run log.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
