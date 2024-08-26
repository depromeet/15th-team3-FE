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
  [`& ${subTitleAttribute.querySelector}`]: {
    paddingBottom: size['6xs'],

    '&:not(:first-of-type)': {
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
  position: 'fixed',
  // NOTE: 좌우 여백을 고려한 너비 계산
  width: `calc(100% - ${size['2xs']} * 2)`,
  bottom: size['2xs'],
  left: '50%',
  transform: 'translateX(-50%)',
  maxWidth: `calc(600px - ${size['2xs']} * 2)`,
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
});

export const checkboxAndTriggerCss = css({
  display: 'flex',

  [`& ${checkboxAttribute.querySelector}`]: {
    marginRight: size['6xs'],
  },
});
