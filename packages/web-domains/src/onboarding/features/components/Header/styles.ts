import { css, keyframes } from '@emotion/react';

const slideUpAnimation = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;  
  }
  100% {
    transform: translateY(0);
    opacity: 1; 
  }
`;

export const textWithSlideUpAnimationCss = css`
  animation: ${slideUpAnimation} 1s ease-out forwards;
`;
