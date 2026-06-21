import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre/metodologia")({
  beforeLoad: () => {
    throw redirect({ to: "/metodo", statusCode: 301 });
  },
});
