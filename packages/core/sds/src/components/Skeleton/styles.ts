import { css, keyframes } from '@emotion/react';

import { borderRadiusVariants, size } from '@sds/theme';

const waveAnimation = keyframes`
  0% {
    background-position: -200px 0; 
  }
  100% {
    background-position: 200px 0; 
  }
`;

export const skeletonCss = css({
  width: '100%',
  height: '100%',
  borderRadius: borderRadiusVariants.small,
  background: 'linear-gradient(120deg, #fafafa 25%, #F4F4F4 50%, #fafafa 75%)',
  animation: `${waveAnimation} 4s infinite linear`,
});

export const paragraphsContainer = css({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',

  '& > div': {
    // NOTE: base typography인 body3의 line-height의 높이로 설정
    height: '14px',
  },

  '& div + div': {
    marginTop: size['6xs'],
  },

  '& > div:nth-of-type(3n + 1)': {
    width: '80%',
  },

  '& > div:nth-of-type(3n + 2)': {
    width: '40%',
  },

  '& > div:nth-of-type(3n)': {
    width: '55%',
  },
});
