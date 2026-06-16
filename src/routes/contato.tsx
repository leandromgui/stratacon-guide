import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | DCON Serviços Contábeis em Goiânia" },
      { name: "description", content: "Fale com a DCON Serviços Contábeis. Atendimento em Goiânia e online em todo o Brasil." },
      { property: "og:title", content: "Contato | DCON Serviços Contábeis em Goiânia" },
      { property: "og:description", content: "Fale com a DCON Serviços Contábeis. Atendimento em Goiânia e online em todo o Brasil." },
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
      { h2: "Solicite uma análise da sua empresa", h3: ["Diagnóstico fiscal","Diagnóstico contábil","Diagnóstico tributário"] },
      { h2: "Atendimento em Goiânia e online", h3: ["Endereço","Horário","Atendimento remoto"] },
      { h2: "Canais de contato", h3: ["WhatsApp","E-mail","Telefone"] },
      ]}
    />
  );
}
