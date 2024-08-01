import { ComponentType, createElement } from 'react';

import { toastCSS, fadeInOut } from './styles';
import { ToastType } from './types';

interface ToastProps {
  id: string;
  content: ComponentType | string;
  type: ToastType;
}

export const Toast = (props: ToastProps) => {
  const { content } = props;
  return <div css={[toastCSS, fadeInOut]}>{typeof content === 'string' ? content : createElement(content)}</div>;
};
