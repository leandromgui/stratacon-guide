import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/segmentos/imobiliarias")({
  head: () => ({
    ...buildSeoHead({
      title: "Contabilidade para Imobiliárias em Goiânia | DCON",
      description: "Contabilidade para imobiliárias em Goiânia: comissões, locação, intermediação e definição do regime tributário ideal com a DCON.",
      canonical: "/segmentos/imobiliarias",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Segmentos", "item": "/segmentos"}, {"@type": "ListItem", "position": 3, "name": "Imobiliárias", "item": "/segmentos/imobiliarias"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para imobiliárias e administradoras"
      intro="Contabilidade técnica desenhada para a realidade tributária e operacional de imobiliárias."
      intent="contabilidade imobiliária, administradora de imóveis"
      observation="Ponte para Holding."
      pillarKey="imobiliarias"
      ctaPrimary={{ label: "Solicitar diagnóstico técnico inicial", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
        { h2: "Comissão de corretagem, DIMOB e Carnê-Leão", lead: "Imobiliária administra dinheiro de terceiros — receita própria e repasse precisam estar escriturados de forma rastreável.", h3: [
          { title: "Receita de corretagem", body: "Comissão de venda e locação reconhecida pelo regime de competência, separada do repasse ao locador/vendedor." },
          { title: "DIMOB", body: "Declaração de Informações sobre Atividades Imobiliárias entregue com locadores, locatários, valores e referências corretas." },
          { title: "Carnê-Leão do locador PF", body: "Orientação técnica ao proprietário PF sobre IRPF, redutores e quando migrar para holding ou PJ." },
        ]},
        { h2: "ISS e regime tributário", h3: [
          { title: "ISS sobre corretagem", body: "Município, código de serviço, retenção e local da prestação revisados — alíquota varia e retenção indevida vira disputa." },
          { title: "Simples x Presumido", body: "Anexo do Simples (com Fator R) comparado com Lucro Presumido considerando folha, distribuição de lucros e margem real." },
        ]},
        { h2: "IBS/CBS em locações", lead: "PF com mais de 3 imóveis locados e receita anual acima de R$ 240 mil entra no radar de IBS/CBS — locação residencial tem redutor de 70%.", h3: [
          { title: "Locador PF x holding", body: "Comparativo entre tributação na PF (IRPF + IBS/CBS) e na holding (IRPJ/CSLL + IBS/CBS) com cálculo dos redutores e do CIB." },
          { title: "Contratos e CIB", body: "Contratos antigos revisados para se adequar ao Cadastro Imobiliário Brasileiro e ao novo cenário de emissão de documento fiscal de locação." },
        ]},
        { h2: "Riscos comuns", h3: [
          { title: "Mistura entre receita e repasse", body: "Receita da imobiliária somada ao repasse infla faturamento e pode jogar a empresa em outro regime." },
          { title: "DIMOB inconsistente", body: "Divergência entre DIMOB, contrato e Carnê-Leão do locador vira malha fiscal para os dois lados." },
          { title: "Tratamento manual da carteira", body: "Carteira de aluguéis sem sistema gera erro de repasse, multa contratual e perda de comissão." },
        ]},
      ]}
    />
  );
}
