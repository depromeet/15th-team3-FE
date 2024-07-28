import { css } from '@emotion/react';
import { borderRadiusVariants, size } from '@sambad/sds/theme';

export const questionItemCss = css({
  display: 'flex',
  justifyContent: 'space-between',
  gap: `${size['3xs']}`,
  padding: `${size['5xs']} ${size['2xs']}`,
  cursor: 'pointer',
});

export const questionTextBoxCss = css({
  display: 'flex',
  flexDirection: 'column',
  gap: `${size['6xs']}`,
  justifyContent: 'center',
});

export const questionImgBoxCss = css({
  minWidth: `${size['4xl']}`,
  minHeight: `${size['4xl']}`,
  borderRadius: `${borderRadiusVariants.medium}`,
});
