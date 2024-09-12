import { CSSObject } from '@emotion/react';

export const mobileMediaQuery = (cssObject: CSSObject) => {
  return {
    '@media (max-width: 320px)': cssObject,
  };
};
