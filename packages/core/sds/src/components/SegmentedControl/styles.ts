import { css } from '@emotion/react';
import { borderRadiusVariants, colors, size } from '@sds/theme';

import { indicatorAttribute } from './constants';

export const segmentedControlCss = css({
  position: 'relative',
  borderRadius: borderRadiusVariants.round,
  backgroundColor: colors.grey300,
  padding: size['7xs'],
  display: 'flex',
  alignItems: 'center',
  zIndex: 1,
  height: '57px',

  [`& > *+*:not(:${indicatorAttribute.querySelector})`]: {
    marginLeft: size['7xs'],
  },
});

export const segmentedControlItemCss = css({
  width: '100%',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const indicatorCss = css({
  zIndex: -1,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  height: `calc(57px - ${size['7xs']} * 2)`,
  borderRadius: borderRadiusVariants.round,
  backgroundColor: colors.white,
  transition: 'width 0.3s ease, left 0.3s ease',
});
