import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { getDoc } from "../lib/dcon-content";
import { faqJsonLd, serviceJsonLd, type FAQItem } from "../components/FAQ";
import { MethodBadge } from "../components/MethodBadge";
import { dconMethod } from "../lib/dconMethod";
import { buildSeoHead } from "@/lib/seo";

const faqs: FAQItem[] = [
  { q: "Atendem empresas sem funcionários CLT?", a: "Sim. Conduzimos pró-labore de sócios, distribuição de lucros e PJ contratados, com análise de risco de vínculo e estruturação correta." },
  { q: "Fazem ponto eletrônico?", a: "Não operamos relógio de ponto. Integramos com sistemas de marcação eletrônica (web, app ou catraca) já adotados pelo cliente, fazendo a leitura, conferência e fechamento da folha." },
  { q: "Tratam passivo trabalhista antigo?", a: "Sim, mediante diagnóstico trabalhista prévio. Mapeamos eventos pendentes, inconsistências de eSocial, FGTS em atraso e exposição a ações antes de propor o plano." },
  { q: "Quem assina as obrigações trabalhistas?", a: "Responsável técnico com CRC ativo, com revisão cruzada antes do envio. Inconsistência de eSocial hoje é multa amanhã — tratamos antes." },
  { q: "Atendem CCT específicas e categorias diferenciadas?", a: "Sim. Aplicamos a convenção coletiva correta por município e categoria, e atualizamos pisos, reajustes e cláusulas a cada vigência." },
  { q: "Atendem empresas fora de Goiânia?", a: "Sim. Atendimento remoto em todo o Brasil, com canais auditáveis para documentos e reuniões técnicas agendadas por vídeo." },
];

export const Route = createFileRoute("/solucoes/departamento-pessoal")({
  head: () => ({
    ...buildSeoHead({
      title: "Departamento Pessoal e eSocial | DCON Consultoria",
      description: "Folha, eSocial, admissões, rescisões e encargos com revisão técnica. Departamento pessoal para empresas que não aceitam passivo trabalhista.",
      canonical: "/solucoes/departamento-pessoal",
    }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"/"},{"@type":"ListItem","position":2,"name":"Soluções","item":"/solucoes"},{"@type":"ListItem","position":3,"name":"Departamento Pessoal","item":"/solucoes/departamento-pessoal"}]}) },
      { type: "application/ld+json", children: serviceJsonLd({ name: "Departamento Pessoal e eSocial", description: "Folha, eSocial, admissões, rescisões e encargos com revisão técnica e calendário ativo.", url: "/solucoes/departamento-pessoal" }) },
      { type: "application/ld+json", children: faqJsonLd(faqs) },
    ],
  }),
  component: Page,
});

