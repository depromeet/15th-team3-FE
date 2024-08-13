'use client';
import { isServer, QueryClient, QueryClientProvider as TanstackProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
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

export const QueryClientProvider = ({ children }: PropsWithChildren) => {
  const queryClient = getQueryClient();

  return <TanstackProvider client={queryClient}>{children}</TanstackProvider>;
};
