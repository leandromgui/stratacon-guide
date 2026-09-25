GRANT INSERT ON public.leads TO anon;

CREATE POLICY "Anon can insert leads"
  ON public.leads FOR INSERT
  TO anon
  WITH CHECK (
    char_length(name) BETWEEN 2 AND 100
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND char_length(email) <= 255
    AND char_length(whatsapp) BETWEEN 8 AND 20
    AND char_length(interest) BETWEEN 2 AND 160
    AND (source_page IS NULL OR char_length(source_page) <= 255)
    AND (referrer IS NULL OR char_length(referrer) <= 500)
    AND (utm_source IS NULL OR char_length(utm_source) <= 120)
    AND (utm_medium IS NULL OR char_length(utm_medium) <= 120)
    AND (utm_campaign IS NULL OR char_length(utm_campaign) <= 160)
    AND (user_agent IS NULL OR char_length(user_agent) <= 500)
    AND status = 'novo'
  );