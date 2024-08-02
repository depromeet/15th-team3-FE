import { css } from '@emotion/react';
import { borderRadiusVariants, colors, size } from '@sambad/sds/theme';

export const wrapperCss = css({
  width: '140px',
  position: 'absolute',
  top: 88,
  left: '50%',
  transform: 'translateX(-50%)',
});

export const countWrapperCss = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `${size['6xs']} ${size['2xs']}`,
  borderRadius: `${borderRadiusVariants.large}`,
  backgroundColor: `${colors.primary100}`,
  marginBottom: size['2xl'],
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
});

export const SVGDecoPositionCss = css;
