import { css } from '@emotion/react';
import { Button, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import Image from 'next/image';

import { RelayRePickQuestioner } from '../../../../assets/RelayRePickQuestioner';
import { RePick } from '../RePick/RePick';

import { buttonWrapperCss, imgWrapperCss, nameCss, wrapperCss } from './Questioner.styles';

interface QuestionerDetailProps {
  imageUrl: string;
  name: string;
  isRandom?: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onRefetch?: () => void;
}

export const QuestionerDetail = ({
  imageUrl,
  name,
  isRandom,
  onClose,
  onConfirm,
  onRefetch,
}: QuestionerDetailProps) => {
  return (
    <div css={wrapperCss}>
      <div css={imgWrapperCss}>
        <Image src={imageUrl} alt={name} width={80} height={80} />
      </div>
      <Txt typography="heading2" color={colors.black} fontWeight="bold" css={nameCss}>
        {name}
      </Txt>
      <div css={buttonWrapperCss}>
        <Button variant="sub" onClick={onClose}>
          닫기
        </Button>
        <Button onClick={onConfirm}>질문인 선택</Button>
      </div>
      {isRandom && (
        <RePick onClick={onRefetch}>
          <RelayRePickQuestioner css={css({ marginRight: size['7xs'] })} />
          랜덤 선택 다시하기
        </RePick>
      )}
    </div>
  );
};
