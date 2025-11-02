"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import type { ReactNode } from "react";

export const queryClient = new QueryClient();

export default function ReactQueryClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtoolsPanel />
    </QueryClientProvider>
  );
}
