import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Entrar | DCON Serviços Contábeis" },
      { name: "description", content: "Acesso restrito à equipe DCON. Entre com e-mail ou Google para acessar o painel administrativo." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (active && data.session) navigate({ to: "/admin/leads" });
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (session) navigate({ to: "/admin/leads" });
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, [navigate]);

  async function handleEmail(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setLoading(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin + "/auth" },
        });
        if (error) throw error;
        setInfo("Conta criada. Verifique seu e-mail para confirmar o acesso.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha na autenticação.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setError(null);
    setLoading(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + "/auth",
    });
    if (result.error) {
      setError(result.error instanceof Error ? result.error.message : "Falha no Google.");
      setLoading(false);
      return;
    }
    if (result.redirected) return;
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <Link to="/" className="block text-center font-display text-2xl text-secondary">DCON</Link>
        <div className="mt-1 text-center text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Acesso restrito
        </div>

        <div className="mt-10 border border-border bg-card p-8 rounded-sm">
          <h1 className="font-display text-2xl tracking-tight">
            {mode === "signin" ? "Entrar" : "Criar conta"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Área administrativa da DCON. O acesso ao painel depende de aprovação interna.
          </p>

          <button
            type="button"
            onClick={handleGoogle}
            disabled={loading}
            className="mt-6 w-full inline-flex items-center justify-center gap-3 border border-border bg-background px-4 py-3 text-sm hover:border-gold hover:text-gold disabled:opacity-60"
          >
            <span className="font-medium">Continuar com Google</span>
          </button>

          <div className="my-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px flex-1 bg-border" /> ou e-mail <span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={handleEmail} className="space-y-3">
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              className="w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm focus:border-gold outline-none"
            />
            <input
              type="password"
              required
              minLength={8}
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha (mín. 8 caracteres)"
              className="w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm focus:border-gold outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex justify-center items-center bg-primary px-4 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Aguarde…" : mode === "signin" ? "Entrar" : "Criar conta"}
            </button>
          </form>

          {error && <p className="mt-4 text-xs text-destructive">{error}</p>}
          {info && <p className="mt-4 text-xs text-muted-foreground">{info}</p>}

          <div className="mt-6 text-center text-xs text-muted-foreground">
            {mode === "signin" ? (
              <>
                Ainda não tem acesso?{" "}
                <button onClick={() => setMode("signup")} className="text-foreground underline">
                  Criar conta
                </button>
              </>
            ) : (
              <>
                Já tem acesso?{" "}
                <button onClick={() => setMode("signin")} className="text-foreground underline">
                  Entrar
                </button>
              </>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-[11px] text-muted-foreground">
          Voltar para o{" "}
          <Link to="/" className="underline">site público</Link>.
        </p>
      </div>
    </div>
  );
}