# Schema validation for ruleset-payload.json
# Emits one "ERROR: ..." line per failed check; empty output means valid.

# Structured error: one line per failure, includes path, expected type, actual
# type, and the offending value (truncated).
def _short($v):
  ($v | tojson) as $s
  | if ($s | length) > 80 then ($s[0:77] + "...") else $s end;

def fail($path; $expected; $val; $reason):
  "ERROR | path=" + $path
  + " | expected=" + $expected
  + " | actual=" + ($val | type)
  + " | value=" + _short($val)
  + " | reason=" + $reason;

def expect_type($path; $val; $expected):
  if $val == null then
    fail($path; $expected; $val; "required field is missing or null")
  elif ($val | type) != $expected then
    fail($path; $expected; $val; "wrong type")
  else empty end;

def expect_nonempty_string($path; $val):
  ( expect_type($path; $val; "string") ),
  ( if ($val | type) == "string" and ($val | length) == 0
      then fail($path; "non-empty string"; $val; "string is empty") else empty end );

def expect_nonempty_array($path; $val):
  ( expect_type($path; $val; "array") ),
  ( if ($val | type) == "array" and ($val | length) == 0
      then fail($path; "non-empty array"; $val; "array is empty") else empty end );

def expect_enum($path; $val; $allowed):
  if ($val != null) and ($val | IN($allowed[])) then empty
  else fail($path; "enum " + ($allowed | tojson); $val; "value not in allowed set") end;

# --- Top-level required fields and types ---
expect_nonempty_string(".name"; .name),
expect_enum(".target"; .target; ["branch","tag"]),
expect_enum(".enforcement"; .enforcement; ["active","evaluate","disabled"]),
expect_type(".bypass_actors"; .bypass_actors; "array"),

# --- conditions.ref_name.include / exclude ---
expect_type(".conditions"; .conditions; "object"),
expect_type(".conditions.ref_name"; .conditions.ref_name; "object"),
expect_nonempty_array(".conditions.ref_name.include"; .conditions.ref_name.include),
expect_type(".conditions.ref_name.exclude"; .conditions.ref_name.exclude; "array"),

# Every include/exclude entry must be a string
( (.conditions.ref_name.include // []) | select(type == "array") | to_entries[]
    | select((.value | type) != "string")
    | fail(".conditions.ref_name.include[" + (.key|tostring) + "]"; "string"; .value; "branch pattern must be a string") ),
( (.conditions.ref_name.exclude // []) | select(type == "array") | to_entries[]
    | select((.value | type) != "string")
    | fail(".conditions.ref_name.exclude[" + (.key|tostring) + "]"; "string"; .value; "branch pattern must be a string") ),

# --- rules array ---
expect_nonempty_array(".rules"; .rules),

# Each rule must be an object with a string type
( (.rules // []) | select(type == "array") | to_entries[]
    | select((.value | type) != "object")
    | fail(".rules[" + (.key|tostring) + "]"; "object"; .value; "rule entry must be an object") ),
( (.rules // []) | select(type == "array") | to_entries[]
    | select((.value | type) == "object")
    | select((.value.type | type) != "string")
    | fail(".rules[" + (.key|tostring) + "].type"; "string"; .value.type; "rule type discriminator must be a string") ),

# --- required_status_checks rule ---
( (.rules // []) | (map(.type? == "required_status_checks") | index(true)) ) as $rsc_i
| ( if $rsc_i == null then null else .rules[$rsc_i] end ) as $rsc
| ( ".rules[" + ($rsc_i | tostring) + "]" ) as $rsc_p
| ( if $rsc == null then empty
    else
      ( expect_type($rsc_p + ".parameters"; $rsc.parameters; "object") ),
      ( expect_type(
          $rsc_p + ".parameters.strict_required_status_checks_policy";
          $rsc.parameters.strict_required_status_checks_policy; "boolean") ),
      ( expect_nonempty_array(
          $rsc_p + ".parameters.required_status_checks";
          $rsc.parameters.required_status_checks) ),
      ( ($rsc.parameters.required_status_checks // []) | select(type == "array") | to_entries[]
          | select((.value | type) != "object")
          | fail($rsc_p + ".parameters.required_status_checks[" + (.key|tostring) + "]"; "object"; .value; "status check entry must be an object") ),
      ( ($rsc.parameters.required_status_checks // []) | select(type == "array") | to_entries[]
          | select((.value | type) == "object")
          | select((.value.context | type) != "string" or (.value.context | length) == 0)
          | fail($rsc_p + ".parameters.required_status_checks[" + (.key|tostring) + "].context"; "non-empty string"; .value.context; "status check context must be a non-empty string") )
    end ),

# --- pull_request rule (optional) ---
( (.rules // []) | (map(.type? == "pull_request") | index(true)) ) as $pr_i
| ( if $pr_i == null then null else .rules[$pr_i] end ) as $pr
| ( ".rules[" + ($pr_i | tostring) + "]" ) as $pr_p
| ( if $pr == null then empty
    else
      ( expect_type($pr_p + ".parameters"; $pr.parameters; "object") ),
      ( expect_type(
          $pr_p + ".parameters.required_approving_review_count";
          $pr.parameters.required_approving_review_count; "number") ),
      ( if (($pr.parameters.required_approving_review_count // -1) | type) == "number"
           and ($pr.parameters.required_approving_review_count < 0)
          then fail($pr_p + ".parameters.required_approving_review_count"; "number >= 0"; $pr.parameters.required_approving_review_count; "value must be >= 0")
          else empty end ),
      ( expect_type(
          $pr_p + ".parameters.dismiss_stale_reviews_on_push";
          $pr.parameters.dismiss_stale_reviews_on_push; "boolean") ),
      ( expect_type(
          $pr_p + ".parameters.require_code_owner_review";
          $pr.parameters.require_code_owner_review; "boolean") ),
      ( expect_type(
          $pr_p + ".parameters.require_last_push_approval";
          $pr.parameters.require_last_push_approval; "boolean") ),
      ( expect_type(
          $pr_p + ".parameters.required_review_thread_resolution";
          $pr.parameters.required_review_thread_resolution; "boolean") )
    end )