import { css } from '@emotion/react';
import { borderRadiusVariants, colors, size } from '@sambad/sds/theme';

export const radioCss = {
  base: css({
    display: 'inline-flex',
    padding: '12px 16px',
    borderRadius: borderRadiusVariants.medium,
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid',
    height: '48px',
    cursor: 'pointer',
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

export const itemCss = css({
  '& > * + *': {
    paddingLeft: size['6xs'],
  },
});
