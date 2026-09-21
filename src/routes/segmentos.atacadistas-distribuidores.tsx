import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/segmentos/atacadistas-distribuidores";

export const Route = createFileRoute("/segmentos/atacadistas-distribuidores")({
  head: () => ({
    ...buildSeoHead({
      title: "Benefícios Fiscais para Atacadistas em Goiás",
      description:
        "Entenda como Lucro Real, revisão de NCM, ICMS, PROTEGE, créditos e Reforma Tributária podem afetar atacadistas e distribuidores em Goiás.",
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
      h1="Benefícios fiscais para atacadistas em Goiás: Lucro Real, revisão de NCM, ICMS e Reforma Tributária"
      intro="Atacadistas e distribuidores normalmente operam com grande volume de vendas, margens reduzidas, milhares de produtos e elevada complexidade fiscal. Nesse ambiente, um erro aparentemente pequeno na classificação de uma mercadoria pode ser repetido em centenas de notas fiscais e comprometer toda a margem da operação. O problema é que muitas empresas analisam sua tributação apenas pelo CNAE, pelo faturamento total ou pela alíquota nominal do regime tributário. Para um atacadista, isso é insuficiente. A tributação precisa ser examinada no nível do produto e da operação, considerando NCM, descrição técnica da mercadoria, CEST, origem do produto, finalidade da aquisição, CFOP, CST ou CSOSN, estado de origem e destino, perfil do cliente, operação interna ou interestadual, substituição tributária, benefício fiscal aplicável, créditos permitidos, contrapartidas, regime tributário, parametrização do ERP e documentação necessária para sustentar o tratamento adotado. Por isso, o benefício fiscal não começa apenas no CNAE da empresa - e também não termina na NCM. Ele depende do cruzamento entre produto, classificação fiscal, operação, destino, cliente, regime tributário e requisitos legais."
      intent="benefícios fiscais atacadistas Goiás, Lucro Real atacadista, revisão NCM distribuidor"
      observation="Lucro Real, NCM, ICMS, PROTEGE, Reforma Tributária."
      pillarKey="atacadistas-distribuidores"
      ctaPrimary={{ label: "Solicitar diagnóstico técnico inicial", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
        {
          h2: "Atacadistas com margem reduzida devem analisar o Lucro Real",
          lead: "Empresas atacadistas podem faturar milhões de reais e, ainda assim, trabalhar com margens líquidas muito pequenas. Essa característica torna o Lucro Real uma alternativa que precisa obrigatoriamente ser simulada. No Lucro Presumido, o IRPJ e a CSLL são calculados a partir de percentuais legais de presunção aplicados sobre a receita, independentemente de a empresa ter alcançado aquela margem na prática. Nas atividades comerciais, a base presumida costuma partir de 8% para o IRPJ e 12% para a CSLL, observadas as regras e particularidades legais. Se uma distribuidora possui margem efetiva inferior aos percentuais presumidos, ela pode acabar pagando IRPJ e CSLL sobre um lucro maior do que o resultado econômico efetivamente obtido. No Lucro Real, por outro lado, o IRPJ e a CSLL partem do resultado contábil, ajustado pelas adições, exclusões e compensações previstas na legislação. Isso significa que uma empresa de margem baixa, prejuízo fiscal, despesas operacionais elevadas ou forte pressão competitiva pode encontrar no Lucro Real uma tributação mais coerente com seu resultado.",
          h3: [
            {
              title: "Lucro Real não significa automaticamente menor imposto",
              body: "Apesar de ser uma alternativa importante para empresas com margens reduzidas, o Lucro Real não será necessariamente o melhor regime em todos os casos. A análise também precisa considerar PIS e COFINS no regime não cumulativo, créditos efetivamente aproveitáveis, mercadorias sujeitas à tributação monofásica, produtos com alíquota zero, despesas dedutíveis e indedutíveis, controle de estoque, perdas e quebras, bonificações, devoluções, descontos comerciais, inadimplência, custos financeiros, despesas logísticas, adicional de IRPJ, compensação de prejuízos fiscais, qualidade da escrituração contábil, custo de conformidade e risco de glosa de despesas e créditos. A afirmação tecnicamente correta é: para atacadistas com margem reduzida, o Lucro Real é uma rota obrigatória de simulação, não uma resposta automática.",
            },
          ],
        },
        {
          h2: "A revisão de NCM pode revelar imposto pago errado ou benefício não utilizado",
          lead: "A NCM é uma das informações mais importantes do cadastro fiscal de um atacadista. Ela influencia a identificação de alíquotas, benefícios, substituição tributária, tratamento de PIS e COFINS, incidência de IPI, regras de importação e, progressivamente, o tratamento de IBS e CBS. Entretanto, a NCM não deve ser escolhida apenas pelo nome comercial utilizado pela empresa. A classificação precisa considerar composição do produto, matéria-prima, função principal, apresentação, forma de acondicionamento, processo de fabricação, características técnicas, uso predominante e regras gerais de interpretação do Sistema Harmonizado.",
          h3: [
            {
              title: "O que uma revisão de NCM pode identificar",
              body: "Uma revisão técnica pode localizar NCM incorreta, NCM genérica ou incompatível com a descrição, mercadoria sujeita a isenção de ICMS, redução de base de cálculo, diferimento, crédito outorgado, mercadoria fora ou dentro da substituição tributária, CEST inadequado, produto sujeito a PIS e COFINS monofásicos, produto com alíquota zero, benefício condicionado ao uso ou ao destinatário, divergência entre cadastro, nota fiscal e legislação, oportunidade de recuperação de tributo pago indevidamente, e risco de cobrança retroativa por imposto recolhido a menor.",
            },
            {
              title: "NCM não gera benefício sozinha",
              body: "É importante evitar uma conclusão comum: encontrar uma NCM em uma lista legal não significa, isoladamente, que a empresa pode aplicar o benefício. A norma pode exigir, além da classificação fiscal, descrição específica do produto, registro em órgão competente, destinação determinada, venda para cliente específico, operação interna ou interestadual, industrialização ou revenda, qualidade de produtor, industrial ou atacadista, regularidade fiscal, termo de acordo, contribuição a fundo estadual, estorno de créditos e emissão correta do documento fiscal.",
            },
          ],
        },
        {
          h2: "Alíquota zero de ICMS exige cuidado terminológico",
          lead: 'No uso comercial, é comum dizer que determinado produto possui "ICMS zero". Entretanto, juridicamente, é necessário identificar qual tratamento realmente existe. A desoneração pode decorrer de isenção, não incidência, redução de base de cálculo, diferimento, suspensão, crédito outorgado, tributação anterior por substituição tributária, alíquota específica ou regime especial. Essas figuras produzem efeitos diferentes sobre emissão da nota, escrituração e manutenção ou estorno de créditos. Em Goiás, os benefícios de ICMS estão concentrados especialmente no Anexo IX do Regulamento do Código Tributário do Estado, aprovado pelo Decreto nº 4.852/1997, além de leis, decretos, convênios e atos específicos. A revisão de NCM pode revelar produtos submetidos a isenção, redução de base, diferimento, crédito outorgado ou outros tratamentos fiscais, desde que todos os requisitos da norma sejam atendidos.',
        },
        {
          h2: "Benefícios de ICMS que devem ser investigados",
          lead: "Uma revisão fiscal de atacadistas em Goiás deve verificar, produto a produto e operação a operação, a existência de:",
          h3: [
            {
              title: "Isenção",
              body: "A operação fica dispensada do recolhimento do ICMS nos limites da norma, com efeitos sobre os créditos das entradas.",
            },
            {
              title: "Redução de base de cálculo",
              body: "O imposto continua existindo, mas é calculado sobre uma base reduzida.",
            },
            {
              title: "Diferimento",
              body: "O recolhimento é transferido para etapa posterior da cadeia, não significa eliminação do imposto.",
            },
            {
              title: "Crédito outorgado",
              body: "A empresa recebe um crédito fiscal calculado conforme a regra do benefício, podendo substituir créditos ordinários ou exigir estornos.",
            },
            {
              title: "Substituição tributária",
              body: "A revisão pode identificar mercadoria indevidamente incluída na substituição, CEST incorreto, MVA inadequada, imposto retido a maior e direito à restituição.",
            },
            {
              title: "Incentivos e regimes especiais",
              body: "Podem depender de enquadramento específico, autorização da Secretaria da Economia ou Termo de Acordo de Regime Especial.",
            },
          ],
        },
        {
          h2: "PROTEGE Goiás não é benefício, é custo ou condicionante",
          lead: 'O Fundo de Proteção Social do Estado de Goiás - PROTEGE GOIÁS - foi instituído pela Lei estadual nº 14.469/2003. Em determinados benefícios e incentivos fiscais, a legislação pode condicionar a fruição do tratamento à realização de contribuição ao PROTEGE. Isso significa que o percentual nominal de um benefício não representa, sozinho, a economia efetiva da empresa. A análise precisa verificar se aquele benefício exige contribuição, qual é a base de cálculo, qual percentual está previsto, qual é o prazo de pagamento, se a contribuição é mensal ou vinculada à utilização, e se o descumprimento pode comprometer o benefício. O PROTEGE não deve ser apresentado como benefício fiscal - deve ser tratado como possível contrapartida ou condição para a utilização de determinados benefícios.',
        },
        {
          h2: "Crédito outorgado não é crédito livre",
          lead: "O crédito outorgado pode reduzir a carga tributária, mas precisa ser analisado dentro da sistemática completa do regime. Dependendo da norma, podem existir substituição dos créditos ordinários, estorno total ou proporcional de créditos, exclusão de determinadas mercadorias, limitação por tipo de operação, vedação de acumulação com outro benefício, contribuição ao PROTEGE, necessidade de regularidade fiscal, TARE e prazo de vigência. Por isso, o ganho deve ser calculado pelo resultado líquido, considerando carga tributária no cenário atual menos carga no cenário incentivado, menos contrapartidas, menos créditos perdidos e menos custos incrementais (PROTEGE quando aplicável, créditos estornados, custo financeiro, garantias, desenvolvimento de ERP, obrigações acessórias, consultoria, risco de glosa).",
        },
        {
          h2: "TARE - instrumento de formalização, não sinônimo de benefício",
          lead: "O TARE é o Termo de Acordo de Regime Especial. Ele pode estabelecer condições diferenciadas relacionadas à emissão de documentos, escrituração, apuração e recolhimento, conforme a hipótese autorizada pela legislação, com fundamento no art. 5º do Anexo IX do RCTE. O TARE não deve ser apresentado como um benefício independente - ele pode funcionar como instrumento para formalizar um tratamento autorizado na legislação. A empresa precisa verificar fundamento legal, vigência, obrigações assumidas, produtos abrangidos, hipóteses de suspensão ou revogação, e compatibilidade com a operação efetivamente realizada.",
        },
        {
          h2: "A revisão precisa alcançar PIS, COFINS, IPI e não apenas ICMS",
          lead: "Uma revisão fiscal limitada ao ICMS pode deixar oportunidades e riscos relevantes de fora. No atacado, a classificação do produto também pode alterar o tratamento de PIS, COFINS, IPI, PIS-Importação, COFINS-Importação, tributação monofásica, alíquota zero, suspensão e créditos permitidos ou vedados. Nos produtos sujeitos a tributação monofásica, a carga de PIS e COFINS é concentrada em uma etapa anterior da cadeia - o atacadista pode ter receita submetida a alíquota zero, mas isso não significa que toda compra gere crédito. Erros frequentes incluem tributar novamente uma receita monofásica, deixar de segregar receitas, aproveitar crédito vedado e classificar produto comum como monofásico. A alíquota zero também depende do enquadramento exato na norma, validando NCM, descrição, composição, destinação e período de vigência.",
        },
        {
          h2: "Reforma Tributária - alguns atacadistas podem ter vantagem competitiva",
          lead: "A Reforma Tributária não deve ser analisada apenas pela alíquota nominal de IBS e CBS. Para distribuidores, o efeito dependerá de composição do estoque, produtos vendidos, perfil dos fornecedores, perfil dos clientes, volume de créditos, alíquota das saídas, produtos com redução ou alíquota zero, regime tributário, impacto do split payment e capacidade de recuperar saldos credores. A Lei Complementar nº 214/2025 prevê regimes diferenciados e reduções vinculadas a listas e classificações fiscais. Entre os grupos relevantes para atacadistas: produtos da cesta básica com alíquota zero, alimentos com redução de 60%, produtos de higiene pessoal e limpeza com redução de 60%, produtos agropecuários in natura com redução de 60%, insumos agropecuários e aquícolas com redução de 60%, medicamentos, dispositivos médicos e produtos de saúde menstrual. A lista aplicável deve ser confirmada pela descrição e pela NCM previstas nos respectivos anexos.",
          h3: [
            {
              title: "Saída reduzida com manutenção de créditos - onde pode surgir vantagem",
              body: "Um dos pontos mais relevantes está na combinação entre créditos sobre as aquisições e tributação reduzida nas saídas. O art. 47, parágrafo 10, da LC nº 214/2025 determina que as operações sujeitas a alíquota reduzida, em regra, não acarretam estorno parcial ou integral dos créditos apropriados, salvo previsão expressa em sentido contrário. A lei também estabelece, no art. 52, a manutenção dos créditos anteriores nas operações sujeitas a alíquota zero. Isso pode beneficiar distribuidores que adquiram bens e serviços tributados, tenham despesas operacionais relevantes, vendam produtos com redução ou alíquota zero, e consigam documentar e aproveitar corretamente os créditos. Entretanto, na saída com alíquota zero, o adquirente de um produto comprado não recebe crédito sobre aquela aquisição, porque não houve débito na operação.",
            },
          ],
        },
        {
          h2: "Simples Nacional, modelo híbrido, Presumido ou Real",
          lead: 'A Reforma Tributária amplia a necessidade de comparar regimes. No Simples com IBS e CBS dentro do regime, o optante não se apropria de créditos amplos, mas o modelo pode ser mais simples. No Simples com IBS e CBS no regime regular (denominado didaticamente de "híbrido", conforme o art. 41, parágrafo 3º, da LC nº 214/2025), a empresa ingressa na sistemática regular de débitos e créditos, aumentando o potencial de crédito para clientes mas também a complexidade. O Lucro Presumido pode continuar competitivo quando a margem efetiva é superior à presumida. O Lucro Real tende a merecer atenção especial quando existem margens líquidas reduzidas, prejuízos, despesas operacionais expressivas e grande volume de aquisições tributadas. Nenhuma escolha deve ser feita por uma única alíquota.',
        },
        {
          h2: "O novo risco de glosa de créditos",
          lead: "Atacadistas normalmente acumulam grande volume de créditos fiscais. Isso transforma a qualidade documental em ativo financeiro. Os principais riscos de glosa envolvem nota fiscal inidônea, fornecedor irregular, mercadoria não recebida, operação simulada, NCM divergente, crédito tomado em duplicidade, crédito sobre item vedado, erro de CST, CFOP ou base, falta de estorno, mercadoria de uso ou consumo, benefício incompatível, documento cancelado, devolução não ajustada e divergência entre estoque e escrituração. Na nova sistemática, o art. 47 da LC nº 214/2025 condiciona a apropriação dos créditos, em regra, à extinção dos débitos da operação e à comprovação por documento fiscal eletrônico idôneo. Com isso, o risco fiscal do fornecedor passa a afetar mais diretamente o comprador. A gestão de fornecedores deverá considerar regularidade cadastral, emissão correta do documento, destaque do IBS e da CBS, pagamento ou extinção do débito, cancelamentos e conciliação entre pedido, recebimento, nota e pagamento.",
        },
        {
          h2: "Revisão de contratos comerciais",
          lead: "A Reforma Tributária e a mudança da sistemática de créditos exigem revisão dos contratos com fornecedores e clientes, avaliando preço com ou sem tributos, repasse de aumento ou redução de carga, responsabilidade por classificação fiscal, obrigação de emitir documento idôneo, tratamento de descontos, bonificações, verbas comerciais, devoluções, indenização por erro tributário do fornecedor, split payment e retenções. Bonificações, verbas de propaganda, descontos condicionais e incondicionais precisam ser classificados corretamente - o nome usado no contrato não determina, sozinho, o tratamento tributário.",
        },
        {
          h2: "O ERP precisa refletir a operação real",
          lead: "Não adianta encontrar um benefício correto se o ERP não consegue aplicá-lo de forma consistente. A revisão deve alcançar cadastro completo dos produtos, descrição técnica, NCM, CEST, GTIN, origem, tributação de entrada e saída, regras por estado e por cliente, devoluções, transferências, bonificações, cálculo de créditos e integração com SPED. Uma NCM correta com CST incorreto continua gerando erro. Um benefício correto aplicado ao cliente errado também pode gerar autuação.",
        },
        {
          h2: "Conclusão",
          lead: "Atacadistas e distribuidores não devem analisar tributação apenas pelo faturamento ou pelo CNAE. Empresas com margens reduzidas precisam simular o Lucro Real. Empresas com milhares de produtos precisam revisar NCM, CEST e tratamentos fiscais. Empresas que utilizam benefícios em Goiás precisam calcular PROTEGE, créditos estornados, obrigações e custos de manutenção. Economia sem documentação pode se transformar em glosa, autuação e perda de margem.",
          h3: [
            {
              title: "Solicitar diagnóstico fiscal para atacadistas e distribuidores",
              body: "O diagnóstico cobre comparação entre regimes tributários, revisão de NCM e CEST, revisão de ICMS e ICMS-ST, validação de PROTEGE e TARE, identificação de riscos de glosa, impactos de IBS e CBS, revisão de contratos e auditoria de parametrizações do ERP.",
            },
          ],
        },
      ]}
      faq={[
        {
          q: "Lucro Real é sempre melhor para atacadistas com margem baixa?",
          a: "Não. A margem baixa torna o Lucro Real uma alternativa prioritária de simulação, mas a decisão depende de PIS, COFINS, créditos, despesas, estoque, prejuízos e custo de conformidade.",
        },
        {
          q: "A revisão de NCM pode reduzir ICMS?",
          a: "Pode revelar isenção, redução de base, diferimento, crédito outorgado ou outro tratamento aplicável. Contudo, a NCM sozinha não cria o benefício.",
        },
        {
          q: "Todo benefício de Goiás exige PROTEGE?",
          a: "Não. A contribuição depende da legislação específica do benefício ou incentivo. É necessário validar cada hipótese.",
        },
        {
          q: "TARE é um benefício fiscal?",
          a: "Não necessariamente. O TARE é um instrumento que formaliza condições de um regime especial autorizado pela legislação.",
        },
        {
          q: "Produtos com alíquota reduzida de IBS e CBS mantêm créditos?",
          a: "Em regra, a LC nº 214/2025 determina que a saída com alíquota reduzida não provoca estorno dos créditos das aquisições, salvo previsão expressa em contrário.",
        },
        {
          q: "Uma NCM errada pode gerar recuperação de crédito, incluindo risco de glosa?",
          a: "Pode existir recuperação se houver pagamento indevido, mas a correção também pode revelar imposto recolhido a menor - e a NCM divergente é uma das principais causas de glosa de crédito na nova sistemática de IBS e CBS. Por isso, a revisão precisa medir oportunidade e passivo antes de alterar o cadastro.",
        },
      ]}

    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Responsabilidade técnica</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Revisão técnica</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Análise conduzida sob supervisão direta do responsável técnico da DCON, com CRC ativo e revisão cruzada.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Revisão técnica:{" "}
            <a href="/sobre/leandro/" className="underline decoration-gold/50 hover:text-foreground">
              Leandro Matsuoka Guimarães
            </a>
            , sócio-fundador e diretor técnico da DCON. Contador com 22 anos de experiência, bacharel em Direito e
            pós-graduado em Controladoria e Finanças Corporativas. CRC-GO 16.395/O-9.
          </p>
        </div>
      </section>

      <section className="border-t border-border pt-8">
        <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Fontes</div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Decreto-Lei nº 1.598/1977; Lei nº 9.249/1995; Lei nº 10.637/2002; Lei nº 10.833/2003; Lei Complementar nº
          87/1996; Lei Complementar nº 24/1975; Lei Complementar nº 160/2017; Decreto nº 4.852/1997 (RCTE-GO, Anexo IX);
          Lei estadual nº 14.469/2003 (PROTEGE Goiás); Lei Complementar nº 214/2025, arts. 41, 47 e 52.
        </p>
      </section>

    </PageScaffold>
  );
}
