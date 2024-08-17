'use client';

import { Button, fontWeightVariants } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { Attributes, useEffect, useState } from 'react';

import { AnswerQuestionOptionType } from '@/answer/common/apis/schema/AnswerQuestion';

interface MultipleShortAnswerQuestionProps {
  answerOptionList: Array<AnswerQuestionOptionType>;
  onChangeAnswerList?: (answerIdList: number[]) => void;
}

const buttonStyles: Record<'selected' | 'default', Attributes['css']> = {
  selected: {
    border: 'none',
    borderRadius: '24px',
    height: '64px',
    backgroundColor: colors.primary500,
    fontWeight: fontWeightVariants.medium,
    fontSize: '20px',
    color: colors.white,
  },
  default: {
    border: 'none',
    borderRadius: '24px',
    height: '64px',
    backgroundColor: colors.grey400,
    fontWeight: fontWeightVariants.medium,
    fontSize: '20px',
    color: colors.grey700,
  },
};

export const MultipleShortAnswerQuestion = ({
  answerOptionList,
  onChangeAnswerList,
}: MultipleShortAnswerQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<Array<AnswerQuestionOptionType>>([]);

  const isSelected = (answer: AnswerQuestionOptionType) => {
    const findOptions = selectedOption.find((option) => option.answerId === answer.answerId);

    if (findOptions) {
      return true;
    }
    return false;
  };

  const handleClickAnswer = (answer: AnswerQuestionOptionType) => () => {
    const findOptions = selectedOption.find((option) => option.answerId === answer.answerId);

    if (findOptions) {
      const filteredOption = selectedOption.filter((option) => option.answerId !== answer.answerId);
      setSelectedOption(filteredOption);
    } else {
      setSelectedOption([...selectedOption, answer]);
    }
  };

  useEffect(() => {
    const answerIdList = selectedOption.map((option) => option.answerId);
    onChangeAnswerList?.(answerIdList);
  }, [selectedOption]);

  return (
    <div css={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', rowGap: '8px', columnGap: '8.75px' }}>
      {answerOptionList.map((answer) => (
        <Button
          onClick={handleClickAnswer(answer)}
          key={answer.answerId}
          variant="sub"
          css={isSelected(answer) ? buttonStyles['selected'] : buttonStyles['default']}
        >
          {answer.content}
        </Button>
      ))}
    </div>
  );
};
