import { css } from '@emotion/react';
import { size } from '@sambad/sds/theme';

export const containerCss = css({
  padding: `${size['5xs']} ${size['2xs']}`,
  position: 'relative',

  '& img': {
    marginRight: size['5xs'],
  },
});

export const ownerEmojiCss = css({
  position: 'absolute',
  right: 0,
});
