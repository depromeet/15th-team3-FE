'use client';

import { CSSProperties, PropsWithChildren } from 'react';

import { useSetHeight } from '@/common/hooks/useSetHeight';

export const AnswerQuestionLayout = ({ children }: PropsWithChildren) => {
  useSetHeight();
  const layoutStyles: CSSProperties = {
    height: '100%',
    position: 'relative',
  };

  return <div style={layoutStyles}>{children}</div>;
};
