#!/usr/bin/env bash
# Unit tests for scripts/normalize-resolver-output.sh.
# Covers spaces, tabs, CRLF line endings, trailing whitespace and trailing newline.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SCRIPT="$ROOT/scripts/normalize-resolver-output.sh"

if [ ! -x "$SCRIPT" ] && [ ! -f "$SCRIPT" ]; then
  echo "FAIL: script not found at $SCRIPT" >&2
  exit 1
fi

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

pass=0
fail=0

# assert_eq <name> <expected> <actual>
assert_eq() {
  local name="$1" expected="$2" actual="$3"
  if [ "$expected" = "$actual" ]; then
    pass=$((pass + 1))
    echo "ok - $name"
  else
    fail=$((fail + 1))
    echo "FAIL - $name"
    echo "  expected: $(printf '%s' "$expected" | od -c | head -n 3)"
    echo "  actual:   $(printf '%s' "$actual"   | od -c | head -n 3)"
  fi
}

# run <input-bytes> -> echoes normalized output
run() {
  local input="$1"
  local f="$TMP/in.$$.$RANDOM.txt"
  printf '%b' "$input" > "$f"
  bash "$SCRIPT" "$f" >/dev/null
  cat "$f"
  rm -f "$f"
}

# 1. Collapses multiple spaces into one
out="$(run 'a    b   c\n')"
assert_eq "collapses consecutive spaces" "$(printf 'a b c\n')" "$out"

# 2. Collapses tabs (and mixed tabs+spaces) into a single space
out="$(run 'a\t\tb\t \tc\n')"
assert_eq "collapses tabs into single space" "$(printf 'a b c\n')" "$out"

# 3. Trims trailing spaces and tabs from lines
out="$(run 'hello   \nworld\t\t\n')"
assert_eq "trims trailing whitespace" "$(printf 'hello\nworld\n')" "$out"

# 4. Converts CRLF to LF
out="$(run 'line1\r\nline2\r\n')"
assert_eq "converts CRLF to LF" "$(printf 'line1\nline2\n')" "$out"

# 5. Guarantees a single trailing newline even when input lacks one
out="$(run 'no-newline')"
assert_eq "ensures trailing newline" "$(printf 'no-newline\n')" "$out"

# 6. Empty lines are dropped (documents current awk 'NF' behavior)
out="$(run 'a\n\n\nb\n')"
assert_eq "drops blank lines" "$(printf 'a\nb\n')" "$out"

# 7. Idempotent: running twice yields the same result
f="$TMP/idem.txt"
printf 'x\t\ty   z\r\n\n' > "$f"
bash "$SCRIPT" "$f" >/dev/null
first="$(cat "$f")"
bash "$SCRIPT" "$f" >/dev/null
second="$(cat "$f")"
assert_eq "idempotent normalization" "$first" "$second"

# 8. Missing argument exits non-zero
if bash "$SCRIPT" >/dev/null 2>&1; then
  fail=$((fail + 1))
  echo "FAIL - missing arg should exit non-zero"
else
  pass=$((pass + 1))
  echo "ok - missing arg exits non-zero"
fi

# 9. Missing file exits non-zero
if bash "$SCRIPT" "$TMP/does-not-exist" >/dev/null 2>&1; then
  fail=$((fail + 1))
  echo "FAIL - missing file should exit non-zero"
else
  pass=$((pass + 1))
  echo "ok - missing file exits non-zero"
fi

echo
echo "Passed: $pass  Failed: $fail"
[ "$fail" -eq 0 ]