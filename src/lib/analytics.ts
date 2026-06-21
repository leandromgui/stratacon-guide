import { supabase } from "@/integrations/supabase/client";

const SESSION_KEY = "dcon.analytics.sid";
const LAST_FAQ_KEY = "dcon.analytics.last_faq";

function uuid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

export function getSessionId(): string {
  if (typeof window === "undefined") return "";
  let sid = window.sessionStorage.getItem(SESSION_KEY);
  if (!sid) {
    sid = uuid();
    try {
      window.sessionStorage.setItem(SESSION_KEY, sid);
    } catch {
      /* storage indisponível */
    }
  }
  return sid;
}

export function rememberLastFaqQuestion(question: string) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(LAST_FAQ_KEY, question.slice(0, 500));
  } catch {
    /* ignore */
  }
}

export function getLastFaqQuestion(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage.getItem(LAST_FAQ_KEY);
  } catch {
    return null;
  }
}

export type AnalyticsPayload = {
  event_name: string;
  faq_question?: string | null;
  cta_label?: string | null;
  cta_target?: string | null;
  metadata?: Record<string, unknown>;
};

export function trackEvent(payload: AnalyticsPayload): void {
  if (typeof window === "undefined") return;
  const row = {
    event_name: payload.event_name.slice(0, 80),
    page_path: window.location.pathname.slice(0, 255),
    faq_question: payload.faq_question ? payload.faq_question.slice(0, 500) : null,
    cta_label: payload.cta_label ? payload.cta_label.slice(0, 200) : null,
    cta_target: payload.cta_target ? payload.cta_target.slice(0, 500) : null,
    session_id: getSessionId().slice(0, 80),
    referrer: (document.referrer || "").slice(0, 500) || null,
    user_agent: (navigator.userAgent || "").slice(0, 500),
    metadata: (payload.metadata ?? {}) as never,
  };
  // Fire-and-forget. Falhas de rede/RLS não devem quebrar a UI.
  void supabase
    .from("analytics_events")
    .insert(row)
    .then(({ error }) => {
      if (error && import.meta.env.DEV) {
        console.warn("[analytics] insert failed", error.message);
      }
    });
}