import { css, keyframes } from '@emotion/react';
import { size, borderRadiusVariants, colors } from '@sambad/sds/theme';

export const toastContainerCss = css({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '1000',
});

export const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }`;

export const toastCSS = css({
  width: '160px',
  padding: `${size['5xs']} ${size['2xs']}`,
  backgroundColor: 'rgba(0, 0, 0, 0.80)',
  boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.06), 0px 2px 8px 0px rgba(0, 0, 0, 0.07)',
  borderRadius: borderRadiusVariants.medium,
  color: colors.white,
  animation: `${fadeInOut} 1.5s ease-in-out  forwards`,
});
