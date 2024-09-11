import { css } from '@emotion/react';

import { borderRadiusVariants, colors, size } from '@sds/theme';

import { fontWeightVariants } from '../Typography';

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
const buttonHoverColorVar = '--sambad-button-hover-color';

interface ButtonVariantVariants {
  [buttonBackgroundColorVar]: string;
  [buttonBorderVar]: string;
  [buttonColorVar]: string;
  [buttonHoverColorVar]?: string;
}

export const buttonVariantVariants: Record<ButtonVariant, ButtonVariantVariants> = {
  primary: {
    [buttonBackgroundColorVar]: colors.black,
    [buttonBorderVar]: 'none',
    [buttonColorVar]: colors.white,
    [buttonHoverColorVar]: colors.grey700,
  },
  sub: {
    [buttonBackgroundColorVar]: colors.white,
    [buttonBorderVar]: `1px solid ${colors.grey500}`,
    [buttonColorVar]: colors.black,
    [buttonHoverColorVar]: colors.grey300,
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
  transition: 'background-color 0.3s ease',
  paddingLeft: size['3xs'],
  paddingRight: size['3xs'],

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  color: `var(${buttonColorVar})`,
  fontSize: `var(${buttonFontSizeVar})`,
  lineHeight: '150%',
  fontWeight: fontWeightVariants.semibold,

  border: `var(${buttonBorderVar})`,
  borderRadius: borderRadiusVariants.round,
  backgroundColor: `var(${buttonBackgroundColorVar})`,

  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '@media (hover: none) and (pointer: coarse)': {
    '&:not(:disabled):active': {
      backgroundColor: `var(${buttonHoverColorVar})`,
    },
  },
  '@media (hover: hover) and (pointer: fine)': {
    '&:not(:disabled):hover': {
      backgroundColor: `var(${buttonHoverColorVar})`,
    },
  },
});

export const leftDecorCss = css({
  display: 'inline-flex',
  marginRight: size['6xs'],

  // NOTE: icon
  '& svg, & path': {
    width: 20,
    height: 20,
    fill: `var(${buttonColorVar})`,
  },
});

export const spinnerCss = css({
  '& path': {
    fill: `var(${buttonColorVar})`,
  },
});
