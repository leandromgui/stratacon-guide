import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/segmentos/prestadores-servicos")({
  head: () => ({
    ...buildSeoHead({
      title: "Contabilidade para Prestadores de Serviço | DCON Goiânia",
      description: "Contabilidade para prestadores de serviço em Goiânia: ISS, retenções, fator R e planejamento tributário consultivo com a DCON.",
      canonical: "/segmentos/prestadores-servicos",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Segmentos", "item": "/segmentos"}, {"@type": "ListItem", "position": 3, "name": "Prestadores de Serviço", "item": "/segmentos/prestadores-servicos"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para prestadores de serviços e consultorias"
      intro="Contabilidade técnica desenhada para a realidade tributária e operacional de prestadores de serviços."
      intent="contabilidade prestadores de serviços, ISS Goiânia"
      observation="ISS e regimes de serviço."
      pillarKey="prestadores-servicos"
      ctaPrimary={{ label: "Solicitar diagnóstico técnico inicial", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
        { h2: "Regime tributário e Fator R", lead: "Em serviços, a escolha de regime depende de folha, margem, ISS e perfil de clientes — não de costume.", h3: [
          { title: "Simples x Presumido x Real", body: "Anexo III x Anexo V (Fator R), Presumido com presunção correta e Real para margens baixas com créditos relevantes." },
          { title: "Pró-labore técnico", body: "Definição com base na realidade societária, regime e distribuição de lucros — sem isso vira INSS retroativo." },
        ]},
        { h2: "ISS, retenções e NFS-e Nacional", h3: [
          { title: "Código de serviço e município", body: "Local da prestação, código de serviço, alíquota e retenção revisados — erro vira disputa entre municípios e bitributação." },
          { title: "Retenção PCC e IRRF", body: "PIS/Cofins/CSLL e IRRF retidos por tomador PJ conferidos para sustentar PER/DCOMP e evitar perda de crédito." },
          { title: "NFS-e Nacional", body: "ME e EPP do Simples prestadoras de serviço se preparam para padrão nacional, emissor web ou API, códigos de serviço e IBS/CBS." },
        ]},
        { h2: "Reforma Tributária em serviços", h3: [
          { title: "Decisão de 2027", body: "Setembro/2026 é mês de decisão — empresas B2B do Simples simulam competitividade, crédito para clientes, margem e preço antes do regime regular." },
          { title: "Lucro Presumido e LC 224/2025", body: "Serviços com presunção 32% têm acréscimo de 10% sobre o excedente de R$ 5 milhões/ano ou R$ 1,25 milhão/trimestre — IRPJ 1T/2026 e CSLL 2T/2026." },
        ]},
        { h2: "Riscos comuns", h3: [
          { title: "Pejotização mal feita", body: "Funcionário PJ que opera como CLT vira passivo trabalhista — FGTS, INSS, férias e 13º retroativos." },
          { title: "Distribuição sem balanço", body: "Distribuição de lucros sem ECD/ECF regular é reclassificada como pró-labore." },
          { title: "ISS recolhido no município errado", body: "Tomador retém no município dele, prestador recolhe no dele — sem documentação técnica os dois pagam." },
        ]},
      ]}
    />
  );
}
