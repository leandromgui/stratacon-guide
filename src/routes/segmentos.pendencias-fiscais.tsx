import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/segmentos/pendencias-fiscais")({
  beforeLoad: () => {
    throw redirect({ to: "/solucoes/regularizacao-fiscal", statusCode: 301 });
  },
});
