import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/tecnologia-startups")({
  head: () => ({
    meta: [
      { title: "Tecnologia e Startups | Contabilidade Especializada DCON" },
      { name: "description", content: "Contabilidade para empresas de tecnologia, SaaS e startups. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:title", content: "Tecnologia e Startups | Contabilidade Especializada DCON" },
      { property: "og:description", content: "Contabilidade para empresas de tecnologia, SaaS e startups. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:url", content: "/segmentos/tecnologia-startups" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/tecnologia-startups" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para empresas de tecnologia, SaaS e startups"
      intro="Contabilidade técnica desenhada para a realidade tributária e operacional de tecnologia e startups."
      intent="contabilidade startup, contabilidade SaaS, Lei do Bem"
      observation="Cluster forte para captação."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
      { h2: "Particularidades do setor", h3: [{"title":"SaaS e licenciamento","body":"Tributação de software como serviço."},{"title":"ISS por município","body":"Discussão de local de prestação."},{"title":"Equity e vesting","body":"Reflexos contábeis e tributários para sócios e funcionários."}] },
      { h2: "Captação e investimento", h3: [{"title":"Mútuo conversível","body":"Tratamento contábil correto."},{"title":"Cap table","body":"Reflexo nas alterações societárias."},{"title":"Due diligence","body":"Contabilidade preparada para auditoria de investidor."}] },
      { h2: "Como a DCON atua", h3: [{"title":"Diagnóstico inicial","body":"Análise de regime e estrutura para a fase da empresa."},{"title":"Rotina técnica","body":"Fechamento mensal compatível com governança de investidor."},{"title":"Apoio em rodadas","body":"Documentação contábil pronta para due diligence."}] },
      { h2: "Lei do Bem e incentivos", h3: [{"title":"Lucro Real","body":"Pré-requisito para o benefício."},{"title":"Projetos elegíveis","body":"P&D com documentação adequada."},{"title":"Apuração técnica","body":"Suporte contábil ao benefício fiscal."}] },
      { h2: "Perguntas frequentes", h3: [{"title":"Simples serve para startup?","body":"Pode servir no início, mas precisa revisão."},{"title":"Como tratar funcionário com equity?","body":"Análise societária e trabalhista combinada."},{"title":"Atendem fora de Goiânia?","body":"Sim, online em todo o Brasil."}] },
      ]}
    />
  );
}
