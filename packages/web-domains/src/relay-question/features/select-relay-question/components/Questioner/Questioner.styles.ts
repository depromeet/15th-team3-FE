import { css } from '@emotion/react';
import { borderRadiusVariants, size } from '@sambad/sds/theme';

export const wrapperCss = css({
  display: 'flex',
  alignItems: 'center',
  gap: size['5xs'],
  padding: `${size['5xs']} ${size['2xs']}`,
  cursor: 'pointer',
});

export const imgWrapperCss = css({
  height: size.xl,
  width: size.xl,
  borderRadius: borderRadiusVariants.round,
  overflow: 'hidden',
});
