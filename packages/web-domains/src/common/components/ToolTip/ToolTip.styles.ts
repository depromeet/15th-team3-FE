import { css } from '@emotion/react';
import { borderRadiusVariants, colors, size } from '@sambad/sds/theme';

export const wrapperCss = css({
  position: 'relative',
});

export const textWrapperCss = css({
  width: 'max-content',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `${size['5xs']} ${size['4xs']}`,
  backgroundColor: `${colors.primary500}`,
  borderRadius: `${borderRadiusVariants.medium}`,
  position: 'absolute',
  right: '50%',
  bottom: 20,
  transform: 'translateX(50%)',
});
