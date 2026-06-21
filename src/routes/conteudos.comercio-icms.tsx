import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/conteudos/comercio-icms")({
  beforeLoad: () => {
    throw redirect({ to: "/segmentos/comercio", statusCode: 301 });
  },
});
