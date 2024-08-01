import { css } from '@emotion/react';
import { colors, size } from '@sambad/sds/theme';

export const rootCss = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: `${size['xs']} ${size['2xs']} ${size['md']}`,
  backgroundColor: colors.white,
});

export const nameCss = css({
  marginTop: size['2xs'],
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
