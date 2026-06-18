#!/usr/bin/env bash
# End-to-end test for ruleset validation pipeline.
#
# Guarantees:
#   1. ruleset-schema.jq always emits paths with numeric array indices
#      (never `[<rule-type>]` or other non-numeric keys inside brackets).
#   2. scripts/locate-json-path.py resolves every emitted path to a real
#      line/column inside the payload, never falling back to "1 1".
#
# Exits non-zero on the first failed assertion. Run from repo root:
#   bash scripts/test-ruleset-validation.sh

set -euo pipefail

ROOT=$(cd "$(dirname "$0")/.." && pwd)
SCHEMA="$ROOT/.github/workflows/ruleset-schema.jq"
RESOLVER="$ROOT/scripts/locate-json-path.py"

if ! command -v jq >/dev/null 2>&1; then
  echo "FAIL: jq is required" >&2; exit 2
fi
if ! command -v python3 >/dev/null 2>&1; then
  echo "FAIL: python3 is required" >&2; exit 2
fi
[ -f "$SCHEMA" ]   || { echo "FAIL: missing $SCHEMA" >&2; exit 2; }
[ -f "$RESOLVER" ] || { echo "FAIL: missing $RESOLVER" >&2; exit 2; }

WORK=$(mktemp -d)
trap 'rm -rf "$WORK"' EXIT

# A payload that intentionally violates several schema rules across both rule
# types so the validator must emit paths inside .rules[N]... for each.
cat > "$WORK/payload.json" <<'JSON'
{
  "name": "",
  "target": "branch",
  "enforcement": "active",
  "bypass_actors": [],
  "conditions": { "ref_name": { "include": [], "exclude": [] } },
  "rules": [
    { "type": "deletion" },
    {
      "type": "required_status_checks",
      "parameters": {
        "strict_required_status_checks_policy": "yes",
        "required_status_checks": [ { "context": "" } ]
      }
    },
    {
      "type": "pull_request",
      "parameters": {
        "required_approving_review_count": -1,
        "dismiss_stale_reviews_on_push": "no",
        "require_code_owner_review": false,
        "require_last_push_approval": false,
        "required_review_thread_resolution": true
      }
    }
  ]
}
JSON

ERRORS=$(jq -r -f "$SCHEMA" "$WORK/payload.json" || true)
if [ -z "$ERRORS" ]; then
  echo "FAIL: schema produced no errors for a deliberately invalid payload" >&2
  exit 1
fi

ERROR_COUNT=$(printf '%s\n' "$ERRORS" | grep -c '^ERROR ')
echo "Schema emitted $ERROR_COUNT error(s)."

# Extract paths.
PATHS=$(printf '%s\n' "$ERRORS" | sed -n 's/^ERROR | path=\([^|]*\) | .*/\1/p' | sed 's/[[:space:]]*$//')

# Assertion 1: every `[...]` segment must contain only digits.
BAD_PATHS=$(printf '%s\n' "$PATHS" | grep -E '\[[^0-9]+\]' || true)
if [ -n "$BAD_PATHS" ]; then
  echo "FAIL: schema emitted non-numeric array indices in path(s):" >&2
  printf '  %s\n' $BAD_PATHS >&2
  exit 1
fi
echo "OK: all $(printf '%s\n' "$PATHS" | wc -l | tr -d ' ') paths use numeric indices."

# Assertion 2: resolver returns a real line/col for every path.
FAIL=0
while IFS= read -r p; do
  [ -z "$p" ] && continue
  if ! LOC=$(python3 "$RESOLVER" "$p" "$WORK/payload.json" 2>/dev/null); then
    echo "FAIL: resolver errored for path: $p" >&2
    FAIL=1
    continue
  fi
  LINE=$(echo "$LOC" | awk '{print $1}')
  COL=$(echo "$LOC"  | awk '{print $2}')
  if [ "$LINE" = "1" ] && [ "$COL" = "1" ]; then
    echo "FAIL: resolver fell back to 1:1 for path: $p" >&2
    FAIL=1
    continue
  fi
  echo "  $p -> $LINE:$COL"
done <<< "$PATHS"

if [ "$FAIL" -ne 0 ]; then
  exit 1
fi

echo "PASS: all paths resolved to real line/column positions."