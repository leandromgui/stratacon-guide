import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/abrir-empresa")({
  head: () => ({
    meta: [
      { title: "Abrir Empresa em Goiânia | DCON Contabilidade" },
      { name: "description", content: "Abertura de empresa em Goiânia com a DCON: definição de CNAE, regime tributário, contrato social e legalização completa em todos os órgãos." },
      { property: "og:title", content: "Abrir Empresa em Goiânia | DCON Contabilidade" },
      { property: "og:description", content: "Abertura de empresa em Goiânia com a DCON: definição de CNAE, regime tributário, contrato social e legalização completa em todos os órgãos." },
      { property: "og:url", content: "/solucoes/abrir-empresa" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/abrir-empresa" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Soluções", "item": "/solucoes"}, {"@type": "ListItem", "position": 3, "name": "Abrir Empresa", "item": "/solucoes/abrir-empresa"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Abrir empresa com enquadramento e estrutura corretos desde o início"
      intro="Abrir empresa é o passo mais barato de errar — e o mais caro de não consertar. Conduzimos com base técnica."
      intent="abrir empresa Goiânia, como abrir CNPJ"
      observation="Alto volume de busca local."
      ctaPrimary={{ label: "Solicitar proposta", to: "/contato" }}
      ctaSecondary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      pillarKey="abrir-empresa"
      sections={[
      { h2: "Etapas", h3: [{"title":"Análise prévia","body":"Conversa antes de qualquer protocolo — para acertar de primeira."},{"title":"Registro","body":"Junta Comercial, CNPJ, inscrições e alvarás."},{"title":"Pós-abertura","body":"Configuração de emissores, certificado digital e rotina inicial."}] },
      { h2: "Escolha do regime", h3: [{"title":"Simples Nacional","body":"Quando faz sentido e quando é cilada."},{"title":"Lucro Presumido","body":"Para serviços com margem maior."},{"title":"Lucro Real","body":"Indicação para faturamentos e margens específicas."}] },
      { h2: "CNAE certo", h3: [{"title":"Operação real","body":"CNAE precisa refletir o que a empresa faz, não o que parece."},{"title":"Impacto tributário","body":"CNAE define alíquota, anexo e até retenção."},{"title":"Licenças exigidas","body":"Algumas atividades exigem alvará específico."}] },
      { h2: "Documentação", h3: [{"title":"Pessoa física dos sócios","body":"Documentos pessoais e endereço."},{"title":"Endereço empresarial","body":"Comprovação aceita pelo município."},{"title":"Atividade","body":"Definição clara de objeto social."}] },
      { h2: "Pós-abertura", h3: [{"title":"Certificado digital","body":"Emissão e instalação."},{"title":"Emissor de NF","body":"Configuração do município/estado."},{"title":"Rotina inicial","body":"Primeira folha, primeira apuração e calendário."}] },
      ]}
    />
  );
}
