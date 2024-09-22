import { css } from '@emotion/react';

import { size } from '../../theme';

import { accordionItemStateAttribute, arrowIconAttribute, contentAttribute } from './constants';

export const triggerCss = css({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  position: 'relative',
  padding: `${size['4xs']} 0`,
  cursor: 'pointer',

  [`& ${arrowIconAttribute.querySelector}`]: {
    position: 'absolute',
    right: 0,
    // NOTE: 상단 여백만큼 top 부여하여 정렬에 맞게 상단에 붙도록 top 부여
    top: size['4xs'],
  },
});

export const triggerChildCss = css({
  maxWidth: '93%',
});

export const itemCss = css({
  overflow: 'hidden',

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
