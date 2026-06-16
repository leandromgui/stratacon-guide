import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/sobre/leandro")({
  head: () => ({
    meta: [
      { title: "Leandro Matsuoka Guimarães | Responsável Técnico DCON" },
      { name: "description", content: "Responsável técnico da DCON: formação, áreas de especialidade tributária e societária, e visão sobre contabilidade consultiva." },
      { property: "og:title", content: "Leandro Matsuoka Guimarães | Responsável Técnico DCON" },
      { property: "og:description", content: "Responsável técnico da DCON: formação, áreas de especialidade tributária e societária, e visão sobre contabilidade consultiva." },
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
      
      intent="Leandro Matsuoka contador, contador Goiânia consultivo"
      observation="Schema Person + sameAs redes. Aumenta autoridade de artigos assinados."
      ctaPrimary={{ label: "Agendar conversa técnica", to: "/contato" }}
      ctaSecondary={{ label: "Ler artigos", to: "/conteudos" }}
      sections={[
      { h2: "Formação e atuação", h3: ["CRC ativo","Graduação e especializações","Trajetória empresarial"] },
      { h2: "Áreas de especialidade", h3: ["Tributário","Societário","Holdings e patrimônio"] },
      { h2: "Visão sobre contabilidade consultiva", h3: ["Filosofia de atuação","Metodologia","Casos relevantes"] },
      { h2: "Publicações e conteúdo técnico", h3: ["Artigos","Lives","Entrevistas"] },
      ]}
    />
  );
}
