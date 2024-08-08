import { css } from '@emotion/react';
import { borderRadiusVariants, colors, size } from '@sambad/sds/theme';

export const boxCss = css({
  borderRadius: borderRadiusVariants.medium,
  backgroundColor: colors.grey200,
  border: `1px solid ${colors.grey400}`,
  padding: `${size['5xs']} ${size['3xs']}`,
});
