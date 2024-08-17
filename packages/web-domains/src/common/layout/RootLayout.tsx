import { CSSProperties, ReactNode } from 'react';

import { GlobalStyle } from '../styles/GlobalStyles';

interface RootLayoutProps {
  children: ReactNode;
}

const layoutStyle: CSSProperties = {
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
};

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <main style={layoutStyle}>
      <GlobalStyle />
      {children}
    </main>
  );
};
