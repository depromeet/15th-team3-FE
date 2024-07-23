import { css } from '@emotion/react';
import { colors } from '../../theme';

export const textButtonCss = css({
  display: 'inline-flex',
  alignItems: 'center',

  cursor: 'pointer',
  lineHeight: '150%',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.4,
  },
});

export const arrowIconCss = css({
  marginLeft: '4px',

  '& svg': {
    width: '12px',
  },
});
