'use client';

import { PropsWithChildren } from 'react';

export const HomeLayout = ({ children }: PropsWithChildren) => {
  return <div css={{ height: '100%' }}>{children}</div>;
};
