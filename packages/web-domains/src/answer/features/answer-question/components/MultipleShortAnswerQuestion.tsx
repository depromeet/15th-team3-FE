'use client';

import { css } from '@emotion/react';
import { Txt } from '@sambad/sds/components';
import { borderRadiusVariants, colors, size } from '@sambad/sds/theme';
import { Attributes, useEffect, useState } from 'react';

import { AnswerQuestionOptionType } from '@/answer/common/apis/schema/AnswerQuestion';

interface MultipleShortAnswerQuestionProps {
  answerOptionList: Array<AnswerQuestionOptionType>;
  onChangeAnswerList?: (answerIdList: number[]) => void;
}

const buttonStyles: Record<'selected' | 'default', Attributes['css']> = {
  selected: {
    border: 'none',
    borderRadius: borderRadiusVariants.large,
    height: '64px',
    backgroundColor: colors.primary500,
  },
  default: {
    border: 'none',
    borderRadius: borderRadiusVariants.large,
    height: '64px',
    backgroundColor: colors.grey400,
  },
};

const baseButtonStyles = css({
  padding: `${size['5xs']} ${size['4xs']}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  wordBreak: 'keep-all',
  cursor: 'pointer',
});

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
        <button
          onClick={handleClickAnswer(answer)}
          key={answer.answerId}
          css={[baseButtonStyles, isSelected(answer) ? buttonStyles['selected'] : buttonStyles['default']]}
        >
          <Txt typography="title2" color={isSelected(answer) ? colors.white : colors.grey700}>
            {answer.content}
          </Txt>
        </button>
      ))}
    </div>
  );
};
