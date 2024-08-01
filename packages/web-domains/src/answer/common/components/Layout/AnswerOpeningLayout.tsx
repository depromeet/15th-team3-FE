import { colors } from '@sambad/sds/theme';
import { CSSProperties, PropsWithChildren } from 'react';

export const AnswerOpeningLayout = ({ children }: PropsWithChildren) => {
  const layoutStyles: CSSProperties = {
    backgroundColor: colors.primary50,
    height: '100%',
    paddingTop: '8px',
    position: 'relative',
  };

  return <div style={layoutStyles}>{children}</div>;
};
