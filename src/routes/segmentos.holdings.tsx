import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { MethodBadge } from "../components/MethodBadge";
import { dconMethod } from "../lib/dconMethod";

export const Route = createFileRoute("/segmentos/holdings")({
  head: () => ({
    meta: [
      { title: "Contabilidade para Holdings em Goiânia | DCON" },
      { name: "description", content: "Contabilidade para holdings patrimoniais e familiares em Goiânia: governança, sucessão e eficiência tributária com a DCON." },
      { property: "og:title", content: "Contabilidade para Holdings em Goiânia | DCON" },
      { property: "og:description", content: "Contabilidade para holdings patrimoniais e familiares em Goiânia: governança, sucessão e eficiência tributária com a DCON." },
      { property: "og:url", content: "/segmentos/holdings" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/holdings" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Segmentos", "item": "/segmentos"}, {"@type": "ListItem", "position": 3, "name": "Holdings", "item": "/segmentos/holdings"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para holdings familiares e patrimoniais"
      intro="Contabilidade técnica desenhada para a realidade tributária e operacional de holdings."
      intent="contabilidade holding, holding familiar Goiânia"
      observation="Ticket alto, intenção qualificada."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      pillarKey="holdings"
      method={dconMethod}
      ctaVariant="opportunity"
      sections={[
        { h2: "Quando faz sentido constituir", lead: "Holding não é blindagem automática nem redução garantida de imposto — é instrumento quando há propósito, documentação e contabilidade adequada.", h3: [
          { title: "Patrimônio relevante", body: "Imóveis, participações societárias e ativos que justifiquem o custo de constituição e manutenção." },
          { title: "Sucessão em vista", body: "Famílias que querem antecipar a transição em vida e reduzir litígio futuro." },
          { title: "Múltiplas operações", body: "Sócio com várias empresas que precisa organizar participações e governança." },
        ]},
        { h2: "Quando NÃO faz sentido", h3: [
          { title: "Patrimônio pequeno", body: "Custo de manutenção, contabilidade e governança maior do que o benefício esperado." },
          { title: "Ganho de capital latente alto", body: "Imóveis muito valorizados podem disparar tributação relevante na integralização ou venda futura." },
          { title: "Ausência de finalidade real", body: "Tentativa de blindagem artificial, sem operação ou propósito documentado, é desconsiderada." },
          { title: "Conflito familiar não resolvido", body: "Sem acordo prévio entre sócios, a holding amplifica disputas em vez de organizá-las." },
        ]},
        { h2: "Aluguéis, IBS/CBS e CIB", lead: "PF com mais de 3 imóveis locados e receita anual acima de R$ 240 mil entra no radar de IBS/CBS — locação residencial tem redutor de 70%.", h3: [
          { title: "Holding x PF", body: "Comparativo entre tributação na PF (IRPF + IBS/CBS) e na holding (IRPJ/CSLL + IBS/CBS) com cálculo dos redutores e do CIB." },
          { title: "Contratos e cadastro", body: "Contratos antigos revisados para se adequar ao Cadastro Imobiliário Brasileiro e à emissão de documento fiscal de locação." },
        ]},
        { h2: "IRPFM, ITBI, ITCMD e custos", h3: [
          { title: "IRPFM", body: "Sócios com renda anual acima de R$ 600 mil revisam distribuição de lucros, holding e estrutura familiar diante do IRPFM." },
          { title: "ITBI e ganho de capital", body: "Integralização avaliada por município e atividade — em parte dos casos o ITBI torna o custo proibitivo." },
          { title: "ITCMD", body: "Doação em vida com reserva de usufruto e cláusulas restritivas calculadas antes da transferência." },
        ]},
        { h2: "Operação contínua", h3: [
          { title: "Escrituração e ECD/ECF", body: "Holding com escrituração descuidada perde o benefício tributário e vira passivo silencioso em fiscalização." },
          { title: "Governança familiar", body: "Acordo de sócios, regras de entrada e saída de herdeiros e reunião familiar estruturada para sustentar decisões patrimoniais." },
        ]},
      ]}
    >
      <MethodBadge note="Atendimento conduzido pelo protocolo DCON" />
    </PageScaffold>
  );
}
