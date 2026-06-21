import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/conteudos/dp-esocial")({
  beforeLoad: () => {
    throw redirect({ to: "/solucoes/departamento-pessoal", statusCode: 301 });
  },
});
