import { css, CSSObject } from '@emotion/react';

import { borderRadius, colors } from '../../theme';

import { ButtonCssArg } from './types';

const buttonVariants: Record<ButtonCssArg['variant'], CSSObject> = {
  primary: {
    backgroundColor: colors.black,
    color: colors.white,
    border: 'none',
    '&:disabled': {
      backgroundColor: colors.grey500,
      color: colors.grey600,
    },
    '&:hover:not(:disabled), &:active:not(:disabled)': {
      backgroundColor: colors.grey700,
      color: colors.white,
    },
  },
  sub: {
    backgroundColor: colors.white,
    color: colors.grey700,
    border: `1px solid ${colors.grey500}`,
    '&:disabled': {
      backgroundColor: colors.grey200,
      color: colors.grey500,
      border: `1px solid ${colors.grey300}`,
    },
    '&:hover:not(:disabled), &:active:not(:disabled)': {
      backgroundColor: colors.grey300,
      color: colors.grey700,
      border: `1px solid ${colors.grey500}`,
    },
  },
  text: {
    backgroundColor: 'transparent',
    color: colors.black,
    border: 'none',
    '&:disabled': {
      color: colors.grey500,
    },
    '&:hover:not(:disabled), &:active:not(:disabled)': {
      color: colors.grey600,
    },
  },
};

const buttonSizes: Record<ButtonCssArg['size'], CSSObject> = {
  large: {
    width: '100%',
    height: '56px',
  },
  medium: { padding: '0 16px', height: '48px' },
};

const buttonFontSizes: Record<ButtonCssArg['size'], CSSObject> = {
  large: { fontSize: '16px', fontWeight: '600', lineHeight: '24px' },
  medium: { fontSize: '14px', fontWeight: '600', lineHeight: '20px' },
};

const buttonRadius: Record<ButtonCssArg['radius'], CSSObject> = {
  round: {
    borderRadius: borderRadius.round,
  },
  medium: {
    borderRadius: borderRadius.medium,
  },
  small: { borderRadius: borderRadius.small },
  xsmall: { borderRadius: borderRadius.xsmall },
  none: { borderRadius: borderRadius.none },
};

const textButtonSizes: Record<ButtonCssArg['size'], CSSObject> = {
  large: { padding: '4px 16px', gap: '12px' },
  medium: { padding: '2px 12px', gap: '4px' },
};

const textButtonFontSizes: Record<ButtonCssArg['size'], CSSObject> = {
  large: { fontSize: '16px', fontWeight: '500', lineHeight: '24px' },
  medium: { fontSize: '12px', fontWeight: '500', lineHeight: '20px' },
};

export const buttonCss = (props: ButtonCssArg) => {
  const { variant, size, radius } = props;

  const sizeStyles = variant === 'text' ? textButtonSizes[size] : buttonSizes[size];

  let fontStyles;
  if (variant === 'sub' && size === 'medium') {
    fontStyles = { fontSize: '16px', fontWeight: '400', lineHeight: '24px' };
  } else {
    fontStyles = variant === 'text' ? textButtonFontSizes[size] : buttonFontSizes[size];
  }

  return css({
    display: 'inline-flex',
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    ...buttonVariants[variant],
    ...buttonRadius[radius],
    ...sizeStyles,
    ...fontStyles,
  });
};
