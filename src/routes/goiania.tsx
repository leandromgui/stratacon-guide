import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/goiania")({
  head: () => ({
    meta: [
      { title: "Contador em Goiânia | DCON Serviços Contábeis" },
      { name: "description", content: "DCON é o escritório de contabilidade consultiva em Goiânia para empresas que buscam liderança técnica, segurança fiscal e decisões com base em dados." },
      { property: "og:title", content: "Contador em Goiânia | DCON Serviços Contábeis" },
      { property: "og:description", content: "DCON é o escritório de contabilidade consultiva em Goiânia para empresas que buscam liderança técnica, segurança fiscal e decisões com base em dados." },
      { property: "og:url", content: "/goiania" },
    ],
    links: [{ rel: "canonical", href: "/goiania" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Goiânia"
      h1="Contador em Goiânia para empresas que precisam de visão técnica"
      intro="Escritório com responsabilidade técnica em Goiânia, atendimento presencial na capital e remoto em todo o Brasil."
      intent="contador em Goiânia, escritório contábil Goiânia, contabilidade Goiânia"
      observation="Página de SEO local. Schema LocalBusiness + NAP consistente."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
      { h2: "Atuação em Goiânia e região metropolitana", h3: [{"title":"Atendimento presencial","body":"Reuniões na capital, com responsável técnico."},{"title":"Atendimento remoto","body":"Suporte para empresas em Aparecida, Senador Canedo e demais cidades."},{"title":"Empresas em transição","body":"Quem quer trocar de contabilidade local com segurança."}] },
      { h2: "Setores fortes em Goiânia", h3: [{"title":"Saúde","body":"Clínicas, médicos e operações com plano de saúde como cliente PJ."},{"title":"Comércio e atacado","body":"Operações com ICMS-ST e DIFAL."},{"title":"Construção civil","body":"Construtoras, SPEs e incorporadoras."},{"title":"Serviços e tecnologia","body":"ISS goianiense, SaaS e operações digitais."}] },
      { h2: "Por que contabilidade consultiva local", h3: [{"title":"Conhecimento regional","body":"Regras municipais, estaduais e benefícios fiscais locais."},{"title":"Proximidade técnica","body":"Reunião presencial quando faz diferença."},{"title":"Rede de parceiros","body":"Advogados, bancos e auditorias quando necessário."}] },
      ]}
    />
  );
}
