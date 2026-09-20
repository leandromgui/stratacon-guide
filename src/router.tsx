import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import type { TrailingSlashOption } from "@tanstack/router-core";
import { routeTree } from "./routeTree.gen";

const trailingSlash: TrailingSlashOption = "always";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    trailingSlash,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
