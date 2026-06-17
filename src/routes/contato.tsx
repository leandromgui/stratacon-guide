import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Fale com a DCON | Contabilidade em Goiânia" },
      { name: "description", content: "Solicite uma análise da sua empresa com a DCON. Contabilidade consultiva em Goiânia e atendimento online em todo o Brasil. WhatsApp, e-mail e telefone." },
      { property: "og:title", content: "Fale com a DCON | Contabilidade em Goiânia" },
      { property: "og:description", content: "Solicite uma análise da sua empresa com a DCON. Contabilidade consultiva em Goiânia e atendimento online em todo o Brasil. WhatsApp, e-mail e telefone." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Contato"
      h1="Fale com a DCON"
      intro="Atendimento consultivo presencial em Goiânia e online em todo o Brasil."
      intent="contato DCON contabilidade, contador Goiânia"
      observation="Schema LocalBusiness; integrar Google Business Profile."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      
      sections={[
      { h2: "Solicite uma análise da sua empresa", h3: [{"title":"Diagnóstico fiscal","body":"Revisão técnica de apurações, SPEDs e classificação."},{"title":"Diagnóstico contábil","body":"Análise de escrituração e fechamentos."},{"title":"Diagnóstico tributário","body":"Comparativo de regime e oportunidades."}] },
      { h2: "Atendimento em Goiânia e online", h3: [{"title":"Goiânia","body":"Encontros presenciais em horário comercial."},{"title":"Online","body":"Atendimento remoto em todo o Brasil."},{"title":"Reuniões","body":"Por videoconferência, agendadas com responsável técnico."}] },
      { h2: "Canais", h3: [{"title":"WhatsApp","body":"Atendimento direto para clientes e novos contatos."},{"title":"E-mail","body":"contato@dcon.com.br"},{"title":"Telefone","body":"[preencher]"}] },
      ]}
    />
  );
}
