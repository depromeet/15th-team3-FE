import { css } from '@emotion/react';
import { size } from '@sambad/sds/theme';

export const wrapperCss = css({
  padding: `${size.md} ${size['2xl']} ${size['2xl']}`,
});

export const textWrapperCss = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: size['2xs'],
});

export const buttonWrapperCss = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: size['2xs'],
});
