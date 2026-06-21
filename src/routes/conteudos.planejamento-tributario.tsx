import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/conteudos/planejamento-tributario")({
  beforeLoad: () => {
    throw redirect({ to: "/solucoes/planejamento-tributario", statusCode: 301 });
  },
});
