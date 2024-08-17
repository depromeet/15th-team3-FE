'use client';

import { CSSProperties, PropsWithChildren } from 'react';

import { useSetViewportHeight } from '@/common/hooks/useSetViewportHeight';

export const AnswerCommentLayout = ({ children }: PropsWithChildren) => {
  const { heightRef } = useSetViewportHeight();

  const layoutStyles: CSSProperties = {
    position: 'relative',
  };

  return (
    <div ref={heightRef} style={layoutStyles}>
      {children}
    </div>
  );
};
