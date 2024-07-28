import { css } from '@emotion/react';
import { fontWeightVariants } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';

export const bannerCss = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: colors.white,
  padding: `${size.xs} ${size['2xs']} ${size.xl}`,
});

export const thumbnailCss = css({
  borderRadius: '16px',
  backgroundColor: colors.grey600,
});

export const titleCss = css({
  display: 'block',
  marginTop: size['3xs'],
  textAlign: 'center',

  '& > strong': {
    display: 'block',
    fontWeight: fontWeightVariants.bold,
  },
});
