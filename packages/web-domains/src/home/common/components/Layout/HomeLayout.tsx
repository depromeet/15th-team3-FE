'use client';

import { PropsWithChildren } from 'react';

export const HomeLayout = ({ children }: PropsWithChildren) => {
  return <div style={{ minHeight: 'calc(100vh - 78px)', position: 'relative', paddingBottom: '78px' }}>{children}</div>;
};
