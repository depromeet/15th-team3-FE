import { css } from '@emotion/react';
import { getCssVar } from '@sambad/css-utils';

export const colorVar = '--sambad-text-button-color';
export const textDecorationVar = '--sambad-text-button-text-decoration';

export const textButtonCss = css({
  display: 'inline-flex',
  alignItems: 'center',

  cursor: 'pointer',
  fontSize: '12px',
  lineHeight: '150%',
  color: getCssVar(colorVar),
  textDecoration: getCssVar(textDecorationVar),

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.4,
  },
});

export const arrowIconCss = css({
  marginLeft: '4px',
});
