import { CSSProperties, ReactNode } from 'react';

import { GlobalStyle } from '../styles/GlobalStyles';

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  const layoutStyle: CSSProperties = {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
  };

  return (
    <main style={layoutStyle}>
      <GlobalStyle />
      {children}
    </main>
  );
};
