'use client';
import { isServer, QueryClient, QueryClientProvider as TanstackProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  });
};

let browserQueryClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (isServer) {
    return makeQueryClient();
  }

  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }
  return browserQueryClient;
};

export const QueryClientProvider = ({ children }: { children?: ReactNode }) => {
  const queryClient = getQueryClient();

  return <TanstackProvider client={queryClient}>{children}</TanstackProvider>;
};
