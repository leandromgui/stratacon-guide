import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "dcon:cookie-consent:v1";

type Consent = "accepted" | "essential" | null;

export function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Consent;
      setConsent(stored);
    } catch {
      setConsent(null);
    }
  }, []);

  function save(value: Exclude<Consent, null>) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
      localStorage.setItem(STORAGE_KEY + ":at", new Date().toISOString());
    } catch {
      /* ignore */
    }
    setConsent(value);
  }

  if (!mounted || consent) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-3 z-[60] md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md"
    >
      <div className="rounded-sm border border-border bg-background/95 backdrop-blur shadow-2xl p-5">
        <div className="text-[10px] uppercase tracking-[0.22em] text-gold mb-2">
          Privacidade — LGPD
        </div>
        <p className="text-sm leading-relaxed text-foreground">
          Utilizamos cookies para medir o uso do site, melhorar sua experiência e
          entender o interesse em nossos serviços. Você pode aceitar todos ou
          manter apenas os essenciais.
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Saiba mais na nossa{" "}
          <Link to="/privacidade" className="underline hover:text-primary">
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => save("essential")}
            className="inline-flex justify-center items-center rounded-sm border border-border bg-card px-4 py-2 text-xs uppercase tracking-[0.14em] hover:border-gold hover:text-gold"
          >
            Apenas essenciais
          </button>
          <button
            type="button"
            onClick={() => save("accepted")}
            className="inline-flex justify-center items-center rounded-sm bg-primary px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium text-primary-foreground hover:opacity-90"
          >
            Aceitar todos
          </button>
        </div>
      </div>
    </div>
  );
}