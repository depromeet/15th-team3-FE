'use client';

import { css } from '@emotion/react';
import { Icon, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';

import { titleCss } from './styles';

export const Error404 = () => {
  return (
    <div css={containerCss}>
      <Icon name="cross-circle" size={65} color={colors.grey400} style={{ marginBottom: size.sm }} />
      <h1 css={titleCss}>페이지를 찾을 수 없습니다</h1>
      <Txt typography="body2" as="h2" color={colors.grey600} css={{ textAlign: 'center' }}>
        죄송합니다. 원하시는 페이지를 찾을 수 없습니다.
        <br />
        요청하신 페이지가 사라졌거나, 잘못된 경로입니다.
      </Txt>
    </div>
  );
};

const containerCss = css({
  width: '100%',
  height: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
});
