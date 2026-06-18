#!/usr/bin/env bash
# Normalize resolver output for deterministic comparison.
# Usage: bash scripts/normalize-resolver-output.sh <input-file>
# The file is normalized in-place.
set -euo pipefail

f="${1:-}"
if [ -z "$f" ]; then
  echo "Usage: $0 <file>" >&2
  exit 2
fi
if [ ! -f "$f" ]; then
  echo "FAIL: file not found: $f" >&2
  exit 2
fi

# Normalize: trim trailing whitespace from non-empty lines,
# collapse consecutive spaces/tabs into a single space,
# ensure LF line endings, and guarantee exactly one trailing newline.
awk 'NF {gsub(/[ \t]+$/, ""); print}' "$f" > "$f.tmp"
tr -s ' \t' ' ' < "$f.tmp" > "$f.tmp2"
tr -d '\r' < "$f.tmp2" > "$f"
rm "$f.tmp" "$f.tmp2"
