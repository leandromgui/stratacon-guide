import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/segmentos/lucro-real")({
  beforeLoad: () => {
    throw redirect({ to: "/conteudos/regimes-tributarios", statusCode: 301 });
  },
});
