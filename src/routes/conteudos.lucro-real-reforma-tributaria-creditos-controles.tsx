import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/lucro-real-reforma-tributaria-creditos-controles";
const H1 = "Lucro Real na Reforma Tributária: Créditos de CBS, Riscos, Contratos e Preparação para 2027";
const META_TITLE = "Lucro Real na Reforma Tributária: créditos e preparação";
const META_DESCRIPTION =
  "Entenda como CBS, créditos, glosas, split payment e revisão de contratos afetarão empresas do Lucro Real a partir de 2027 e como preparar a operação.";
const PUBLISHED = "21/09/2026";

const faq = [
  {
    q: "A Reforma Tributária acaba com o Lucro Real?",
    a: "Não. A CBS substitui PIS e Cofins, mas o cálculo de IRPJ e CSLL pelo Lucro Real continua existindo normalmente.",
  },
  {
    q: "A CBS ainda exige essencialidade do insumo?",
    a: "Não no mesmo sentido de hoje — o modelo se aproxima de um crédito financeiro, condicionado à documentação, tributação efetiva e ausência de vedação legal.",
  },
  {
    q: "Salários geram crédito?",
    a: "Não. A folha de pagamento não gera crédito ordinário de CBS.",
  },
  {
    q: "O que acontece se o fornecedor não pagar a CBS?",
    a: "O crédito depende da extinção do débito da operação anterior conforme as regras do sistema — não há uma resposta única e absoluta, exige acompanhamento caso a caso.",
  },
  {
    q: "Como evitar glosa de CBS?",
    a: "Validando fornecedores, conferindo documentos fiscais, mantendo conciliação entre pagamento e nota, e segregando despesas pessoais das empresariais.",
  },
];

