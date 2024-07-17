'use client';

import { ReactNode } from 'react';

import { RootLayoutCss } from './RootLayout.styles';

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return <div css={RootLayoutCss}>{children}</div>;
};
