import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    // Keep existing route literals type-safe while emitting canonical slash URLs.
    trailingSlash: "always" as "never",
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
