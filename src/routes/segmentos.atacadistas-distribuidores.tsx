import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/segmentos/atacadistas-distribuidores";

const faq: { q: string; a: string }[] = [];

export const Route = createFileRoute("/segmentos/atacadistas-distribuidores")({
  head: () => ({
    ...buildSeoHead({
      title: "Beneficios Fiscais para Atacadistas em Goias",
      description:
        "Entenda como Lucro Real, revisao de NCM, ICMS, PROTEGE, creditos e Reforma Tributaria podem afetar atacadistas e distribuidores em Goias.",
      canonical: SLUG,
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "/" },
            { "@type": "ListItem", position: 2, name: "Segmentos", item: "/segmentos" },
            {
              "@type": "ListItem",
              position: 3,
              name: "Atacadistas e Distribuidores",
              item: SLUG,
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(LEANDRO_PERSON_JSONLD),
      },
      ...(faq.length > 0
        ? [
            {
              type: "application/ld+json" as const,
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
          ]
        : []),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Beneficios fiscais para atacadistas em Goias: Lucro Real, revisao de NCM, ICMS e Reforma Tributaria"
      intro="Atacadistas e distribuidores normalmente operam com grande volume de vendas, margens reduzidas, milhares de produtos e elevada complexidade fiscal. Nesse ambiente, um erro aparentemente pequeno na classificacao de uma mercadoria pode ser repetido em centenas de notas fiscais e comprometer toda a margem da operacao. O problema e que muitas empresas analisam sua tributacao apenas pelo CNAE, pelo faturamento total ou pela aliquota nominal do regime tributario. Para um atacadista, isso e insuficiente. A tributacao precisa ser examinada no nivel do produto e da operacao, considerando NCM, descricao tecnica da mercadoria, CEST, origem do produto, finalidade da aquisicao, CFOP, CST ou CSOSN, estado de origem e destino, perfil do cliente, operacao interna ou interestadual, substituicao tributaria, beneficio fiscal aplicavel, creditos permitidos, contrapartidas, regime tributario, parametrizacao do ERP e documentacao necessaria para sustentar o tratamento adotado. Por isso, o beneficio fiscal nao comeca apenas no CNAE da empresa - e tambem nao termina na NCM. Ele depende do cruzamento entre produto, classificacao fiscal, operacao, destino, cliente, regime tributario e requisitos legais."
      intent="beneficios fiscais atacadistas Goias, Lucro Real atacadista, revisao NCM distribuidor"
      observation="Lucro Real, NCM, ICMS, PROTEGE, Reforma Tributaria."
      pillarKey="atacadistas-distribuidores"
      ctaPrimary={{ label: "Solicitar diagnostico tecnico inicial", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      faq={faq}
      sections={[
        {
          h2: "Atacadistas com margem reduzida devem analisar o Lucro Real",
          lead: "Empresas atacadistas podem faturar milhoes de reais e, ainda assim, trabalhar com margens liquidas muito pequenas. Essa caracteristica torna o Lucro Real uma alternativa que precisa obrigatoriamente ser simulada. No Lucro Presumido, o IRPJ e a CSLL sao calculados a partir de percentuais legais de presuncao aplicados sobre a receita, independentemente de a empresa ter alcancado aquela margem na pratica. Nas atividades comerciais, a base presumida costuma partir de 8% para o IRPJ e 12% para a CSLL, observadas as regras e particularidades legais. Se uma distribuidora possui margem efetiva inferior aos percentuais presumidos, ela pode acabar pagando IRPJ e CSLL sobre um lucro maior do que o resultado economico efetivamente obtido. No Lucro Real, por outro lado, o IRPJ e a CSLL partem do resultado contabil, ajustado pelas adicoes, exclusoes e compensacoes previstas na legislacao. Isso significa que uma empresa de margem baixa, prejuizo fiscal, despesas operacionais elevadas ou forte pressao competitiva pode encontrar no Lucro Real uma tributacao mais coerente com seu resultado.",
          h3: [
            {
              title: "Lucro Real nao significa automaticamente menor imposto",
              body: "Apesar de ser uma alternativa importante para empresas com margens reduzidas, o Lucro Real nao sera necessariamente o melhor regime em todos os casos. A analise tambem precisa considerar PIS e COFINS no regime nao cumulativo, creditos efetivamente aproveitaveis, mercadorias sujeitas a tributacao monofasica, produtos com aliquota zero, despesas dedutiveis e indedutiveis, controle de estoque, perdas e quebras, bonificacoes, devolucoes, descontos comerciais, inadimplencia, custos financeiros, despesas logisticas, adicional de IRPJ, compensacao de prejuizos fiscais, qualidade da escrituracao contabil, custo de conformidade e risco de glosa de despesas e creditos. A afirmacao tecnicamente correta e: para atacadistas com margem reduzida, o Lucro Real e uma rota obrigatoria de simulacao, nao uma resposta automatica.",
            },
          ],
        },
        {
          h2: "A revisao de NCM pode revelar imposto pago errado ou beneficio nao utilizado",
          lead: "A NCM e uma das informacoes mais importantes do cadastro fiscal de um atacadista. Ela influencia a identificacao de aliquotas, beneficios, substituicao tributaria, tratamento de PIS e COFINS, incidencia de IPI, regras de importacao e, progressivamente, o tratamento de IBS e CBS. Entretanto, a NCM nao deve ser escolhida apenas pelo nome comercial utilizado pela empresa. A classificacao precisa considerar composicao do produto, materia-prima, funcao principal, apresentacao, forma de acondicionamento, processo de fabricacao, caracteristicas tecnicas, uso predominante e regras gerais de interpretacao do Sistema Harmonizado.",
          h3: [
            {
              title: "O que uma revisao de NCM pode identificar",
              body: "Uma revisao tecnica pode localizar NCM incorreta, NCM generica ou incompativel com a descricao, mercadoria sujeita a isencao de ICMS, reducao de base de calculo, diferimento, credito outorgado, mercadoria fora ou dentro da substituicao tributaria, CEST inadequado, produto sujeito a PIS e COFINS monofasicos, produto com aliquota zero, beneficio condicionado ao uso ou ao destinatario, divergencia entre cadastro, nota fiscal e legislacao, oportunidade de recuperacao de tributo pago indevidamente, e risco de cobranca retroativa por imposto recolhido a menor.",
            },
            {
              title: "NCM nao gera beneficio sozinha",
              body: "E importante evitar uma conclusao comum: encontrar uma NCM em uma lista legal nao significa, isoladamente, que a empresa pode aplicar o beneficio. A norma pode exigir, alem da classificacao fiscal, descricao especifica do produto, registro em orgao competente, destinacao determinada, venda para cliente especifico, operacao interna ou interestadual, industrializacao ou revenda, qualidade de produtor, industrial ou atacadista, regularidade fiscal, termo de acordo, contribuicao a fundo estadual, estorno de creditos e emissao correta do documento fiscal.",
            },
          ],
        },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Responsabilidade tecnica</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Revisao tecnica</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Analise conduzida sob supervisao direta do responsavel tecnico da DCON, com CRC ativo e revisao cruzada.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Revisao tecnica:{" "}
            <a href="/sobre/leandro/" className="underline decoration-gold/50 hover:text-foreground">
              Leandro Matsuoka Guimaraes
            </a>
            , socio-fundador e diretor tecnico da DCON. Contador com 22 anos de experiencia, bacharel em Direito e pos-graduado em Controladoria e Financas Corporativas. CRC-GO 16.395/O-9.
          </p>
        </div>
      </section>
    </PageScaffold>
  );
}
