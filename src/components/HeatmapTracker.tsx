import { useEffect } from "react";
import { trackEvent } from "../lib/analytics";

/**
 * Coleta sinais leves de engajamento para gerar heatmap:
 * - scroll_depth: marcos 25/50/75/100% (uma vez por sessão na página).
 * - page_click: cliques com x/y normalizados (0..1) sobre o documento,
 *   bloco semântico mais próximo (data-heatmap-section, h2 ou seletor) e
 *   pergunta de FAQ quando aplicável.
 *
 * Cliques em links já rastreados pelo bloco de FAQ (faq_cta_click) são
 * ignorados aqui para evitar duplicidade — o heatmap registra o "ruído"
 * de interesse, não a conversão.
 */
export function HeatmapTracker({ pageKey }: { pageKey: string }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reached = new Set<number>();
    const milestones = [25, 50, 75, 100];

    function currentDepth(): number {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const viewport = window.innerHeight;
      const full = Math.max(doc.scrollHeight, document.body.scrollHeight);
      if (full <= viewport) return 100;
      return Math.min(100, Math.round(((scrollTop + viewport) / full) * 100));
    }

    let rafId = 0;
    function onScroll() {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        const d = currentDepth();
        for (const m of milestones) {
          if (d >= m && !reached.has(m)) {
            reached.add(m);
            trackEvent({
              event_name: "scroll_depth",
              metadata: { depth: m, page_key: pageKey },
            });
          }
        }
      });
    }

    function describeTarget(el: HTMLElement): {
      section: string | null;
      faq: string | null;
      label: string | null;
    } {
      const sectionEl = el.closest<HTMLElement>("[data-heatmap-section]");
      const detailsEl = el.closest<HTMLElement>("details[data-faq-question]");
      const headingEl = el.closest("section, article")?.querySelector("h2");
      const linkEl = el.closest<HTMLElement>("a, button, summary");
      return {
        section:
          sectionEl?.dataset.heatmapSection ??
          headingEl?.textContent?.trim().slice(0, 120) ??
          el.tagName.toLowerCase(),
        faq: detailsEl?.dataset.faqQuestion ?? null,
        label: linkEl?.textContent?.trim().slice(0, 200) ?? null,
      };
    }

    let lastClickAt = 0;
    function onClick(e: MouseEvent) {
      const now = Date.now();
      if (now - lastClickAt < 120) return; // debounce duplo-click
      lastClickAt = now;
      const target = e.target as HTMLElement | null;
      if (!target) return;
      // Evita duplicidade com faq_cta_click (links dentro do bloco de FAQ).
      if (target.closest("a") && target.closest("details[data-faq-question]")) return;

      const doc = document.documentElement;
      const fullW = Math.max(doc.scrollWidth, document.body.scrollWidth);
      const fullH = Math.max(doc.scrollHeight, document.body.scrollHeight);
      const x = (e.pageX || (e.clientX + window.scrollX)) / Math.max(fullW, 1);
      const y = (e.pageY || (e.clientY + window.scrollY)) / Math.max(fullH, 1);
      const { section, faq, label } = describeTarget(target);
      trackEvent({
        event_name: "page_click",
        faq_question: faq,
        cta_label: label,
        metadata: {
          page_key: pageKey,
          x: Math.round(x * 10000) / 10000,
          y: Math.round(y * 10000) / 10000,
          page_height: fullH,
          page_width: fullW,
          section,
          tag: target.tagName.toLowerCase(),
        },
      });
    }

    // Marco inicial (entrada na página).
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("click", onClick, true);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [pageKey]);

  return null;
}