import { css } from '@emotion/react';
import { borderRadiusVariants, size } from '@sambad/sds/theme';

export const containerCss = css({
  padding: `${size['5xs']} ${size['2xs']}`,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',

  '& img': {
    marginRight: size['5xs'],
    borderRadius: borderRadiusVariants.round,
  },
});

export const ownerEmojiCss = css({
  marginLeft: 'auto',
});
