import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/reforma-tributaria-2026")({
  beforeLoad: () => {
    throw redirect({ to: "/solucoes/reforma-tributaria", statusCode: 301 });
  },
});
