import { FontWeight, Typography } from './types';

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

/**
 * @TODO
 * 새로운 가이드 적용해야 함..
 * 현재 이상함 !
 */
export const lineHeightByTypography: Record<Typography, number> = {
  heading1: 32,
  heading2: 28,
  heading3: 24,
  title1: 28,
  title2: 24,
  title3: 20,
  title4: 20,
  subtitle1: 24,
  subTitle2: 20,
  body1: 28,
  body2: 24,
  body3: 20,
  body4: 20,
  body5: 16,
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
