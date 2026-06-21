import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/conteudos/regularizacao-fiscal")({
  beforeLoad: () => {
    throw redirect({ to: "/solucoes/regularizacao-fiscal", statusCode: 301 });
  },
});
