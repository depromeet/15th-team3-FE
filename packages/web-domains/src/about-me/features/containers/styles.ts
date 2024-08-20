import { css } from '@emotion/react';
import { borderRadiusVariants, colors, size } from '@sambad/sds/theme';

import { subTitleAttribute } from './constants';

export const segmentedSectionCss = css({
  backgroundColor: colors.white,
  padding: size['2xs'],
});

export const segmentedCss = css({
  marginBottom: size['2xs'],
});

export const aboutMeSectionCss = css({
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

export const answerContentCss = css({
  borderRadius: borderRadiusVariants.medium,
  padding: `${size['5xs']} ${size['xs']}`,
  border: `1px solid ${colors.grey400}`,
  backgroundColor: colors.grey200,
  display: 'flex',
  flexDirection: 'column',

  '& > *:last-child': {
    paddingTop: size['7xs'],
  },
});

export const questionLoaderSectionCss = css({
  position: 'relative',
  width: '100%',
  height: 'calc(100dvh - 396px)',
  minHeight: 'auto',
});
