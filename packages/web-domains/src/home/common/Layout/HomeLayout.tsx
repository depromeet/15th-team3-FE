import { PropsWithChildren } from 'react';

export const HomeLayout = ({ children }: PropsWithChildren) => {
  return <div style={{ height: '100%', position: 'relative' }}>{children}</div>;
};
