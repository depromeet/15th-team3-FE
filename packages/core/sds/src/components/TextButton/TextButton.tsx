import { ButtonHTMLAttributes, forwardRef } from 'react';

import { colors } from '../../theme';
import { Icon } from '../Icon';

import { arrowIconCss, textButtonCss } from './styles';
import { TextButtonVariant } from './types';

export interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TextButtonVariant;
  color?: string;
}

export const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>((props, ref) => {
  const { variant = 'normal', color = colors.grey600, style: styleFromProps, children, ...restProps } = props;

  const isUnderlineVariant = variant === 'underline';
  const isArrowVariant = variant === 'arrow';

  const style = {
    color,
    ...(isUnderlineVariant && { textDecoration: 'underline' }),
    ...styleFromProps,
  };

  return (
    <button ref={ref} style={style} css={textButtonCss} {...restProps}>
      {children}
      {isArrowVariant && <Icon css={arrowIconCss} color={color} size={12} name="angle-right" />}
    </button>
  );
});

TextButton.displayName = 'TextButton';
