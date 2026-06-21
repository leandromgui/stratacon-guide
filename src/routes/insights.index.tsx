import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * /insights é o novo hub editorial. Por ora, redireciona para /conteudos
 * para preservar todos os insights existentes sem quebrar links internos.
 * A migração de URL canônica será feita em uma PR dedicada.
 */
export const Route = createFileRoute("/insights/")({
  beforeLoad: () => {
    throw redirect({ to: "/conteudos" });
  },
});