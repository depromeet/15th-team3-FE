'use client';

import { css } from '@emotion/react';
import React, { HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName, ...rest }: ButtonProps) => {
  return (
    <button
      css={css`
        background: red;
      `}
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
      {...rest}
    >
      {children}
    </button>
  );
};
