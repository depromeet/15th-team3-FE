'use client';

import { Fragment, ReactNode } from 'react';
import { GlobalStyle } from '../styles/GlobalStyles';

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  const layoutStyle = {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
  };

  return (
    <main>
      <GlobalStyle />
      <div style={layoutStyle}>{children}</div>
    </main>
  );
};
