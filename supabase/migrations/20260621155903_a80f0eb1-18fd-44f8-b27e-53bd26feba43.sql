
CREATE TABLE public.analytics_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_name TEXT NOT NULL,
  page_path TEXT,
  faq_question TEXT,
  cta_label TEXT,
  cta_target TEXT,
  session_id TEXT,
  referrer TEXT,
  user_agent TEXT,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX analytics_events_event_name_idx ON public.analytics_events (event_name, created_at DESC);
CREATE INDEX analytics_events_faq_question_idx ON public.analytics_events (faq_question) WHERE faq_question IS NOT NULL;
CREATE INDEX analytics_events_session_idx ON public.analytics_events (session_id) WHERE session_id IS NOT NULL;

GRANT INSERT ON public.analytics_events TO anon, authenticated;
GRANT SELECT ON public.analytics_events TO authenticated;
GRANT ALL ON public.analytics_events TO service_role;

ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert analytics events"
  ON public.analytics_events FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(event_name) BETWEEN 1 AND 80
    AND (page_path IS NULL OR char_length(page_path) <= 255)
    AND (faq_question IS NULL OR char_length(faq_question) <= 500)
    AND (cta_label IS NULL OR char_length(cta_label) <= 200)
    AND (cta_target IS NULL OR char_length(cta_target) <= 500)
    AND (session_id IS NULL OR char_length(session_id) <= 80)
    AND (referrer IS NULL OR char_length(referrer) <= 500)
    AND (user_agent IS NULL OR char_length(user_agent) <= 500)
  );

CREATE POLICY "Admins can read analytics events"
  ON public.analytics_events FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS session_id TEXT,
  ADD COLUMN IF NOT EXISTS last_faq_question TEXT;

CREATE INDEX IF NOT EXISTS leads_session_idx ON public.leads (session_id) WHERE session_id IS NOT NULL;