export const Route = createFileRoute("/conteudos/lucro-real-reforma-tributaria-creditos-controles")({
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
            { "@type": "ListItem", position: 1, name: "Início", item: "https://dcon.cnt.br/" },
            { "@type": "ListItem", position: 2, name: "Insights", item: "https://dcon.cnt.br/conteudos/" },
            { "@type": "ListItem", position: 3, name: "Lucro Real na Reforma Tributária", item: "https://dcon.cnt.br/conteudos/lucro-real-reforma-tributaria-creditos-controles/" },
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
          datePublished: "2026-09-21",
          dateModified: "2026-09-21",
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
      eyebrow={`Reforma tributária · ${PUBLISHED}`}
      h1={H1}
      intro="A Reforma Tributária não acaba com o Lucro Real. O regime continuará sendo utilizado para calcular IRPJ e CSLL com base no resultado contábil ajustado. A principal mudança ocorre na tributação do consumo: a CBS substituirá PIS e Cofins, enquanto o IBS substituirá gradualmente ICMS e ISS. Para as empresas do Lucro Real, isso significa uma mudança profunda na forma de reconhecer créditos, contratar fornecedores, formar preços e administrar o fluxo de caixa. No novo modelo, não será suficiente receber uma nota fiscal e registrar a despesa — o crédito dependerá da correta combinação entre documento fiscal, operação realizada, classificação tributária, pagamento, extinção do débito da etapa anterior e ausência de vedação legal."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "Lucro Real na Reforma Tributária", to: SLUG },
      ]}
      audience={[
        "Empresas enquadradas no Lucro Real",
        "Sócios e gestores financeiros que decidem regime tributário",
        "Empresas com cadeia de fornecedores complexa",
        "Escritórios de contabilidade que assessoram empresas sob a nova reforma",
      ]}
      ctaPrimary={{ label: "Solicitar diagnóstico da Reforma Tributária para o Lucro Real", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver departamento fiscal", to: "/solucoes/departamento-fiscal" }}
      faq={faq}
      ctaVariant="lucroRealReforma"
      sections={[
        {
          h2: "O que permanece e o que muda no Lucro Real",
          lead: "O Lucro Real continuará definindo a apuração de IRPJ, adicional de IRPJ, CSLL, prejuízo fiscal e base negativa da CSLL. A Reforma Tributária modifica principalmente PIS, Cofins, ICMS e ISS.",
          h3: [
            {
              title: "Permanência do Lucro Real",
              body: "O regime continuará sendo utilizado para calcular IRPJ e CSLL com base no resultado contábil ajustado, preservando as regras de prejuízos fiscais e bases negativas.",
            },
            {
              title: "Mudança na tributação do consumo",
              body: "A partir de 2027, PIS e Cofins serão substituídos pela CBS, e o IBS avançará gradualmente sobre ICMS e ISS entre 2029 e 2032, com conclusão da transição em 2033, conforme a Emenda Constitucional 132/2023 e a Lei Complementar nº 214/2025.",
            },
          ],
        },
        {
          h2: "Do crédito por essencialidade ao crédito financeiro",
          lead: "No regime atual de PIS/Cofins, consolidou-se a análise de essencialidade ou relevância da despesa para a atividade empresarial. Na CBS, o modelo é mais próximo de um crédito financeiro.",
          h3: [
            {
              title: "Crédito financeiro na CBS",
              body: "Em regra, o contribuinte do regime regular poderá apropriar créditos correspondentes às aquisições tributadas, observadas as condições e vedações legais.",
            },
            {
              title: "Perguntas orientadoras",
              body: "O adquirente está sujeito ao regime regular? Existe documento fiscal eletrônico válido? O valor da CBS está corretamente informado? O débito do fornecedor foi extinto conforme a sistemática legal? Existe vedação por uso pessoal?",
            },
            {
              title: "Base legal",
              body: "Os arts. 47 a 57 da LC 214/2025 concentram as principais regras de não cumulatividade, com alterações posteriores da LC 227/2026.",
            },
          ],
        },
        {
          h2: "Quais gastos não gerarão crédito automaticamente",
          lead: "Nem toda despesa suportada gera crédito de CBS. A folha de pagamento e determinadas contratações com pessoas físicas são exemplos típicos de restrição.",
          h3: [
            {
              title: "Folha de pagamento",
              body: "Não geram crédito de CBS: salários, pró-labore, férias, décimo terceiro, FGTS, contribuição previdenciária patronal e demais pagamentos sem incidência de CBS. A folha não representa aquisição tributada de bem ou serviço.",
            },
            {
              title: "Setores mais sensíveis",
              body: "Esse ponto será especialmente relevante para empresas de consultoria, escritórios profissionais, clínicas e empresas de tecnologia com equipe CLT.",
            },
            {
              title: "Outras despesas sem crédito ordinário",
              body: "Também podem não gerar crédito ordinário: aluguel pago a pessoa física, serviços de autônomos, comissões e compra de bens usados de pessoa física.",
            },
          ],
        },
        {
          h2: "Uso ou consumo pessoal",
          lead: "A vedação relacionada a uso ou consumo pessoal é uma das principais áreas de risco na apropriação de créditos.",
          h3: [
            {
              title: "Despesas de risco",
              body: "Podem ser questionadas despesas com veículos de uso pessoal de sócios, imóveis residenciais, viagens particulares e despesas familiares.",
            },
            {
              title: "Controles recomendados",
              body: "Política de despesas, identificação de usuário, centro de custos, justificativa empresarial e segregação de parcelas de uso misto.",
            },
          ],
        },
        {
          h2: "Glosa de crédito de CBS",
          lead: "A glosa ocorre quando um crédito apropriado pela empresa é rejeitado total ou parcialmente.",
          h3: [
            {
              title: "Principais causas",
              body: "Documento fiscal inexistente ou inidôneo, CNPJ incorreto, crédito em duplicidade, operação cancelada sem estorno, aquisição não tributada, uso pessoal, fornecedor do Simples com crédito calculado pela alíquota cheia, e classificação tributária errada.",
            },
            {
              title: "Consequências",
              body: "A glosa pode gerar aumento do débito de CBS, juros, multa, redução do saldo credor e indeferimento de pedidos de ressarcimento.",
            },
            {
              title: "Efeito sobre IRPJ e CSLL",
              body: "A glosa de CBS não significa automaticamente que a despesa correspondente também será indedutível para IRPJ e CSLL — será necessário examinar a causa da glosa e a natureza da despesa.",
            },
          ],
        },
        {
          h2: "Fornecedor inadimplente e risco para o adquirente",
          lead: "O crédito dependerá da correta extinção do débito da operação anterior, o que exigirá acompanhamento integrado entre documento fiscal, pagamento e apuração assistida.",
          h3: [
            {
              title: "Não é regra automática",
              body: "Não é correto afirmar que se o fornecedor não pagar, o comprador sempre perde o crédito — a apropriação depende da forma de extinção prevista, do split payment, da compensação e das regras operacionais aplicáveis.",
            },
          ],
        },
        {
          h2: "Fornecedores do Simples Nacional",
          lead: "A compra de fornecedor do Simples deverá ser analisada pelo valor líquido de crédito.",
          h3: [
            {
              title: "Crédito limitado ao valor transferido",
              body: "O fornecedor poderá recolher IBS e CBS dentro do Simples ou optar pelo regime regular, transferindo crédito limitado ao montante correspondente à tributação suportada.",
            },
            {
              title: "Impacto na escolha de fornecedor",
              body: "Dois fornecedores podem apresentar o mesmo preço bruto e gerar créditos diferentes, então o cadastro de fornecedores deverá considerar regime tributário, crédito transferido e custo líquido da aquisição.",
            },
          ],
        },
        {
          h2: "Split payment e capital de giro",
          lead: "No split payment, o valor do tributo pode ser segregado durante a liquidação financeira.",
          h3: [
            {
              title: "Efeito operacional",
              body: "A empresa pode vender por determinado valor e não receber integralmente esse valor em sua conta operacional, com a parcela de IBS/CBS direcionada ao sistema tributário.",
            },
            {
              title: "Impactos a administrar",
              body: "Isso impacta a necessidade de capital de giro, a conciliação entre nota e recebimento, e o tratamento de inadimplência e devoluções.",
            },
          ],
        },
        {
          h2: "Créditos acumulados e ressarcimento",
          lead: "Empresas podem acumular créditos por diversas razões estruturais.",
          h3: [
            {
              title: "Causas comuns de acúmulo",
              body: "Exportações, investimentos, alíquota de saída inferior à de entrada, ou aumento de estoque.",
            },
            {
              title: "Destinação dos créditos",
              body: "A LC 214 permite compensação com débitos, transporte para períodos seguintes, ou pedido de ressarcimento, observados os prazos legais.",
            },
          ],
        },
        {
          h2: "Plano de preparação para empresas do Lucro Real",
          lead: "Cinco etapas para estruturar a operação antes da vigência plena da CBS.",
          h3: [
            {
              title: "Etapa 1 — Diagnóstico",
              body: "Mapear receitas, compras, fornecedores, folha e contratos.",
            },
            {
              title: "Etapa 2 — Simulação",
              body: "Projetar carga atual versus CBS/IBS, créditos recuperáveis e bloqueados.",
            },
            {
              title: "Etapa 3 — Saneamento",
              body: "Corrigir cadastros, revisar documentos, ajustar contratos.",
            },
            {
              title: "Etapa 4 — Testes",
              body: "Emitir documentos, conciliar pagamentos, simular apuração.",
            },
            {
              title: "Etapa 5 — Monitoramento",
              body: "Acompanhar divergências, créditos glosados e prazo de ressarcimento.",
            },
          ],
        },
        {
          h2: "Conclusão",
          lead: "A análise da Reforma Tributária para empresas do Lucro Real não pode se limitar à aplicação de uma alíquota sobre o faturamento — envolve receitas, fornecedores, créditos potenciais, riscos de glosa, contratos, formação de preços e fluxo de caixa.",
          h3: [],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Solução", label: "Departamento Fiscal", to: "/solucoes/departamento-fiscal" },
        { eyebrow: "Solução", label: "Reforma Tributária", to: "/solucoes/reforma-tributaria" },
        { eyebrow: "Leia também", label: "Lucro Presumido na Reforma Tributária: riscos e oportunidades", to: "/conteudos/lucro-presumido-reforma-tributaria-riscos-oportunidades" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fonte normativa</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Dispositivos legais citados nesta análise sobre Lucro Real, CBS e Reforma Tributária.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8 space-y-4">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Emenda Constitucional nº 132/2023 (reforma do sistema tributário nacional e cronograma de transição do IBS). Lei Complementar nº 214/2025 (instituição da CBS e regras de crédito, arts. 47 a 57). Lei Complementar nº 227/2026 (alterações às regras de não cumulatividade).
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Fontes oficiais: Receita Federal do Brasil / Comitê Gestor do IBS.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
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
