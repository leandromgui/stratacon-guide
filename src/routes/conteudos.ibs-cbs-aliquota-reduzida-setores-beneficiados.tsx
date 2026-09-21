import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/ibs-cbs-aliquota-reduzida-setores-beneficiados";
const H1 = "IBS e CBS com aliquota reduzida: quais setores podem pagar menos e manter creditos?";
const META_TITLE = "IBS e CBS com Aliquota Reduzida: Setores Beneficiados e Creditos";
const META_DESCRIPTION =
  "Entenda quais atividades terao reducao de IBS e CBS, como funcionara o aproveitamento dos creditos, quais setores podem ser beneficiados e os riscos de glosa e enquadramento.";
const PUBLISHED = "21/09/2026";

const faq = [
  {
    q: "Quem vende com reducao de 60% pode aproveitar credito integral?",
    a: "Pode aproveitar o valor integral do IBS e da CBS efetivamente cobrado nas entradas elegiveis, nao um credito teorico calculado pela aliquota-padrao.",
  },
  {
    q: "O comprador recebe credito pela aliquota-padrao?",
    a: "Nao. O comprador recebe o credito correspondente ao imposto efetivamente cobrado na operacao de aquisicao.",
  },
  {
    q: "Toda empresa de saude tera reducao?",
    a: "Nao necessariamente sobre todas as receitas - e preciso verificar o servico na NBS, o Anexo III e a natureza de cada receita.",
  },
  {
    q: "O CNAE comprova o direito a reducao?",
    a: "Nao. O CNAE pode ser um elemento cadastral, mas o direito depende da operacao, da NCM ou NBS, dos anexos legais e dos requisitos especificos.",
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
      intro="A reforma tributaria estabeleceu uma aliquota-padrao para o IBS e a CBS, mas tambem criou regimes diferenciados para atividades consideradas socialmente relevantes, essenciais ou merecedoras de tratamento especifico. Empresas com saidas tributadas por aliquota reduzida podem continuar aproveitando os creditos efetivamente cobrados nas entradas. Quanto maior a proporcao de compras tributadas em relacao a receita, maior a possibilidade de reducao da carga liquida ou formacao de saldo credor. Mas a expressao 'credito integral' precisa ser usada com precisao: o credito corresponde ao IBS e a CBS efetivamente destacados e extintos na operacao anterior, e nao a um credito teorico calculado pela aliquota-padrao. A regra geral esta nos arts. 47 a 52 da Lei Complementar no 214/2025."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: H1, to: SLUG },
      ]}
      ctaPrimary={{ label: "Solicitar diagnostico de enquadramento tributario", to: "/diagnostico" }}
      faq={faq}
      relatedLinks={[
        { eyebrow: "Leia também", label: "Quais Despesas Geram Crédito de IBS e CBS", to: "/conteudos/despesas-que-geram-credito-ibs-cbs" },
        { eyebrow: "Leia também", label: "Auditoria de Fornecedores para Preservar Créditos de IBS e CBS", to: "/conteudos/auditoria-fornecedores-creditos-ibs-cbs" },
        { eyebrow: "Leia também", label: "Glosa de Crédito de IBS e CBS: Principais Causas e Como Evitar", to: "/conteudos/glosa-credito-ibs-cbs-causas-como-evitar" },
      ]}
      sections={[
        {
          h2: "Profissoes com reducao de 30%",
          lead: "A legislacao tambem preve reducao de 30% das aliquotas de IBS e CBS para determinadas profissoes intelectuais fiscalizadas por conselho profissional.",
          h3: [
            { title: "Profissoes abrangidas", body: "administradores, advogados, arquitetos e urbanistas, assistentes sociais, bibliotecarios, biologos, contabilistas, economistas, profissionais de educacao fisica, engenheiros e agronomos, estatisticos, medicos veterinarios e zootecnistas, museologos, quimicos, profissionais de relacoes publicas, tecnicos industriais e tecnicos agricolas." },
            { title: "Aliquota aplicavel", body: "Nesse caso, a empresa aplicara 70% da aliquota-padrao." },
            { title: "Requisitos para pessoas juridicas", body: "A sociedade devera observar requisitos cumulativos, entre eles socios com habilitacoes relacionadas ao objeto da sociedade, fiscalizacao pelo conselho profissional, ausencia de pessoa juridica no quadro societario, exercicio apenas das atividades profissionais habilitadas, e prestacao direta dos servicos pelos socios." },
            { title: "Base legal", body: "Essas condicoes estao detalhadas no art. 127 da LC 214/2025." },
          ],
        },
        {
          h2: "Regimes com reducao de 40%",
          lead: "A LC 214 tambem preve reducao de 40% em alguns regimes especificos.",
          h3: [
            { title: "Setores contemplados", body: "bares, restaurantes e lanchonetes; hotelaria; parques de diversao e parques tematicos; transporte coletivo intermunicipal e interestadual; transporte aereo regional; intermediacao realizada por agencias de turismo." },
            { title: "Analise separada necessaria", body: "Esses regimes precisam ser analisados separadamente porque podem ter limitacoes especificas tanto para o fornecedor quanto para o adquirente." },
            { title: "Exemplo: hotelaria e parques", body: "Hoteis e parques podem aproveitar creditos de suas aquisicoes, mas o cliente de hotel ou parque, em regra, nao aproveita credito da aquisicao." },
          ],
        },
        {
          h2: "Quais setores tendem a ser mais beneficiados?",
          lead: "Tendem a se beneficiar mais empresas com determinadas caracteristicas estruturais.",
          h3: [
            { title: "Caracteristicas favoraveis", body: "saida com reducao de 60% ou aliquota zero, grande volume de entradas tributadas pela aliquota-padrao, margem de valor agregado relativamente pequena, investimentos frequentes em maquinas e infraestrutura, baixa participacao da folha na estrutura de custos." },
            { title: "Exemplos de setores", body: "hospitais e laboratorios intensivos em materiais e tecnologia; fabricantes de dispositivos medicos; industria farmaceutica; producoes audiovisuais e culturais com terceirizacao relevante; instituicoes de educacao com investimentos tecnologicos; empresas de seguranca cibernetica; hotelaria e parques; profissionais regulamentados com estrutura empresarial e investimentos." },
          ],
        },
        {
          h2: "Quem pode nao ser tao beneficiado?",
          lead: "Mesmo com reducao da aliquota, o resultado pode ser menos favoravel para algumas estruturas de custo.",
          h3: [
            { title: "Fatores que reduzem o beneficio", body: "folha de pagamento muito elevada, grande quantidade de prestadores pessoas fisicas, compras de fornecedores do Simples Nacional puro, aquisicoes sujeitas a aliquota zero, e baixa proporcao de insumos tributados." },
          ],
        },
        {
          h2: "Principais riscos de glosa",
          lead: "Existem dois riscos distintos que precisam ser gerenciados.",
          h3: [
            { title: "Glosa dos creditos de entrada", body: "documento fiscal inidoneo, classificacao incorreta, credito superior ao valor efetivamente cobrado, duplicidade." },
            { title: "Glosa da reducao na saida", body: "pode ser ainda mais onerosa - o Fisco pode cobrar a diferenca ate a aliquota-padrao quando: for usado apenas o CNAE como justificativa, o produto nao estiver relacionado no anexo, a NCM ou NBS estiver incorreta, ou faltar registro em orgao regulatorio como Anvisa." },
            { title: "Consequencias", body: "A consequencia pode envolver recomposicao do debito pela aliquota-padrao, juros, multa e questionamento dos creditos tomados pelo comprador." },
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
            Lei Complementar no 214/2025, arts. 47 a 52, 126 a 128.
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
