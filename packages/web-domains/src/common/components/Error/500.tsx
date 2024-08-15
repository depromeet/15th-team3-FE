'use client';

import { Button, Txt } from '@sds/components';
import { colors } from '@sds/theme';

import { buttonsContainer, codeCss, containerCss, descriptionCss, titleCss } from './styles';

export const Error500 = () => {
  return (
    <div style={{ backgroundColor: colors.secondary50 }} css={containerCss}>
      <h1 style={{ color: colors.secondary500 }} css={codeCss}>
        500
      </h1>
      <h2 css={titleCss}>잠시 후 다시 확인해주세요!</h2>
      <Txt typography="body2" as="h3" color={colors.grey600} css={descriptionCss}>
        앗, 에러가 발생했어요.
        <br />
        잠시 후 다시 시도해 주세요.
      </Txt>
      <div css={buttonsContainer}>
        <Button>이전 페이지로 가기</Button>
        <Button variant="sub">홈으로 가기</Button>
      </div>
    </div>
  );
};
