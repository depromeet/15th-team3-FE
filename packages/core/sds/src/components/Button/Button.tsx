import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

import { Spinner } from '../Spinner/Spinner';

import {
  buttonCss,
  buttonDisabledVariants,
  buttonSizeVariants,
  buttonVariantVariants,
  leftDecorCss,
  spinnerCss,
} from './styles';
import { ButtonSize, ButtonVariant } from './types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  leftDecor?: ReactNode;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    size = 'medium',
    disabled = false,
    style: styleFromProps,
    leftDecor,
    loading = false,
    children,
    ...restProps
  } = props;

  const style = {
    ...buttonSizeVariants[size],
    ...buttonVariantVariants[variant],
    ...(disabled && buttonDisabledVariants[variant]),
    ...styleFromProps,
  };

  return (
    <button ref={ref} disabled={disabled} style={style} css={buttonCss} {...restProps}>
      {loading && <Spinner css={spinnerCss} />}
      {!loading && leftDecor != null && <span css={leftDecorCss}>{leftDecor}</span>}
      {!loading && children}
    </button>
  );
});

Button.displayName = 'Button';
