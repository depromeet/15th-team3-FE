import { css } from '@emotion/react';
import { colors, size } from '@sambad/sds/theme';

export const wrapperCss = css({
  padding: `${size.xl} ${size['2xs']}`,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '100dvh',
  backgroundColor: colors.primary50,
});

export const headingWrapperCss = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: size['2xl'],
});

export const footerWrapperCss = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const buttonWrapperCss = css({
  width: '100%',
  maxWidth: '430px',
});

export const shareButtonCss = css({
  margin: `${size.xl} 0 ${size['5xs']}`,
});
