import { css } from '@emotion/react';

import { borderRadiusVariants, colors } from '../../theme';

import { ButtonSize, ButtonVariant } from './types';

const buttonHeightVar = '--sambad-button-height';
const buttonFontSizeVar = '--sambad-button-font-size';

interface ButtonSizeVariants {
  [buttonHeightVar]: string;
  [buttonFontSizeVar]: string;
}

export const buttonSizeVariants: Record<ButtonSize, ButtonSizeVariants> = {
  medium: {
    [buttonHeightVar]: '48px',
    [buttonFontSizeVar]: '14px',
  },
  large: {
    [buttonHeightVar]: '56px',
    [buttonFontSizeVar]: '16px',
  },
};

const buttonBackgroundColorVar = '--sambad-button-background-color';
const buttonBorderVar = '--sambad-button-border';
const buttonColorVar = '--sambad-button-color';

interface ButtonVariantVariants {
  [buttonBackgroundColorVar]: string;
  [buttonBorderVar]: string;
  [buttonColorVar]: string;
}

export const buttonVariantVariants: Record<ButtonVariant, ButtonVariantVariants> = {
  primary: {
    [buttonBackgroundColorVar]: colors.black,
    [buttonBorderVar]: 'none',
    [buttonColorVar]: colors.white,
  },
  sub: {
    [buttonBackgroundColorVar]: colors.white,
    [buttonBorderVar]: `1px solid ${colors.grey500}`,
    [buttonColorVar]: colors.black,
  },
};

export const buttonDisabledVariants: Record<ButtonVariant, ButtonVariantVariants> = {
  primary: {
    [buttonBackgroundColorVar]: colors.grey500,
    [buttonBorderVar]: 'none',
    [buttonColorVar]: colors.grey600,
  },
  sub: {
    [buttonBackgroundColorVar]: colors.grey200,
    [buttonBorderVar]: `1px solid ${colors.grey300}`,
    [buttonColorVar]: colors.grey500,
  },
};

export const buttonCss = css({
  width: '100%',
  height: `var(${buttonHeightVar})`,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  color: `var(${buttonColorVar})`,
  fontSize: `var(${buttonFontSizeVar})`,
  lineHeight: '150%',

  border: `var(${buttonBorderVar})`,
  borderRadius: borderRadiusVariants.round,
  backgroundColor: `var(${buttonBackgroundColorVar})`,

  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },
});
