import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/ibs-cbs-aliquota-reduzida-setores-beneficiados";
const H1 = "IBS e CBS com alíquota reduzida: quais setores podem pagar menos e manter créditos?";
const META_TITLE = "IBS e CBS com Alíquota Reduzida: Setores Beneficiados e Créditos";
const META_DESCRIPTION =
  "Entenda quais atividades terão redução de IBS e CBS, como funcionará o aproveitamento dos créditos, quais setores podem ser beneficiados e os riscos de glosa e enquadramento.";
const PUBLISHED = "21/09/2026";

const faq = [
  {
    q: "Quem vende com redução de 60% pode aproveitar crédito integral?",
    a: "Pode aproveitar o valor integral do IBS e da CBS efetivamente cobrado nas entradas elegíveis, não um crédito teórico calculado pela alíquota-padrão.",
  },
  {
    q: "O comprador recebe crédito pela alíquota-padrão?",
    a: "Não. O comprador recebe o crédito correspondente ao imposto efetivamente cobrado na operação de aquisição.",
  },
  {
    q: "Toda empresa de saúde terá redução?",
    a: "Não necessariamente sobre todas as receitas - e preciso verificar o serviço na NBS, o Anexo III e a natureza de cada receita.",
  },
  {
    q: "O CNAE comprova o direito a redução?",
    a: "Não. O CNAE pode ser um elemento cadastral, mas o direito depende da operação, da NCM ou NBS, dos anexos legais e dos requisitos específicos.",
  },
];

