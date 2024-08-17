import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Image from 'next/image';

import { countWrapperCss, imgWrapperCss, profileWrapperCss, wrapperCss } from './CurrentQuestionInfo.styles';

interface QuestionerProps {
  name: string;
  imageUrl: string;
}

interface CurrentQuestionerInfoProps {
  questionCount: number;
  questioner: QuestionerProps;
}

export const CurrentQuestionInfo = ({ questionCount, questioner }: CurrentQuestionerInfoProps) => {
  return (
    <div css={wrapperCss}>
      <Txt color={colors.primary600} style={{ fontWeight: 900, fontSize: '34px' }}>
        Q.
      </Txt>
      <div css={countWrapperCss}>
        <Txt color={colors.primary500} typography="heading2" fontWeight="bold">
          {questionCount}번째 질문
        </Txt>
      </div>
      <div css={profileWrapperCss}>
        <Txt typography="title4" color={colors.grey800} fontWeight="medium">
          {questioner.name}
        </Txt>
        <div css={imgWrapperCss}>
          <Image src={questioner.imageUrl} alt={questioner.name} width={20} height={20} />
        </div>
      </div>
    </div>
  );
};
