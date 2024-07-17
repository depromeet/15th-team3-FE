'use client';

import { PropsWithChildren } from 'react';

import { injectGlobalStyles } from '../styles/GlobalStyles';

import { QueryClientProvider } from './QueryClientProvider';

injectGlobalStyles();

export const Providers = ({ children }: PropsWithChildren) => {
  return <QueryClientProvider>{children}</QueryClientProvider>;
};
