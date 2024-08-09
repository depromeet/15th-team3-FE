import { css } from '@emotion/react';
import { size } from '@sambad/sds/theme';

export const wrapperCss = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: size['6xs'],
  padding: `${size['3xs']} ${size.xs}`,
  cursor: 'pointer',
});
