import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a DCON | Contabilidade Consultiva em Goiânia" },
      { name: "description", content: "Conheça a DCON Serviços Contábeis: contabilidade técnica, fiscal e estratégica para empresas que precisam de segurança e clareza nas decisões." },
      { property: "og:title", content: "Sobre a DCON | Contabilidade Consultiva em Goiânia" },
      { property: "og:description", content: "Conheça a DCON Serviços Contábeis: contabilidade técnica, fiscal e estratégica para empresas que precisam de segurança e clareza nas decisões." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Sobre"
      h1="A DCON Serviços Contábeis"
      intro="Contabilidade técnica, fiscal e estratégica para empresários que precisam decidir com segurança."
      intent="DCON contabilidade, escritório contábil Goiânia, contabilidade consultiva"
      observation="Página-âncora de E-E-A-T. Linka para Leandro, Metodologia e Soluções."
      ctaPrimary={{ label: "Falar com a DCON", to: "/contato" }}
      ctaSecondary={{ label: "Conhecer a metodologia", to: "/sobre/metodologia" }}
      sections={[
      { h2: "Contabilidade com visão técnica, fiscal e empresarial", h3: ["História da DCON","Propósito","Posicionamento consultivo"] },
      { h2: "Responsabilidade técnica e CRC", h3: ["CRC ativo","Equipe técnica","Padrões de qualidade"] },
      { h2: "Nossa forma de atuação", h3: ["Diagnóstico inicial","Rotina contábil","Reuniões estratégicas"] },
      { h2: "Para quem a DCON é indicada", h3: ["Porte e maturidade","Setores atendidos","Empresas em transição"] },
      ]}
    />
  );
}
