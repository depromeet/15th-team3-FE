import { css } from '@emotion/react';
import { getCssVar } from '@sambad/css-utils';

import { FontWeight, Typography } from './types';

export const colorVar = '--sambad-typography-color';
export const fontWeightVar = '--sambad-typography-font-weight';
export const fontSizeVar = '--sambad-typography-font-size';

export const fontWeightVariants: Record<FontWeight, number> = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const fontSizeByTypography: Record<Typography, string> = {
  heading1: '24px',
  heading2: '20px',
  heading3: '16px',
  title1: '20px',
  title2: '16px',
  title3: '14px',
  title4: '12px',
  subtitle1: '16px',
  subTitle2: '14px',
  body1: '20px',
  body2: '16px',
  body3: '14px',
  body4: '12px',
  body5: '8px',
};

export const fontWeightByTypography: Record<Typography, FontWeight> = {
  heading1: 'bold',
  heading2: 'bold',
  heading3: 'bold',
  title1: 'medium',
  title2: 'medium',
  title3: 'medium',
  title4: 'medium',
  subtitle1: 'semibold',
  subTitle2: 'semibold',
  body1: 'regular',
  body2: 'regular',
  body3: 'regular',
  body4: 'regular',
  body5: 'regular',
};

export const TxtCss = css({
  color: getCssVar(colorVar),
  fontWeight: getCssVar(fontWeightVar),
  fontSize: getCssVar(fontSizeVar),
  lineHeight: '150%',
});
