import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/segmentos/empresas-familiares")({
  head: () => ({
    ...buildSeoHead({
      title: "Contabilidade para Empresas Familiares | DCON Goiânia",
      description: "Contabilidade para empresas familiares em Goiânia: sucessão, governança, holding e profissionalização da gestão com a DCON.",
      canonical: "/segmentos/empresas-familiares",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Segmentos", "item": "/segmentos"}, {"@type": "ListItem", "position": 3, "name": "Empresas Familiares", "item": "/segmentos/empresas-familiares"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para empresas familiares com sucessão e governança"
      intro="Contabilidade técnica desenhada para a realidade tributária e operacional de empresas familiares."
      intent="contabilidade empresa familiar, sucessão patrimonial"
      observation="Pré-venda de Holding."
      ctaPrimary={{ label: "Solicitar diagnóstico técnico inicial", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
        { h2: "Governança e separação PF/PJ", lead: "Empresa familiar precisa separar pessoa física, empresa e patrimônio comum antes que a sucessão vire litígio.", h3: [
          { title: "Acordo de sócios", body: "Regras de entrada e saída de herdeiros, deliberações estratégicas, distribuição de lucros e cláusulas restritivas escritas antes do conflito." },
          { title: "Pró-labore e distribuição", body: "Definição técnica do pró-labore por sócio e distribuição de lucros coerente com escrituração e regime tributário." },
          { title: "Mistura PF/PJ", body: "Conta da empresa não é caixa do sócio — mistura gera autuação, desconsideração e disputa entre herdeiros." },
        ]},
        { h2: "Sucessão e patrimônio", h3: [
          { title: "Holding patrimonial", body: "Avaliada como ferramenta quando há propósito, documentação e análise econômica — não como blindagem automática." },
          { title: "ITBI, ITCMD e ganho de capital", body: "Doação em vida, reserva de usufruto e cláusulas de incomunicabilidade calculadas antes da transferência." },
          { title: "IRPFM", body: "Sócios com renda anual acima de R$ 600 mil revisam lucros, dividendos, aluguéis e estrutura familiar diante do IRPFM." },
        ]},
        { h2: "Profissionalização contábil", h3: [
          { title: "Demonstrações auditáveis", body: "ECD, ECF, balanço e DRE produzidos como ferramenta de decisão — não apenas para a Receita." },
          { title: "Painel de gestão familiar", body: "Indicadores mensais entregues em reunião com a família para sustentar decisões patrimoniais e operacionais." },
        ]},
        { h2: "Riscos comuns", h3: [
          { title: "Sócio sem pró-labore", body: "Expõe a empresa à cobrança retroativa de INSS do segurado obrigatório." },
          { title: "Distribuição sem balanço", body: "Distribuição de lucros sem escrituração regular é reclassificada como pró-labore ou rendimento tributável." },
          { title: "Sucessão não planejada", body: "Inventário sem holding nem testamento custa mais e amplifica conflito familiar." },
        ]},
      ]}
    />
  );
}
