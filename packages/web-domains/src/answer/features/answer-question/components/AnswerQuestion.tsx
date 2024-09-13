import { Txt, fontWeightVariants } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { ReactNode } from 'react';

interface AnswerQuestionProps {
  qustionSubTitle: string;
  questionTitle: string;
  answers: ReactNode;
}

export const AnswerQuestion = ({ qustionSubTitle, questionTitle, answers }: AnswerQuestionProps) => {
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
          {qustionSubTitle}
        </Txt>
        <Txt as="p" typography="heading1" color={colors.black}>
          {questionTitle}
        </Txt>
      </div>
      <div
        css={{
          padding: '24px 20px',
          overflow: 'scroll',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {answers}
      </div>
    </>
  );
};
