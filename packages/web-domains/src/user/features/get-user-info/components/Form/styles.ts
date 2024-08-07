import { css } from '@emotion/react';
import { size } from '@sambad/sds/theme';

export const buttonWrapperCss = css({
  position: 'fixed',
  bottom: size.xl,
  width: '100%',
  left: '50%',
  transform: 'translate(-50%, 0px)',
  padding: ' 0 20px',
  maxWidth: '600px',
});
