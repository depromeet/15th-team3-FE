import { css } from '@emotion/react';

export const actionBarWrapperStyles = css({
  height: '48px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
});

export const buttonStyles = css({
  flex: 0,
  left: 0,
  position: 'absolute',
  height: '100%',
  width: '48px',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const addOnStyles = css({
  flex: 0,
  right: 0,
  position: 'absolute',
  height: '100%',
  width: '48px',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});
