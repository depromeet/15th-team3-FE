import { keyframes } from '@emotion/react';

const rotate = keyframes`
	100% {
    transform: rotate(360deg);
  }
`;

export const spinnerAnimationCss = {
  animation: `${rotate} 0.8s linear infinite`,
};
