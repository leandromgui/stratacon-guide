import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/conteudos/holding-patrimonio")({
  beforeLoad: () => {
    throw redirect({ to: "/solucoes/holding-patrimonial", statusCode: 301 });
  },
});
