import { css } from '@emotion/react';
import { borderRadiusVariants, size } from '@sambad/sds/theme';

const Z_INDEX = {
  relayStartButton: 1,
  modalBackDrop: 10000,
  modal: 10010,
  toast: 10020,
};

export const wrapperCss = css({
  padding: `${size['5xs']} ${size['2xs']}`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '160px',
  height: '160px',
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: borderRadiusVariants.medium,
  background: 'rgba(0, 0, 0, 0.80)',
  boxShadow:
    '0px var(--elevation-1, 1px) var(--elevation-4, 4px) 0px rgba(0, 0, 0, 0.06), 0px var(--elevation-2, 2px) var(--elevation-8, 8px) 0px rgba(0, 0, 0, 0.07)',
  zIndex: Z_INDEX.toast,
});
