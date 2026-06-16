import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/conteudos")({
  head: () => ({
    meta: [
      { title: "Central de Conteúdo | DCON Contabilidade" },
      { name: "description", content: "Conteúdos para empresários que querem decidir com mais segurança: planejamento tributário, regularização, holding, eSocial e mais." },
      { property: "og:title", content: "Central de Conteúdo | DCON Contabilidade" },
      { property: "og:description", content: "Conteúdos para empresários que querem decidir com mais segurança: planejamento tributário, regularização, holding, eSocial e mais." },
      { property: "og:url", content: "/conteudos" },
    ],
    links: [{ rel: "canonical", href: "/conteudos" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Central de Conteúdo"
      h1="Conteúdos para empresários que querem decidir com mais segurança"
      
      intent="blog contabilidade, conteúdo tributário empresa"
      observation="Hub do SEO informacional. Cada cluster linka para sua LP/Solução."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
      { h2: "Planejamento Tributário", h3: ["Simples × Presumido × Real","Migração de regime","Erros comuns"] },
      { h2: "Regularização Fiscal", h3: ["Pendências Receita Federal","Parcelamentos","Transação tributária"] },
      { h2: "Regimes Tributários", h3: ["Simples Nacional 2026","Lucro Presumido","Lucro Real"] },
      { h2: "Holding e Patrimônio", h3: ["Holding familiar","ITCMD","Sucessão"] },
      { h2: "Departamento Pessoal e eSocial", h3: ["eSocial 2026","Pró-labore","PJ × CLT"] },
      { h2: "Comércio, ICMS e E-commerce", h3: ["DIFAL","ST varejo","Marketplace"] },
      { h2: "Saúde, clínicas e médicos", h3: ["PJ médica","Equiparação hospitalar","Sociedade médica"] },
      ]}
    />
  );
}
