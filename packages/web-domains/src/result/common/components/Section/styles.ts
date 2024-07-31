import { css } from '@emotion/react';
import { getBorder } from '@sambad/css-utils';
import { colors, size } from '@sambad/sds/theme';

import { commentAttribute } from '@/result/features/main/components/SelectedDataCard/constants';

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
