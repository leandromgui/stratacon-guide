import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/segmentos/atacadistas-distribuidores";

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
              item: "/segmentos/atacadistas-distribuidores",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(LEANDRO_PERSON_JSONLD),
      },
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
        {
          h2: "Aliquota zero de ICMS exige cuidado terminologico",
          lead: 'No uso comercial, e comum dizer que determinado produto possui "ICMS zero". Entretanto, juridicamente, e necessario identificar qual tratamento realmente existe. A desoneracao pode decorrer de isencao, nao incidencia, reducao de base de calculo, diferimento, suspensao, credito outorgado, tributacao anterior por substituicao tributaria, aliquota especifica ou regime especial. Essas figuras produzem efeitos diferentes sobre emissao da nota, escrituracao e manutencao ou estorno de creditos. Em Goias, os beneficios de ICMS estao concentrados especialmente no Anexo IX do Regulamento do Codigo Tributario do Estado, aprovado pelo Decreto no 4.852/1997, alem de leis, decretos, convenios e atos especificos. A revisao de NCM pode revelar produtos submetidos a isencao, reducao de base, diferimento, credito outorgado ou outros tratamentos fiscais, desde que todos os requisitos da norma sejam atendidos.',
        },
        {
          h2: "Beneficios de ICMS que devem ser investigados",
          lead: "Uma revisao fiscal de atacadistas em Goias deve verificar, produto a produto e operacao a operacao, a existencia de:",
          h3: [
            {
              title: "Isencao",
              body: "A operacao fica dispensada do recolhimento do ICMS nos limites da norma, com efeitos sobre os creditos das entradas.",
            },
            {
              title: "Reducao de base de calculo",
              body: "O imposto continua existindo, mas e calculado sobre uma base reduzida.",
            },
            {
              title: "Diferimento",
              body: "O recolhimento e transferido para etapa posterior da cadeia, nao significa eliminacao do imposto.",
            },
            {
              title: "Credito outorgado",
              body: "A empresa recebe um credito fiscal calculado conforme a regra do beneficio, podendo substituir creditos ordinarios ou exigir estornos.",
            },
            {
              title: "Substituicao tributaria",
              body: "A revisao pode identificar mercadoria indevidamente incluida na substituicao, CEST incorreto, MVA inadequada, imposto retido a maior e direito a restituicao.",
            },
            {
              title: "Incentivos e regimes especiais",
              body: "Podem depender de enquadramento especifico, autorizacao da Secretaria da Economia ou Termo de Acordo de Regime Especial.",
            },
          ],
        },
        {
          h2: "PROTEGE Goias nao e beneficio, e custo ou condicionante",
          lead: 'O Fundo de Protecao Social do Estado de Goias - PROTEGE GOIAS - foi instituido pela Lei estadual no 14.469/2003. Em determinados beneficios e incentivos fiscais, a legislacao pode condicionar a fruicao do tratamento a realizacao de contribuicao ao PROTEGE. Isso significa que o percentual nominal de um beneficio nao representa, sozinho, a economia efetiva da empresa. A analise precisa verificar se aquele beneficio exige contribuicao, qual e a base de calculo, qual percentual esta previsto, qual e o prazo de pagamento, se a contribuicao e mensal ou vinculada a utilizacao, e se o descumprimento pode comprometer o beneficio. O PROTEGE nao deve ser apresentado como beneficio fiscal - deve ser tratado como possivel contrapartida ou condicao para a utilizacao de determinados beneficios.',
        },
        {
          h2: "Credito outorgado nao e credito livre",
          lead: "O credito outorgado pode reduzir a carga tributaria, mas precisa ser analisado dentro da sistematica completa do regime. Dependendo da norma, podem existir substituicao dos creditos ordinarios, estorno total ou proporcional de creditos, exclusao de determinadas mercadorias, limitacao por tipo de operacao, vedacao de acumulacao com outro beneficio, contribuicao ao PROTEGE, necessidade de regularidade fiscal, TARE e prazo de vigencia. Por isso, o ganho deve ser calculado pelo resultado liquido, considerando carga tributaria no cenario atual menos carga no cenario incentivado, menos contrapartidas, menos creditos perdidos e menos custos incrementais (PROTEGE quando aplicavel, creditos estornados, custo financeiro, garantias, desenvolvimento de ERP, obrigacoes acessorias, consultoria, risco de glosa).",
        },
        {
          h2: "TARE - instrumento de formalizacao, nao sinonimo de beneficio",
          lead: "O TARE e o Termo de Acordo de Regime Especial. Ele pode estabelecer condicoes diferenciadas relacionadas a emissao de documentos, escrituracao, apuracao e recolhimento, conforme a hipotese autorizada pela legislacao, com fundamento no art. 5o do Anexo IX do RCTE. O TARE nao deve ser apresentado como um beneficio independente - ele pode funcionar como instrumento para formalizar um tratamento autorizado na legislacao. A empresa precisa verificar fundamento legal, vigencia, obrigacoes assumidas, produtos abrangidos, hipoteses de suspensao ou revogacao, e compatibilidade com a operacao efetivamente realizada.",
        },
        {
          h2: "A revisao precisa alcancar PIS, COFINS, IPI e nao apenas ICMS",
          lead: "Uma revisao fiscal limitada ao ICMS pode deixar oportunidades e riscos relevantes de fora. No atacado, a classificacao do produto tambem pode alterar o tratamento de PIS, COFINS, IPI, PIS-Importacao, COFINS-Importacao, tributacao monofasica, aliquota zero, suspensao e creditos permitidos ou vedados. Nos produtos sujeitos a tributacao monofasica, a carga de PIS e COFINS e concentrada em uma etapa anterior da cadeia - o atacadista pode ter receita submetida a aliquota zero, mas isso nao significa que toda compra gere credito. Erros frequentes incluem tributar novamente uma receita monofasica, deixar de segregar receitas, aproveitar credito vedado e classificar produto comum como monofasico. A aliquota zero tambem depende do enquadramento exato na norma, validando NCM, descricao, composicao, destinacao e periodo de vigencia.",
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
