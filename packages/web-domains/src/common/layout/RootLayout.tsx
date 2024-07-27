'use client';

import { ReactNode } from 'react';

import { GlobalStyle } from '../styles/GlobalStyles';

import { RootLayoutCss } from './RootLayout.styles';

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div id="root-layout">
      <GlobalStyle />
      <div css={RootLayoutCss}>{children}</div>
    </div>
  );
};
