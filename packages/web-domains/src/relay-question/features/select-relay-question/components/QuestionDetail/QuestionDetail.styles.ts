import { css } from '@emotion/react';
import { borderRadiusVariants, colors, size } from '@sambad/sds/theme';

export const wrapperCss = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const imageWrapperCss = css({
  margin: `${size['2xs']} 0 ${size['6xs']}`,
});

export const answerExampleTextCss = css({
  margin: `${size['5xs']} 0 ${size['6xs']}`,
});

export const answerContentCss = css({
  width: '100%',
  height: '104px',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: `${size['6xs']}`,
});

export const answerWrapperCss = css({
  width: '100%',
  height: '104px',
  position: 'relative',
});

export const answerBlurCss = css({
  width: '100%',
  height: '104px',
  position: 'absolute',
  backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)', // 그라데이션 적용
});

export const answerListCss = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `${size['5xs']} ${size['3xs']}`,
  width: '100%',
  backgroundColor: `${colors.grey200}`,
  border: `1px solid ${colors.grey300}`,
  borderRadius: `${borderRadiusVariants.medium}`,
});

export const buttonWrapperCss = css({
  width: '100%',
  marginTop: `${size.xs}`,
  display: 'flex',
  gap: `${size['5xs']}`,
});
