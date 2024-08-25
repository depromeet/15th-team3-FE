import { css } from '@emotion/react';
import { borderRadiusVariants, colors, size } from '@sambad/sds/theme';

import { checkboxAttribute, subTitleAttribute } from './constants';

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

  '& > * + *': {
    marginTop: size['7xs'],
  },
});

export const handWavingButtonCss = css({
  position: 'absolute',
  bottom: size['xl'],
});

export const screenRootCss = css({
  position: 'relative',
  height: '100dvh',
});

export const profileRootCss = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: `${size['xs']} ${size['2xs']} ${size['md']}`,
  backgroundColor: colors.white,

  '& > * + *': {
    marginTop: size['xs'],
  },
});

export const checkboxAndTriggerCss = css({
  display: 'flex',

  [`& ${checkboxAttribute.querySelector}`]: {
    marginRight: size['6xs'],
  },
});
