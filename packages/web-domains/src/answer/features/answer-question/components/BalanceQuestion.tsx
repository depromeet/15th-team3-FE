'use client';
import { Interpolation, Theme } from '@emotion/react';
import { Button, Txt, fontWeightVariants } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { useEffect, useState } from 'react';

import { AnswerQuestionOptionType } from '@/answer/common/apis/schema/AnswerQuestion';

interface BalanceQuestionProps {
  answerOptionList: [AnswerQuestionOptionType, AnswerQuestionOptionType];
  onSelect?: (answer: AnswerQuestionOptionType) => void;
}

const buttonStyles: Record<'selected' | 'default', Interpolation<Theme>> = {
  selected: {
    borderRadius: '24px',
    height: '90px',
    backgroundColor: colors.primary500,
    fontWeight: fontWeightVariants.medium,
    fontSize: '20px',
    color: colors.white,
  },
  default: {
    borderRadius: '24px',
    height: '90px',
    backgroundColor: colors.grey400,
    fontWeight: fontWeightVariants.medium,
    fontSize: '20px',
    color: colors.grey700,
  },
};

export const BalanceQuestion = ({ answerOptionList, onSelect }: BalanceQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<AnswerQuestionOptionType | null>(answerOptionList[0] || null);

  const topQuestion = answerOptionList[0];
  const bottomQuestion = answerOptionList[1];

  const handleClickAnswer = (answer: AnswerQuestionOptionType) => () => {
    setSelectedOption(answer);
    onSelect?.(answer);
  };

  useEffect(() => {
    onSelect?.(topQuestion);
  }, []);

  return (
    <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Button
        size="large"
        onClick={handleClickAnswer(topQuestion)}
        css={selectedOption?.answerId === topQuestion.answerId ? buttonStyles['selected'] : buttonStyles['default']}
      >
        {topQuestion.content}
      </Button>
      <Txt typography="heading2" css={{ display: 'inline-block', padding: '12px 0' }}>
        VS
      </Txt>
      <Button
        size="large"
        onClick={handleClickAnswer(bottomQuestion)}
        css={selectedOption?.answerId === bottomQuestion.answerId ? buttonStyles['selected'] : buttonStyles['default']}
      >
        {bottomQuestion.content}
      </Button>
    </div>
  );
};
