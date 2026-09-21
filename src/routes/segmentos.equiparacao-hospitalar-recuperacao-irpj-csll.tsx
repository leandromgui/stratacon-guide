import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/segmentos/equiparacao-hospitalar-recuperacao-irpj-csll";
const H1 = "Equiparação hospitalar e recuperação de IRPJ e CSLL com segurança tributária";
const META_TITLE = "Equiparação Hospitalar e Recuperação de IRPJ e CSLL";
const META_DESCRIPTION =
  "Entenda como clínicas e empresas médicas podem reduzir e recuperar IRPJ e CSLL com auditoria, retificações, PER/DCOMP e segurança documental.";

const faq: { q: string; a: string }[] = [
  {
    q: "Transmitir o PER/DCOMP significa que o crédito foi aprovado?",
    a: "Não. A compensação extingue o débito sob condição de posterior homologação. A Receita Federal possui prazo legal para analisar a operação.",
  },
  {
    q: "A Receita tem cinco anos para fiscalizar a compensação?",
    a: "A Lei nº 9.430/1996 estabelece prazo de cinco anos, contado da entrega da declaração de compensação, para sua homologação.",
  },
  {
    q: "O prazo de cinco anos da homologação é igual ao prazo para recuperar o crédito?",
    a: "Não. O prazo para pleitear a restituição está relacionado ao pagamento indevido. Já o prazo de homologação começa com a entrega da declaração de compensação.",
  },
  {
    q: "É necessário retificar as declarações antes do PER/DCOMP?",
    a: "Quando o crédito decorre da correção de uma apuração anteriormente declarada com valor superior, devem ser analisadas e retificadas as obrigações correspondentes. A sequência depende do período e das declarações utilizadas.",
  },
  {
    q: "A existência da equiparação hospitalar prova o valor do crédito?",
    a: "Não. A legislação pode reconhecer a possibilidade de aplicação dos percentuais reduzidos, mas o valor do crédito depende da receita elegível, dos pagamentos, das declarações e da documentação de cada empresa.",
  },
  {
    q: "Ainda é necessário mandado de segurança?",
    a: "Não necessariamente. A Receita reconhece administrativamente a aplicação dos percentuais reduzidos em diversas atividades quando os requisitos são cumpridos. A via judicial deve ser avaliada quando existir divergência, restrição ou controvérsia não resolvida administrativamente.",
  },
  {
    q: "Serviços realizados dentro de hospitais podem se enquadrar?",
    a: "Podem, desde que a empresa seja responsável pela prestação do atendimento e não realize apenas cessão de mão de obra.",
  },
  {
    q: "Home care passou a ter direito automático?",
    a: "Não. A revogação da exclusão regulamentar permite reavaliar essas operações, mas a natureza do serviço, a organização empresarial, a conformidade sanitária e a documentação continuam sendo indispensáveis.",
  },
  {
    q: "Toda a receita da clínica recebe os percentuais reduzidos?",
    a: "Não. Quando existem atividades diferentes, deve ser aplicado o percentual correspondente a cada receita, conforme determina o parágrafo 2º do artigo 15 da Lei nº 9.249/1995.",
  },
];

