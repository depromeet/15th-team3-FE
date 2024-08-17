import { css } from '@emotion/react';

import { Toast as ToastComponent } from './Toast';
import { Toast } from './types';

interface ToastContainerProps {
  toasts: Toast[];
}

export const ToastContainer = ({ toasts }: ToastContainerProps) => {
  return (
    <div css={toastContainerCss}>
      {toasts.map((toast) => (
        <ToastComponent key={toast.id} {...toast} />
      ))}
    </div>
  );
};

export const toastContainerCss = css({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '1000',
});
