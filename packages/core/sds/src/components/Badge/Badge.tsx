import { forwardRef, HTMLAttributes } from 'react';

import { colors } from '@sds/theme';

import { badgeCss } from './styles';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: string;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const { color = colors.primary500, style: styleFromProps, ...restProps } = props;

  const style = {
    backgroundColor: color,
    ...styleFromProps,
  };

  return <span ref={ref} style={style} css={badgeCss} {...restProps} />;
});

Badge.displayName = 'Badge';
