import { useEffect, useState } from "react";
import { STORAGE_KEY } from "./CookieBanner";

/**
 * Botão de revogação/revisão do consentimento de cookies (LGPD).
 * Remove a escolha salva no localStorage e recarrega a página,
 * para que o CookieBanner volte a aparecer.
 */
export function ManageCookiesButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function resetConsent() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(STORAGE_KEY + ":at");
    } catch {
      /* ignore */
    }
    window.location.reload();
  }

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={resetConsent}
      className="inline-flex items-center rounded-sm border border-border bg-card px-5 py-3 text-[11px] uppercase tracking-[0.18em] hover:border-gold hover:text-gold transition-colors"
    >
      Revisar consentimento de cookies
    </button>
  );
}
