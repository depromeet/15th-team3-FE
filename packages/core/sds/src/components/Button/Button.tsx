import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

import { buttonCss, buttonDisabledVariants, buttonSizeVariants, buttonVariantVariants, leftDecorCss } from './styles';
import { ButtonSize, ButtonVariant } from './types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  leftDecor?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    size = 'medium',
    disabled = false,
    style: styleFromProps,
    leftDecor,
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
      {leftDecor != null && <span css={leftDecorCss}>{leftDecor}</span>}
      {children}
    </button>
  );
});

Button.displayName = 'Button';
