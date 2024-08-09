'use client';

import { Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import { ReactNode, useEffect } from 'react';

import { wrapperCss } from './Toast.styles';
import { ToastCheck } from './ToastCheck';

interface ToastProps {
  duration?: number;
  children: ReactNode;
  onClose: () => void;
}

export const Toast = ({ children, duration = 1500, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div css={wrapperCss}>
      <ToastCheck css={{ marginBottom: size['4xs'] }} />
      <Txt color={colors.white} typography="title3" fontWeight="medium">
        {children}
      </Txt>
    </div>
  );
};
