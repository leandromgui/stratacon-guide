import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/contabilidade-empresarial")({
  head: () => ({
    meta: [
      { title: "Contabilidade Empresarial em Goiânia | DCON" },
      { name: "description", content: "Contabilidade empresarial consultiva em Goiânia com relatórios gerenciais, fechamento auditável e leitura técnica para decisões seguras." },
      { property: "og:title", content: "Contabilidade Empresarial em Goiânia | DCON" },
      { property: "og:description", content: "Contabilidade empresarial consultiva em Goiânia com relatórios gerenciais, fechamento auditável e leitura técnica para decisões seguras." },
      { property: "og:url", content: "/solucoes/contabilidade-empresarial" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/contabilidade-empresarial" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Contabilidade empresarial com visão técnica e estratégica"
      intro="Escrituração, balanços e relatórios gerenciais entregues no prazo — com revisão técnica e devolutiva consultiva."
      intent="contabilidade para empresas Goiânia, escritório contábil empresarial"
      observation="Página-mãe que distribui para Segmentos e Regimes."
      ctaPrimary={{ label: "Solicitar proposta", to: "/contato" }}
      ctaSecondary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      sections={[
      { h2: "O que está incluso", h3: [{"title":"Escrituração contábil completa","body":"Lançamentos contábeis revisados mensalmente e fechamentos sem pendências acumuladas."},{"title":"Balanço e DRE gerencial","body":"Demonstrações entregues com leitura em linguagem do empresário, não só do contador."},{"title":"Obrigações acessórias","body":"ECD, ECF, DCTF e demais entregas no prazo, com controle ativo de calendário."},{"title":"Suporte técnico permanente","body":"Canal direto com responsável definido para dúvidas contábeis e tributárias."}] },
      { h2: "Para quem é indicado", h3: [{"title":"Empresas com faturamento estabilizado","body":"Negócios que precisam de relatórios confiáveis para decidir."},{"title":"Sócios com governança formal","body":"Empresas onde decisão precisa estar suportada por número auditável."},{"title":"Operações de média e alta complexidade","body":"Múltiplos CNAEs, estoque, filiais ou faturamento por marketplace."}] },
      { h2: "Como entregamos", h3: [{"title":"Onboarding técnico","body":"Migração estruturada com checklist e auditoria de entrada da base anterior."},{"title":"Rotina mensal","body":"Calendário fiscal compartilhado, fechamento revisado e relatórios padronizados."},{"title":"Reuniões periódicas","body":"Revisão estratégica de regime, sócios e indicadores gerenciais."}] },
      { h2: "Diferenciais técnicos", h3: [{"title":"Revisão cruzada","body":"Lançamentos passam por mais de um par de olhos antes da entrega."},{"title":"Visão integrada","body":"Contábil, fiscal, trabalhista e societário no mesmo time — sem terceirização."},{"title":"Acompanhamento consultivo","body":"Não esperamos a empresa perguntar. Avisamos antes."}] },
      { h2: "Perguntas frequentes", h3: [{"title":"Quanto custa?","body":"Depende do regime, volume e complexidade. Orçamento após diagnóstico."},{"title":"Já tenho contador, posso trocar?","body":"Sim. Conduzimos a transição sem perder prazos."},{"title":"Atendem fora de Goiânia?","body":"Sim. Atendemos remotamente em todo o Brasil."}] },
      ]}
    />
  );
}
