'use client';

import { Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import { HTMLAttributes, useEffect, useState } from 'react';

import { ToastCheck } from '../../assets/ToastCheck';

import { wrapperCss } from './styles';

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  showTime?: number;
  children: string;
}

export const Toast = ({ children, showTime = 1500, isOpen, ...rest }: ToastProps) => {
  const [isShow, setIsShow] = useState<boolean>(isOpen);
  const safeShowTime = showTime < 1000 ? 1000 : showTime;

  useEffect(() => {
    if (!isShow) return;

    const timer = setTimeout(() => {
      setIsShow(false);
    }, safeShowTime);

    return () => clearTimeout(timer);
  }, [isShow, safeShowTime]);

  return (
    <>
      {isShow && (
        <div css={wrapperCss} {...rest}>
          <ToastCheck css={{ marginBottom: size['4xs'] }} />
          <Txt color={colors.white} typography="title3" fontWeight="medium">
            {children}
          </Txt>
        </div>
      )}
    </>
  );
};
