type LegalSource = {
  title: string;
  scope: string;
  href: string;
};

type LegalSourceSet = {
  note: string;
  sources: LegalSource[];
};

const LC_214 =
  "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214compilado.htm";
const LC_227 = "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp227.htm";
const EC_132 =
  "https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm";
const LC_123 = "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp123.htm";
const LC_224 = "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp224.htm";
const LC_236 = "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp236.htm";
const CTN = "https://www.planalto.gov.br/ccivil_03/leis/l5172compilado.htm";
const LEI_9249 = "https://www.planalto.gov.br/ccivil_03/leis/l9249.htm";
const LEI_9430 = "https://www.planalto.gov.br/ccivil_03/leis/l9430.htm";
const LEI_13988 =
  "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l13988.htm";
const LEI_10522 =
  "https://www.planalto.gov.br/ccivil_03/leis/2002/l10522.htm";
const REFORMA_RFB =
  "https://www.gov.br/receitafederal/pt-br/assuntos/reforma-tributaria";
const SIMPLES_2027 =
  "https://www8.receita.fazenda.gov.br/simplesnacional/noticias/NoticiaCompleta.aspx?id=c739e03c-8482-473f-8e82-f38ec3b13637";
const RES_CGSN_186 =
  "https://normas.receita.fazenda.gov.br/sijut2consulta/consulta.action?lblTiposAtosSelecionados=Res.&orgaosSelecionados=CGSN&tipoData=2&tiposAtosSelecionados=67";
const PERDCOMP_DARF =
  "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/restituicao-ressarcimento-reembolso-e-compensacao/creditos/pagamento/darf/como-solicitar-ou-compensar-o-credito";
const SIMPLES_RESTITUICAO =
  "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/restituicao-ressarcimento-reembolso-e-compensacao/creditos/pagamento/das/como-solicitar-ou-compensar-o-credito";
const PGFN_90_DIAS =
  "https://www.gov.br/pgfn/pt-br/servicos/perguntas-frequentes/live-conhecendo-a-pgfn-e-o-portal-regularize";
const PGFN_CAPAG =
  "https://www.gov.br/pgfn/pt-br/servicos/perguntas-frequentes/sobre-a-capacidade-de-pagamento";
const STJ_TEMA_217 =
  "https://processo.stj.jus.br/repetitivos/temas_repetitivos/pesquisa.jsp?cod_tema_final=217&cod_tema_inicial=217&novaConsulta=true&tipo_pesquisa=T";
const GOIAS_ECOMMERCE =
  "https://legisla.casacivil.go.gov.br/pesquisa_legislacao/106708/decreto-10201";
const GOIAS_IN_1554 =
  "https://appasp.economia.go.gov.br/legislacao/arquivos/Secretario/IN/IN_1554_2023.htm";
const GOIAS_ITCD = "https://goias.gov.br/economia/perguntas-e-respostas-11/";

const reformaCreditos = (note: string): LegalSourceSet => ({
  note,
  sources: [
    {
      title: "Lei Complementar nº 214/2025 (texto compilado)",
      scope:
        "Arts. 47 a 57: não cumulatividade, apropriação, vedações e utilização de créditos de IBS e CBS.",
      href: LC_214,
    },
    {
      title: "Lei Complementar nº 227/2026",
      scope:
        "Alterações posteriores na regulamentação do IBS, da CBS e do Comitê Gestor.",
      href: LC_227,
    },
  ],
});

const reformaGeral = (note: string): LegalSourceSet => ({
  note,
  sources: [
    {
      title: "Emenda Constitucional nº 132/2023",
      scope:
        "Fundamentos constitucionais do IBS, da CBS, da não cumulatividade e da transição.",
      href: EC_132,
    },
    {
      title: "Lei Complementar nº 214/2025 (texto compilado)",
      scope:
        "Normas gerais, regimes diferenciados, crédito e cronograma do IBS e da CBS.",
      href: LC_214,
    },
    {
      title: "Lei Complementar nº 227/2026",
      scope: "Regulamentação complementar e alterações da LC nº 214/2025.",
      href: LC_227,
    },
  ],
});