const docDcon = getDoc(11);

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções · Pessoas e trabalhista"
      h1={docDcon.h1 || "Folha, eSocial e compliance trabalhista para reduzir riscos, encargos indevidos e passivos ocultos"}
      lead="Folha não é apenas calcular salário. É aplicar corretamente CCT, rubricas, encargos, eSocial, DCTFWeb, FGTS Digital, SST e documentação trabalhista."
      intro={docDcon.fraseComercial}
      breadcrumbs={[{ label: "Soluções", to: "/solucoes" }, { label: "Departamento Pessoal", to: "/solucoes/departamento-pessoal" }]}
      audience={docDcon.audience}
      ctaPrimary={docDcon.ctas[0]}
      ctaSecondary={docDcon.ctas[1]}
      ctaTertiary={docDcon.ctas[2]}
      respostaValidada={docDcon.respostaValidada}
      pillarKey="departamento-pessoal"
      method={dconMethod}
      ctaVariant="risk"
      sections={[
        { h2: "Escopo do serviço", lead: "Rotina trabalhista completa, do contrato à rescisão, com tratamento técnico do eSocial e foco em prevenção de passivo.", h3: [
          { title: "Admissão e contratos", body: "Documentação, exames ocupacionais, registro e eventos iniciais do eSocial em conformidade com a CLT e CCT aplicável." },
          { title: "Folha de pagamento", body: "Cálculo mensal, holerites, encargos e provisões com revisão técnica antes do envio ao cliente." },
          { title: "Encargos e tributos", body: "INSS, FGTS, IRRF, Sistema S e contribuições calculados, conferidos e recolhidos no prazo." },
          { title: "eSocial", body: "Eventos periódicos e não-periódicos enviados no prazo, com tratamento técnico de inconsistências antes que virem multa." },
          { title: "Rescisões e desligamentos", body: "Cálculo conforme tipo de desligamento, homologação técnica e avaliação preventiva de risco trabalhista." },
          { title: "Férias, 13º e benefícios", body: "Programação, cálculo e averbação dentro do prazo, com integração ao calendário operacional do cliente." },
        ]},
        { h2: "Sócios, pró-labore e PJ", lead: "Decisões societárias e trabalhistas tratadas no mesmo plano técnico.", h3: [
          { title: "Pró-labore técnico", body: "Definição com base na realidade societária, regime tributário e estrutura de distribuição de lucros." },
          { title: "Contratação PJ", body: "Análise de viabilidade, risco de vínculo (Lei 11.196/05 e jurisprudência) e desenho contratual seguro." },
          { title: "Distribuição de lucros", body: "Conformidade com escrituração contábil, balanço e regime tributário da empresa." },
          { title: "Estagiários e jovem aprendiz", body: "Enquadramento legal, cotas obrigatórias e gestão de eventos específicos no eSocial." },
        ]},
        { h2: "CCT e enquadramento sindical", lead: "Sindicato correto, piso, reajustes, benefícios, adicionais, jornada, banco de horas, vale-alimentação, seguro de vida e multas convencionais conferidos a cada folha.", h3: [
          { title: "Enquadramento", body: "Atividade econômica preponderante, sindicato patronal e laboral aplicáveis e CNAEs relacionados." },
          { title: "Aplicação prática", body: "Cláusulas obrigatórias replicadas em contrato, folha e eSocial — sem deixar diferença salarial latente." },
        ]},
        { h2: "Rubricas, premiações e ajuda de custo", lead: "Natureza da verba define INSS, FGTS, IRRF, eSocial, DCTFWeb e FGTS Digital. Erro de rubrica vira passivo.", h3: [
          { title: "Premiações", body: "Critério objetivo, desempenho superior e política documentada — sem isso, premiação vira salário disfarçado." },
          { title: "Ajuda de custo", body: "Deve corresponder a custo real, despesa comprovada ou política documentada. Ajuda mensal sem custo real é reclassificada como salário." },
          { title: "Verbas indenizatórias e reembolsos", body: "Tratamento técnico para evitar incidência indevida e proteger o crédito quando ele existe." },
        ]},
        { h2: "SST, PGR, PCMSO, LTCAT, PPP e NR-1", lead: "Saúde e segurança no trabalho passaram a integrar o eSocial — riscos ocupacionais e psicossociais entram na rotina.", h3: [
          { title: "Documentação", body: "PGR, GRO, PCMSO, ASO, LTCAT e PPP organizados e atualizados conforme NR-1." },
          { title: "Eventos eSocial SST", body: "S-2210, S-2220 e S-2240 enviados no prazo, com responsabilidade compartilhada entre empresa e prestadores." },
        ]},
        { h2: "FGTS Digital, processos trabalhistas e Falso Simples", h3: [
          { title: "FGTS Digital", body: "Recolhimentos decorrentes de acordos, condenações, verbas salariais e diferenças de folha integrados à rotina." },
          { title: "Falso Simples", body: "Empresa informada como Simples no eSocial/DCTFWeb sem enquadramento correto gera CPP e terceiros indevidos." },
        ]},
      ]}
      deliverables={[
        { title: "Folha mensal revisada", body: "Cálculo, holerites e relatório de fechamento entregues no calendário acordado, com revisão antes do envio." },
        { title: "Guias e obrigações", body: "DARF, GPS, FGTS, DCTFWeb e demais guias geradas e enviadas com confirmação de protocolo." },
        { title: "eSocial sob controle", body: "Eventos enviados, inconsistências tratadas e relatório periódico de status com a empresa." },
        { title: "Calendário trabalhista ativo", body: "Acompanhamento de prazos de férias, 13º, CCT, reajustes e exames periódicos sem depender do cliente." },
        { title: "Apoio em rescisões", body: "Cálculo técnico, homologação e acompanhamento até o desligamento completo, com nota de risco." },
        { title: "Painel gerencial de pessoas", body: "Custo total por colaborador, encargos efetivos e indicadores de turnover quando aplicável." },
      ]}
      risks={[
        { title: "Inconsistência de eSocial", body: "Eventos não enviados ou com erro viram multa automática. Tratamento reativo custa muito mais que prevenção." },
        { title: "Vínculo de PJ reconhecido", body: "PJ que atua como CLT pode ter o contrato desconsiderado, gerando passivo de FGTS, INSS, férias e 13º retroativos." },
        { title: "Pró-labore mal dimensionado", body: "Sócio sem pró-labore ou com valor desproporcional expõe a empresa à cobrança de INSS retroativo do segurado obrigatório." },
        { title: "FGTS e INSS em atraso", body: "Atraso recorrente vira passivo trabalhista, impede CNDs e bloqueia certificações, contratos públicos e financiamento." },
        { title: "CCT não aplicada", body: "Convenção coletiva ignorada gera diferença salarial, multa e ações trabalhistas em massa quando descoberta." },
        { title: "Homologação informal", body: "Rescisão mal calculada ou sem documentação adequada vira reclamatória trabalhista com alto custo." },
      ]}
      faq={faqs}
    >
      <MethodBadge note="Departamento pessoal conduzido pelo protocolo DCON" />
    </PageScaffold>
  );
}