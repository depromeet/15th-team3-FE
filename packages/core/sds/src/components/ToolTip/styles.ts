import { css, keyframes } from '@emotion/react';
import { getCssVar, getPadding } from '@sambad/css-utils';

import { borderRadiusVariants, colors, size } from '@sds/theme';

const bounceAnimation = keyframes`
   to{
        transform: translateY(-12px);
    }
`;

const animateVar = '--sambad-tooltip-animate';

interface AnimateVariants {
  [animateVar]: string;
}

export const animateVariants: Record<'none' | 'active', AnimateVariants> = {
  none: {
    [animateVar]: 'none',
  },
  active: {
    [animateVar]: `${bounceAnimation} 0.8s cubic-bezier(0, 0, 0.5, 0.99) infinite alternate`,
  },
};

export const tooltipCss = css({
  position: 'relative',
  borderRadius: borderRadiusVariants.medium,
  backgroundColor: colors.primary500,
  padding: getPadding(size['5xs'], size['4xs']),
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  animation: getCssVar(animateVar),
});

export const arrowCss = css({
  position: 'absolute',
  bottom: -12,
});
