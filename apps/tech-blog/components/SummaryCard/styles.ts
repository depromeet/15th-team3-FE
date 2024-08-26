import { css } from '@emotion/react';
import { colors, size } from '@sambad/sds/theme';

import { titleAttribute } from './constants';

export const containerCss = css({
  padding: `${size['xs']} 0`,
  display: 'flex',
  cursor: 'pointer',

  '&:hover': {
    [`& ${titleAttribute.querySelector}`]: {
      color: `${colors.tertiary500} !important`,
    },
  },
});

export const titleCss = css({
  transition: 'color 0.1s ease-in-out',
  marginBottom: size['7xs'],
});

export const descriptionCss = css({
  marginBottom: size['3xs'],
});

export const textContainerCss = css({
  width: '80%',
  marginRight: size['2xs'],
  display: 'flex',
  flexDirection: 'column',
});
