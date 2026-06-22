import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { getDoc } from "../lib/dcon-content";

const faqs = [
  { q: "Quanto tempo leva o Método DCON do início ao fim?", a: "O diagnóstico técnico é entregue em até 7 dias úteis. As fases seguintes (planejamento, execução e governança) seguem cronograma específico de cada empresa, normalmente entre 30 e 90 dias para implementação completa." },
  { q: "O método se aplica a empresas de qualquer porte?", a: "Sim. Adaptamos a profundidade do diagnóstico e dos entregáveis ao porte e à complexidade tributária. ME e EPP têm método simplificado; Lucro Presumido e Real seguem o protocolo completo." },
  { q: "Como é a governança após a implementação?", a: "Reunião mensal com indicadores fiscais, contábeis e gerenciais, plus revisão trimestral de tese tributária e exposições de risco. Toda decisão fica documentada e auditável." },
];

export const Route = createFileRoute("/metodo")({
  head: () => ({
    meta: [
      { title: "Método DCON: diagnóstico, planejamento, execução e governança" },
      { name: "description", content: "O Método DCON conduz cada cliente em 4 fases auditáveis: diagnóstico técnico, planejamento, execução documentada e governança contínua." },
      { property: "og:title", content: "Método DCON — 4 fases auditáveis" },
      { property: "og:description", content: "Protocolo técnico que transforma contabilidade em decisão: diagnóstico, planejamento, execução e governança." },
      { property: "og:url", content: "/metodo" },
    ],
    links: [{ rel: "canonical", href: "/metodo" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"/"},{"@type":"ListItem","position":2,"name":"Método DCON","item":"/metodo"}]}) },
      { type: "application/ld+json", children: JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"Método DCON","description":"Protocolo técnico de consultoria contábil, fiscal e tributária em 4 fases.","step":[{"@type":"HowToStep","position":1,"name":"Diagnóstico","text":"Cruzamento de documentos fiscais, contábeis, societários e trabalhistas para identificar riscos, créditos e exposições."},{"@type":"HowToStep","position":2,"name":"Planejamento","text":"Plano de ação tributário, patrimonial e operacional com simulações, tese fundamentada e cronograma."},{"@type":"HowToStep","position":3,"name":"Execução","text":"Implementação documentada com parecer técnico, retificações, parametrização de sistemas e treinamento de equipe."},{"@type":"HowToStep","position":4,"name":"Governança","text":"Acompanhamento mensal com indicadores, revisão de teses, auditoria contínua e responsabilidade técnica."}]}) },
      { type: "application/ld+json", children: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":faqs.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))}) },
    ],
  }),
  component: Page,
});

const docDcon = getDoc(19);

function Page() {
  return (
    <PageScaffold
      eyebrow="Método DCON"
      h1={docDcon.h1}
      lead="Quatro fases auditáveis que transformam contabilidade em decisão técnica."
      intro={docDcon.fraseComercial}
      audience={docDcon.audience}
      breadcrumbs={[{ label: "Método DCON", to: "/metodo" }]}
      ctaPrimary={docDcon.ctas[0]}
      ctaSecondary={docDcon.ctas[1]}
      ctaTertiary={docDcon.ctas[2]}
      respostaValidada={docDcon.respostaValidada}
      sections={[
        {
          h2: "Por que método e não promessa",
          lead: "Em contabilidade consultiva, toda recomendação precisa caber em uma defesa fiscal. Sem método, não há responsabilidade técnica.",
          h3: [
            { title: "Decisão precisa de prova", body: "Cada recomendação é precedida de diagnóstico documental. Sem cruzamento de obrigações, contratos e movimentação, não há tese sustentável." },
            { title: "Tributário precisa de tese", body: "Economia tributária sem fundamento jurídico vira passivo. Operamos com parecer técnico, jurisprudência e simulação de impacto." },
            { title: "Patrimônio precisa de histórico", body: "Holding, sucessão e proteção patrimonial dependem de arquivamento, ata, contrato e prova documental — não de modelos genéricos." },
            { title: "Gestão precisa de indicador", body: "Sem KPI fiscal, contábil e gerencial, o sócio decide no escuro. O método entrega indicadores e governança recorrente." },
          ],
        },
      ]}
      method={[
        { title: "Diagnóstico técnico", body: "Cruzamento de SPED, EFD, DCTF, eSocial, DEFIS, contratos, atas e movimentação bancária. Entrega em até 7 dias úteis com mapa de exposição fiscal, créditos identificados e plano priorizado." },
        { title: "Planejamento fundamentado", body: "Tese tributária, simulações comparativas de regime, plano patrimonial e cronograma de implementação. Toda recomendação fica em parecer técnico assinado pelo responsável." },
        { title: "Execução documentada", body: "Retificações, parametrização de ERP, registros societários, defesas administrativas e implementação de rotinas. Cada movimento gera documento auditável." },
        { title: "Governança contínua", body: "Reunião mensal de indicadores, revisão trimestral de teses, monitoramento de exposições e atualização legal. A relação não termina na entrega; vira protocolo recorrente." },
      ]}
      deliverables={[
        { title: "Relatório de diagnóstico", body: "Mapa fiscal, contábil, trabalhista e societário com cruzamentos, riscos e oportunidades classificados por prioridade." },
        { title: "Parecer técnico fundamentado", body: "Cada tese tributária ou recomendação patrimonial vem com fundamento legal, jurisprudência e simulação numérica." },
        { title: "Plano de ação cronogramado", body: "Sequência de implementação com responsáveis, prazos e marcos de validação." },
        { title: "Painel de indicadores", body: "KPIs fiscais, contábeis e gerenciais atualizados mensalmente, com leitura conduzida em reunião." },
      ]}
      technology={[
        { title: "Cruzamento automatizado", body: "Coletamos SPED, EFD-Contribuições, eSocial e DCTFWeb e cruzamos contra contratos, NF-e e movimentação bancária — sem digitação manual." },
        { title: "ERP integrado", body: "Parametrizamos cadastros fiscais, CFOP, NCM, CST e cClassTrib direto no ERP do cliente para que a apuração nasça correta." },
        { title: "Trilha auditável", body: "Cada decisão fica em sistema de documentação versionada, acessível ao cliente e à equipe técnica a qualquer momento." },
      ]}
      relatedLinks={[
        { label: "Solicitar diagnóstico em 7 dias", to: "/diagnostico", eyebrow: "Primeiro passo" },
        { label: "Linhas de solução", to: "/solucoes", eyebrow: "Soluções" },
        { label: "Setores atendidos", to: "/segmentos", eyebrow: "Segmentos" },
        { label: "Liderança técnica", to: "/sobre/leandro", eyebrow: "Responsável" },
      ]}
      faq={faqs}
    />
  );
}