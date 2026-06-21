import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/conteudos/saude-clinicas")({
  beforeLoad: () => {
    throw redirect({ to: "/segmentos/medicos-clinicas", statusCode: 301 });
  },
});
