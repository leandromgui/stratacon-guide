import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { faqJsonLd, serviceJsonLd, type FAQItem } from "../components/FAQ";

const faqs: FAQItem[] = [
  {
    q: "Como encaminhar débitos para a PGFN?",
    a: "Primeiro é preciso confirmar se o débito ainda está na Receita Federal ou se já foi inscrito em dívida ativa. Débitos não inscritos não aparecem automaticamente na PGFN/Regularize; podem exigir acompanhamento da cobrança, regularização da declaração, consolidação, pedido ou providência perante a Receita antes da inscrição. A DCON analisa a origem, situação, prazo e risco antes de recomendar encaminhamento, defesa, parcelamento ou transação.",
  },
  {
    q: "Meu débito não aparece na PGFN. O que isso significa?",
    a: "Pode significar que ele ainda está em cobrança na Receita, que existe pendência de declaração, que a consolidação ainda não ocorreu, que há suspensão, retificação pendente ou inconsistência cadastral. O problema pode não ser falta de negociação, mas falta de diagnóstico sobre onde a dívida está.",
  },
  {
    q: "Quando vale esperar a inscrição em dívida ativa?",
    a: "Nem sempre vale. A inscrição pode abrir caminho para transação e PRDI, mas também traz encargo, Cadin, protesto, restrição de certidão e risco de execução fiscal. A decisão depende de valor, prazo, defesa cabível, caixa da empresa e necessidade de CND/CPEND.",
  },
  {
    q: "O que fazer depois que o débito entra na PGFN?",
    a: "A DCON revisa a inscrição, confere pagamentos, parcelamentos, decadência, prescrição, retificações e causas de suspensão. Depois define se o melhor caminho é pagar, parcelar, aderir a transação, apresentar PRDI ou buscar defesa administrativa/judicial.",
  },
  {
    q: "O que é PRDI e quando usar?",
    a: "PRDI é Pedido de Revisão de Dívida Inscrita. Pode ser usado quando há erro na inscrição, pagamento já realizado, parcelamento ativo, suspensão da exigibilidade, decadência, prescrição, retificação que alterou o débito ou outra inconsistência documentável.",
  },
  {
    q: "Como a DCON atua nesse processo?",
    a: "A DCON atua como análise técnica: levanta débitos, cruza Receita, PGFN, declarações e certidões, identifica o estágio da cobrança e entrega um plano de ação com riscos, prazos, documentos e recomendação de regularização ou defesa.",
  },
];

