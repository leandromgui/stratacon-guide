import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/segmentos/condominios")({
  head: () => ({
    ...buildSeoHead({
      title: "Contabilidade para Condomínios | DCON Goiânia",
      description: "Contabilidade para condomínios em Goiânia: folha de funcionários, prestação de contas e obrigações acessórias com a DCON.",
      canonical: "/segmentos/condominios",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Segmentos", "item": "/segmentos"}, {"@type": "ListItem", "position": 3, "name": "Condomínios", "item": "/segmentos/condominios"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para condomínios residenciais e comerciais"
      intro="Contabilidade técnica desenhada para a realidade tributária e operacional de condomínios."
      intent="contabilidade condomínio Goiânia, prestação de contas"
      observation="Nicho local."
      pillarKey="condominios"
      ctaPrimary={{ label: "Solicitar diagnóstico técnico inicial", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
        { h2: "Folha, eSocial e SST do condomínio", lead: "Condomínio é empregador — não é isento de obrigações trabalhistas, previdenciárias nem de SST.", h3: [
          { title: "Folha e CCT", body: "Convenção coletiva dos empregados em edifícios aplicada corretamente: piso, adicional noturno, jornada 12x36, banco de horas e multas convencionais." },
          { title: "eSocial e DCTFWeb", body: "Eventos periódicos e não-periódicos, INSS, FGTS, IRRF e contribuições recolhidos no prazo." },
          { title: "SST e NR-1", body: "PGR, PCMSO, ASO, LTCAT e PPP organizados — eventos S-2210, S-2220 e S-2240 enviados ao eSocial." },
        ]},
        { h2: "Tributos e retenções", h3: [
          { title: "Retenção de prestadores", body: "INSS, IRRF, ISS e PIS/Cofins/CSLL retidos corretamente sobre serviços contratados — falha vira passivo do condomínio." },
          { title: "EFD-Reinf", body: "Eventos de retenção enviados no prazo para conciliar com DCTFWeb." },
          { title: "Receita não condominial", body: "Aluguel de espaço, antena, fachada e estacionamento podem caracterizar atividade econômica e exigir CNPJ próprio." },
        ]},
        { h2: "Prestação de contas e governança", h3: [
          { title: "DRE e balancete mensais", body: "Receitas, despesas, inadimplência e fundo de reserva apresentados de forma auditável para condôminos e síndico." },
          { title: "Convocação e ata", body: "Documentação técnica que sustenta decisões de assembleia e protege o síndico em prestação de contas." },
        ]},
        { h2: "Riscos comuns", h3: [
          { title: "Funcionário registrado errado", body: "Função, jornada ou enquadramento incorretos geram reclamatória e diferença salarial relevante." },
          { title: "Falta de retenção", body: "Pagar prestador sem reter tributo devido transfere a responsabilidade para o condomínio." },
          { title: "Falta de SST", body: "Ausência de PGR/PCMSO e dos eventos S-2240 expõe o condomínio à fiscalização e a passivo previdenciário." },
        ]},
      ]}
    />
  );
}
