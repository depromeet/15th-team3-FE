import { css } from '@emotion/react';
import { size } from '@sambad/sds/theme';

export const profileIntroductionCss = css({
  display: 'flex',
  flexDirection: 'column',
  gap: size['6xs'],
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${size.xl} ${size['2xs']} ${size['3xl']}`,
});

export const profileSectionCss = css({
  display: 'flex',
  flexDirection: 'column',
  gap: size['5xs'],
  alignItems: 'center',
  justifyContent: 'center',
});

export const profileImgBoxCss = css({
  position: 'relative',
});

export const SVGPositionCSS = ({ top = 0, left = 0 }: { top: number; left: number }) =>
  css({
    position: 'absolute',
    top,
    left,
  });
