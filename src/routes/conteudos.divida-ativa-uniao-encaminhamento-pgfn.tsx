import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/divida-ativa-uniao-encaminhamento-pgfn";
const H1 = "Dívida Ativa da União: débitos vencidos há mais de 90 dias podem ser encaminhados à PGFN";
const META_TITLE = "Dívida Ativa da União: quando o débito vai para a PGFN";
const META_DESCRIPTION =
  "Entenda quando débitos vencidos há mais de 90 dias podem ser encaminhados à PGFN, os riscos da entrada de 10%/20% no reparcelamento e como funciona a Dívida Ativa da União.";
const PUBLISHED = "22/09/2026";

const faq: { q: string; a: string }[] = [
  {
    q: "Todo débito vencido há mais de 90 dias pode ser encaminhado?",
    a: "Não automaticamente. O débito deve estar definitivamente constituído, exigível e sem impedimento legal. Também é necessário identificar corretamente o início da contagem.",
  },
  {
    q: "Se o tributo venceu há dois anos, ele já pode ser encaminhado?",
    a: "Depende. Se esteve parcelado e a rescisão ocorreu recentemente, a contagem dos 90 dias pode começar somente após a rescisão definitiva.",
  },
  {
    q: "Posso desistir do parcelamento e pedir o encaminhamento imediatamente?",
    a: "A desistência ou rescisão não gera inscrição imediata. No caso de parcelamento, a Portaria MF nº 447/2018 estabelece que o prazo começa depois da rescisão definitiva.",
  },
  {
    q: "A Receita é obrigada a encaminhar depois dos 90 dias?",
    a: "A legislação estabelece o dever de encaminhamento dos créditos definitivamente constituídos e exigíveis. A efetivação, contudo, depende do processamento pela Receita e do controle de legalidade pela PGFN.",
  },
  {
    q: "O pedido suspende a cobrança?",
    a: "Não. O requerimento de encaminhamento não constitui causa de suspensão da exigibilidade.",
  },
  {
    q: "A dívida já entra na PGFN com desconto?",
    a: "Não. O desconto depende da modalidade disponível, da data de inscrição, do edital e da capacidade de pagamento.",
  },
  {
    q: "A PGFN parcela sem entrada?",
    a: "Depende da modalidade. Pode haver entrada reduzida ou parcelada, mas não existe dispensa universal de entrada.",
  },
  {
    q: "Qual é o principal risco?",
    a: "O principal risco é permanecer com o débito exigível durante o período entre a rescisão do parcelamento, o encaminhamento, a inscrição e a formalização de uma nova negociação.",
  },
];

