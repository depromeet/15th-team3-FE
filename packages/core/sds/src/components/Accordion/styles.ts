import { css } from '@emotion/react';

import { size } from '@sds/theme';

import { accordionItemStateAttribute, arrowIconAttribute, contentAttribute } from './constants';

export const triggerCss = css({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  padding: `${size['4xs']} 0`,
  cursor: 'pointer',

  [`& ${arrowIconAttribute.querySelector}`]: {
    position: 'absolute',
    right: 0,
  },
});

export const itemCss = css({
  overflow: 'hidden', // 요소가 애니메이션 중에 넘치지 않도록 설정

  [`&${accordionItemStateAttribute.querySelector.closed}`]: {
    [`& ${contentAttribute.querySelector}`]: {
      maxHeight: 0,
      opacity: 0,
      transition: 'max-height 0.3s ease-out, opacity 0.5s ease-out',
    },
    [`& ${arrowIconAttribute.querySelector}`]: {
      transform: 'rotate(0deg)',
      transition: 'transform 0.5s ease-out',
    },
  },

  [`&${accordionItemStateAttribute.querySelector.open}`]: {
    [`& ${contentAttribute.querySelector}`]: {
      maxHeight: '500px',
      opacity: 1,
      transition: 'max-height 0.3s ease-out, opacity 0.5s ease-out',
    },
    [`& ${arrowIconAttribute.querySelector}`]: {
      transform: 'rotate(180deg)',
      transition: 'transform 0.5s ease-out',
    },
  },
});
