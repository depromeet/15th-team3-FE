import { css } from '@emotion/react';
import { getBorder } from '@sambad/css-utils';
import { borderRadiusVariants, colors, size } from '@sambad/sds/theme';
import { commentAttribute } from './constants';

const commentSelector = commentAttribute.querySelector;

export const cardCss = css({
  backgroundColor: colors.white,
  borderRadius: '16px',
  border: getBorder(colors.grey300),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: `${size.sm} ${size['2xs']} ${size.xs}`,

  // NOTE: cardCss에서 Comment 컴포넌트 상위 여백
  [`& h2 + ${commentSelector}`]: {
    marginTop: size['2xs'],
  },

  [`& ${commentSelector} + ${commentSelector}`]: {
    marginTop: size['6xs'],
  },
});

export const memberListCss = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  border: getBorder(colors.grey300),
  padding: size['3xs'],
});

export const memberListTextButtonCss = css({
  paddingTop: size['6xs'],
});

export const memberCharacterCss = css({
  '& > * + *': {
    marginLeft: size['7xs'],
  },
  paddingTop: size['5xs'],
});

export const mostAnsweredTitleCss = css({
  paddingTop: size.sm,
});

export const mostAnsweredButtonCss = css({
  marginTop: size['4xs'],
  marginBottom: size.sm,
  width: '140px',
});

export const profileCss = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  '& > span': {
    paddingTop: size['5xs'],
  },
});

export const withMyMembersCss = css({
  display: 'inline-flex',
  padding: `${size['3xs']} 0`,

  '& > *': {
    padding: `0 ${size['5xs']}`,
  },
});

export const commentCss = css({
  width: '100%',
  borderRadius: '8px',
  backgroundColor: colors.tertiary50,
  padding: size['3xs'],
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '& > p': {
    textAlign: 'center',
  },
});

export const commentProfileCss = css({
  display: 'inline-flex',
  paddingTop: size['6xs'],

  '& > img': {
    borderRadius: borderRadiusVariants.round,
  },

  '& > * + *': {
    marginLeft: '4px',
  },
});
