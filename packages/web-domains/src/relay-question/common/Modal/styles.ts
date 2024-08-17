import { css } from '@emotion/react';
import { borderRadiusVariants, colors, size } from '@sambad/sds/theme';

import { Z_INDEX } from '../../constants';

export const wrapperCss = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  height: '100%',
  width: '100%',
  inset: 0,
  zIndex: Z_INDEX.modalBackDrop,
});

export const contentWrapperCss = css({
  padding: `${size.md} ${size['2xs']} ${size['2xs']}`,
  background: colors.white,
  borderRadius: borderRadiusVariants.medium,
  width: '312px',
  zIndex: Z_INDEX.modal,
});

export const overlayCss = css({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#00000066',
  inset: 0,
});
