import { css } from '@emotion/react';
import { getBorder } from '@sambad/css-utils';
import { borderRadiusVariants, colors, size } from '@sambad/sds/theme';

import { countByMemberListAttribute } from './constants';

export const memberListCss = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '16px',

  border: getBorder(colors.grey300),
  padding: size['3xs'],
});

export const memberListTextButtonCss = css({
  paddingTop: size['6xs'],
});

export const memberCharacterCss = css({
  display: 'flex',
  '& > * + *': {
    marginLeft: size['7xs'],
  },
  paddingTop: size['5xs'],
});

export const mostAnsweredTitleCss = css({
  paddingTop: size.sm,
  wordBreak: 'keep-all',
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
  alignItems: 'center',

  '& > span': {
    paddingTop: size['5xs'],
  },
});

export const noMemberCss = css({
  paddingTop: size['sm'],
});

export const withMyMembersContainerCss = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  [`& ${countByMemberListAttribute.querySelector}`]: {
    marginTop: size['3xs'],
  },
});

export const withMeMembersCss = css({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: size['3xs'],

  '& > *': {
    margin: `0 ${size['5xs']}`,
  },
});

export const commentCss = css({
  width: '100%',
  borderRadius: '8px',
  backgroundColor: colors.primary50,
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
