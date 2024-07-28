import { css } from '@emotion/react';
import { colors, size } from '@sambad/sds/theme';

export const wrapperCss = css({
  padding: '40px 20px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '100vh',
  backgroundColor: colors.primary50,
});

export const backgroundWrapperCss = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

export const textWrapperCss = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const firstButtonCss = css({
  marginBottom: size['5xs'],
});

export const buttonWrapperCss = css({
  width: '100%',
  maxWidth: '430px',
});
