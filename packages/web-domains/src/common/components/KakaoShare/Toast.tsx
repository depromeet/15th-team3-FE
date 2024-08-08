'use client';

import { Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import { HTMLAttributes, useEffect } from 'react';

import { wrapperCss } from './Toast.styles';
import { ToastCheck } from './ToastCheck';

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  showTime?: number;
  children: string;
  onClose: () => void;
}

export const Toast = ({ children, showTime = 1500, onClose, ...rest }: ToastProps) => {
  const safeShowTime = showTime < 1000 ? 1000 : showTime;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, safeShowTime);

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
