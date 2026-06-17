import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/conteudos/")({
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
      intro="Artigos técnicos sobre tributos, regimes, holding, regularização e gestão fiscal — escritos para quem decide."
      intent="blog contabilidade, conteúdo tributário empresa"
      observation="Hub do SEO informacional. Cada cluster linka para sua LP/Solução."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
      { h2: "Planejamento Tributário", h3: [{"title":"Comparativo de regimes","body":"Simples × Presumido × Real, com cenários reais."},{"title":"Migração de regime","body":"Como e quando trocar sem prejuízo."},{"title":"Erros comuns","body":"O que vemos repetidamente em empresas."}] },
      { h2: "Regularização Fiscal", h3: [{"title":"Pendências federais","body":"Como regularizar e obter CND."},{"title":"Parcelamentos","body":"Refis, simplificado e transação tributária."},{"title":"CND negativa","body":"Caminho técnico para recuperar."}] },
      { h2: "Regimes Tributários", h3: [{"title":"Simples Nacional","body":"Anexos, fator R, sublimite."},{"title":"Lucro Presumido","body":"Quando vale a pena."},{"title":"Lucro Real","body":"Para quem é obrigatório e indicado."}] },
      { h2: "Holding e Patrimônio", h3: [{"title":"Holding familiar","body":"Quando vale, quando não vale."},{"title":"ITCMD","body":"Reflexo na sucessão."},{"title":"Sucessão patrimonial","body":"Decisões em vida."}] },
      { h2: "DP e eSocial", h3: [{"title":"eSocial atualizado","body":"O que mudou e como ajustar."},{"title":"Pró-labore","body":"Como definir tecnicamente."},{"title":"PJ × CLT","body":"Risco de vínculo e estruturação."}] },
      { h2: "Comércio e ICMS", h3: [{"title":"DIFAL","body":"Como funciona na prática."},{"title":"ICMS-ST","body":"Substituição tributária no varejo."},{"title":"Marketplace","body":"Como tributar venda digital."}] },
      { h2: "Saúde e clínicas", h3: [{"title":"PJ médica","body":"Estrutura segura para o médico."},{"title":"Equiparação hospitalar","body":"Quem tem direito."},{"title":"Sociedade entre médicos","body":"Como estruturar."}] },
      ]}
    />
  );
}
