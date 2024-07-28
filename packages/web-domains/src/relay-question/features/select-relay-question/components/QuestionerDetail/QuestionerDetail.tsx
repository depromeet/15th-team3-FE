import { css } from '@emotion/react';
import { Button, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import Image from 'next/image';

import { RelayRePickQuestioner } from '../../../../assets/RelayRePickQuestioner';

import { buttonWrapperCss, imgWrapperCss, nameCss, rePickTextCss, wrapperCss } from './Questioner.styles';

interface QuestionerDetailProps {
  imageUrl: string;
  name: string;
  handleCloseModal: () => void;
}

export const QuestionerDetail = ({ imageUrl, name }: QuestionerDetailProps) => {
  return (
    <div css={wrapperCss}>
      <div css={imgWrapperCss}>
        <Image src={imageUrl} alt={name} width={80} height={80} />
      </div>
      <Txt typography="heading2" fontWeight="bold" css={nameCss}>
        {name}
      </Txt>
      <div css={buttonWrapperCss}>
        <Button variant="sub">닫기</Button>
        <Button>질문인 선택</Button>
      </div>
      <Txt color={colors.grey600} typography="title4" fontWeight="medium" css={rePickTextCss}>
        <RelayRePickQuestioner css={css({ marginRight: size['7xs'] })} />
        랜덤 선택 다시하기
      </Txt>
    </div>
  );
};
