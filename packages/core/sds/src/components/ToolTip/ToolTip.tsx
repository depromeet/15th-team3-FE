import { forwardRef, HTMLAttributes } from 'react';

import { colors } from '@sds/theme';

import { Txt } from '../Typography';

import { animateVariants, arrowCss, tooltipCss } from './styles';

export interface ToolTipProps extends HTMLAttributes<HTMLSpanElement> {
  reduceAnimate?: boolean;
}

export const ToolTip = forwardRef<HTMLSpanElement, ToolTipProps>((props, ref) => {
  const { children, reduceAnimate = false, style: styleFromProps, ...restProps } = props;

  const style = {
    ...animateVariants[reduceAnimate ? 'none' : 'active'],
    ...styleFromProps,
  };

  return (
    <span ref={ref} style={style} {...restProps}>
      <span css={tooltipCss}>
        <Txt typography="title3" color={colors.white}>
          {children}
        </Txt>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" fill="none" css={arrowCss}>
          <path
            d="M13.8387 15.9401C12.2577 18.3361 8.74228 18.3361 7.1613 15.9401L0.736494 6.20297C-1.01827 3.54354 0.889009 0 4.07519 0H16.9248C20.111 0 22.0183 3.54354 20.2635 6.20297L13.8387 15.9401Z"
            fill={colors.primary500}
          />
        </svg>
      </span>
    </span>
  );
});

ToolTip.displayName = 'ToolTip';
