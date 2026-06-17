import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/departamento-fiscal")({
  head: () => ({
    meta: [
      { title: "Departamento Fiscal em Goiânia | DCON Contábil" },
      { name: "description", content: "Departamento fiscal completo: apuração, SPED, ICMS, ISS, PIS e Cofins. Escritório DCON em Goiânia para empresas que exigem precisão tributária." },
      { property: "og:title", content: "Departamento Fiscal em Goiânia | DCON Contábil" },
      { property: "og:description", content: "Departamento fiscal completo: apuração, SPED, ICMS, ISS, PIS e Cofins. Escritório DCON em Goiânia para empresas que exigem precisão tributária." },
      { property: "og:url", content: "/solucoes/departamento-fiscal" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/departamento-fiscal" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Soluções", "item": "/solucoes"}, {"@type": "ListItem", "position": 3, "name": "Departamento Fiscal", "item": "/solucoes/departamento-fiscal"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Departamento fiscal técnico e auditável"
      intro="Apuração de tributos com base técnica, SPEDs sem inconsistências e revisão preventiva de risco fiscal."
      intent="departamento fiscal terceirizado, apuração de impostos empresa"
      observation="Forte gancho para Recuperação de Créditos e Regularização."
      ctaPrimary={{ label: "Solicitar proposta", to: "/contato" }}
      ctaSecondary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      sections={[
      { h2: "O que está incluso", h3: [{"title":"Apuração de tributos","body":"PIS, COFINS, ICMS, ISS, IRPJ e CSLL apurados com revisão técnica."},{"title":"SPED Fiscal e Contribuições","body":"Entregas auditadas antes da transmissão para reduzir risco de malha."},{"title":"Obrigações estaduais e municipais","body":"GIA, DESTDA, declarações de ISS conforme o município."},{"title":"Conferência de notas","body":"Validação técnica de CFOP, CST, NCM e base de cálculo."}] },
      { h2: "Para quem é indicado", h3: [{"title":"Comércio e indústria","body":"Operações com ICMS, ST e DIFAL que exigem precisão."},{"title":"Empresas com filiais","body":"Operações multiestaduais com regras tributárias distintas."},{"title":"Empresas que sofreram autuação","body":"Negócios que precisam corrigir rota fiscal antes de crescer."}] },
      { h2: "Como entregamos", h3: [{"title":"Calendário fiscal ativo","body":"Controle de prazos federais, estaduais e municipais."},{"title":"Auditoria preventiva","body":"Revisão mensal cruzando faturamento, NFs e apuração."},{"title":"Comunicação proativa","body":"Avisamos riscos antes da malha — não depois."}] },
      { h2: "Diferenciais técnicos", h3: [{"title":"Olho na ST e no DIFAL","body":"Erros silenciosos que custam caro em fiscalização."},{"title":"Cruzamento com SPED","body":"Conferência cruzada antes da transmissão definitiva."},{"title":"Integração com Recuperação","body":"Identificamos crédito recuperável durante a rotina."}] },
      { h2: "Perguntas frequentes", h3: [{"title":"Vocês emitem notas?","body":"Não. Operamos a apuração e a conformidade fiscal."},{"title":"Atendem empresas no Simples?","body":"Sim, com revisão de anexo, fator R e sublimite."},{"title":"Fazem defesa em autuação?","body":"Apoiamos tecnicamente. Defesa jurídica fica com advogado parceiro."}] },
      ]}
    />
  );
}
