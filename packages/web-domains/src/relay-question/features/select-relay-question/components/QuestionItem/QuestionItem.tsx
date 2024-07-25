import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Image from 'next/image';

import { questionImgBoxCss, questionItemCss, questionTextBoxCss } from './QuestionItem.styles';

interface QuestionItemProps {
  imageUrl: string;
  title: string;
  usedCount: number;
}

export const QuestionItem = ({ imageUrl, title, usedCount }: QuestionItemProps) => {
  return (
    <div css={questionItemCss}>
      <div css={questionImgBoxCss}>
        <Image src={imageUrl} alt={title} width={64} height={64} />
      </div>
      <div css={questionTextBoxCss}>
        <Txt color={colors.black} typography="title2" fontWeight="medium">
          {title}
        </Txt>
        <Txt color={colors.grey700} typography="body4" fontWeight="regular">
          지금까지 {usedCount}개의 모임에서 사용했어요!
        </Txt>
      </div>
    </div>
  );
};
