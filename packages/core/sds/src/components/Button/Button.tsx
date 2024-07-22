'use client';

import { ButtonHTMLAttributes, forwardRef, MouseEvent as ReactMouseEvent, PropsWithChildren } from 'react';

import { buttonCss } from './styles';
import { ButtonCssArg, Radius } from './types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, Omit<ButtonCssArg, 'radius'> {
  radius?: Radius;
}

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>((props, ref) => {
  const { children, onClick, variant = 'primary', size = 'large', radius = 'round', disabled, ...rest } = props;

  const handleClick = (e: ReactMouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onClick?.(e);
    }
  };

  return (
    <button ref={ref} onClick={handleClick} css={buttonCss({ variant, size, radius })} disabled={disabled} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