export const Route = createFileRoute("/conteudos/regularizacao-fiscal")({
  head: () => ({
    meta: [
      { title: "Débitos PGFN, PRDI e Transação | Insights DCON" },
      { name: "description", content: "Como encaminhar débitos para PGFN, quando usar PRDI, transação tributária e regularização fiscal com análise técnica da DCON." },
      { property: "og:title", content: "Débitos PGFN, PRDI e Transação | DCON" },
      { property: "og:description", content: "Respostas sobre débitos que não aparecem na PGFN, inscrição em dívida ativa, PRDI e transação tributária." },
      { property: "og:url", content: "/conteudos/regularizacao-fiscal" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/conteudos/regularizacao-fiscal" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "/" },
            { "@type": "ListItem", position: 2, name: "Insights", item: "/conteudos" },
            { "@type": "ListItem", position: 3, name: "PGFN, PRDI e transação", item: "/conteudos/regularizacao-fiscal" },
          ],
        }),
      },
      { type: "application/ld+json", children: serviceJsonLd({ name: "Análise de Débitos PGFN", description: "Análise técnica de débitos Receita/PGFN, PRDI, transação tributária e plano de regularização.", url: "/conteudos/regularizacao-fiscal" }) },
      { type: "application/ld+json", children: faqJsonLd(faqs) },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Insight · Defesa fiscal"
      h1="PGFN, PRDI e transação tributária: como tratar débitos que não aparecem ou já foram inscritos"
      lead="Seu débito não aparece na PGFN? O problema pode não ser falta de negociação, mas falta de encaminhamento e análise correta do estágio da cobrança."
      intro="Regularizar dívida fiscal não começa pelo parcelamento. Começa por descobrir onde o débito está, se ele é exigível, quais defesas ainda existem, se a inscrição em dívida ativa ajuda ou prejudica e qual medida preserva certidão, caixa e operação."
      breadcrumbs={[{ label: "Insights", to: "/conteudos" }, { label: "PGFN e regularização", to: "/conteudos/regularizacao-fiscal" }]}
      audience={[
        "Empresas com débitos na Receita Federal",
        "Empresas com dívida ativa na PGFN",
        "Negócios com CND ou CPEND bloqueada",
        "Sócios avaliando parcelamento, transação ou PRDI",
      ]}
      ctaPrimary={{ label: "Solicitar análise dos débitos", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver solução de regularização", to: "/solucoes/regularizacao-fiscal" }}
      ctaTertiary={{ label: "Falar com a DCON", to: "/contato" }}
      respostaValidada="Nem todo débito aparece automaticamente no Regularize. Em alguns casos, o ponto técnico é entender onde a dívida está: Receita ou PGFN. Débitos não inscritos podem exigir acompanhamento, correção de declarações, consolidação ou encaminhamento pela Receita; débitos inscritos podem permitir transação, parcelamento e PRDI. A DCON atua como análise técnica para definir o caminho antes de pagar, parcelar ou esperar a inscrição."
      ctaVariant="risk"
      sections={[
        {
          h2: "Antes de encaminhar: onde o débito está?",
          lead: "A mesma dívida pode exigir medidas diferentes conforme o estágio da cobrança.",
          h3: [
            { title: "Na Receita Federal", body: "Débito declarado, lançado ou em cobrança administrativa ainda pode exigir retificação, comprovação de pagamento, manifestação, parcelamento federal ou acompanhamento até consolidação." },
            { title: "Na PGFN", body: "Depois da inscrição em dívida ativa, entram Regularize, transação tributária, parcelamento, PRDI, protesto, Cadin, execução e restrição de certidões." },
            { title: "Suspenso ou inconsistente", body: "Processo administrativo, liminar, parcelamento, retificação ou erro cadastral podem impedir visualização ou alterar a exigibilidade." },
            { title: "Obrigação acessória pendente", body: "DCTF, MIT, PGDAS-D, EFD, ECF, eSocial ou Reinf atrasados podem criar ou travar cobrança até a regularização." },
          ],
        },
        {
          h2: "Como encaminhar débitos para PGFN com critério",
          lead: "Encaminhar não é simplesmente esperar. É medir custo, prazo e risco antes de deixar a dívida virar dívida ativa.",
          h3: [
            { title: "Conferir origem e exigibilidade", body: "Antes de qualquer pedido, a DCON cruza declaração, guia, pagamento, processo, prazo decadencial/prescricional e certidão afetada." },
            { title: "Regularizar a base do débito", body: "Quando há erro em declaração ou falta de consolidação, o caminho pode ser corrigir a origem na Receita para que a cobrança siga corretamente." },
            { title: "Avaliar risco da inscrição", body: "A inscrição pode abrir transação, mas também adiciona encargo, Cadin, protesto, execução e bloqueio de certidão." },
            { title: "Escolher medida após inscrição", body: "Com o débito na PGFN, a análise define transação, parcelamento, pagamento, PRDI ou defesa conforme documentos e objetivo da empresa." },
          ],
        },
        {
          h2: "Respostas rápidas para decisões comuns",
          lead: "O que normalmente muda a recomendação técnica.",
          h3: [
            { title: "Preciso de CND urgente", body: "A prioridade pode ser CPEND, parcelamento estratégico, regularização de obrigação acessória ou suspensão da exigibilidade — não necessariamente esperar a PGFN." },
            { title: "Quero desconto", body: "Desconto costuma depender de transação e débito inscrito, mas deve ser comparado com encargo, risco de protesto e perda de prazo de defesa." },
            { title: "A dívida parece errada", body: "Se há pagamento, retificação, prescrição, decadência ou suspensão, PRDI ou defesa podem ser melhores que parcelar." },
            { title: "Tenho termo de exclusão", body: "No Simples Nacional, a resposta precisa ser rápida: regularizar, parcelar, contestar ou estruturar transação para evitar aumento de carga no ano seguinte." },
          ],
        },
      ]}
      deliverables={[
        { title: "Mapa Receita/PGFN", body: "Relatório separando débitos por origem, estágio, valor, vencimento, certidão afetada e risco operacional." },
        { title: "Parecer de exigibilidade", body: "Análise sobre pagar, parcelar, defender, retificar, pedir PRDI ou acompanhar encaminhamento." },
        { title: "Plano de regularização", body: "Ordem de ação priorizada por CND, caixa, prazos de defesa, protesto, Cadin e execução." },
        { title: "Acompanhamento técnico", body: "Condução das medidas escolhidas, com documentação e evidência de cada protocolo." },
      ]}
      faq={faqs}
      relatedLinks={[
        { label: "Regularização Fiscal", to: "/solucoes/regularizacao-fiscal", eyebrow: "Solução" },
        { label: "Defesas Fiscais", to: "/solucoes/defesas-fiscais", eyebrow: "Solução" },
        { label: "Pendências Fiscais", to: "/segmentos/pendencias-fiscais", eyebrow: "Segmento" },
        { label: "Diagnóstico DCON", to: "/diagnostico", eyebrow: "Próximo passo" },
      ]}
    />
  );
}
