import { css } from '@emotion/react';
import { borderRadiusVariants, size } from '@sambad/sds/theme';

export const wrapperCss = css({ display: 'flex', flexDirection: 'column', alignItems: 'center' });

export const imgWrapperCss = css({
  width: '80px',
  height: '80px',
  marginBottom: `${size['2xs']}`,
  borderRadius: borderRadiusVariants.round,
  overflow: 'hidden',
});

export const nameCss = css({ marginBottom: `${size.sm}` });

export const buttonWrapperCss = css({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: size['5xs'],
  marginBottom: size['6xs'],
});

export const rePickTextCss = css({ display: 'flex', alignItems: 'center', marginTop: size['8xs'], cursor: 'pointer' });
