import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/")({
  head: () => ({
    meta: [
      { title: "Setores Atendidos | Médicos, E-commerce, Construção | DCON" },
      { name: "description", content: "Contabilidade especializada para médicos e clínicas, e-commerce, construção civil, tecnologia e holdings em Goiânia e em todo o Brasil. DCON." },
      { property: "og:title", content: "Setores Atendidos | Médicos, E-commerce, Construção | DCON" },
      { property: "og:description", content: "Contabilidade especializada para médicos e clínicas, e-commerce, construção civil, tecnologia e holdings em Goiânia e em todo o Brasil. DCON." },
      { property: "og:url", content: "https://www.dcon.cnt.br/segmentos" },
    ],
    links: [{ rel: "canonical", href: "https://www.dcon.cnt.br/segmentos" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Segmentos", "item": "/segmentos"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmentos"
      h1="Contabilidade especializada para diferentes tipos de empresa"
      intro="Cada segmento tem sua particularidade tributária. Atuamos com método específico em cada vertical."
      intent="contabilidade por segmento, contador especializado"
      
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
      { h2: "Saúde", h3: [{"title":"Médicos e clínicas","body":"PJ médica, sociedade médica e equiparação hospitalar conduzidos com base técnica."},{"title":"Odontologia","body":"Clínicas e consultórios com tratamento tributário e trabalhista correto."}] },
      { h2: "Comércio e digital", h3: [{"title":"E-commerce e marketplaces","body":"DIFAL, ICMS-ST e operação multiestadual sob controle."},{"title":"Comércio varejista","body":"ICMS-ST e fluxo de notas com revisão preventiva."},{"title":"Tecnologia e startups","body":"Operações SaaS, ISS, equity e Lei do Bem."}] },
      { h2: "Serviços e construção", h3: [{"title":"Prestadores de serviços","body":"ISS, retenções e regime adequado por porte."},{"title":"Construção civil e SPEs","body":"RET, patrimônio de afetação e SPE por obra."}] },
      { h2: "Patrimônio e família", h3: [{"title":"Holdings","body":"Estrutura patrimonial e familiar conduzida tecnicamente."},{"title":"Imobiliárias","body":"Administradoras e operações imobiliárias."},{"title":"Empresas familiares","body":"Sucessão, governança e profissionalização."}] },
      { h2: "Outros", h3: [{"title":"Condomínios","body":"Prestação de contas e folha técnica."},{"title":"Terceiro setor","body":"OSCs, associações e fundações com imunidade preservada."},{"title":"Produtor rural","body":"ITR, Funrural e LCDPR conduzidos com método."},{"title":"Franquias e redes","body":"Operações multi-CNPJ com padronização contábil."}] },
      { h2: "Por regime tributário", h3: [{"title":"Simples Nacional","body":"Anexo, fator R e sublimite revisados."},{"title":"Lucro Presumido","body":"Comparativo e enquadramento técnico."},{"title":"Lucro Real","body":"Apuração com revisão analítica."},{"title":"Empresas com pendências","body":"Saída de crise fiscal com plano."}] },
      ]}
    />
  );
}
