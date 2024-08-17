import { css } from '@emotion/react';
import { borderRadiusVariants, colors, size } from '@sambad/sds/theme';

export const headerCss = css({
  display: 'flex',
  alignItems: 'center',
  borderRadius: `${borderRadiusVariants.medium} ${borderRadiusVariants.medium} 0 0`,
  backgroundColor: colors.grey400,
  padding: `${size['6xs']} ${size['xs']}`,
});

export const itemCss = css({
  display: 'flex',
  alignItems: 'center',
  padding: `${size['3xs']} ${size['2xs']}`,
});
