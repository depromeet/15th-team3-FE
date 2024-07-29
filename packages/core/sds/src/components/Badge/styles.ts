import { borderRadiusVariants, size } from '@sds/theme';
import { css } from '@emotion/react';
import { fontWeightVariants } from '../Typography/styles';

export const badgeCss = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: borderRadiusVariants.round,
  padding: `${size['7xs']} ${size['5xs']}`,
  fontSize: '14px',
  fontWeight: fontWeightVariants.medium,
  lineHeight: '150%',
});
