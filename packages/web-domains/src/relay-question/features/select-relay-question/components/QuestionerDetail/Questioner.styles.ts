import { css } from '@emotion/react';
import { size } from '@sambad/sds/theme';

export const wrapperCss = css({ display: 'flex', flexDirection: 'column', alignItems: 'center' });

export const imgWrapperCss = css({
  width: '80px',
  height: '80px',
  marginBottom: `${size['2xs']}`,
});

export const nameCss = css({ marginBottom: `${size.sm}` });

export const buttonWrapperCss = css({ width: '100%', display: 'flex', alignItems: 'center', gap: size['5xs'] });

export const rePickTextCss = css({ display: 'flex', alignItems: 'center', marginTop: size['6xs'], cursor: 'pointer' });
