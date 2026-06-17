import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/planejamento-tributario")({
  head: () => ({
    meta: [
      { title: "Planejamento Tributário em Goiânia | DCON Contábil" },
      { name: "description", content: "Planejamento tributário consultivo em Goiânia: análise de regime, comparativo Simples, Presumido e Real e economia fiscal com segurança jurídica." },
      { property: "og:title", content: "Planejamento Tributário em Goiânia | DCON Contábil" },
      { property: "og:description", content: "Planejamento tributário consultivo em Goiânia: análise de regime, comparativo Simples, Presumido e Real e economia fiscal com segurança jurídica." },
      { property: "og:url", content: "/solucoes/planejamento-tributario" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/planejamento-tributario" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Soluções", "item": "/solucoes"}, {"@type": "ListItem", "position": 3, "name": "Planejamento Tributário", "item": "/solucoes/planejamento-tributario"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Planejamento tributário com base técnica e segurança jurídica"
      intro="Estudo técnico comparativo de regimes e estruturas, com fundamento legal e cenários para decidir."
      intent="planejamento tributário empresa, reduzir impostos legalmente"
      observation="Alto ticket — cluster próprio no blog."
      ctaPrimary={{ label: "Solicitar proposta", to: "/contato" }}
      ctaSecondary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      sections={[
      { h2: "O que está incluso", h3: [{"title":"Diagnóstico tributário","body":"Análise da operação real, faturamento, margem e regime atual."},{"title":"Comparativo de regimes","body":"Simples, Presumido e Real em cenários conservadores e realistas."},{"title":"Análise societária","body":"Estrutura de sócios, holdings e múltiplos CNPJs como ferramenta legal."},{"title":"Parecer técnico","body":"Documento auditável com fundamento e recomendação clara."}] },
      { h2: "Quando faz sentido", h3: [{"title":"Mudança de faturamento","body":"Cresceu, encolheu ou está perto de mudar de regime."},{"title":"Nova operação","body":"Vai expandir, abrir filial ou entrar em novo mercado."},{"title":"Carga tributária alta","body":"Sensação de pagar muito imposto sem entender por quê."}] },
      { h2: "Como conduzimos", h3: [{"title":"Levantamento técnico","body":"Coletamos NFs, faturamento, custos e contratos sociais."},{"title":"Modelagem de cenários","body":"Projeção de impostos em cada regime e estrutura possível."},{"title":"Devolutiva consultiva","body":"Reunião para apresentar cenários e fundamentar a escolha."}] },
      { h2: "Segurança jurídica", h3: [{"title":"Sem promessa milagrosa","body":"Planejamento sério é fundamentado em lei — não em manobra."},{"title":"Documentação auditável","body":"Tudo o que recomendamos fica registrado e justificado."},{"title":"Atualização legislativa","body":"Acompanhamento de mudanças que afetam o planejamento."}] },
      { h2: "Perguntas frequentes", h3: [{"title":"Garante economia?","body":"Não prometemos número. Mostramos cenário fundamentado."},{"title":"Quanto tempo demora?","body":"De duas a seis semanas, conforme complexidade."},{"title":"Substitui meu contador?","body":"Pode ser feito como projeto ou junto da contabilidade mensal."}] },
      ]}
    />
  );
}
