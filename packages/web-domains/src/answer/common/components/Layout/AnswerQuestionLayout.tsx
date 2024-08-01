import { CSSProperties, PropsWithChildren } from 'react';

export const AnswerQuestionLayout = ({ children }: PropsWithChildren) => {
  const layoutStyles: CSSProperties = {
    height: '100%',
    position: 'relative',
  };

  return <div style={layoutStyles}>{children}</div>;
};
