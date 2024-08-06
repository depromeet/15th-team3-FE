'use client';
import { Button, fontWeightVariants } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { Attributes, useState } from 'react';

import { AnswerQuestionOptionType } from '@/answer/common/apis/schema/AnswerQuestion';

interface MultipleDescriptiveAnswerQuestionProps {
  answerOptionList: Array<AnswerQuestionOptionType>;
  onSelect?: (answer: AnswerQuestionOptionType) => void;
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

export const MultipleDescriptiveAnswerQuestion = ({
  answerOptionList,
  onSelect,
}: MultipleDescriptiveAnswerQuestionProps) => {
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

    onSelect?.(answer);
  };

  return (
    <ul css={{ listStyle: 'none' }}>
      {answerOptionList.map((answer) => (
        <li
          key={answer.answerId}
          css={{
            '& + &': {
              marginTop: '16px',
            },
          }}
        >
          <Button
            onClick={handleClickAnswer(answer)}
            variant="sub"
            css={isSelected(answer) ? buttonStyles['selected'] : buttonStyles['default']}
          >
            {answer.content}
          </Button>
        </li>
      ))}
    </ul>
  );
};
