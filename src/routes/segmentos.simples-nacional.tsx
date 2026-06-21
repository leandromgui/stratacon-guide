import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/segmentos/simples-nacional")({
  beforeLoad: () => {
    throw redirect({ to: "/conteudos/regimes-tributarios", statusCode: 301 });
  },
});
