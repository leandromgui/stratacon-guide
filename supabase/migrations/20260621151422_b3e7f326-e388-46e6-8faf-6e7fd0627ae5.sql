
-- 1) Enum de status
DO $$ BEGIN
  CREATE TYPE public.lead_status AS ENUM ('novo', 'contatado', 'qualificado', 'perdido');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- 2) Normalizar valores existentes antes de converter coluna
UPDATE public.leads SET status = 'perdido' WHERE status IN ('descartado', 'lost');
UPDATE public.leads SET status = 'novo' WHERE status NOT IN ('novo','contatado','qualificado','perdido');

-- 3) Converter coluna status para enum
ALTER TABLE public.leads
  ALTER COLUMN status DROP DEFAULT,
  ALTER COLUMN status TYPE public.lead_status USING status::public.lead_status,
  ALTER COLUMN status SET DEFAULT 'novo'::public.lead_status,
  ALTER COLUMN status SET NOT NULL;

-- 4) Campos relevantes
ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS assigned_to UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS lost_reason TEXT,
  ADD COLUMN IF NOT EXISTS last_contact_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS next_followup_at TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS leads_assigned_to_idx ON public.leads (assigned_to);
CREATE INDEX IF NOT EXISTS leads_next_followup_idx ON public.leads (next_followup_at);

-- 5) Tabela de histórico
CREATE TABLE IF NOT EXISTS public.lead_status_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE CASCADE,
  from_status public.lead_status,
  to_status public.lead_status NOT NULL,
  changed_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS lead_status_history_lead_idx ON public.lead_status_history (lead_id, created_at DESC);

GRANT SELECT, INSERT ON public.lead_status_history TO authenticated;
GRANT ALL ON public.lead_status_history TO service_role;

ALTER TABLE public.lead_status_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins can view lead history" ON public.lead_status_history;
CREATE POLICY "Admins can view lead history"
  ON public.lead_status_history FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can insert lead history" ON public.lead_status_history;
CREATE POLICY "Admins can insert lead history"
  ON public.lead_status_history FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin') AND changed_by = auth.uid());

-- 6) Gatilho que registra mudanças automaticamente
CREATE OR REPLACE FUNCTION public.log_lead_status_change()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF TG_OP = 'UPDATE' AND NEW.status IS DISTINCT FROM OLD.status THEN
    INSERT INTO public.lead_status_history (lead_id, from_status, to_status, changed_by, note)
    VALUES (
      NEW.id,
      OLD.status,
      NEW.status,
      auth.uid(),
      CASE WHEN NEW.status = 'perdido' THEN NEW.lost_reason ELSE NULL END
    );
  END IF;
  RETURN NEW;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.log_lead_status_change() FROM PUBLIC, anon, authenticated;

DROP TRIGGER IF EXISTS leads_status_history_trigger ON public.leads;
CREATE TRIGGER leads_status_history_trigger
  AFTER UPDATE OF status ON public.leads
  FOR EACH ROW EXECUTE FUNCTION public.log_lead_status_change();
