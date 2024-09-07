import { css } from '@emotion/react';
import { getPadding } from '@sambad/css-utils';
import { shadow, size } from '@sambad/sds/theme';

export const wrapperCss = css({
  bottom: `${size.xl}`,
  position: 'fixed',
  left: '50%',
  transform: 'translate(-50%, 0%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export const randomButtonCss = css({
  boxShadow: shadow.elevation3,
  padding: getPadding(0, size['2xs']),
  width: 'auto',
});

export const tooltipCss = css({
  position: 'absolute',
  bottom: '115%',
  left: '50%',
  width: 'auto',
  transform: 'translateX(-50%)',
});
