import { ButtonHTMLAttributes, forwardRef, HTMLAttributes } from 'react';
import { ButtonSize, ButtonVariant } from './types';
import { buttonCss, buttonDisabledVariants, buttonSizeVariants, buttonVariantVariants } from './styles';

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
