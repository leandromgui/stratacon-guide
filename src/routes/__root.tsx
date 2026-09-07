import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { initGoogleAnalytics } from "../lib/gtag";
import { SiteLayout } from "../components/SiteLayout";

const SITE_URL = "https://www.dcon.cnt.br";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "DCON Serviços Contábeis",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo-dcon.png`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+55-62-3223-7010",
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
    {
      "@type": "ContactPoint",
      telephone: "+55-62-99289-0898",
      contactType: "customer support",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/dcon-servicos-contabeis/",
    "https://www.instagram.com/dconservicoscontabeis/",
    "https://www.facebook.com/dconservicoscontabeis",
  ],
};

function NotFoundComponent() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = window.setTimeout(() => {
      window.location.href = "/";
    }, 10000);
    return () => window.clearTimeout(id);
  }, []);
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
      <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Erro 404</div>
      <h1 className="mt-6 font-display text-4xl md:text-6xl font-light tracking-tight leading-[1.05]">
        Página não encontrada — <span className="font-semibold">mas estamos aqui.</span>
      </h1>
      <p className="mt-6 text-muted-foreground text-[15px] md:text-[17px] leading-relaxed">
        O endereço acessado não existe ou foi movido. Você será redirecionado para a página inicial em 10 segundos.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center bg-secondary text-secondary-foreground px-6 py-3 text-[12px] uppercase tracking-[0.18em] hover:bg-primary"
        >
          Voltar para o início
        </Link>
        <Link
          to="/contato"
          className="inline-flex items-center border border-gold text-gold px-6 py-3 text-[12px] uppercase tracking-[0.18em] hover:bg-gold hover:text-gold-foreground"
        >
          Solicitar diagnóstico →
        </Link>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DCON Serviços Contábeis · Contabilidade em Goiânia" },
      { name: "description", content: "Contabilidade consultiva técnica — fiscal, tributária e empresarial — para empresas que precisam de segurança e estratégia. DCON Serviços Contábeis — Goiânia." },
      { name: "author", content: "DCON Serviços Contábeis" },
      { name: "language", content: "pt-BR" },
      { name: "rating", content: "general" },
      { name: "revisit-after", content: "7 days" },
      { name: "geo.region", content: "BR-GO" },
      { name: "geo.placename", content: "Goiânia, Goiás, Brasil" },
      { name: "geo.position", content: "-16.699;-49.267" },
      { name: "ICBM", content: "-16.699, -49.267" },
      { property: "og:site_name", content: "DCON Serviços Contábeis" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "DCON Serviços Contábeis — Consultoria Contábil e Tributária em Goiânia" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "DCON · Consultoria Contábil e Tributária em Goiânia" },
      { name: "twitter:description", content: "Contabilidade consultiva técnica para empresas que precisam de segurança fiscal, clareza nos números e decisões mais inteligentes. Goiânia, GO." },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "google-site-verification", content: "UcqtKPxeErR6WHA69PJktbmJnfCgiyvU_CL5G6TL2Gc" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORGANIZATION_JSONLD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    initGoogleAnalytics();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout />
    </QueryClientProvider>
  );
}
