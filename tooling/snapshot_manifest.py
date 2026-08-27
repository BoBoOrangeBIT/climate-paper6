#!/usr/bin/env python3
"""Build or verify the sha256 manifest for a GLACE snapshots/ directory.

Usage:
  python3 snapshot_manifest.py snapshots/            # write snapshots/sha256_manifest.txt
  python3 snapshot_manifest.py snapshots/ --verify   # check files against the manifest

Manifest format is `sha256sum`-compatible: "<64-hex>  <filename>" per line, filenames
sorted, so `sha256sum -c sha256_manifest.txt` also works.
"""
import hashlib
import sys
from pathlib import Path

MANIFEST = "sha256_manifest.txt"


def sha256(path: Path) -> str:
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def main() -> int:
    if len(sys.argv) < 2:
        print(__doc__)
        return 2
    root = Path(sys.argv[1])
    verify = "--verify" in sys.argv[2:]
    files = sorted(
        p for p in root.rglob("*")
        if p.is_file() and p.name != MANIFEST and not p.name.startswith(".")
    )
    if verify:
        want = {}
        for line in (root / MANIFEST).read_text().splitlines():
            if line.strip():
                digest, name = line.split(None, 1)
                want[name.strip()] = digest
        bad = 0
        seen = set()
        for p in files:
            rel = str(p.relative_to(root))
            seen.add(rel)
            if rel not in want:
                print(f"UNLISTED  {rel}")
                bad += 1
            elif sha256(p) != want[rel]:
                print(f"MISMATCH  {rel}")
                bad += 1
        for rel in sorted(set(want) - seen):
            print(f"MISSING   {rel}")
            bad += 1
        print(f"{len(files)} files checked, {bad} problems")
        return 1 if bad else 0
    lines = [f"{sha256(p)}  {p.relative_to(root)}" for p in files]
    (root / MANIFEST).write_text("\n".join(lines) + ("\n" if lines else ""))
    print(f"wrote {root / MANIFEST} ({len(lines)} files)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
