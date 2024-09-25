import { css } from '@emotion/react';
import { colors } from '@sambad/sds/theme';

export const BottomSheetContainerCss = css({
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 999,
});

export const DimmedCss = css({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  transition: 'opacity 0.2s ease',
  background: `${colors.black}`,
  opacity: '0.4',
});

export const ContentWrapperCss = css({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  zIndex: 100,
  width: '100%',
  maxWidth: '600px',
  boxShadow: '0px -4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '16px 16px 0 0',
  transition: 'transform 0.2s ease',
  height: 'calc(100% - 54px)',
  backgroundColor: `${colors.grey200}`,
  padding: '8px 0 40px',
  overflow: 'hidden',
});
