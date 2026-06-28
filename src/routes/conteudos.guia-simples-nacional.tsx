import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { SimplesNacionalMiniForm } from "../components/SimplesNacionalMiniForm";
import { buildSeoHead } from "@/lib/seo";

const CANONICAL = "https://stratacon-guide.lovable.app/conteudos/guia-simples-nacional";

const faq = [
  {
    q: "Como faço a consulta do Simples Nacional da minha empresa?",
    a: "No Portal do Simples Nacional (gov.br), use a opção 'Consulta Optantes' informando o CNPJ. O sistema mostra a situação atual (optante / não optante), data de opção, exclusões, agendamentos e eventos de desenquadramento. Para histórico fiscal completo, é necessário acessar o portal com certificado digital ou código de acesso e baixar o extrato dos últimos 5 anos.",
  },
  {
    q: "O que é o Fator R e como calcular?",
    a: "Fator R = Folha de salários dos últimos 12 meses ÷ Receita bruta dos últimos 12 meses. Quando esse índice é igual ou superior a 28%, atividades do Anexo V migram automaticamente para o Anexo III, com alíquotas significativamente menores. É decisivo para clínicas, escritórios, consultorias, agências e desenvolvedores — uma diferença de 1 ponto percentual na folha pode mudar a alíquota efetiva em mais de 6 pontos.",
  },
  {
    q: "O que são sublimites estaduais de ICMS e ISS no Simples?",
    a: "Estados podem adotar um sublimite de R$ 3,6 milhões para ICMS e ISS. Empresas que ultrapassam o sublimite continuam no Simples para os tributos federais, mas passam a recolher ICMS e ISS fora do DAS, como se fossem Lucro Presumido — com obrigações acessórias adicionais (EFD, GIA) e impacto direto no caixa.",
  },
  {
    q: "Vale mais a pena Simples Nacional ou Lucro Presumido?",
    a: "Depende do anexo, da folha, do peso do ICMS/ISS na operação e da margem. Em muitos casos do Anexo V sem Fator R, e em operações comerciais com ICMS-ST predominante, o Lucro Presumido entrega carga efetiva menor. A decisão exige simulação dos 12 meses seguintes com a operação real, não a tabela genérica do regime.",
  },
  {
    q: "Quando a empresa é desenquadrada do Simples Nacional?",
    a: "Por excesso de receita (R$ 4,8 mi anuais), inclusão de sócio PJ ou no exterior, atividade vedada, débitos não regularizados ou pedido voluntário. A exclusão pode ser retroativa — o que gera passivo fiscal pesado quando descoberta tarde. Acompanhamento mensal das certidões e da receita acumulada é o que evita o problema.",
  },
  {
    q: "Posso recuperar créditos pagos a maior no Simples?",
    a: "Sim. As hipóteses mais comuns são monofásicos de PIS/COFINS (combustíveis, bebidas, cosméticos, autopeças), substituição tributária do ICMS já recolhida pelo fornecedor e segregação incorreta de receitas por anexo. A revisão dos últimos 5 anos costuma identificar valores recuperáveis via PER/DCOMP.",
  },
];

