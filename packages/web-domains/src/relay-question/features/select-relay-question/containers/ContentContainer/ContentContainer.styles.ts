import { css } from '@emotion/react';
import { size } from '@sambad/sds/theme';

export const questionTextBoxCss = css({
  display: 'flex',
  flexDirection: 'column',
  gap: `${size['6xs']}`,
  padding: `${size.xl} ${size['2xs']} ${size.xs}`,
});

export const questionListCss = css({
  paddingBottom: `${size['7xl']}`,
});
