import { css } from '@emotion/react';

export const textButtonCss = css({
  display: 'inline-flex',
  alignItems: 'center',

  cursor: 'pointer',
  fontSize: '12px',
  lineHeight: '150%',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.4,
  },
});

export const arrowIconCss = css({
  marginLeft: '4px',
});
