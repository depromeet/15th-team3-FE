import { css } from '@emotion/react';
import { getCssVar } from '@sambad/css-utils';
import { CSSProperties } from 'react';

import { colors, size } from '@sds/theme';

const inputBackgroundColorVar = '--sambad-checkbox-input-background-color';
const inputBoxShadowVar = '--sambad-checkbox-input-box-shadow';

interface CheckedVariants {
  [inputBackgroundColorVar]: CSSProperties['backgroundColor'];
  [inputBoxShadowVar]: CSSProperties['boxShadow'];
}

export const checkedVariants: Record<'checked' | 'default', CheckedVariants> = {
  default: {
    [inputBackgroundColorVar]: 'transparent',
    [inputBoxShadowVar]: `inset 0 0 0 1.5px ${colors.grey500}`,
  },
  checked: {
    [inputBackgroundColorVar]: colors.black,
    [inputBoxShadowVar]: 'none',
  },
};

export const inputCss = css({
  // NOTE: hidden 요소로 기능을 담당하고, 스타일은 indicator에서 담당하므로 width, height를 동일하게
  width: '18px',
  height: '18px',
  opacity: 0,
});

export const indicatorCss = css({
  width: '18px',
  height: '18px',
  boxShadow: getCssVar(inputBoxShadowVar),
  backgroundColor: getCssVar(inputBackgroundColorVar),
  borderRadius: '3px',
  pointerEvents: 'none',
  position: 'absolute',
  transition: 'background-color 0.1s ease-in-out',
});

export const labelCss = css({
  marginLeft: size['6xs'],
});

export const checkboxRootCss = css({
  display: 'inline-flex',
  alignItems: 'center',
  position: 'relative',
});

export const iconCss = css({
  position: 'absolute',
  pointerEvents: 'none',
  left: '3px',
});
