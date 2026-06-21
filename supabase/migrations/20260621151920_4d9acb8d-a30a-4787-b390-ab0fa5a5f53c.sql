
-- 1) Tabela de regras
CREATE TABLE IF NOT EXISTS public.lead_followup_rules (
  status public.lead_status PRIMARY KEY,
  suggest_after_hours INTEGER NOT NULL DEFAULT 24,
  remind_after_hours INTEGER NOT NULL DEFAULT 24,
  enabled BOOLEAN NOT NULL DEFAULT TRUE,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE ON public.lead_followup_rules TO authenticated;
GRANT ALL ON public.lead_followup_rules TO service_role;

ALTER TABLE public.lead_followup_rules ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins view rules" ON public.lead_followup_rules;
CREATE POLICY "Admins view rules" ON public.lead_followup_rules
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins upsert rules" ON public.lead_followup_rules;
CREATE POLICY "Admins upsert rules" ON public.lead_followup_rules
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins update rules" ON public.lead_followup_rules;
CREATE POLICY "Admins update rules" ON public.lead_followup_rules
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 2) Trigger updated_at
DROP TRIGGER IF EXISTS lead_followup_rules_updated_at ON public.lead_followup_rules;
CREATE TRIGGER lead_followup_rules_updated_at
  BEFORE UPDATE ON public.lead_followup_rules
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 3) Seed das regras padrão
INSERT INTO public.lead_followup_rules (status, suggest_after_hours, remind_after_hours, enabled) VALUES
  ('novo', 24, 24, TRUE),
  ('contatado', 72, 48, TRUE),
  ('qualificado', 168, 72, TRUE),
  ('perdido', 0, 0, FALSE)
ON CONFLICT (status) DO NOTHING;

-- 4) Função: aplicar regra ao agendar próximo follow-up
CREATE OR REPLACE FUNCTION public.apply_followup_rule()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  rule_hours INTEGER;
  rule_enabled BOOLEAN;
BEGIN
  SELECT suggest_after_hours, enabled
    INTO rule_hours, rule_enabled
    FROM public.lead_followup_rules
   WHERE status = NEW.status;

  IF TG_OP = 'INSERT' THEN
    IF NEW.next_followup_at IS NULL AND rule_enabled AND rule_hours > 0 THEN
      NEW.next_followup_at := COALESCE(NEW.created_at, now()) + (rule_hours || ' hours')::interval;
    END IF;
    RETURN NEW;
  END IF;

  IF TG_OP = 'UPDATE' AND NEW.status IS DISTINCT FROM OLD.status THEN
    IF rule_enabled AND rule_hours > 0 THEN
      NEW.next_followup_at := now() + (rule_hours || ' hours')::interval;
    ELSE
      NEW.next_followup_at := NULL;
    END IF;
  END IF;

  RETURN NEW;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.apply_followup_rule() FROM PUBLIC, anon, authenticated;

DROP TRIGGER IF EXISTS leads_apply_followup_rule_insert ON public.leads;
CREATE TRIGGER leads_apply_followup_rule_insert
  BEFORE INSERT ON public.leads
  FOR EACH ROW EXECUTE FUNCTION public.apply_followup_rule();

DROP TRIGGER IF EXISTS leads_apply_followup_rule_update ON public.leads;
CREATE TRIGGER leads_apply_followup_rule_update
  BEFORE UPDATE OF status ON public.leads
  FOR EACH ROW EXECUTE FUNCTION public.apply_followup_rule();
