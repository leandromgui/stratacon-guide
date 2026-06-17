import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/sobre/leandro")({
  head: () => ({
    meta: [
      { title: "Leandro Matsuoka Guimarães | Responsável Técnico DCON" },
      { name: "description", content: "Responsável técnico da DCON. Formação, áreas de especialidade tributária e societária e visão sobre contabilidade consultiva." },
      { property: "og:title", content: "Leandro Matsuoka Guimarães | Responsável Técnico DCON" },
      { property: "og:description", content: "Responsável técnico da DCON. Formação, áreas de especialidade tributária e societária e visão sobre contabilidade consultiva." },
      { property: "og:url", content: "/sobre/leandro" },
    ],
    links: [{ rel: "canonical", href: "/sobre/leandro" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Responsável técnico"
      h1="Responsabilidade técnica, visão tributária e experiência empresarial"
      intro="Leandro Matsuoka Guimarães conduz tecnicamente todos os pareceres, estudos tributários e decisões societárias entregues pela DCON."
      intent="Leandro Matsuoka contador, contador Goiânia consultivo"
      observation="Schema Person + sameAs redes. Aumenta autoridade de artigos assinados."
      ctaPrimary={{ label: "Agendar conversa técnica", to: "/contato" }}
      ctaSecondary={{ label: "Ler artigos", to: "/conteudos" }}
      sections={[
      { h2: "Formação e atuação", h3: [{"title":"Registro profissional","body":"Contador com CRC ativo, atuando há anos com empresas de diferentes portes e regimes."},{"title":"Graduação e especializações","body":"Formação em Ciências Contábeis com estudos complementares em tributário e societário."},{"title":"Trajetória empresarial","body":"Experiência prática com gestão de empresas, não apenas escrituração."}] },
      { h2: "Áreas de especialidade", h3: [{"title":"Tributário","body":"Planejamento, comparativo de regimes e recuperação de créditos com base técnica."},{"title":"Societário","body":"Reorganizações, alterações contratuais, acordos de sócios e governança."},{"title":"Holdings e patrimônio","body":"Estruturação patrimonial, sucessão e proteção familiar dentro da lei."}] },
      { h2: "Visão sobre contabilidade consultiva", h3: [{"title":"Decisão antes de declaração","body":"Contabilidade existe para subsidiar decisão, não só para cumprir obrigação acessória."},{"title":"Risco fiscal é risco do negócio","body":"Quem ignora o fiscal hoje paga em multa, juros e perda de oportunidade amanhã."},{"title":"Linguagem do empresário","body":"Tradução do tecniquês para a decisão de quem assina o cheque."}] },
      { h2: "Publicações e conteúdo técnico", h3: [{"title":"Artigos","body":"Conteúdo autoral sobre tributário, regimes, holding e regularização."},{"title":"Lives e entrevistas","body":"Participações em pautas técnicas voltadas ao empresário."},{"title":"Material de apoio","body":"Checklists e guias técnicos disponibilizados na Central de Conteúdo."}] },
      ]}
    />
  );
}
