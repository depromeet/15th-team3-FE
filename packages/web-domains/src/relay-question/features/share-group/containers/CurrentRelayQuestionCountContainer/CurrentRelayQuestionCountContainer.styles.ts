import { css } from '@emotion/react';
import { colors } from '@sambad/sds/theme';

export const wrapperCss = css({
  padding: '40px 20px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: colors.primary50,
});

export const backgroundWrapperCss = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});
