// Google Analytics 4 — mede pageviews, cliques no WhatsApp e no CTA de diagnóstico.
const MEASUREMENT_ID = "G-0S43W12ENN";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function gtagEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

let initialized = false;

export function initGoogleAnalytics() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer.push(args);
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, { send_page_view: true });

  // Cliques em CTAs: WhatsApp (wa.me) e Diagnóstico (/diagnostico)
  document.addEventListener(
    "click",
    (event) => {
      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";

      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        gtagEvent("click_whatsapp", {
          page_path: window.location.pathname,
          link_text: (anchor.textContent ?? "").trim().slice(0, 100),
        });
        return;
      }

      if (href === "/diagnostico" || href.startsWith("/diagnostico")) {
        gtagEvent("click_cta_diagnostico", {
          page_path: window.location.pathname,
          link_text: (anchor.textContent ?? "").trim().slice(0, 100),
        });
      }
    },
    true
  );

  // Pageviews em navegação SPA
  let lastPath = window.location.pathname;
  const trackPageView = () => {
    if (window.location.pathname === lastPath) return;
    lastPath = window.location.pathname;
    gtagEvent("page_view", { page_path: lastPath });
  };
  const origPush = history.pushState.bind(history);
  history.pushState = (...args) => {
    origPush(...args);
    trackPageView();
  };
  window.addEventListener("popstate", trackPageView);
}