export const Route = createFileRoute("/conteudos/divida-ativa-uniao-encaminhamento-pgfn")({
  head: () => ({
    ...buildSeoHead({
      title: META_TITLE,
      description: META_DESCRIPTION,
      canonical: SLUG,
      ogType: "article",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "/" },
            { "@type": "ListItem", position: 2, name: "Insights", item: "/conteudos" },
            { "@type": "ListItem", position: 3, name: H1, item: SLUG },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: H1,
          description: META_DESCRIPTION,
          author: { "@id": `${SITE_URL}/sobre/leandro#leandro` },
          publisher: { "@type": "Organization", name: "DCON Serviços Contábeis", url: SITE_URL },
          datePublished: "2026-09-22",
          dateModified: "2026-09-22",
          url: `${SITE_URL}${SLUG}`,
          mainEntityOfPage: `${SITE_URL}${SLUG}`,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(LEANDRO_PERSON_JSONLD),
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
      eyebrow={`Defesa fiscal · ${PUBLISHED}`}
      h1={H1}
      lead="Quando a entrada de 10% ou 20% do reparcelamento compromete o caixa, o encaminhamento à PGFN pode ser analisado"
      intro="Empresas que tiveram parcelamentos rescindidos podem enfrentar uma dificuldade relevante ao tentar regularizar novamente seus débitos na Receita Federal: a entrada exigida para o reparcelamento. Atualmente, o reparcelamento perante a Receita Federal está condicionado ao pagamento de uma primeira prestação correspondente a 10% do total dos débitos consolidados, quando houver histórico de parcelamento anterior, ou 20% do total dos débitos consolidados, quando houver histórico de reparcelamento anterior. A regra está prevista no art. 17, parágrafo 1º, incisos I e II, da Instrução Normativa RFB nº 2.063/2022. A própria Receita esclarece que o histórico anterior independe da modalidade de parcelamento utilizada. Para empresas com dívidas elevadas, essa entrada pode consumir o capital de giro e impedir a regularização. Quando os débitos estão definitivamente constituídos, exigíveis e já ultrapassaram o prazo legal de encaminhamento, pode ser analisada a remessa da Receita Federal para a Procuradoria-Geral da Fazenda Nacional - PGFN. Na PGFN, a empresa poderá avaliar as modalidades disponíveis no Regularize, que podem apresentar entrada, prazo e condições diferentes das exigidas no reparcelamento da Receita Federal."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "Dívida Ativa da União e PGFN", to: SLUG },
      ]}
      audience={[
        "Empresas com parcelamentos rescindidos na Receita Federal",
        "Empresas com débitos elevados e restrição de caixa",
        "Sócios e gestores em negociação com PGFN",
        "Empresas em regularização fiscal",
      ]}
      ctaPrimary={{ label: "Solicitar diagnóstico de regularização fiscal", to: "/diagnostico" }}
      ctaSecondary={{ label: "Entender a Regularização Fiscal", to: "/solucoes/regularizacao-fiscal" }}
      respostaValidada="Débitos definitivamente constituídos e exigíveis que já ultrapassaram o prazo legal de 90 dias podem ser analisados para encaminhamento à PGFN. A contagem do prazo depende da origem do débito: lançamento de ofício, declaração confessada, parcelamento rescindido, pedido de revisão ou pagamento em quotas."
      faq={faq}
      ctaVariant="risk"
      sections={[
        {
          h2: "Débitos vencidos há mais de 90 dias podem ser encaminhados à PGFN?",
          lead: "A legislação determina que os débitos tributários ou não tributários definitivamente constituídos e exigíveis sejam encaminhados à PGFN para controle de legalidade e inscrição em Dívida Ativa da União.",
          h3: [
            { title: "Prazo legal de 90 dias", body: "O art. 2º da Portaria MF nº 447/2018 estabelece que, dentro de 90 dias da data em que se tornarem exigíveis, os débitos devem ser encaminhados pela Receita Federal à PGFN para controle de legalidade e inscrição em Dívida Ativa da União." },
            { title: "Fundamento no Decreto-Lei nº 147/1967", body: "O art. 22 do Decreto-Lei nº 147/1967 determina o encaminhamento dos débitos à Procuradoria após o encerramento do processo ou expediente administrativo e o transcurso do prazo para pagamento." },
            { title: "Análise jurídica da data", body: "Débitos que já ultrapassaram o prazo legal de 90 dias podem ser objeto de análise e requerimento administrativo para encaminhamento à PGFN. Entretanto, não basta olhar apenas a data original de vencimento. É necessário determinar juridicamente quando começou a contagem dos 90 dias." },
          ],
        },
        {
          h2: "De quando começa a contagem dos 90 dias?",
          lead: "A Portaria MF nº 447/2018 diferencia a contagem conforme a origem e a situação do débito.",
          h3: [
            { title: "Débitos constituídos por lançamento de ofício", body: "Nos débitos tributários constituídos por lançamento de ofício, o prazo começa depois de esgotado o período de 30 dias para cobrança amigável, sem pagamento, extinção ou suspensão da exigibilidade." },
            { title: "Débitos confessados em declaração", body: "Nos débitos confessados pelo contribuinte, como valores informados em declarações fiscais, a contagem considera o término do prazo de 30 dias estabelecido na primeira intimação para recolhimento." },
            { title: "Débitos incluídos em parcelamento", body: "Quando o débito estava parcelado na Receita Federal, o prazo de encaminhamento começa depois da rescisão definitiva do parcelamento, conforme o art. 2º, parágrafo 2º, da Portaria MF nº 447/2018. Isso significa que um tributo pode ter vencido há vários anos, mas, se o parcelamento foi rescindido recentemente, a contagem dos 90 dias deve considerar a data da rescisão definitiva." },
            { title: "Débitos com pedido de revisão", body: "Quando existe pedido de revisão pendente, o prazo começa após 30 dias da ciência da decisão sobre o pedido, conforme o art. 2º, parágrafo 3º, da Portaria MF nº 447/2018." },
            { title: "Débitos sujeitos a pagamento em quotas", body: "Nos débitos sujeitos a quotas mensais, a contagem observa o vencimento da última quota e as regras específicas da Portaria." },
          ],
        },
        {
          h2: "Existe valor mínimo para encaminhamento?",
          lead: "A Portaria PGFN/ME nº 6.155/2021 estabelece regras sobre o encaminhamento de créditos e também sobre situações de não encaminhamento.",
          h3: [
            { title: "Limite de R$ 1.000,00", body: "O art. 3º, parágrafo 1º, da Portaria PGFN/ME nº 6.155/2021 estabelece que não será encaminhada solicitação de inscrição quando o valor consolidado dos créditos da mesma natureza, contra o mesmo devedor, for igual ou inferior a R$ 1.000,00, depois da atualização monetária, juros e multa de mora." },
            { title: "Análise consolidada", body: "A análise precisa considerar valor consolidado, natureza dos créditos, atualização, juros, multa de mora, existência de outros débitos da mesma natureza e situações excepcionais previstas na própria regulamentação. Não basta selecionar isoladamente qualquer débito vencido." },
          ],
        },
        {
          h2: "Por que uma empresa pode querer o encaminhamento para a PGFN?",
          lead: "O principal motivo costuma ser o impacto financeiro do reparcelamento na Receita Federal.",
          h3: [
            { title: "Exemplo", body: "Uma empresa possui R$ 800 mil em débitos e já teve um reparcelamento anterior. Para formalizar um novo reparcelamento na Receita, poderá ser exigida primeira prestação de 20%. Entrada estimada: R$ 160 mil. Mesmo que a empresa tenha capacidade para pagar prestações mensais, pode não dispor de R$ 160 mil imediatamente. Depois da inscrição em Dívida Ativa, podem existir outras modalidades na PGFN, como parcelamento ordinário, transação por capacidade de pagamento, transação de pequeno valor, transação para créditos de difícil recuperação, transações publicadas em editais, transação individual quando preenchidos os requisitos, e modalidades específicas para determinados contribuintes ou segmentos. Essas modalidades podem apresentar entrada reduzida ou parcelada, prazo maior e, em determinadas situações, descontos sobre juros, multas e encargo legal. Mas nenhuma dessas condições é automática." },
          ],
        },
        {
          h2: "O parcelamento na PGFN é sempre sem entrada?",
          lead: "O encaminhamento pode evitar, em determinada modalidade, a exigência imediata de 10% ou 20% prevista no reparcelamento da Receita Federal.",
          h3: [
            { title: "Condições por modalidade", body: "Isso não significa que toda negociação na PGFN seja sem entrada. As condições dependem de modalidade disponível, histórico da dívida, data da inscrição, edital vigente, natureza tributária, valor consolidado, capacidade de pagamento, porte do contribuinte, existência de garantia e histórico de parcelamentos ou transações." },
            { title: "Edital PGDAU nº 6/2026", body: "No Edital PGDAU nº 6/2026, por exemplo, a transação por capacidade de pagamento prevê entrada de 6% do valor da dívida, parcelável em até 6 ou 12 prestações, conforme o perfil do contribuinte. A dispensa de entrada está prevista para pagamento à vista, não para qualquer negociação parcelada." },
            { title: "Comunicação segura", body: "A comunicação comercial mais segura é: o encaminhamento à PGFN pode permitir condições diferentes da entrada de 10% ou 20% exigida no reparcelamento da Receita, conforme a modalidade disponível." },
          ],
        },
        {
          h2: "A inscrição na PGFN garante desconto?",
          lead: "O desconto depende de diversos fatores e nunca é automático.",
          h3: [
            { title: "Fatores que definem o desconto", body: "O desconto depende da legislação, da modalidade de transação, da data de inscrição, da recuperabilidade da dívida e da capacidade de pagamento atribuída ao contribuinte. A PGFN classifica a capacidade de pagamento com base nas informações econômicas, fiscais, patrimoniais e cadastrais disponíveis." },
            { title: "O que pode ser negociado", body: "Dependendo da classificação, a negociação pode oferecer entrada facilitada, prazo alongado, descontos sobre juros, descontos sobre multas e redução do encargo legal. O valor principal do tributo, como regra, não é reduzido." },
            { title: "Classificação de capacidade de pagamento", body: "Também é possível que o contribuinte seja classificado como capaz de pagar integralmente a dívida e, por isso, não receba o desconto esperado." },
            { title: "Em destaque", body: "Encaminhamento não é sinônimo de desconto." },
          ],
        },
        {
          h2: "O pedido de encaminhamento suspende a exigibilidade?",
          lead: "O protocolo do requerimento, o decurso dos 90 dias, o encaminhamento à PGFN e a simples apresentação de proposta de transação não suspendem automaticamente a exigibilidade.",
          h3: [
            { title: "Suspensão exige parcelamento formalizado", body: "O art. 151, inciso VI, do Código Tributário Nacional estabelece que o parcelamento suspende a exigibilidade do crédito tributário. Mas essa suspensão ocorre depois da formalização válida da negociação e do cumprimento das condições estabelecidas, como o pagamento da entrada ou da primeira prestação." },
            { title: "Proposta de transação não suspende", body: "A Lei nº 13.988/2020, em seu art. 12, determina que a simples proposta de transação não suspende a exigibilidade dos créditos nem o andamento das execuções fiscais." },
            { title: "Janela de risco", body: "Portanto, existe uma janela de risco entre a rescisão do parcelamento na Receita, o transcurso do prazo, o encaminhamento, a inscrição, a disponibilização no Regularize e a formalização da nova negociação. Durante esse intervalo, a dívida permanece exigível, salvo se existir outra causa legal de suspensão." },
          ],
        },
        {
          h2: "Quais são os riscos do encaminhamento?",
          lead: "A inscrição em Dívida Ativa pode ampliar os efeitos da dívida e adicionar novos riscos patrimoniais e cadastrais.",
          h3: [
            { title: "Acréscimo do encargo legal", body: "Quando existe execução fiscal, a PGFN informa que o encargo pode alcançar 20% sobre a dívida consolidada. Em determinados casos de créditos não ajuizados submetidos a protesto, a regulamentação prevê encargo reduzido para 10%." },
            { title: "Protesto", body: "Depois da inscrição, a Certidão de Dívida Ativa pode ser encaminhada a protesto. Além da dívida, poderão existir emolumentos cobrados pelo cartório." },
            { title: "Cadin e órgãos de proteção ao crédito", body: "A PGFN pode incluir o contribuinte no Cadin, na Lista de Devedores e comunicar a dívida aos órgãos de proteção ao crédito." },
            { title: "Execução fiscal", body: "A dívida pode ser ajuizada, permitindo a adoção de medidas como bloqueio de valores, penhora de bens, averbação em registros patrimoniais, indisponibilidade de ativos, investigação patrimonial e responsabilização de corresponsáveis, quando houver fundamento legal." },
            { title: "Problemas com certidão", body: "Enquanto a dívida permanecer exigível e sem negociação válida, poderá impedir a emissão de Certidão Negativa ou de Certidão Positiva com Efeitos de Negativa. Isso pode comprometer participação em licitações, manutenção de contratos, recebimentos de órgãos públicos, financiamentos, operações bancárias, cadastros de fornecedores, distribuição de recursos públicos e renovação de determinados registros." },
            { title: "Ausência de modalidade vantajosa", body: "A dívida pode ser inscrita sem que exista naquele momento uma transação com desconto ou prazo suficiente. Por isso, o custo do encaminhamento precisa ser comparado com o custo de permanecer na Receita." },
          ],
        },
        {
          h2: "Atenção aos prazos dos editais",
          lead: "O prazo final de adesão a um edital não se confunde com a data-limite de inscrição.",
          h3: [
            { title: "Edital PGDAU nº 6/2026", body: "O Edital PGDAU nº 6/2026 permite adesão até 30 de setembro de 2026, às 19h, mas alcança somente dívidas inscritas até 3 de março de 2026. Consequentemente, uma dívida encaminhada e inscrita depois de 3 de março de 2026 não se torna elegível para esse edital apenas porque a adesão permanece aberta até setembro." },
            { title: "O que a proximidade do prazo não garante", body: "Não localizamos ato público da Receita Federal que assegure prioridade geral na fila de encaminhamento em razão do encerramento desse edital. A proximidade do prazo não garante prioridade, não substitui a regra dos 90 dias, não dispensa o controle de legalidade, não antecipa a data de corte, não assegura inscrição antes do encerramento e não garante desconto ou modalidade específica." },
          ],
        },
        {
          h2: "Base legal do encaminhamento para a PGFN",
          lead: "A seguir, os principais dispositivos que regulam o encaminhamento, a contagem do prazo e os efeitos da inscrição em Dívida Ativa.",
          h3: [
            {
              title: "Dispositivos legais e normativos",
              body: (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[15px]">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-3 pr-4 font-semibold whitespace-nowrap">Norma</th>
                        <th className="py-3 font-semibold">Conteúdo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-3 pr-4 align-top whitespace-nowrap">Art. 39, parágrafo 1º, da Lei nº 4.320/1964</td>
                        <td className="py-3 align-top">Define a Dívida Ativa da União e a inscrição dos créditos exigíveis.</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 pr-4 align-top whitespace-nowrap">Art. 22 do Decreto-Lei nº 147/1967</td>
                        <td className="py-3 align-top">Obriga o encaminhamento à PGFN após o término do procedimento e do prazo de recolhimento.</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 pr-4 align-top whitespace-nowrap">Art. 2º da Portaria MF nº 447/2018</td>
                        <td className="py-3 align-top">Estabelece o prazo de 90 dias para encaminhamento dos débitos exigíveis.</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 pr-4 align-top whitespace-nowrap">Art. 2º, parágrafo 1º, da Portaria MF nº 447/2018</td>
                        <td className="py-3 align-top">Disciplina o início da contagem para lançamentos de ofício e débitos confessados.</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 pr-4 align-top whitespace-nowrap">Art. 2º, parágrafo 2º, da Portaria MF nº 447/2018</td>
                        <td className="py-3 align-top">Determina que, em parcelamento, o prazo começa após a rescisão definitiva.</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 pr-4 align-top whitespace-nowrap">Art. 2º, parágrafo 3º, da Portaria MF nº 447/2018</td>
                        <td className="py-3 align-top">Disciplina a contagem quando existe pedido de revisão.</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 pr-4 align-top whitespace-nowrap">Art. 3º da Portaria PGFN nº 33/2018</td>
                        <td className="py-3 align-top">Regulamenta o encaminhamento e o controle de legalidade.</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 pr-4 align-top whitespace-nowrap">Portaria PGFN nº 660/2018</td>
                        <td className="py-3 align-top">Adequa a Portaria PGFN nº 33/2018 à regra dos 90 dias.</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 pr-4 align-top whitespace-nowrap">Arts. 2º e 3º da Portaria PGFN/ME nº 6.155/2021</td>
                        <td className="py-3 align-top">Regulamentam o envio e o valor mínimo para inscrição.</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 pr-4 align-top whitespace-nowrap">Art. 17, parágrafo 1º, da IN RFB nº 2.063/2022</td>
                        <td className="py-3 align-top">Estabelece a entrada de 10% ou 20% no reparcelamento.</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 pr-4 align-top whitespace-nowrap">Art. 151, inciso VI, do CTN</td>
                        <td className="py-3 align-top">Estabelece que o parcelamento suspende a exigibilidade.</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 pr-4 align-top whitespace-nowrap">Art. 12 da Lei nº 13.988/2020</td>
                        <td className="py-3 align-top">Determina que a simples proposta de transação não suspende a exigibilidade.</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 align-top whitespace-nowrap">Decreto-Lei nº 1.025/1969</td>
                        <td className="py-3 align-top">Fundamenta a incidência do encargo legal na cobrança da Dívida Ativa.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ),
            },
          ],
        },
        {
          h2: "Como a DCON atua",
          lead: "A análise do encaminhamento à PGFN exige mapeamento detalhado, contagem individual e comparação financeira.",
          h3: [
            { title: "1. Mapeamento da dívida", body: "Levantamos débitos existentes na Receita Federal, origem e natureza dos tributos, datas de vencimento, declarações constitutivas, intimações, parcelamentos ativos, parcelamentos rescindidos, histórico de reparcelamento, processos administrativos, pedidos de revisão e causas de suspensão da exigibilidade." },
            { title: "2. Contagem individual dos 90 dias", body: "Não consideramos apenas a data original de vencimento. Apuramos o marco inicial conforme lançamento de ofício, débito confessado, rescisão definitiva do parcelamento, decisão de pedido de revisão, vencimento de quotas e constituição definitiva do crédito." },
            { title: "3. Comparação financeira", body: "Comparamos entrada de 10% ou 20% na Receita, custo estimado do encargo legal, modalidades disponíveis na PGFN, capacidade de pagamento, prazo, valor das prestações, impacto sobre o caixa, riscos durante o período sem suspensão e custo total da negociação." },
            { title: "4. Protocolo e acompanhamento", body: "Quando o procedimento se mostra juridicamente possível e economicamente adequado, acompanhamos requerimento administrativo, documentação, movimentação na Receita Federal, encaminhamento à PGFN, controle de legalidade, inscrição em Dívida Ativa, disponibilização no Regularize, conferência dos valores, modalidades de negociação e regularização da certidão." },
            { title: "5. Revisão antes da negociação", body: "Antes de formalizar o parcelamento ou a transação, verificamos valor principal, juros, multas, encargo legal, duplicidades, pagamentos não apropriados, débitos indevidos, causas de suspensão, classificação da capacidade de pagamento e condições de manutenção do acordo." },
          ],
        },
        {
          h2: "O encaminhamento deve resolver o caixa, não criar um risco maior",
          lead: "A entrada de 10% ou 20% exigida no reparcelamento pode tornar a regularização financeiramente inviável. Entretanto, o encaminhamento para a PGFN precisa considerar o prazo legal, o aumento potencial da dívida, a ausência temporária de suspensão, o risco de protesto, o encargo legal e a possibilidade de não existir uma transação vantajosa.",
          h3: [
            { title: "Comparar antes de decidir", body: "A decisão correta não é simplesmente mandar a dívida para a PGFN. A decisão correta é comparar: custo da entrada na Receita, custo da inscrição, modalidade disponível e capacidade real de pagamento." },
            { title: "Em destaque", body: "Economia sem segurança vira risco fiscal." },
          ],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Solução", label: "Regularização Fiscal", to: "/solucoes/regularizacao-fiscal" },
        { eyebrow: "Solução", label: "Defesas Fiscais", to: "/solucoes/defesas-fiscais" },
        { eyebrow: "Leia também", label: "LC 236/2026: processo administrativo fiscal", to: "/conteudos/lc-236-2026-processo-administrativo-fiscal" },
        { eyebrow: "Primeiro passo", label: "Diagnóstico Fiscal e Contábil", to: "/diagnostico" },
        {
          h2: "Conclusão",
          lead: "A entrada de 10% ou 20% exigida no reparcelamento pode tornar a regularização financeiramente inviável, mas o encaminhamento para a PGFN exige análise cuidadosa dos prazos, riscos e modalidades disponíveis.",
          h3: [
            {
              title: "Analisar débitos aptos ao encaminhamento",
              body: "Solicite uma análise técnica dos débitos da sua empresa para identificar quais estão definitivamente constituídos, exigíveis e aptos ao encaminhamento à PGFN.",
              cta: { label: "Analisar débitos aptos ao encaminhamento", to: "/diagnostico" },
            },
            {
              title: "Comparar as alternativas",
              body: "Compare o reparcelamento na Receita Federal e a negociação na PGFN antes de decidir o caminho da regularização.",
              cta: { label: "Comparar reparcelamento na Receita e negociação na PGFN", to: "/contato" },
            },
          ],
        },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fonte normativa</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Os dispositivos citados nesta análise tratam do reparcelamento, do encaminhamento à PGFN e da contagem do prazo legal.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Lei nº 4.320/1964; Decreto-Lei nº 147/1967; Portaria MF nº 447/2018; Portaria PGFN nº 33/2018; Portaria PGFN nº 660/2018; Portaria PGFN/ME nº 6.155/2021; Instrução Normativa RFB nº 2.063/2022; Código Tributário Nacional; Lei nº 13.988/2020; Decreto-Lei nº 1.025/1969.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Fontes oficiais: Receita Federal do Brasil —{" "}
            <a
              href="https://www.gov.br/receitafederal"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold/50 hover:text-foreground"
            >
              https://www.gov.br/receitafederal
            </a>
            ; Procuradoria-Geral da Fazenda Nacional —{" "}
            <a
              href="https://www.gov.br/pgfn"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold/50 hover:text-foreground"
            >
              https://www.gov.br/pgfn
            </a>
            .
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Revisão técnica:{" "}
            <a href="/sobre/leandro/" className="underline decoration-gold/50 hover:text-foreground">
              Leandro Matsuoka Guimarães
            </a>
            , sócio-fundador e diretor técnico da DCON. Contador com 22 anos de experiência, bacharel em Direito e pós-graduado em Controladoria e Finanças Corporativas. CRC-GO 16.395/O-9.
          </p>
        </div>
      </section>
    </PageScaffold>
  );
}
