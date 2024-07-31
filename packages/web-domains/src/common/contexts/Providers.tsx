'use client';

import { OverlayProvider } from '@toss/use-overlay';
import { PropsWithChildren } from 'react';

import { QueryClientProvider } from './QueryClientProvider';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider>
      <OverlayProvider>{children}</OverlayProvider>
    </QueryClientProvider>
  );
};
