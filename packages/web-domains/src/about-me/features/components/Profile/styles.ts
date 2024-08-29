import { css } from '@emotion/react';
import { borderRadiusVariants, colors, size } from '@sambad/sds/theme';

import { wavingAcceptedMemberAttribute } from './constants';

export const nameCss = css({
  marginTop: size['2xs'],
});

export const AvatarCss = css({
  [`&${wavingAcceptedMemberAttribute.querySelector}`]: {
    border: `4.5px solid ${colors.primary500}`,
  },
});

export const badgeContainerCss = css({
  paddingTop: size['4xs'],
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  // NOTE: 오른쪽 끝에 오는 아이템의 marginRight에 대해 역마진으로 여백 줄임
  marginRight: '-8px', // size['6xs']
  // NOTE: 마지막 줄에 오는 아이템의 marginBottom에 대해 역마진으로 여백 줄임
  marginBottom: '-8px', // size['6xs']

  '& > *': {
    flexBasis: 'auto',
    marginBottom: size['6xs'],
    '&:not(:last-child)': {
      marginRight: size['6xs'],
    },
  },
});

export const wavingAcceptedBadgeCss = css({
  position: 'absolute',
  width: '32px',
  height: '32px',
  backgroundColor: colors.primary500,
  borderRadius: borderRadiusVariants.round,
  // NOTE: 위치 보정
  bottom: 4,
  left: 0,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
});
