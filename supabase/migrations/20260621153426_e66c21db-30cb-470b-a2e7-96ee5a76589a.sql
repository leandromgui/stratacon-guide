
-- Settings (singleton)
CREATE TABLE public.seo_audit_settings (
  id BOOLEAN PRIMARY KEY DEFAULT TRUE,
  site_url TEXT,
  schedule TEXT NOT NULL DEFAULT 'off',
  enabled BOOLEAN NOT NULL DEFAULT FALSE,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_by UUID,
  CONSTRAINT seo_audit_settings_singleton CHECK (id = TRUE),
  CONSTRAINT seo_audit_settings_schedule_chk CHECK (schedule IN ('off','daily','weekly'))
);

GRANT SELECT, INSERT, UPDATE ON public.seo_audit_settings TO authenticated;
GRANT ALL ON public.seo_audit_settings TO service_role;
ALTER TABLE public.seo_audit_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins read seo settings" ON public.seo_audit_settings
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins upsert seo settings" ON public.seo_audit_settings
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update seo settings" ON public.seo_audit_settings
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

INSERT INTO public.seo_audit_settings (id, schedule, enabled) VALUES (TRUE, 'off', FALSE)
  ON CONFLICT (id) DO NOTHING;

-- Runs
CREATE TABLE public.seo_audit_runs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  triggered_by UUID,
  trigger_source TEXT NOT NULL DEFAULT 'manual',
  site_url TEXT NOT NULL,
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  finished_at TIMESTAMPTZ,
  total INTEGER NOT NULL DEFAULT 0,
  ok_count INTEGER NOT NULL DEFAULT 0,
  failed_count INTEGER NOT NULL DEFAULT 0,
  indexed_pass INTEGER NOT NULL DEFAULT 0,
  canonical_mismatch INTEGER NOT NULL DEFAULT 0,
  redirects_ok INTEGER NOT NULL DEFAULT 0,
  error TEXT
);

GRANT SELECT, INSERT, UPDATE ON public.seo_audit_runs TO authenticated;
GRANT ALL ON public.seo_audit_runs TO service_role;
ALTER TABLE public.seo_audit_runs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins read audit runs" ON public.seo_audit_runs
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE INDEX seo_audit_runs_started_at_idx ON public.seo_audit_runs (started_at DESC);

-- Results
CREATE TABLE public.seo_audit_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  run_id UUID NOT NULL REFERENCES public.seo_audit_runs(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  kind TEXT NOT NULL,
  ok BOOLEAN NOT NULL,
  verdict TEXT,
  coverage_state TEXT,
  indexing_state TEXT,
  robots_txt_state TEXT,
  page_fetch_state TEXT,
  google_canonical TEXT,
  user_canonical TEXT,
  last_crawl_time TIMESTAMPTZ,
  crawled_as TEXT,
  error TEXT
);

GRANT SELECT, INSERT ON public.seo_audit_results TO authenticated;
GRANT ALL ON public.seo_audit_results TO service_role;
ALTER TABLE public.seo_audit_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins read audit results" ON public.seo_audit_results
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE INDEX seo_audit_results_run_idx ON public.seo_audit_results (run_id);
CREATE INDEX seo_audit_results_url_idx ON public.seo_audit_results (url);
