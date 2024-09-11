import { CSSObject } from '@emotion/react';

export const getMediaQuery = (mediaQuery: string, cssObject: CSSObject) => {
  return {
    [`@media (${mediaQuery})`]: cssObject,
  };
};

export const mobileMediaQuery = (cssObject: CSSObject) => {
  return getMediaQuery('max-width : 320px', cssObject);
};
