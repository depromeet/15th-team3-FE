import { css } from '@emotion/react';
import { colors, size } from '@sambad/sds/theme';

export const startQuestionContainerCss = css({
  width: '100%',
  minHeight: '100dvh',
  backgroundColor: `${colors.primary50}`,
});

export const startQuestionContentCss = css({
  height: 'calc(100dvh - 56px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const startQuestionBackgroundCss = css({
  width: '100%',
  maxWidth: '430px',
  height: 'max-content',
  padding: `${size['2xs']} ${size['2xs']} ${size.xl} ${size['2xs']}`,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
