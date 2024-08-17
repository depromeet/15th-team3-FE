import { css } from '@emotion/react';

import { containerModeAttribute } from './constants';

export const containerCss = css({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  [`&${containerModeAttribute.querySelector('dim')}`]: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
});
