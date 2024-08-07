import { css } from '@emotion/react';
import { borderRadiusVariants, colors } from '@sambad/sds/theme';

export const radioCss = {
  base: css({
    display: 'inline-flex',
    padding: '12px 16px',
    borderRadius: borderRadiusVariants.medium,
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid',
    height: '48px',
  }),
  default: {
    backgroundColor: colors.grey200,
    borderColor: colors.grey400,
  },
  selected: {
    backgroundColor: colors.primary100,
    borderColor: colors.primary500,
  },
};