const LEGAL_SOURCES: Record<string, LegalSourceSet> = {
  "/conteudos/aluguel-software-servicos-credito-ibs-cbs": {
    note: "A redução de 70% da alíquota alcança a locação, cessão onerosa e arrendamento de imóveis. O crédito do adquirente não nasce apenas da existência de uma NFS-e: depende do regime, do documento fiscal idôneo e das condições legais de apropriação e extinção do débito.",
    sources: [
      {
        title: "Lei Complementar nº 214/2025 (texto compilado)",
        scope:
          "Arts. 47 a 57 e art. 261, parágrafo único: crédito no regime regular e redução aplicável à locação de imóveis.",
        href: LC_214,
      },
      {
        title: "Lei Complementar nº 227/2026",
        scope:
          "Ajustes no regime de bens imóveis e nas condições de crédito e recolhimento.",
        href: LC_227,
      },
    ],
  },
  "/conteudos/auditoria-fornecedores-creditos-ibs-cbs": reformaCreditos(
    "A auditoria de fornecedor é um controle probatório e cadastral. A lei disciplina o crédito; não cria uma certificação privada do fornecedor nem transfere ao adquirente todas as obrigações do vendedor.",
  ),
  "/conteudos/beneficio-fiscal-ecommerce-goias": {
    note: "O enquadramento depende do texto vigente do RCTE, do TARE e do cumprimento cumulativo das condições estaduais. CNAE, canal de venda ou localização em Goiás, isoladamente, não asseguram o crédito outorgado.",
    sources: [
      {
        title: "Decreto estadual nº 10.201/2023",
        scope:
          "Regulamentação goiana do incentivo aplicável às operações de comércio eletrônico e respectivos requisitos.",
        href: GOIAS_ECOMMERCE,
      },
      {
        title: "Instrução Normativa nº 1.554/2023-GSE",
        scope:
          "Comprovação dos investimentos e escrituração do crédito outorgado na EFD.",
        href: GOIAS_IN_1554,
      },
      {
        title: "Lei Complementar nº 24/1975",
        scope:
          "Disciplina nacional dos convênios relativos a benefícios de ICMS.",
        href: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp24.htm",
      },
    ],
  },
  "/conteudos/cronograma-reforma-tributaria-2026-2033": reformaGeral(
    "As datas devem ser lidas com as regras de produção de efeitos de cada dispositivo e com os atos operacionais publicados pela Receita Federal e pelo CGIBS.",
  ),
  "/conteudos/despesas-que-geram-credito-ibs-cbs": reformaCreditos(
    "O modelo não adota um teste aberto de “essencialidade” como regra geral. A análise parte da aquisição tributada por contribuinte do regime regular e verifica as vedações legais, especialmente uso ou consumo pessoal, documentação e extinção do débito.",
  ),
  "/conteudos/divida-ativa-uniao-encaminhamento-pgfn": {
    note: "O decurso de 90 dias integra a disciplina administrativa de encaminhamento, mas não transforma a remessa em direito automático a desconto, parcelamento sem entrada ou suspensão imediata da cobrança. A modalidade disponível e a capacidade de pagamento precisam ser verificadas no REGULARIZE.",
    sources: [
      {
        title: "Perguntas frequentes da PGFN — prazo de 90 dias",
        scope:
          "Remissão expressa ao art. 2º da Portaria MF nº 447/2018 e ao art. 3º da Portaria PGFN nº 33/2018.",
        href: PGFN_90_DIAS,
      },
      {
        title: "Lei nº 13.988/2020",
        scope: "Requisitos, limites e modalidades de transação tributária.",
        href: LEI_13988,
      },
      {
        title: "PGFN — capacidade de pagamento",
        scope:
          "Critério, classificação e limites para descontos ou prazos ampliados.",
        href: PGFN_CAPAG,
      },
      {
        title: "Lei nº 10.522/2002",
        scope: "Cadastro, cobrança e parcelamento de débitos federais.",
        href: LEI_10522,
      },
    ],
  },
  "/conteudos/folha-pagamento-credito-ibs-cbs": reformaCreditos(
    "Salários e remunerações pagos a pessoas físicas não correspondem, por si, a aquisição onerosa tributada por IBS e CBS. Benefícios comprados de fornecedores exigem análise própria e podem sofrer as vedações de uso ou consumo pessoal.",
  ),
  "/conteudos/glosa-credito-ibs-cbs-causas-como-evitar": reformaCreditos(
    "Glosa não decorre de um único teste. A revisão deve separar inexistência material da operação, documento inidôneo, vedação legal, erro cadastral e falta de extinção do débito nas hipóteses em que ela é exigida.",
  ),
  "/conteudos/guia-simples-nacional": {
    note: "No Simples, anexo, Fator R, sublimite e segregação de receitas devem ser apurados conforme a LC nº 123/2006 e a regulamentação do CGSN. Crédito de DAS pago indevidamente segue os sistemas próprios do Portal do Simples, não a regra geral do PER/DCOMP Web.",
    sources: [
      {
        title: "Lei Complementar nº 123/2006",
        scope:
          "Regime do Simples Nacional, sublimites, anexos e tratamento de ME e EPP.",
        href: LC_123,
      },
      {
        title: "Receita Federal — restituição e compensação de DAS",
        scope:
          "Pedido de restituição e Compensação a Pedido no Portal do Simples; ressalvas para ICMS e ISS.",
        href: SIMPLES_RESTITUICAO,
      },
      {
        title: "Resolução CGSN nº 186/2026",
        scope:
          "Prazos e condições excepcionais de opção para 2027 e escolha do regime regular de IBS e CBS.",
        href: RES_CGSN_186,
      },
    ],
  },
  "/conteudos/holding-familiar": {
    note: "Holding não reduz ITCD ou ITBI automaticamente. O resultado depende do fato gerador, da lei estadual ou municipal, do valor atribuído aos bens ou quotas, da atividade efetiva e da forma de integralização. A decisão deve ser precedida por simulação patrimonial, societária e tributária.",
    sources: [
      {
        title: "Constituição Federal",
        scope:
          "Art. 156, § 2º, I: imunidade de ITBI na realização de capital e respectiva ressalva constitucional.",
        href: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicaocompilado.htm",
      },
      {
        title: "Código Tributário Nacional",
        scope:
          "Arts. 36 a 38: hipóteses de não incidência, atividade preponderante e base de cálculo do ITBI.",
        href: CTN,
      },
      {
        title: "Secretaria da Economia de Goiás — ITCD",
        scope:
          "Alíquotas progressivas vigentes, base de cálculo a valor de mercado e avaliação de quotas.",
        href: GOIAS_ITCD,
      },
      {
        title: "STF — Tema 796 (RE 796.376)",
        scope:
          "Alcance da imunidade de ITBI em relação ao valor do imóvel que excede o capital integralizado.",
        href: "https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?classeProcesso=RE&incidente=4529914&numeroProcesso=796376&numeroTema=796",
      },
      {
        title: "STF — Tema 1.348 (RE 1.495.108)",
        scope:
          "Andamento oficial da controvérsia sobre a ressalva de atividade preponderantemente imobiliária; conferir o status antes de afirmar conclusão definitiva.",
        href: "https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?classeProcesso=RE&incidente=6929423&numeroProcesso=1495108&numeroTema=1348",
      },
    ],
  },
  "/conteudos/ibs-cbs-aliquota-reduzida-setores-beneficiados": {
    note: "Redução de alíquota não equivale a crédito presumido nem garante benefício líquido. A classificação do bem, serviço ou profissão no dispositivo e no anexo aplicável deve ser comprovada; a apropriação de créditos segue as regras gerais do regime regular.",
    sources: [
      {
        title: "Emenda Constitucional nº 132/2023",
        scope:
          "Art. 9º: categorias constitucionalmente autorizadas a receber regimes diferenciados.",
        href: EC_132,
      },
      {
        title: "Lei Complementar nº 214/2025 (texto compilado)",
        scope:
          "Arts. 125 e seguintes e anexos: reduções, alíquota zero e condições por bem, serviço e profissão.",
        href: LC_214,
      },
      {
        title: "Lei Complementar nº 227/2026",
        scope:
          "Alterações posteriores nos regimes diferenciados e anexos.",
        href: LC_227,
      },
    ],
  },
  "/conteudos/ibs-cbs-nota-fiscal-obrigatorio-agosto-2026": {
    note: "A obrigação operacional depende do documento fiscal, da nota técnica e do cronograma aplicável. A existência dos campos de IBS e CBS não deve ser confundida com aplicação automática de todas as regras de validação ou cobrança em uma única data.",
    sources: [
      {
        title: "Portal da Reforma Tributária — Receita Federal",
        scope:
          "Atos, orientações e cronogramas oficiais de adaptação dos documentos fiscais.",
        href: REFORMA_RFB,
      },
      {
        title: "Lei Complementar nº 214/2025 (texto compilado)",
        scope:
          "Obrigações, documentação fiscal e regras gerais do IBS e da CBS.",
        href: LC_214,
      },
      {
        title: "Lei Complementar nº 227/2026",
        scope: "Atualizações do marco operacional e regulamentar.",
        href: LC_227,
      },
    ],
  },
  "/conteudos/lc-236-2026-processo-administrativo-fiscal": {
    note: "A LC nº 236/2026 estabeleceu normas gerais no CTN. A aplicação concreta exige verificar a produção de efeitos, a legislação do ente competente e a compatibilização do processo local; não se deve presumir que todo procedimento anterior foi automaticamente substituído.",
    sources: [
      {
        title: "Lei Complementar nº 236/2026",
        scope:
          "Texto oficial, vigência, reduções de penalidade, processo administrativo e dívida ativa.",
        href: LC_236,
      },
      {
        title: "Código Tributário Nacional (texto compilado)",
        scope:
          "Texto consolidado após as alterações da LC nº 236/2026.",
        href: CTN,
      },
    ],
  },
  "/conteudos/lucro-presumido-reforma-tributaria-riscos-oportunidades": {
    note: "Lucro Presumido é regime de IRPJ e CSLL; IBS e CBS têm lógica própria. A comparação deve considerar margem efetiva, folha, créditos, cadeia B2B/B2C e as alterações federais da LC nº 224/2025, sem prometer que um regime será sempre inferior ao outro.",
    sources: [
      {
        title: "Lei nº 9.249/1995",
        scope:
          "Percentuais de presunção e regras do IRPJ no Lucro Presumido.",
        href: LEI_9249,
      },
      {
        title: "Lei nº 9.430/1996",
        scope:
          "Apuração, pagamento e regras complementares de tributos federais.",
        href: LEI_9430,
      },
      {
        title: "Lei Complementar nº 224/2025",
        scope:
          "Alterações federais em incentivos e bases do IRPJ e da CSLL.",
        href: LC_224,
      },
      {
        title: "Lei Complementar nº 214/2025",
        scope: "Regime regular, créditos e transição do IBS e da CBS.",
        href: LC_214,
      },
    ],
  },
  "/conteudos/lucro-real-reforma-tributaria-creditos-controles":
    reformaCreditos(
      "Lucro Real não cria, por si, crédito de IBS e CBS. O direito decorre da sujeição ao regime regular e do atendimento aos requisitos da LC nº 214/2025; os controles contábeis e fiscais apenas demonstram e conciliam esse direito.",
    ),
  "/conteudos/prazo-opcao-regime-regular-ibs-cbs-simples": {
    note: "A janela de setembro de 2026 decorre da disciplina excepcional para 2027. Para períodos posteriores, é necessário conferir a regulamentação vigente; a opção não deve ser apresentada como escolha permanente ou universal.",
    sources: [
      {
        title: "Resolução CGSN nº 186/2026",
        scope:
          "Prazos e condições da opção pelo Simples e pelo regime regular de IBS e CBS para 2027.",
        href: RES_CGSN_186,
      },
      {
        title: "Comunicado oficial do Portal do Simples Nacional",
        scope:
          "Explicação operacional da opção de setembro de 2026 e da permanência padrão no recolhimento unificado.",
        href: SIMPLES_2027,
      },
      {
        title: "Leis Complementares nº 123/2006 e nº 214/2025",
        scope:
          "Fundamentos legais do Simples e da opção pelo regime regular de IBS e CBS.",
        href: LC_123,
      },
    ],
  },
  "/conteudos/prestadores-servicos-reforma-tributaria-poucos-creditos":
    reformaGeral(
      "O efeito sobre prestadores varia conforme regime, natureza do serviço, redução aplicável, perfil B2B/B2C e estrutura de custos. Folha elevada pode limitar créditos, mas não permite concluir aumento automático de carga para todo o setor.",
    ),
  "/conteudos/recuperacao-tributaria-clinicas-perdcomp": {
    note: "Crédito econômico não basta: a compensação exige crédito juridicamente reconhecível, quantificado, conciliado com as obrigações acessórias e transmitido no sistema correto. DAS do Simples e DARF federal seguem procedimentos distintos.",
    sources: [
      {
        title: "Lei nº 9.430/1996",
        scope:
          "Art. 74: declaração de compensação, homologação, não homologação e contencioso.",
        href: LEI_9430,
      },
      {
        title: "Receita Federal — crédito de DARF",
        scope:
          "Uso, em regra, do PER/DCOMP Web para pagamento indevido ou a maior em DARF.",
        href: PERDCOMP_DARF,
      },
      {
        title: "Receita Federal — crédito de DAS",
        scope:
          "Restituição e compensação própria no Portal do Simples Nacional.",
        href: SIMPLES_RESTITUICAO,
      },
      {
        title: "Decreto nº 70.235/1972",
        scope:
          "Processo administrativo fiscal federal e impugnações aplicáveis.",
        href: "https://www.planalto.gov.br/ccivil_03/decreto/d70235cons.htm",
      },
    ],
  },
  "/conteudos/reforma-tributaria-clinicas-medicas-o-que-muda": {
    note: "A redução para serviços de saúde depende do enquadramento legal e da classificação no anexo aplicável. Ela não altera automaticamente IRPJ, CSLL, ISS atual ou o regime societário da clínica durante a transição.",
    sources: [
      {
        title: "Emenda Constitucional nº 132/2023",
        scope:
          "Art. 9º: autorização constitucional para redução aplicável a serviços de saúde.",
        href: EC_132,
      },
      {
        title: "Lei Complementar nº 214/2025 (texto compilado)",
        scope:
          "Regime diferenciado dos serviços de saúde e Anexo III; crédito e transição do IBS e da CBS.",
        href: LC_214,
      },
      {
        title: "Lei Complementar nº 227/2026",
        scope: "Alterações posteriores no marco do IBS e da CBS.",
        href: LC_227,
      },
    ],
  },
  "/conteudos/reforma-tributaria-formacao-preco-margem": reformaGeral(
    "A legislação define incidência, base, crédito e transição; ela não fornece uma margem empresarial pronta. Preço e repasse precisam ser simulados por produto, contrato, cliente e capacidade de aproveitamento do crédito.",
  ),
  "/conteudos/regimes-tributarios": {
    note: "A escolha entre Simples Nacional, Lucro Presumido e Lucro Real deve separar tributos sobre renda dos tributos sobre consumo e considerar requisitos, vedações e obrigações de cada regime.",
    sources: [
      {
        title: "Lei Complementar nº 123/2006",
        scope: "Simples Nacional, limites, vedações e anexos.",
        href: LC_123,
      },
      {
        title: "Leis nº 9.249/1995 e nº 9.430/1996",
        scope: "Bases do Lucro Presumido e regras federais de apuração.",
        href: LEI_9249,
      },
      {
        title: "Decreto nº 9.580/2018",
        scope: "Regulamento do Imposto sobre a Renda.",
        href: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/decreto/d9580.htm",
      },
    ],
  },
  "/conteudos/regularizacao-fiscal": {
    note: "Parcelamento, transação, revisão e defesa têm efeitos e requisitos diferentes. A exigibilidade só fica suspensa nas hipóteses legais; protocolar pedido ou aguardar inscrição não produz, isoladamente, esse efeito.",
    sources: [
      {
        title: "Código Tributário Nacional",
        scope:
          "Arts. 151 e 156: suspensão da exigibilidade e extinção do crédito tributário.",
        href: CTN,
      },
      {
        title: "Lei nº 13.988/2020",
        scope: "Transação tributária federal e seus limites.",
        href: LEI_13988,
      },
      {
        title: "Lei nº 10.522/2002",
        scope: "Parcelamento e cobrança de débitos federais.",
        href: LEI_10522,
      },
      {
        title: "PGFN — capacidade de pagamento",
        scope:
          "Critérios de classificação e concessão de benefícios em negociações.",
        href: PGFN_CAPAG,
      },
    ],
  },
  "/conteudos/respostas-validadas": {
    note: "As respostas são orientações gerais e não substituem a verificação da norma específica, do período de apuração e dos documentos do contribuinte. Os principais marcos oficiais estão organizados abaixo.",
    sources: [
      {
        title: "Portal da Legislação — Planalto",
        scope:
          "Consulta oficial de leis, leis complementares, decretos e Constituição.",
        href: "https://www4.planalto.gov.br/legislacao",
      },
      {
        title: "Sistema Normas — Receita Federal",
        scope:
          "Consulta de instruções normativas, soluções de consulta e atos do CGSN.",
        href: "https://normas.receita.fazenda.gov.br/sijut2consulta/consulta.action",
      },
      {
        title: "Portal da Reforma Tributária — Receita Federal",
        scope: "Orientações operacionais e atos sobre IBS e CBS.",
        href: REFORMA_RFB,
      },
      {
        title: "Portal da PGFN",
        scope:
          "Transação, regularização e orientações sobre dívida ativa da União.",
        href: "https://www.gov.br/pgfn/pt-br",
      },
    ],
  },
  "/conteudos/revisao-contratos-ibs-cbs-clausulas-essenciais": reformaGeral(
    "A LC nº 214/2025 não impõe um modelo único de cláusula privada. A revisão contratual é uma medida preventiva para alocar preço, tributos, documentação, mudança legislativa e efeitos financeiros conforme a autonomia privada e o contrato concreto.",
  ),
  "/conteudos/saude-clinicas": {
    note: "A equiparação hospitalar tratada neste conteúdo reduz percentuais de presunção de IRPJ e CSLL somente no Lucro Presumido. Exige serviço qualificado, sociedade empresária de direito e de fato e atendimento às normas sanitárias; não decorre apenas do CNAE, da profissão ou da emissão de nota fiscal.",
    sources: [
      {
        title: "Lei nº 9.249/1995",
        scope:
          "Art. 15, §§ 1º e 2º, e art. 20: percentuais de presunção e requisitos legais.",
        href: LEI_9249,
      },
      {
        title: "Lei nº 11.727/2008",
        scope:
          "Alterações que incorporaram os requisitos de organização empresária e normas da Anvisa.",
        href: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11727.htm",
      },
      {
        title: "STJ — Tema Repetitivo 217",
        scope:
          "Interpretação objetiva de serviços hospitalares, ressalvados os requisitos legais posteriores.",
        href: STJ_TEMA_217,
      },
      {
        title: "Solução de Consulta Cosit nº 147/2023",
        scope:
          "Entendimento administrativo sobre percentuais reduzidos, sociedade empresária de direito e de fato, serviços qualificados e normas da Anvisa.",
        href: "https://normas.receita.fazenda.gov.br/sijut2consulta/anexoOutros.action?idArquivoBinario=71749",
      },
      {
        title: "Anvisa — RDC nº 50/2002",
        scope:
          "Fonte sanitária oficial utilizada para identificar atribuições de serviços hospitalares e de auxílio diagnóstico e terapia.",
        href: "https://www.gov.br/anvisa/pt-br/assuntos/servicosdesaude/seguranca-do-paciente/legislacao",
      },
    ],
  },
  "/conteudos/simples-nacional-vai-acabar-2027": {
    note: "O Simples Nacional não foi extinto. A reforma alterou sua interação com IBS e CBS e abriu opção pelo regime regular, preservando o regime favorecido da LC nº 123/2006.",
    sources: [
      {
        title: "Lei Complementar nº 123/2006",
        scope: "Instituição e regras do Simples Nacional.",
        href: LC_123,
      },
      {
        title: "Lei Complementar nº 214/2025",
        scope:
          "Interação do Simples com IBS e CBS e possibilidade de opção pelo regime regular.",
        href: LC_214,
      },
      {
        title: "Resolução CGSN nº 186/2026",
        scope:
          "Prazos e condições da opção para o ano-calendário de 2027.",
        href: RES_CGSN_186,
      },
    ],
  },
  "/conteudos/simples-puro-ou-hibrido-2027-como-decidir": {
    note: "“Simples puro” e “híbrido” são expressões explicativas, não denominações legais. A escolha é entre manter IBS e CBS no recolhimento unificado ou optar pelo regime regular desses tributos, conforme a regulamentação aplicável.",
    sources: [
      {
        title: "Lei Complementar nº 123/2006",
        scope: "Simples Nacional e integração com IBS e CBS.",
        href: LC_123,
      },
      {
        title: "Lei Complementar nº 214/2025",
        scope:
          "Regime regular, créditos e opção dos contribuintes do Simples.",
        href: LC_214,
      },
      {
        title: "Resolução CGSN nº 186/2026",
        scope: "Prazos e efeitos da opção para 2027.",
        href: RES_CGSN_186,
      },
      {
        title: "Comunicado oficial do Portal do Simples Nacional",
        scope:
          "Orientação operacional sobre a decisão em setembro de 2026.",
        href: SIMPLES_2027,
      },
    ],
  },
  "/conteudos/split-payment-adiado-2028-o-que-muda": {
    note: "O split payment integra um conjunto de modalidades de extinção do débito. Cronograma, hipóteses e procedimentos dependem da LC nº 214/2025, das alterações da LC nº 227/2026 e dos atos conjuntos operacionais.",
    sources: [
      {
        title: "Lei Complementar nº 214/2025 (texto compilado)",
        scope:
          "Arts. 27 e seguintes: modalidades de extinção e recolhimento do IBS e da CBS.",
        href: LC_214,
      },
      {
        title: "Lei Complementar nº 227/2026",
        scope:
          "Ajustes no recolhimento por segregação e nos procedimentos simplificados.",
        href: LC_227,
      },
      {
        title: "Decreto nº 12.955/2026",
        scope:
          "Regulamentação federal da CBS e disposições operacionais relacionadas.",
        href: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/decreto/d12955.htm",
      },
    ],
  },
};

