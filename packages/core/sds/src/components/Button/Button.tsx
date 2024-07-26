import { ButtonHTMLAttributes, forwardRef } from 'react';

import { buttonCss, buttonDisabledVariants, buttonSizeVariants, buttonVariantVariants } from './styles';
import { ButtonSize, ButtonVariant } from './types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variant = 'primary', size = 'medium', disabled = false, style: styleFromProps, ...restProps } = props;

  const style = {
    ...buttonSizeVariants[size],
    ...buttonVariantVariants[variant],
    ...(disabled && buttonDisabledVariants[variant]),
    ...styleFromProps,
  };

  return <button ref={ref} disabled={disabled} style={style} css={buttonCss} {...restProps} />;
});

Button.displayName = 'Button';
