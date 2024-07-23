import { css } from '@emotion/react';
import { borderRadiusVariants, colors } from '../../theme';
import { ButtonSize, ButtonVariant } from './types';

const buttonHeightVar = '--sambad-button-height';

interface ButtonSizeVariants {
  [buttonHeightVar]: string;
}

export const buttonSizeVariants: Record<ButtonSize, ButtonSizeVariants> = {
  medium: {
    [buttonHeightVar]: '48px',
  },
  large: {
    [buttonHeightVar]: '56px',
  },
};

const buttonBackgroundColorVar = '--sambad-button-background-color';
const buttonBorderVar = '--sambad-button-border';
const buttonColorVar = '--sambad-button-color';
const buttonFontSizeVar = '--sambad-button-font-size';

interface ButtonVariantVariants {
  [buttonBackgroundColorVar]: string;
  [buttonBorderVar]: string;
  [buttonColorVar]: string;
  [buttonFontSizeVar]?: string;
}

export const buttonVariantVariants: Record<ButtonVariant, ButtonVariantVariants> = {
  primary: {
    [buttonBackgroundColorVar]: colors.black,
    [buttonBorderVar]: 'none',
    [buttonColorVar]: colors.white,
    [buttonFontSizeVar]: '14px',
  },
  sub: {
    [buttonBackgroundColorVar]: colors.white,
    [buttonBorderVar]: `1px solid ${colors.grey500}`,
    [buttonColorVar]: colors.black,
    [buttonFontSizeVar]: '16px',
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
