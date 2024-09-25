import { css } from '@emotion/react';

import { borderRadiusVariants, size } from '../../theme';
import { fontWeightVariants } from '../Typography/styles';

export const badgeCss = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: borderRadiusVariants.round,
  padding: `${size['7xs']} ${size['5xs']}`,
  fontSize: '14px',
  fontWeight: fontWeightVariants.regular,
  lineHeight: '150%',
});
