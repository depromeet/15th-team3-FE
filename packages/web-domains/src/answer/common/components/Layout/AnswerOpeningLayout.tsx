'use client';

import { colors } from '@sambad/sds/theme';
import { CSSProperties, PropsWithChildren } from 'react';

import { useSetIosHeight } from '@/common/hooks/useSetIosHeight';

export const AnswerOpeningLayout = ({ children }: PropsWithChildren) => {
  useSetIosHeight();

  const layoutStyles: CSSProperties = {
    backgroundColor: colors.primary50,
    minHeight: `calc(var(--vh, 1vh) * 100)`,
    paddingTop: '8px',
    position: 'relative',
  };

  return <div style={layoutStyles}>{children}</div>;
};