export const Route = createFileRoute("/segmentos/equiparacao-hospitalar-recuperacao-irpj-csll")({
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
            { "@type": "ListItem", position: 2, name: "Segmentos", item: "/segmentos" },
            {
              "@type": "ListItem",
              position: 3,
              name: "Equiparação Hospitalar e Recuperação de IRPJ e CSLL",
              item: "/segmentos/equiparacao-hospitalar-recuperacao-irpj-csll",
            },
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
          publisher: {
            "@type": "Organization",
            name: "DCON Serviços Contábeis",
            url: SITE_URL,
          },
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
      eyebrow="Segmento"
      h1={H1}
      intro="Empresas médicas, clínicas, laboratórios e prestadores de serviços de saúde podem ter direito à aplicação de percentuais reduzidos de presunção do IRPJ e da CSLL. Em determinadas situações, também pode existir a possibilidade de recuperar valores pagos indevidamente em períodos anteriores. Mas a segurança da operação não está apenas na transmissão de um PER/DCOMP. Ela começa antes: na comprovação da atividade, no enquadramento societário e sanitário, na segregação das receitas, na revisão dos períodos anteriores, na retificação das obrigações fiscais e na formação documental do crédito."
      intent="equiparação hospitalar, recuperação IRPJ CSLL, PER DCOMP clínica médica"
      observation="IRPJ, CSLL, Lucro Presumido, equiparação hospitalar, PER/DCOMP."
      respostaValidada="Recuperação tributária segura não é apenas encontrar uma tese. É demonstrar, calcular, retificar, compensar e sustentar o crédito perante a Receita Federal. Por isso, a DCON não trabalha com promessa de economia antes de comprovar a elegibilidade da atividade — o diagnóstico vem primeiro, a recuperação depois."
      ctaPrimary={{ label: "Solicitar diagnóstico técnico inicial", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
        {
          h2: "O que é equiparação hospitalar?",
          lead: "A chamada equiparação hospitalar permite que determinadas receitas de empresas da saúde sejam submetidas, no Lucro Presumido, a percentuais reduzidos.",
          h3: [
            {
              title: "Percentuais de presunção reduzidos",
              body: (
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-border">
                      <thead className="bg-muted">
                        <tr>
                          <th className="px-4 py-2 text-left font-medium">Tributo</th>
                          <th className="px-4 py-2 text-left font-medium">Serviços em geral</th>
                          <th className="px-4 py-2 text-left font-medium">Receitas elegíveis</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-border">
                          <td className="px-4 py-2">IRPJ</td>
                          <td className="px-4 py-2">32%</td>
                          <td className="px-4 py-2">8%</td>
                        </tr>
                        <tr className="border-t border-border">
                          <td className="px-4 py-2">CSLL</td>
                          <td className="px-4 py-2">32%</td>
                          <td className="px-4 py-2">12%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-muted-foreground text-[14px] leading-relaxed">
                    Não se trata de reduzir diretamente a alíquota do IRPJ para 8% ou a da CSLL para 12%. Esses percentuais são aplicados sobre a receita bruta para determinar a base presumida dos tributos. A previsão está nos artigos 15 e 20 da Lei nº 9.249/1995. Quando o enquadramento é correto, a redução da base presumida pode diminuir significativamente a carga tributária federal incidente sobre a receita elegível. Entretanto, o benefício não alcança automaticamente toda empresa da área da saúde nem necessariamente todo o seu faturamento.
                  </p>
                </div>
              ),
            },
          ],
        },
        {
          h2: "Quais empresas podem avaliar a equiparação hospitalar?",
          h3: [
            {
              title: "Atividades potencialmente elegíveis",
              body: "A análise pode alcançar empresas que realizem, entre outras atividades: serviços hospitalares, auxílio diagnóstico e terapia, fisioterapia e terapia ocupacional, fonoaudiologia, patologia clínica, imagenologia, radiologia, anatomia patológica, citopatologia, medicina nuclear, análises e patologias clínicas, exames por métodos gráficos, procedimentos endoscópicos, radioterapia, quimioterapia, diálise, oxigenoterapia hiperbárica e serviços de anestesiologia.",
            },
            {
              title: "Atualização pela IN RFB nº 2.343/2026",
              body: "A relação acima foi atualizada no artigo 33 da IN RFB nº 1.700/2017 pela Instrução Normativa RFB nº 2.343/2026. A inclusão expressa da anestesiologia é particularmente relevante para empresas médicas que prestam serviços em hospitais e centros cirúrgicos.",
            },
            {
              title: "Revogação de restrições anteriores",
              body: "A IN RFB nº 2.343/2026 também revogou os incisos II e III do parágrafo 4º do artigo 33 da IN RFB nº 1.700/2017, que estabeleciam restrições relacionadas à utilização de ambiente de terceiros e a determinadas atividades ambulatoriais e domiciliares. Isso amplia a necessidade de revisar operações anteriormente tratadas como inelegíveis, especialmente empresas de anestesiologia, equipes médicas que atuam dentro de hospitais, prestadores que utilizam estrutura de terceiros, serviços ambulatoriais com exames complementares, e determinadas operações de assistência domiciliar ou home care.",
            },
            {
              title: "Não é direito automático",
              body: "A revogação dessas restrições, porém, não significa que todas essas empresas passaram a ter direito automático. A natureza do serviço e os demais requisitos continuam precisando ser comprovados.",
            },
          ],
        },
        {
          h2: "O que a Solução de Consulta nº 3.005/2025 confirma?",
          h3: [
            {
              title: "Base legal e percentuais confirmados",
              body: "A Solução de Consulta Disit/SRRF03 nº 3.005, de 21 de janeiro de 2025, vinculada à Solução de Consulta Cosit nº 147/2023, confirma a aplicação dos percentuais de 8% para determinação da base do IRPJ e 12% para determinação da base da CSLL. O entendimento administrativo exige que a receita decorra de serviços hospitalares ou de auxílio diagnóstico e terapia e que a prestadora esteja organizada, de direito e de fato, como sociedade empresária, cumpra as normas da Agência Nacional de Vigilância Sanitária, e consiga demonstrar a natureza dos serviços efetivamente prestados.",
            },
            {
              title: "Requisitos cumulativos",
              body: "A própria solução estabelece que o descumprimento desses requisitos implica aplicação do percentual de 32%. Portanto, não basta incluir um CNAE, alterar uma cláusula do contrato social ou utilizar uma descrição genérica na nota fiscal. A operação real precisa confirmar o enquadramento.",
            },
          ],
        },
        {
          h2: "O STJ analisa a atividade, e não apenas o local do atendimento",
          h3: [
            {
              title: "Tema Repetitivo nº 217",
              body: "No Tema Repetitivo nº 217, o Superior Tribunal de Justiça estabeleceu que a expressão \"serviços hospitalares\" deve ser interpretada de forma objetiva, considerando a atividade efetivamente desenvolvida pelo contribuinte. De acordo com o STJ, são hospitalares os serviços vinculados às atividades normalmente desenvolvidas por hospitais e voltados diretamente à promoção da saúde. Eles podem, mas não precisam necessariamente, ser realizados dentro de um estabelecimento hospitalar. O Tribunal também excluiu as simples consultas médicas dessa conceituação.",
            },
            {
              title: "Três premissas do STJ",
              body: "A decisão reforça três premissas: primeiro, o nome da empresa não determina o direito; segundo, o local onde o serviço é executado não deve ser analisado isoladamente; terceiro, a natureza efetiva do serviço e a responsabilidade assumida pela empresa são elementos centrais do enquadramento.",
            },
          ],
        },
        {
          h2: "Quando a equiparação hospitalar não se aplica automaticamente?",
          lead: "Mesmo após a IN RFB nº 2.343/2026, permanecem situações de exclusão ou elevado risco.",
          h3: [
            {
              title: "Sociedade simples e empresário individual",
              body: "A regulamentação administrativa continua afastando a aplicação para pessoa jurídica organizada como sociedade simples e para empresário individual. Além do registro formal, a empresa deve funcionar de fato como sociedade empresária, com organização dos fatores de produção, gestão, responsabilidade operacional e estrutura compatível com sua atividade.",
            },
            {
              title: "Consultas médicas simples",
              body: "Receitas provenientes de consultas médicas simples continuam submetidas, em regra, ao percentual de 32%. Se a empresa realiza consultas e procedimentos elegíveis, as receitas precisam ser segregadas.",
            },
            {
              title: "Cessão de mão de obra médica",
              body: "A redução não se aplica quando a operação consiste apenas em disponibilizar profissionais para uma unidade hospitalar, sem que a empresa seja diretamente responsável pelo atendimento ao paciente, pela organização do serviço, pela execução do procedimento, pelos protocolos aplicáveis e pelos riscos inerentes à atividade. O contrato, a nota fiscal e a realidade operacional precisam demonstrar algo além da simples disponibilização de profissionais.",
            },
            {
              title: "Ausência de conformidade sanitária",
              body: "A empresa deve comprovar o atendimento às normas sanitárias aplicáveis à sua atividade. Dependendo do serviço, devem ser analisados alvará sanitário, licença de funcionamento, responsável técnico, registros nos conselhos profissionais, protocolos operacionais, estrutura física, contratos com unidades hospitalares, exigências da vigilância sanitária local, e atividades previstas na RDC Anvisa nº 50/2002.",
            },
          ],
        },
        {
          h2: "Ainda é necessário ingressar com mandado de segurança?",
          h3: [
            {
              title: "Reconhecimento administrativo dos percentuais reduzidos",
              body: "Historicamente, muitas empresas recorreram ao mandado de segurança porque existiam divergências entre a interpretação judicial e as restrições adotadas pela administração tributária. A Súmula nº 213 do STJ reconhece que o mandado de segurança é instrumento adequado para a declaração do direito à compensação tributária. Atualmente, entretanto, a Receita Federal reconhece administrativamente a aplicação dos percentuais reduzidos quando os requisitos legais e regulamentares estão presentes. Isso aparece na IN RFB nº 1.700/2017, na Solução de Consulta Cosit nº 147/2023, na Solução de Consulta Disit/SRRF03 nº 3.005/2025 e, mais recentemente, na IN RFB nº 2.343/2026.",
            },
            {
              title: "Quando a via administrativa pode ser suficiente",
              body: "Assim, quando a operação está compreendida no entendimento administrativo vigente, a empresa pode revisar suas apurações e buscar a recuperação pela via administrativa, sem que o mandado de segurança seja necessariamente a primeira medida.",
            },
            {
              title: "Quando a via judicial ainda pode ser avaliada",
              body: "Isso não significa que a via judicial tenha deixado de existir. Ela pode continuar sendo avaliada quando houver divergência sobre a natureza da atividade, a Receita adotar interpretação contrária ao caso concreto, existir discussão sobre períodos anteriores, a operação não estiver claramente contemplada pelas normas administrativas, houver restrição indevida à utilização do crédito, ou for necessário declarar judicialmente determinado direito. A definição entre via administrativa e judicial deve ser feita depois do diagnóstico técnico e documental.",
            },
          ],
        },
        {
          h2: "Recuperar tributos não é apenas transmitir um PER/DCOMP",
          h3: [
            {
              title: "O PER/DCOMP não cria o crédito",
              body: "O PER/DCOMP é o instrumento utilizado para formalizar pedidos de restituição ou declarações de compensação perante a Receita Federal. Ele não cria o crédito tributário. O crédito precisa existir antes da transmissão e deve ser demonstrável por meio das apurações, declarações, pagamentos e documentos que sustentam o enquadramento.",
            },
            {
              title: "Fundamento legal da compensação",
              body: "Segundo o artigo 170 do Código Tributário Nacional, a compensação pressupõe créditos líquidos e certos do contribuinte contra a Fazenda Pública. Na esfera federal, o artigo 74 da Lei nº 9.430/1996 determina que o contribuinte pode utilizar crédito passível de restituição ou ressarcimento para compensar débitos próprios, a compensação é formalizada por declaração, o débito é extinto sob condição resolutória de posterior homologação, a Receita dispõe de cinco anos, contados da entrega da declaração de compensação, para homologá-la, a declaração de compensação também constitui confissão de dívida quanto aos débitos informados, e se a compensação não for homologada, o contribuinte será intimado para pagar os débitos indevidamente compensados, sem prejuízo da possibilidade de contestação administrativa.",
            },
            {
              title: "O que diferencia a aprovação",
              body: "Transmitir o PER/DCOMP não equivale a obter homologação definitiva do crédito.",
            },
          ],
        },
        {
          h2: "Existem dois prazos de cinco anos - e eles não são a mesma coisa",
          lead: "Esse ponto merece destaque porque gera muita confusão.",
          h3: [
            {
              title: "Prazo para pedir a recuperação",
              body: "O artigo 168 do CTN estabelece, em regra, prazo de cinco anos para pleitear a restituição do pagamento indevido ou realizado a maior. Esse prazo está relacionado à formação e à recuperação do crédito.",
            },
            {
              title: "Prazo para a Receita homologar a compensação",
              body: "O parágrafo 5º do artigo 74 da Lei nº 9.430/1996 concede à Receita Federal cinco anos, contados da entrega da declaração de compensação, para analisar e homologar a operação. Esse segundo prazo começa depois da transmissão do PER/DCOMP. Assim, uma empresa pode ter recuperado créditos referentes a períodos anteriores e continuar sujeita à fiscalização da compensação durante os cinco anos seguintes à entrega de cada declaração. O que protege a empresa durante esse período não é simplesmente o protocolo do PER/DCOMP. É a qualidade da auditoria, da apuração e do dossiê documental.",
            },
          ],
        },
        {
          h2: "O que o STJ diz sobre a prova do crédito?",
          h3: [
            {
              title: "Tema Repetitivo nº 118",
              body: "No Tema Repetitivo nº 118, o Superior Tribunal de Justiça diferencia duas situações. Na declaração abstrata do direito, quando o mandado de segurança busca apenas declarar que determinada espécie de crédito pode ser compensada, sem quantificar valores, pode ser suficiente comprovar que o contribuinte ocupa a posição de credor tributário. No reconhecimento de valores específicos, quando o pedido envolve parcelas determinadas, quantificação do crédito, liquidez e certeza dos valores, e reconhecimento de recolhimentos específicos, é necessária prova suficiente dos pagamentos e dos elementos concretos da apuração. A ausência dessa prova compromete a demonstração do direito líquido e certo. O entendimento é importante para a recuperação administrativa porque demonstra uma diferença fundamental.",
            },
            {
              title: "Existência da tese não substitui a prova",
              body: "A existência jurídica de uma tese não comprova, sozinha, a existência, a liquidez e o valor do crédito de uma empresa específica. No REsp nº 1.715.256/SP, o STJ ainda ressaltou que os comprovantes e valores podem ser verificados posteriormente pela Receita durante a fiscalização administrativa da compensação. No EREsp nº 1.770.495/RS, a Primeira Seção também esclareceu que, mesmo quando o direito é reconhecido judicialmente, a quantificação dos créditos pode permanecer sujeita à apuração posterior pelo contribuinte e pelo Fisco na esfera administrativa. Além disso, a Súmula nº 460 do STJ estabelece que o mandado de segurança não serve para convalidar compensação tributária já realizada pelo contribuinte. Em outras palavras: nem a existência de uma tese, nem uma decisão declaratória, nem a transmissão do PER/DCOMP substituem a prova contábil, fiscal e documental do crédito utilizado.",
            },
          ],
        },
        {
          h2: "Como funciona uma recuperação segura de IRPJ e CSLL?",
          h3: [
            {
              title: "1. Diagnóstico da atividade",
              body: "A primeira etapa é identificar exatamente quais serviços foram prestados em cada período. A análise deve separar consultas, procedimentos, exames, terapias, serviços hospitalares, apoio diagnóstico, anestesiologia, atendimento domiciliar, serviços realizados em estrutura de terceiros, e mera cessão ou disponibilização de profissionais.",
            },
            {
              title: "2. Validação societária e operacional",
              body: "São revisados contrato social, registro empresarial, objeto social, CNAEs, estrutura administrativa, organização dos fatores de produção, responsabilidade efetiva pelo serviço, forma de contratação dos profissionais, e contratos com hospitais, clínicas e operadoras. CNAE e contrato social são elementos importantes, mas não substituem a prova da atividade efetivamente exercida.",
            },
            {
              title: "3. Validação sanitária",
              body: "A auditoria verifica quais normas da Anvisa e da vigilância sanitária se aplicam à empresa e se elas eram cumpridas nos períodos analisados, envolvendo alvarás, licenças, responsáveis técnicos, registros profissionais, protocolos, estrutura, documentação clínica e autorizações sanitárias.",
            },
            {
              title: "4. Segregação das receitas",
              body: "Uma mesma empresa pode ter receitas com tratamentos tributários diferentes. É necessário separar receitas elegíveis à base de 8% e 12%, receitas de consultas simples, receitas de serviços não enquadrados, receitas administrativas, receitas de cessão de mão de obra, e receitas acessórias. A redução não deve ser aplicada indistintamente sobre todo o faturamento quando apenas parte dele for elegível.",
            },
            {
              title: "5. Recálculo do IRPJ e da CSLL",
              body: "Depois da validação, são refeitas as apurações trimestrais, confrontando receita declarada, receita elegível, base originalmente utilizada, base correta, IRPJ recolhido, adicional de IRPJ, CSLL recolhida, pagamentos realizados, e valores efetivamente recuperáveis.",
            },
            {
              title: "6. Retificação das obrigações fiscais",
              body: "Quando a apuração anterior declarou um débito superior ao correto, devem ser identificadas e retificadas as obrigações aplicáveis a cada período, dependendo da competência: ECF, DCTF, DCTFWeb e MIT, escriturações contábeis ou fiscais relacionadas, controles de apuração, demonstrativos internos. O PER/DCOMP precisa ser coerente com a apuração retificada. Caso contrário, a Receita pode encontrar divergência entre o crédito declarado e as obrigações anteriormente transmitidas.",
            },
            {
              title: "7. Formação do dossiê do crédito",
              body: "Cada crédito deve possuir memória própria, contendo fundamento legal, enquadramento da atividade, relação das receitas, demonstração da segregação, memória de cálculo, declarações originais e retificadoras, DARFs, notas fiscais, contratos, licenças, documentos sanitários, conciliação contábil, atualização pela Selic, e identificação dos débitos compensados.",
            },
            {
              title: "8. Transmissão e acompanhamento do PER/DCOMP",
              body: "Somente depois da formação do crédito deve ocorrer sua utilização. O acompanhamento precisa abranger situação de cada declaração, débitos compensados, saldo remanescente, intimações, pedidos de documentos, despachos decisórios, homologações, não homologações, e prazos para manifestação de inconformidade.",
            },
          ],
        },
        {
          h2: "O que pode provocar a não homologação?",
          h3: [
            {
              title: "Principais riscos",
              body: "Entre os principais riscos estão: atividade não enquadrada, inclusão de consultas simples, ausência de segregação de receitas, aplicação da redução sobre todo o faturamento, sociedade simples, falta de comprovação da organização empresarial, irregularidade sanitária, contrato caracterizando cessão de mão de obra, nota fiscal com descrição incompatível, ausência de comprovação dos procedimentos, divergência entre ECF, DCTF, DCTFWeb, MIT e PER/DCOMP, crédito superior aos pagamentos efetivamente realizados, duplicidade de aproveitamento, período atingido pela prescrição, erro na atualização pela Selic, inexistência de retificação da obrigação que constituiu o débito original, falta de memória de cálculo, e falta de documentos contemporâneos ao período revisado.",
            },
          ],
        },
        {
          h2: "O que acontece se a compensação não for homologada?",
          h3: [
            {
              title: "Cobrança e manifestação de inconformidade",
              body: "A não homologação pode resultar na cobrança do débito que havia sido compensado, acrescido dos encargos aplicáveis. A Lei nº 9.430/1996 prevê que o contribuinte seja intimado e permite a apresentação de manifestação de inconformidade no prazo legal.",
            },
            {
              title: "Recuperação responsável",
              body: "Por isso, uma recuperação responsável precisa prever não apenas a transmissão, mas também organização das provas, acompanhamento do processo, resposta a intimações, análise do despacho decisório, elaboração de manifestação de inconformidade, controle dos débitos envolvidos, e prevenção de inscrição em dívida ativa.",
            },
          ],
        },
        {
          h2: "O que a DCON analisa?",
          h3: [
            {
              title: "Diagnóstico de Elegibilidade, Enquadramento e Recuperação Tributária para Empresas da Saúde",
              body: "O Diagnóstico de Elegibilidade, Enquadramento e Recuperação Tributária para Empresas da Saúde pode envolver: mapeamento das atividades e dos procedimentos, análise da IN RFB nº 2.343/2026, enquadramento na Lei nº 9.249/1995, análise do Tema nº 217 do STJ, revisão do contrato social e da organização empresarial, revisão dos contratos com hospitais e operadoras, avaliação das licenças sanitárias, segregação das receitas, revisão das notas fiscais, recálculo do IRPJ e da CSLL, identificação dos períodos recuperáveis, revisão das obrigações acessórias, elaboração das retificações, conciliação dos DARFs, atualização dos créditos, formação do dossiê de recuperação, transmissão e controle dos PER/DCOMPs, e acompanhamento até a homologação ou decisão administrativa.",
            },
          ],
        },
        {
          h2: "Equiparação hospitalar não é apenas economia",
          lead: "Uma análise incompleta pode encontrar uma redução de imposto, mas deixar para a empresa um crédito sem documentação suficiente para resistir à fiscalização.",
          h3: [
            {
              title: "Perguntas que uma análise técnica precisa responder",
              body: "Uma análise tecnicamente estruturada precisa responder: a atividade realmente está contemplada? A empresa cumpre os requisitos societários e sanitários? Quais receitas são elegíveis? Quais receitas permanecem em 32%? Os períodos anteriores possuem documentação? As obrigações foram corretamente retificadas? O crédito coincide com os pagamentos? A memória de cálculo pode ser reproduzida? O PER/DCOMP está coerente com as declarações? A empresa está preparada para uma auditoria da Receita?",
            },
            {
              title: "A compensação é a etapa final",
              body: "A compensação é a etapa final. A segurança está em tudo o que foi feito antes dela.",
            },
          ],
        },
        {
          h2: "Conclusão",
          h3: [
            {
              title: "Solicitar uma análise técnica da sua empresa",
              body: "Sua empresa pode ter receitas enquadráveis nos percentuais reduzidos de IRPJ e CSLL ou valores pagos indevidamente em períodos anteriores. A DCON realiza a análise da atividade, dos contratos, da estrutura societária, da documentação sanitária, das notas fiscais, das apurações e das obrigações fiscais antes da utilização do crédito. Atendimento em Goiânia e consultoria tributária para empresas da saúde em todo o Brasil.",
              cta: "Solicitar uma análise técnica da sua empresa",
              link: "/diagnostico",
            },
          ],
        },
      ]}
      faq={faq}
      relatedLinks={[
        { eyebrow: "Segmento", label: "Médicos e Clínicas", to: "/segmentos/medicos-clinicas" },
        { eyebrow: "Solução", label: "Recuperação de Créditos Tributários", to: "/solucoes/recuperacao-creditos-tributarios" },
        { eyebrow: "Solução", label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario" },
        { eyebrow: "Leia também", label: "Reforma Tributária para Clínicas Médicas", to: "/conteudos/reforma-tributaria-clinicas-medicas-o-que-muda" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Responsabilidade técnica</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Revisão conduzida por Leandro Matsuoka Guimarães</h2>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            As entregas desta página são conduzidas sob supervisão direta de{" "}
            <a href="/sobre/leandro/" className="underline decoration-gold/50 hover:text-foreground">
              Leandro Matsuoka Guimarães
            </a>
            , sócio-fundador e diretor técnico da DCON. Contador com 22 anos de experiência, bacharel em Direito e pós-graduado em Controladoria e Finanças Corporativas. CRC-GO 16.395/O-9.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            As informações têm caráter técnico e não constituem opinião de perícia contábil ou parecer formal. Cada caso deve ser analisado individualmente.
          </p>
        </div>
      </section>

      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Fontes legais</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Base normativa e jurisprudencial</h2>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
            <li>Lei nº 9.249/1995 (artigos 15 e 20)</li>
            <li>Código Tributário Nacional (artigos 168, 170 e 170-A)</li>
            <li>Lei nº 9.430/1996 (artigo 74)</li>
            <li>Tema Repetitivo nº 217 do STJ</li>
            <li>Tema Repetitivo nº 118 do STJ</li>
            <li>EREsp nº 1.770.495/RS</li>
            <li>Instrução Normativa RFB nº 2.055/2021</li>
            <li>Instrução Normativa RFB nº 2.343/2026</li>
            <li>Solução de Consulta Cosit nº 147, de 20/07/2023</li>
            <li>Solução de Consulta Disit/SRRF03 nº 3.005, de 21/01/2025, publicada no DOU de 22/01/2025</li>
            <li>Resolução RDC Anvisa nº 50/2002</li>
          </ul>
        </div>
      </section>
    </PageScaffold>
  );
}
