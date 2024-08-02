import { css } from '@emotion/react';
import { borderRadiusVariants, size } from '@sambad/sds/theme';

export const wrapperCss = css({
  display: 'flex',
  justifyContent: 'space-between',
  gap: `${size['3xs']}`,
  padding: `${size['5xs']} ${size['2xs']}`,
  cursor: 'pointer',
});

export const questionTextWrapperCss = css({
  display: 'flex',
  flexDirection: 'column',
  gap: `${size['6xs']}`,
  justifyContent: 'center',
});

export const questionImgWrapperCss = css({
  minWidth: `${size['4xl']}`,
  minHeight: `${size['4xl']}`,
  borderRadius: `${borderRadiusVariants.medium}`,
  overflow: 'hidden',
});
