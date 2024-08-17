'use client';

import { OverlayProvider } from '@toss/use-overlay';
import { Provider as AtomProvider } from 'jotai';
import { PropsWithChildren } from 'react';

import { QueryClientProvider } from './QueryClientProvider';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider>
      <AtomProvider>
        <OverlayProvider>{children}</OverlayProvider>
      </AtomProvider>
    </QueryClientProvider>
  );
};