export const Route = createFileRoute("/conteudos/guia-simples-nacional")({
  head: () => ({
    ...buildSeoHead({
      title: "Guia do Simples Nacional para Empresas | DCON",
      description: "Guia técnico do Simples Nacional: consulta, anexos, Fator R, sublimites de ICMS, planejamento tributário e recuperação de créditos. Conteúdo DCON.",
      canonical: CANONICAL,
      ogType: "article",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "https://stratacon-guide.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Conteúdos", item: "https://stratacon-guide.lovable.app/conteudos" },
            { "@type": "ListItem", position: 3, name: "Guia do Simples Nacional", item: CANONICAL },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Guia técnico"
      h1="Guia completo do Simples Nacional para empresas"
      lead="Como consultar, enquadrar, otimizar e revisar o Simples Nacional sem perder oportunidade tributária — nem cair em desenquadramento retroativo."
      intro="O Simples Nacional é um regime unificado, não um regime simples. As decisões certas — anexo, Fator R, sublimite, segregação de receitas e recuperação de créditos — costumam definir entre 15% e 40% da carga tributária efetiva da empresa. Este guia reúne o que a DCON aplica em diagnóstico técnico."
      audience={[
        "Empresas no Simples Nacional",
        "Empresas próximas do teto de R$ 4,8 mi",
        "Atividades do Anexo V (clínicas, agências, consultorias, TI)",
        "Comércio e indústria com ICMS-ST relevante",
      ]}
      breadcrumbs={[
        { label: "Conteúdos", to: "/conteudos" },
        { label: "Guia do Simples Nacional", to: "/conteudos/guia-simples-nacional" },
      ]}
      ctaPrimary={{ label: "Quero diagnosticar minha empresa", to: "/diagnostico" }}
      ctaSecondary={{ label: "Quero revisar meu regime tributário", to: "/diagnostico" }}
      ctaTertiary={{ label: "Falar com consultor DCON", to: "/contato" }}
      respostaValidada="O Simples Nacional é o regime mais incompreendido do Brasil: a maioria das empresas escolhe o anexo errado, não acompanha o Fator R mês a mês, ignora o sublimite estadual de ICMS e nunca revisa créditos pagos a maior em monofásicos. A DCON conduz a opção, a transição e a revisão dos últimos 5 anos com base na operação real, não na tabela do regime."
      sections={[
        {
          h2: "Consulta e situação no Simples Nacional",
          lead: "Antes de qualquer decisão, é preciso saber em que ponto a empresa está hoje.",
          h3: [
            { title: "Consulta Optantes (gov.br)", body: "Verifica situação atual, data de opção, eventos de exclusão e agendamentos. É o primeiro check em qualquer diagnóstico." },
            { title: "Extrato do Simples", body: "Acesso com certificado digital. Mostra receita acumulada, anexos aplicados e DAS recolhidos — base para conferência mensal." },
            { title: "Certidões e pendências", body: "Débitos não regularizados disparam exclusão de ofício. Acompanhamento mensal evita perder o regime sem aviso." },
            { title: "Histórico de 5 anos", body: "Período aberto à fiscalização e à revisão de créditos pagos a maior. Toda a base documental precisa estar arquivada e auditável." },
          ],
        },
        {
          h2: "Anexos, Fator R e sublimites",
          lead: "A diferença entre pagar 6% e pagar 15,5% costuma estar em três decisões técnicas.",
          h3: [
            { title: "Anexos I a V", body: "Comércio (I), indústria (II), serviços com Fator R (III), serviços sem Fator R (IV) e serviços tributados pelo Anexo V quando o Fator R fica abaixo de 28%." },
            { title: "Fator R = folha ÷ receita", body: "Calculado sobre 12 meses. Igual ou maior que 28% leva atividades do V para o III, com alíquotas inicial e marginal substancialmente menores." },
            { title: "Sublimite estadual de ICMS", body: "Empresas acima de R$ 3,6 mi anuais saem do recolhimento de ICMS/ISS via DAS e passam a apurar como Presumido — com EFD, GIA e impacto direto no caixa." },
            { title: "Segregação de receitas", body: "Vendas com substituição tributária, monofásicos, exportação e atividades por anexos diferentes precisam ser segregadas no PGDAS. Erro aqui gera pagamento a maior ou autuação." },
          ],
        },
        {
          h2: "Planejamento tributário no Simples",
          lead: "Planejar não é migrar de regime — é organizar a operação para que o regime entregue o melhor resultado legal possível.",
          h3: [
            { title: "Simulação de cenários", body: "Comparativo entre Simples (Anexos III, IV, V), Lucro Presumido e Lucro Real sobre 12 meses projetados com a operação real." },
            { title: "Estratégia de folha", body: "Ajustes de pró-labore, distribuição de lucros e contratação para manter o Fator R ≥ 28% sem inflar custo desnecessário." },
            { title: "Estrutura societária", body: "Separação por CNPJ quando a atividade combina anexos muito diferentes, ou quando o teto está próximo. Sempre dentro do propósito negocial." },
            { title: "Calendário de acompanhamento", body: "Revisão mensal de receita acumulada, Fator R e PGDAS. A diferença entre acompanhar e não acompanhar costuma ser de seis a sete dígitos por ano." },
          ],
        },
        {
          h2: "Recuperação de créditos e revisão dos últimos 5 anos",
          lead: "Empresas no Simples também pagam a maior — em hipóteses específicas e auditáveis.",
          h3: [
            { title: "Monofásicos de PIS/COFINS", body: "Combustíveis, bebidas, cosméticos, autopeças e farmácia revendendo monofásico não devem recolher PIS/COFINS sobre essas receitas — quando recolhem, há crédito a recuperar." },
            { title: "ICMS-ST já retido", body: "Quando o fornecedor já recolheu ST, a revenda no Simples não deve incluir esse ICMS na base — segregar corretamente reduz o DAS e gera crédito retroativo." },
            { title: "Segregação incorreta de anexos", body: "Atividades classificadas em anexo errado por anos resultam em DAS inflado. Revisão técnica recupera a diferença via PER/DCOMP." },
            { title: "Exclusão indevida do regime", body: "Quando a exclusão de ofício decorre de erro cadastral ou débito já quitado, é possível reverter administrativamente e recuperar o período pago sob outro regime." },
          ],
        },
      ]}
      faq={faq}
      relatedLinks={[
        { label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario", eyebrow: "Solução" },
        { label: "Recuperação de Créditos Tributários", to: "/solucoes/recuperacao-creditos-tributarios", eyebrow: "Solução" },
        { label: "Simples Nacional — segmento", to: "/segmentos/simples-nacional", eyebrow: "Segmento" },
        { label: "Regimes Tributários — cluster", to: "/conteudos/regimes-tributarios", eyebrow: "Conteúdos" },
      ]}
    >
      <SimplesNacionalMiniForm />
    </PageScaffold>
  );
}