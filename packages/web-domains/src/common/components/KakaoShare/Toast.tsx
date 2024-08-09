'use client';

import { Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import { HTMLAttributes, useEffect } from 'react';

import { wrapperCss } from './Toast.styles';
import { ToastCheck } from './ToastCheck';

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  duration?: number;
  children: string;
  onClose: () => void;
}

export const Toast = ({ children, duration = 1500, onClose, ...rest }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div css={wrapperCss} {...rest}>
      <ToastCheck css={{ marginBottom: size['4xs'] }} />
      <Txt color={colors.white} typography="title3" fontWeight="medium">
        {children}
      </Txt>
    </div>
  );
};
