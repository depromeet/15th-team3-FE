import { css } from '@emotion/react';
import { fontWeightVariants } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';

export const containerCss = css({
  width: '100%',
  height: '100dvh',
  paddingTop: size.xl,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
});

export const codeCss = css({
  fontSize: '64px',
  fontWeight: fontWeightVariants.bold,
  marginBottom: size['2xs'],
});

export const titleCss = css({
  fontSize: '24px',
  fontWeight: fontWeightVariants.bold,
  color: colors.black,
  marginBottom: size['3xs'],
});

export const descriptionCss = css({
  textAlign: 'center',
  marginBottom: '50px',
});

export const buttonsContainer = css({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  padding: size['2xs'],

  '& > button  + button': {
    marginTop: size['5xs'],
  },
});