export function LegalSourcesSection({ path }: { path?: string }) {
  if (!path) return null;
  const sourceSet = LEGAL_SOURCES[path.replace(/\/$/, "")];
  if (!sourceSet) return null;
  return (
    <section
      className="border-t border-border pt-16"
      aria-labelledby="fontes-oficiais"
    >
      <div className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">
            Base legal verificada
          </div>
          <h2
            id="fontes-oficiais"
            className="font-display text-2xl md:text-3xl tracking-tight"
          >
            Legislação e fontes oficiais
          </h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            {sourceSet.note}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            Fontes conferidas em 25/09/2026.
          </p>
        </header>
        <div className="lg:col-span-8">
          <ul className="grid gap-px bg-border border border-border">
            {sourceSet.sources.map((source) => (
              <li
                key={`${source.title}-${source.href}`}
                className="bg-card p-6"
              >
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-[17px] text-foreground underline decoration-gold/50 underline-offset-4 hover:text-secondary"
                >
                  {source.title} ↗
                </a>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {source.scope}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
            Revisão técnica:{" "}
            <a
              href="/sobre/leandro/"
              className="underline decoration-gold/50 hover:text-foreground"
            >
              Leandro Matsuoka Guimarães
            </a>
            , sócio-fundador e diretor técnico da DCON, CRC-GO 16.395/O-9. A
            aplicação depende dos fatos, documentos, período de apuração e
            legislação vigente no caso concreto.
          </p>
        </div>
      </div>
    </section>
  );
}
