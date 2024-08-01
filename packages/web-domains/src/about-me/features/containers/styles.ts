import { css } from '@emotion/react';
import { colors, size } from '@sambad/sds/theme';

import { subTitleAttribute } from './constants';

export const segmentedSectionCss = css({
  backgroundColor: colors.white,
  padding: size['2xs'],
});

export const segmentedCss = css({
  marginBottom: size['2xs'],
});

export const aboutMeSectionCss = css({
  padding: `${size['3xs']} 0`,

  '& > * + *': {
    paddingTop: size.sm,
  },

  [`& ${subTitleAttribute.querySelector}`]: {
    paddingBottom: size['6xs'],

    '&:not(:first-child)': {
      paddingTop: size['sm'],
    },
  },
});

export const titleCss = css({
  display: 'block',
  paddingBottom: size['6xs'],
});
