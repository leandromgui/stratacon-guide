import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { getDoc } from "../lib/dcon-content";
import { MethodBadge } from "../components/MethodBadge";
import { dconMethod } from "../lib/dconMethod";

export const Route = createFileRoute("/segmentos/produtor-rural")({
  head: () => ({
    meta: [
      { title: "Contabilidade para Produtor Rural | DCON Goiânia" },
      { name: "description", content: "Contabilidade para produtor rural em Goiás: Funrural, ITR, livro caixa do produtor e planejamento sucessório com a DCON." },
      { property: "og:title", content: "Contabilidade para Produtor Rural | DCON Goiânia" },
      { property: "og:description", content: "Contabilidade para produtor rural em Goiás: Funrural, ITR, livro caixa do produtor e planejamento sucessório com a DCON." },
      { property: "og:url", content: "/segmentos/produtor-rural" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/produtor-rural" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Segmentos", "item": "/segmentos"}, {"@type": "ListItem", "position": 3, "name": "Produtor Rural", "item": "/segmentos/produtor-rural"}]}),
      },
    ],
  }),
  component: Page,
});

const docDcon = getDoc(13);

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1={docDcon.h1}
      intro={docDcon.fraseComercial}
      intent="contabilidade produtor rural, contador agronegócio"
      observation="ITR, Funrural, LCDPR."
      audience={docDcon.audience}
      ctaPrimary={docDcon.ctas[0]}
      ctaSecondary={docDcon.ctas[1]}
      ctaTertiary={docDcon.ctas[2]}
      respostaValidada={docDcon.respostaValidada}
      pillarKey="produtor-rural"
      method={dconMethod}
      ctaVariant="opportunity"
      sections={[
        { h2: "Funrural x folha", lead: "Produtor rural não deve escolher Funrural ou folha por costume. A opção errada pode aumentar carga durante todo o ano.", h3: [
          { title: "Comercialização x folha", body: "Contribuição sobre receita bruta x opção pela folha simuladas anualmente, considerando PF, PJ e safra." },
          { title: "SENAR, RAT/GILRAT, FAP e terceiros", body: "Folha rural revisada com cada contribuição calculada e aplicada à realidade do negócio." },
        ]},
        { h2: "LC 224/2025", h3: [
          { title: "Impacto na comercialização", body: "Redução linear pode afetar contribuições e benefícios — produtor PF e PJ revisam efeito prático na contribuição sobre comercialização." },
          { title: "Segurado especial", body: "Exceções aplicáveis quando há enquadramento como segurado especial." },
        ]},
        { h2: "eSocial, EFD-Reinf e DCTFWeb", h3: [
          { title: "Eventos e retenções", body: "Eventos de folha, comercialização, retenções e classificação tributária enviados no prazo." },
          { title: "Rubricas e recolhimentos", body: "Tratamento técnico de rubricas para evitar incidência indevida e passivo previdenciário." },
        ]},
        { h2: "Regularidade e sucessão", h3: [
          { title: "ITR e LCDPR", body: "Declarações da propriedade e do Livro Caixa Digital do Produtor Rural revisadas para suportar crédito e CND." },
          { title: "Sucessão patrimonial", body: "Holding rural avaliada como ferramenta quando há propósito, documentação e análise econômica." },
        ]},
      ]}
    >
      <MethodBadge note="Produtor rural conduzido pelo protocolo DCON" />
    </PageScaffold>
  );
}
