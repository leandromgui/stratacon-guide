import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/segmentos/odontologia")({
  head: () => ({
    ...buildSeoHead({
      title: "Contabilidade para Dentistas em Goiânia | DCON",
      description: "Contabilidade para odontologia em Goiânia: regime tributário ideal, fator R e gestão fiscal para consultórios e clínicas odontológicas.",
      canonical: "/segmentos/odontologia",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Segmentos", "item": "/segmentos"}, {"@type": "ListItem", "position": 3, "name": "Odontologia", "item": "/segmentos/odontologia"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para dentistas e clínicas odontológicas"
      intro="Contabilidade técnica desenhada para a realidade tributária e operacional de odontologia."
      intent="contabilidade para dentistas, clínica odontológica"
      observation="Sub-cluster de Saúde."
      ctaPrimary={{ label: "Solicitar diagnóstico técnico inicial", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
        { h2: "Fator R, Anexo III e Simples Nacional", lead: "Clínica odontológica decide o anexo do Simples mês a mês — Fator R mal calculado dispara mudança automática para Anexo V.", h3: [
          { title: "Anexo III x Anexo V", body: "Pró-labore, folha, receita bruta, ISS e margem simulados para sustentar enquadramento no Anexo III." },
          { title: "Fator R mensal", body: "Cálculo acompanhado mensalmente para evitar surpresa na apuração do PGDAS-D." },
        ]},
        { h2: "PF x PJ na odontologia", h3: [
          { title: "Receita Saúde", body: "Dentista PF: recibo eletrônico, Livro Caixa, Carnê-Leão, despesas dedutíveis e risco de malha revisados." },
          { title: "Comparativo técnico", body: "PF com IRPF até 27,5% comparado com PJ no Simples — quando atividade, Fator R, ISS e pró-labore permitem." },
          { title: "Sociedade entre dentistas", body: "Distribuição entre sócios, pró-labore, contratos de cooperação e repasses de convênios escriturados de forma rastreável." },
        ]},
        { h2: "Equiparação hospitalar em odontologia", h3: [
          { title: "Viabilidade técnica", body: "Lucro Presumido com atividades equiparáveis a hospitalares — IRPJ 8% e CSLL 12% apenas sobre receita qualificada, cumpridos os requisitos sanitários e estruturais." },
          { title: "Segregação de receita", body: "Consultas simples separadas de procedimentos qualificados — sem isso a tese não se sustenta em fiscalização." },
        ]},
        { h2: "Folha, eSocial e pejotização", h3: [
          { title: "Auxiliares e ASB/TSB", body: "Contratação CLT, jornada, adicional de insalubridade e CCT da categoria aplicadas corretamente." },
          { title: "Dentista PJ na clínica", body: "Risco de vínculo (Lei 11.196/05 e jurisprudência) analisado antes de contratar profissional por CNPJ." },
        ]},
      ]}
    />
  );
}
