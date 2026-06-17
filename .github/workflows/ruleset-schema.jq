# Schema validation for ruleset-payload.json
# Emits one "ERROR: ..." line per failed check; empty output means valid.

def err($msg): "ERROR: " + $msg;

def expect_type($path; $val; $expected):
  if $val == null then err($path + " is required (missing or null)")
  elif ($val | type) != $expected then
    err($path + " must be of type " + $expected + ", got " + ($val | type))
  else empty end;

def expect_nonempty_string($path; $val):
  ( expect_type($path; $val; "string") ),
  ( if ($val | type) == "string" and ($val | length) == 0
      then err($path + " must be a non-empty string") else empty end );

def expect_nonempty_array($path; $val):
  ( expect_type($path; $val; "array") ),
  ( if ($val | type) == "array" and ($val | length) == 0
      then err($path + " must be a non-empty array") else empty end );

def expect_enum($path; $val; $allowed):
  if ($val != null) and ($val | IN($allowed[])) then empty
  else err($path + " must be one of " + ($allowed | tostring) + ", got " + ($val | tostring)) end;

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
    | err(".conditions.ref_name.include[" + (.key|tostring) + "] must be a string, got " + (.value|type)) ),
( (.conditions.ref_name.exclude // []) | select(type == "array") | to_entries[]
    | select((.value | type) != "string")
    | err(".conditions.ref_name.exclude[" + (.key|tostring) + "] must be a string, got " + (.value|type)) ),

# --- rules array ---
expect_nonempty_array(".rules"; .rules),

# Each rule must be an object with a string type
( (.rules // []) | select(type == "array") | to_entries[]
    | select((.value | type) != "object")
    | err(".rules[" + (.key|tostring) + "] must be an object, got " + (.value|type)) ),
( (.rules // []) | select(type == "array") | to_entries[]
    | select((.value | type) == "object")
    | select((.value.type | type) != "string")
    | err(".rules[" + (.key|tostring) + "].type must be a string") ),

# --- required_status_checks rule ---
( [.rules[]? | select(.type == "required_status_checks")][0] // null ) as $rsc
| ( if $rsc == null then empty
    else
      ( expect_type(".rules[required_status_checks].parameters"; $rsc.parameters; "object") ),
      ( expect_type(
          ".rules[required_status_checks].parameters.strict_required_status_checks_policy";
          $rsc.parameters.strict_required_status_checks_policy; "boolean") ),
      ( expect_nonempty_array(
          ".rules[required_status_checks].parameters.required_status_checks";
          $rsc.parameters.required_status_checks) ),
      ( ($rsc.parameters.required_status_checks // []) | select(type == "array") | to_entries[]
          | select((.value | type) != "object")
          | err(".rules[required_status_checks].parameters.required_status_checks[" + (.key|tostring) + "] must be an object") ),
      ( ($rsc.parameters.required_status_checks // []) | select(type == "array") | to_entries[]
          | select((.value | type) == "object")
          | select((.value.context | type) != "string" or (.value.context | length) == 0)
          | err(".rules[required_status_checks].parameters.required_status_checks[" + (.key|tostring) + "].context must be a non-empty string") )
    end ),

# --- pull_request rule (optional) ---
( [.rules[]? | select(.type == "pull_request")][0] // null ) as $pr
| ( if $pr == null then empty
    else
      ( expect_type(".rules[pull_request].parameters"; $pr.parameters; "object") ),
      ( expect_type(
          ".rules[pull_request].parameters.required_approving_review_count";
          $pr.parameters.required_approving_review_count; "number") ),
      ( if (($pr.parameters.required_approving_review_count // -1) | type) == "number"
           and ($pr.parameters.required_approving_review_count < 0)
          then err(".rules[pull_request].parameters.required_approving_review_count must be >= 0")
          else empty end ),
      ( expect_type(
          ".rules[pull_request].parameters.dismiss_stale_reviews_on_push";
          $pr.parameters.dismiss_stale_reviews_on_push; "boolean") ),
      ( expect_type(
          ".rules[pull_request].parameters.require_code_owner_review";
          $pr.parameters.require_code_owner_review; "boolean") ),
      ( expect_type(
          ".rules[pull_request].parameters.require_last_push_approval";
          $pr.parameters.require_last_push_approval; "boolean") ),
      ( expect_type(
          ".rules[pull_request].parameters.required_review_thread_resolution";
          $pr.parameters.required_review_thread_resolution; "boolean") )
    end )