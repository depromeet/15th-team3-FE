import { css } from '@emotion/react';
import { borderRadiusVariants, colors, size } from '@sambad/sds/theme';

export const wrapperCss = css({
  width: '100%',
  maxWidth: '168px',
  position: 'absolute',
  top: 94,
  left: '50.5%',
  transform: 'translateX(-50%)',
});

export const countWrapperCss = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `${size['6xs']} ${size['2xs']}`,
  borderRadius: `${borderRadiusVariants.large}`,
  backgroundColor: `${colors.primary100}`,
  marginBottom: size['3xl'],
});

export const profileWrapperCss = css({
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  gap: size['7xs'],
});

export const imgWrapperCss = css({
  width: size['2xs'],
  height: size['2xs'],
  borderRadius: borderRadiusVariants.round,
  overflow: 'hidden',
});

export const SVGDecoPositionCss = css;
