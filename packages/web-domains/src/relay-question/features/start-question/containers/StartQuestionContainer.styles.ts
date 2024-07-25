import { css } from '@emotion/react';
import { colors, size } from '@sambad/sds/theme';

export const StartQuestionContainerCss = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: `${colors.primary50}`,
});

export const StartQuestionBackgroundCss = css({
  width: '100%',
  maxWidth: '430px',
  height: 'max-content',
  padding: `${size['2xs']} ${size['2xs']} ${size.xl} ${size['2xs']}`,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
