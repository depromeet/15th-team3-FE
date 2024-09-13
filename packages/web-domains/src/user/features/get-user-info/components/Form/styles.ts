import { css } from '@emotion/react';
import { size } from '@sambad/sds/theme';

export const formLayoutcss = css({
  padding: `0 ${size['2xs']}`,
  paddingBottom: size['7xl'],
  marginTop: size['2xl'],
  '& > *:not(:first-of-type)': {
    marginTop: size.md,
  },
});

export const buttonWrapperCss = css({
  position: 'fixed',
  bottom: size.xl,
  width: '100%',
  left: '50%',
  transform: 'translate(-50%, 0px)',
  padding: `0 ${size['2xs']}`,
  maxWidth: '600px',
});
