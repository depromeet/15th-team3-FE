'use client';

import { CSSProperties, PropsWithChildren } from 'react';

export const AnswerQuestionLayout = ({ children }: PropsWithChildren) => {
  const layoutStyles: CSSProperties = {
    position: 'relative',
    height: '100vh',
  };

  return <div style={layoutStyles}>{children}</div>;
};
