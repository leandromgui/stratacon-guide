import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/privacidade")({
  head: () => buildSeoHead({
      title: "Política de Privacidade | DCON Serviços Contábeis",
      description: "Como a DCON trata dados pessoais, cookies e formulários de contato em conformidade com a LGPD.",
      canonical: "/privacidade",
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Privacidade"
      h1="Política de Privacidade e Cookies"
      intro="Esta página descreve, em linguagem direta, como a DCON Serviços Contábeis trata os dados pessoais coletados pelo site, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)."
      intent="LGPD política privacidade cookies DCON"
      observation="Página mantida pela equipe DCON; revisar com o jurídico antes de publicar."
      ctaPrimary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
        {
          h2: "Quais dados coletamos",
          h3: [
            { title: "Dados de contato", body: "Nome, e-mail e WhatsApp informados em formulários de diagnóstico e contato." },
            { title: "Interesse declarado", body: "Solução, segmento ou tema indicado pelo usuário ao solicitar atendimento." },
            { title: "Dados de navegação", body: "Páginas visitadas, origem de tráfego, dispositivo e cookies analíticos quando aceitos." },
          ],
        },
        {
          h2: "Como usamos os dados",
          h3: [
            { title: "Atendimento", body: "Para responder solicitações, agendar reuniões e preparar diagnóstico técnico." },
            { title: "Melhoria do site", body: "Medir uso das páginas e identificar conteúdos mais relevantes." },
            { title: "Comunicação", body: "Envio de materiais técnicos quando o usuário demonstra interesse explícito." },
          ],
        },
        {
          h2: "Cookies",
          h3: [
            { title: "Essenciais", body: "Mantêm a navegação e a preferência de consentimento; não podem ser desativados." },
            { title: "Analíticos", body: "Medem audiência e comportamento agregado; ativados apenas com aceite." },
            { title: "Revogar consentimento", body: "Limpe os cookies do navegador para que o aviso apareça novamente." },
          ],
        },
        {
          h2: "Seus direitos (LGPD)",
          h3: [
            { title: "Acesso e correção", body: "Você pode solicitar acesso, correção ou exclusão dos seus dados." },
            { title: "Portabilidade", body: "Solicitar exportação dos dados em formato legível." },
            { title: "Contato do encarregado", body: "Envie sua solicitação para contato@dcon.cnt.br." },
          ],
        },
      ]}
    />
  );
}