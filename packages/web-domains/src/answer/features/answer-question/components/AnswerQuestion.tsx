import { Txt, fontWeightVariants } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { ReactNode } from 'react';

import { AnswerQuestionType } from '@/answer/common/apis/schema/AnswerQuestion';

interface AnswerQuestionProps {
  question: AnswerQuestionType;
  answers: ReactNode;
}

export const AnswerQuestion = ({ question, answers }: AnswerQuestionProps) => {
  const {
    content: { title },
  } = question;

  return (
    <>
      <div css={{ padding: '20px' }}>
        <Txt as="p" typography="heading1" color={colors.grey500}>
          Q.
        </Txt>
        <Txt
          as="p"
          typography="heading1"
          css={{ fontWeight: `${fontWeightVariants.regular} !important` }}
          color={colors.black}
        >
          우리 모임원들은
        </Txt>
        <Txt as="p" typography="heading1" color={colors.black}>
          {title}
        </Txt>
      </div>
      <div css={{ padding: '24px 20px' }}>{answers}</div>
    </>
  );
};
