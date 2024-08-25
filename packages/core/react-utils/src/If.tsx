import { ReactNode } from 'react';

interface IfProps {
  condition: boolean;
  children?: ReactNode;
}

export const If = (props: IfProps) => {
  const { condition, children } = props;

  return condition ? <>{children}</> : null;
};