export const Route = createFileRoute("/conteudos/ibs-cbs-aliquota-reduzida-setores-beneficiados")({
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
            { "@type": "ListItem", position: 3, name: H1, item: "/conteudos/ibs-cbs-aliquota-reduzida-setores-beneficiados" },
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
      intro="A reforma tributária estabeleceu uma alíquota-padrão para o IBS e a CBS, mas também criou regimes diferenciados para atividades consideradas socialmente relevantes, essenciais ou merecedoras de tratamento específico. Empresas com saídas tributadas por alíquota reduzida podem continuar aproveitando os créditos efetivamente cobrados nas entradas. Quanto maior a proporção de compras tributadas em relação a receita, maior a possibilidade de redução da carga líquida ou formação de saldo credor. Mas a expressão 'crédito integral' precisa ser usada com precisão: o crédito corresponde ao IBS e a CBS efetivamente destacados e extintos na operação anterior, e não a um crédito teórico calculado pela alíquota-padrão. A regra geral está nos arts. 47 a 52 da Lei Complementar nº 214/2025."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: H1, to: SLUG },
      ]}
      ctaPrimary={{ label: "Solicitar diagnóstico de enquadramento tributário", to: "/diagnostico" }}
      faq={faq}
      relatedLinks={[
        { eyebrow: "Leia também", label: "Quais Despesas Geram Crédito de IBS e CBS", to: "/conteudos/despesas-que-geram-credito-ibs-cbs" },
        { eyebrow: "Leia também", label: "Auditoria de Fornecedores para Preservar Créditos de IBS e CBS", to: "/conteudos/auditoria-fornecedores-creditos-ibs-cbs" },
        { eyebrow: "Leia também", label: "Glosa de Crédito de IBS e CBS: Principais Causas e Como Evitar", to: "/conteudos/glosa-credito-ibs-cbs-causas-como-evitar" },
      ]}
      sections={[
        {
          h2: "Profissões com redução de 30%",
          lead: "A legislação também prevê redução de 30% das alíquotas de IBS e CBS para determinadas profissões intelectuais fiscalizadas por conselho profissional.",
          h3: [
            { title: "Profissões abrangidas", body: "administradores, advogados, arquitetos e urbanistas, assistentes sociais, bibliotecários, biólogos, contabilistas, economistas, profissionais de educação física, engenheiros e agronomos, estatísticos, médicos veterinarios e zootecnistas, museologos, químicos, profissionais de relações publicas, técnicos industriais e técnicos agrícolas." },
            { title: "Alíquota aplicavel", body: "Nesse caso, a empresa aplicará 70% da alíquota-padrão." },
            { title: "Requisitos para pessoas jurídicas", body: "A sociedade deverá observar requisitos cumulativos, entre eles sócios com habilitações relacionadas ao objeto da sociedade, fiscalização pelo conselho profissional, ausência de pessoa juridica no quadro societário, exercício apenas das atividades profissionais habilitadas, e prestação direta dos serviços pelos sócios." },
            { title: "Base legal", body: "Essas condições estao detalhadas no art. 127 da LC 214/2025." },
          ],
        },
        {
          h2: "Regimes com redução de 40%",
          lead: "A LC 214 também prevê redução de 40% em alguns regimes específicos.",
          h3: [
            { title: "Setores contemplados", body: "bares, restaurantes e lanchonetes; hotelaria; parques de diversao e parques tematicos; transporte coletivo intermunicipal e interestadual; transporte aereo regional; intermediação realizada por agências de turismo." },
            { title: "Análise separada necessaria", body: "Esses regimes precisam ser analisados separadamente porque podem ter limitações especificas tanto para o fornecedor quanto para o adquirente." },
            { title: "Exemplo: hotelaria e parques", body: "Hotéis e parques podem aproveitar créditos de suas aquisições, mas o cliente de hotel ou parque, em regra, não aproveita crédito da aquisição." },
          ],
        },
        {
          h2: "Quais setores tendem a ser mais beneficiados?",
          lead: "Tendem a se beneficiar mais empresas com determinadas características estruturais.",
          h3: [
            { title: "Características favoráveis", body: "saida com redução de 60% ou alíquota zero, grande volume de entradas tributadas pela alíquota-padrão, margem de valor agregado relativamente pequena, investimentos frequentes em máquinas e infraestrutura, baixa participação da folha na estrutura de custos." },
            { title: "Exemplos de setores", body: "hospitais e laboratórios intensivos em materiais e tecnologia; fabricantes de dispositivos médicos; indústria farmacêutica; produções audiovisuais e culturais com terceirização relevante; instituições de educação com investimentos tecnológicos; empresas de segurança cibernética; hotelaria e parques; profissionais regulamentados com estrutura empresarial e investimentos." },
          ],
        },
        {
          h2: "Quem pode não ser tao beneficiado?",
          lead: "Mesmo com redução da alíquota, o resultado pode ser menos favorável para algumas estruturas de custo.",
          h3: [
            { title: "Fatores que reduzem o benefício", body: "folha de pagamento muito elevada, grande quantidade de prestadores pessoas físicas, compras de fornecedores do Simples Nacional puro, aquisições sujeitas a alíquota zero, e baixa proporção de insumos tributados." },
          ],
        },
        {
          h2: "Principais riscos de glosa",
          lead: "Existem dois riscos distintos que precisam ser gerenciados.",
          h3: [
            { title: "Glosa dos créditos de entrada", body: "documento fiscal inidôneo, classificação incorreta, crédito superior ao valor efetivamente cobrado, duplicidade." },
            { title: "Glosa da redução na saida", body: "pode ser ainda mais onerosa - o Fisco pode cobrar a diferença até a alíquota-padrão quando: for usado apenas o CNAE como justificativa, o produto não estiver relacionado no anexo, a NCM ou NBS estiver incorreta, ou faltar registro em órgão regulatório como Anvisa." },
            { title: "Consequências", body: "A consequência pode envolver recomposição do débito pela alíquota-padrão, juros, multa e questionamento dos créditos tomados pelo comprador." },
          ],
        },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Fundamento</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">A logica economica da reducao</h2>
        </header>

        <div className="lg:col-span-8 space-y-6">
          <div className="bg-card border border-border p-6 md:p-8">
            <p className="font-display text-lg text-foreground mb-2">IBS/CBS a recolher = debitos sobre as saidas - creditos das entradas</p>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              Nas atividades beneficiadas, o debito da saida e calculado com reducao da aliquota, mas os creditos das entradas nao sofrem automaticamente uma reducao proporcional. Isso cria uma possivel assimetria favoravel: entrada adquirida com aliquota-padrao, credito correspondente ao tributo efetivamente cobrado, saida tributada com aliquota reduzida, debito menor, saldo liquido de imposto menor ou saldo a recuperar.
            </p>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Percentuais</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">O que significa reducao de 60%?</h2>

          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Reducao de 60% nao significa que a aliquota sera de 60%. Significa que o contribuinte aplicara apenas 40% da aliquota-padrao.
          </p>
        </header>
        <div className="lg:col-span-8 space-y-6">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Se a aliquota-padrao hipotetica fosse de 25%, por exemplo: 25% x 40% = 10%. Nesse exemplo meramente ilustrativo, a operacao sujeita a reducao de 60% teria aliquota efetiva de 10%.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border">
              <thead className="bg-secondary text-secondary-foreground">
                <tr>
                  <th className="text-left p-4 font-display">Reducao legal</th>
                  <th className="text-left p-4 font-display">Percentual da aliquota-padrao aplicado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-card"><td className="p-4">30%</td><td className="p-4">70% da aliquota-padrao</td></tr>
                <tr className="bg-card"><td className="p-4">40%</td><td className="p-4">60% da aliquota-padrao</td></tr>
                <tr className="bg-card"><td className="p-4">60%</td><td className="p-4">40% da aliquota-padrao</td></tr>
                <tr className="bg-card"><td className="p-4">100%</td><td className="p-4">Aliquota zero</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-[15px] leading-relaxed text-foreground/90">
            As reducoes sao aplicadas sobre as aliquotas-padrao definidas para a CBS e para o IBS, conforme o art. 126 da LC 214/2025.
          </p>
        </div>
      </section>

      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Enquadramento</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Quais atividades tem reducao de 60% do IBS e da CBS?</h2>

          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            A LC 214/2025 preve reducao de 60% para operacoes pertencentes as seguintes categorias.
          </p>
        </header>
        <div className="lg:col-span-8 space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border">
              <thead className="bg-secondary text-secondary-foreground">
                <tr>
                  <th className="text-left p-4 font-display">Categoria</th>
                  <th className="text-left p-4 font-display">Observacao principal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-card"><td className="p-4">Servicos de educacao</td><td className="p-4">Somente os servicos relacionados no Anexo II e classificados na NBS</td></tr>
                <tr className="bg-card"><td className="p-4">Servicos de saude</td><td className="p-4">Servicos relacionados no Anexo III</td></tr>
                <tr className="bg-card"><td className="p-4">Dispositivos medicos</td><td className="p-4">Produtos dos anexos legais, com requisitos da Anvisa</td></tr>
                <tr className="bg-card"><td className="p-4">Dispositivos de acessibilidade</td><td className="p-4">Produtos enquadrados nos anexos e requisitos do orgao competente</td></tr>
                <tr className="bg-card"><td className="p-4">Medicamentos</td><td className="p-4">Medicamentos registrados na Anvisa, ressalvadas hipoteses de aliquota zero</td></tr>
                <tr className="bg-card"><td className="p-4">Alimentos destinados ao consumo humano</td><td className="p-4">Produtos expressamente relacionados no Anexo VII</td></tr>
                <tr className="bg-card"><td className="p-4">Higiene pessoal e limpeza</td><td className="p-4">Produtos do Anexo VIII, voltados majoritariamente a familias de baixa renda</td></tr>
                <tr className="bg-card"><td className="p-4">Produtos agropecuarios e similares in natura</td><td className="p-4">Desde que preservada a condicao legal de produto in natura</td></tr>
                <tr className="bg-card"><td className="p-4">Insumos agropecuarios e aquicolas</td><td className="p-4">Itens do Anexo IX, sujeitos tambem a regras de diferimento</td></tr>
                <tr className="bg-card"><td className="p-4">Producoes artisticas e culturais nacionais</td><td className="p-4">Operacoes e classificacoes do Anexo X</td></tr>
                <tr className="bg-card"><td className="p-4">Producoes jornalisticas e audiovisuais nacionais</td><td className="p-4">Conforme os requisitos de producao nacional</td></tr>
                <tr className="bg-card"><td className="p-4">Eventos especificados</td><td className="p-4">Congressos, conferencias, feiras, exposicoes e outros previstos na lei</td></tr>
                <tr className="bg-card"><td className="p-4">Comunicacao institucional</td><td className="p-4">Em determinadas operacoes com a administracao publica</td></tr>
                <tr className="bg-card"><td className="p-4">Atividades desportivas</td><td className="p-4">Educacao desportiva e determinadas operacoes de associacoes e clubes</td></tr>
                <tr className="bg-card"><td className="p-4">Seguranca da informacao e cibernetica</td><td className="p-4">Operacoes do Anexo XI e observancia dos requisitos societarios ou do adquirente</td></tr>
                <tr className="bg-card"><td className="p-4">Soberania e seguranca nacional</td><td className="p-4">Operacoes previstas no Anexo XI</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-[15px] leading-relaxed text-foreground/90">
            A lista geral esta no art. 128 da LC 214/2025, mas o enquadramento concreto depende dos artigos seguintes e dos respectivos anexos.
          </p>

          <div className="bg-card border border-border p-6">
            <h3 className="font-display text-[17px] text-foreground mb-3">CNAE nao e suficiente</h3>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              O beneficio nao e necessariamente concedido para toda a empresa ou para todas as receitas de determinado CNAE. O que deve ser analisado e cada operacao, produto ou servico, sua classificacao na NCM ou NBS e os requisitos legais aplicaveis. Uma escola, por exemplo, pode ter mensalidade relativa a servico educacional beneficiado, venda de uniformes, venda de materiais, alimentacao, locacao de espacos, publicidade, eventos nao educacionais. A reducao concedida ao servico de educacao nao se estende automaticamente as demais receitas da instituicao.
            </p>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Creditos</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Credito integral: o que realmente pode ser aproveitado?</h2>

          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            No regime regular, o contribuinte pode aproveitar o valor de IBS e CBS efetivamente cobrado na aquisicao, observadas as condicoes legais.
          </p>
        </header>
        <div className="lg:col-span-8 space-y-6">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Abrange materias-primas, mercadorias, materiais, equipamentos, ativo imobilizado, energia, servicos de tecnologia, servicos contabeis e juridicos, publicidade, manutencao, locacoes tributadas, fretes, entre outros. O credito nao depende de um teste de essencialidade como o atual criterio jurisprudencial de PIS/Cofins, mas continua sujeito a requisitos documentais, operacionais e financeiros.
          </p>
          <div className="bg-card border border-border p-6">
            <h3 className="font-display text-[17px] text-foreground mb-3">O credito e integral, mas nao e presumido</h3>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              A empresa nao podera calcular o credito aplicando a aliquota-padrao sobre qualquer despesa. O credito correspondera ao valor do IBS ou da CBS que estiver corretamente documentado, tiver sido destacado na aquisicao, tiver sido extinto por uma das modalidades previstas na legislacao, e nao estiver relacionado a uso ou consumo pessoal. Se o fornecedor aplicar aliquota reduzida, o adquirente recebera credito reduzido. Se o fornecedor aplicar aliquota zero, nao havera imposto cobrado na aquisicao e, consequentemente, o comprador nao tera credito daquela operacao. Se o fornecedor estiver no Simples Nacional puro, o credito do adquirente sera limitado ao montante de IBS e CBS efetivamente devido por meio do regime simplificado.
            </p>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fonte normativa</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Dispositivos legais citados nesta analise sobre IBS e CBS com aliquota reduzida.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Lei Complementar nº 214/2025, arts. 47 a 52, 126 a 128.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Fonte oficial: Receita Federal do Brasil / Comite Gestor do IBS.
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
