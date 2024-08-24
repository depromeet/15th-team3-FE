import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

import { Spinner } from './Spinner/Spinner';
import { buttonCss, buttonDisabledVariants, buttonSizeVariants, buttonVariantVariants, leftDecorCss } from './styles';
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
    leftDecor: leftDecorFromProps,
    loading,
    children,
    ...restProps
  } = props;

  const style = {
    ...buttonSizeVariants[size],
    ...buttonVariantVariants[variant],
    ...(disabled && buttonDisabledVariants[variant]),
    ...styleFromProps,
  };

  const leftDecor = leftDecorFromProps != null && (
    <span css={leftDecorCss}>
      {loading ? (
        <Spinner fill={buttonVariantVariants[variant]['--sambad-button-color']} css={{ display: 'flex' }} />
      ) : (
        leftDecorFromProps
      )}
    </span>
  );

  return (
    <button ref={ref} disabled={disabled} style={style} css={buttonCss} {...restProps}>
      {leftDecor}
      {children}
    </button>
  );
});

Button.displayName = 'Button';
