
CREATE TABLE public.lead_followup_rules_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  status public.lead_status NOT NULL,
  prev_suggest_after_hours integer,
  new_suggest_after_hours integer,
  prev_remind_after_hours integer,
  new_remind_after_hours integer,
  prev_enabled boolean,
  new_enabled boolean,
  changed_by uuid,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.lead_followup_rules_history TO authenticated;
GRANT ALL ON public.lead_followup_rules_history TO service_role;

ALTER TABLE public.lead_followup_rules_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins view followup rules history"
  ON public.lead_followup_rules_history
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE OR REPLACE FUNCTION public.log_followup_rule_change()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    INSERT INTO public.lead_followup_rules_history (
      status, prev_suggest_after_hours, new_suggest_after_hours,
      prev_remind_after_hours, new_remind_after_hours,
      prev_enabled, new_enabled, changed_by
    ) VALUES (
      NEW.status, NULL, NEW.suggest_after_hours,
      NULL, NEW.remind_after_hours,
      NULL, NEW.enabled, auth.uid()
    );
    RETURN NEW;
  END IF;

  IF TG_OP = 'UPDATE' AND (
    NEW.suggest_after_hours IS DISTINCT FROM OLD.suggest_after_hours OR
    NEW.remind_after_hours IS DISTINCT FROM OLD.remind_after_hours OR
    NEW.enabled IS DISTINCT FROM OLD.enabled
  ) THEN
    INSERT INTO public.lead_followup_rules_history (
      status, prev_suggest_after_hours, new_suggest_after_hours,
      prev_remind_after_hours, new_remind_after_hours,
      prev_enabled, new_enabled, changed_by
    ) VALUES (
      NEW.status, OLD.suggest_after_hours, NEW.suggest_after_hours,
      OLD.remind_after_hours, NEW.remind_after_hours,
      OLD.enabled, NEW.enabled, auth.uid()
    );
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER lead_followup_rules_history_trigger
AFTER INSERT OR UPDATE ON public.lead_followup_rules
FOR EACH ROW EXECUTE FUNCTION public.log_followup_rule_change();
