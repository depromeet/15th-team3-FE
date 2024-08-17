'use client';

import { Provider as AtomProvider } from 'jotai';
import { PropsWithChildren } from 'react';

import { QueryClientProvider } from './QueryClientProvider';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider>
      <AtomProvider>{children}</AtomProvider>
    </QueryClientProvider>
  );
};
