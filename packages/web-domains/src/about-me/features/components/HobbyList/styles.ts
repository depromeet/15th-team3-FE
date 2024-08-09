import { css } from '@emotion/react';
import { borderRadiusVariants, colors, size } from '@sambad/sds/theme';

export const itemCss = css({
  padding: `${size['5xs']} ${size['3xs']}`,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.grey200,
  border: `1px solid ${colors.grey400}`,
  borderRadius: borderRadiusVariants.medium,

  '& > * + *': {
    paddingLeft: size['6xs'],
  },
});

export const itemContainerCss = css({
  '& > * + *': {
    marginLeft: size['6xs'],
  },
});
