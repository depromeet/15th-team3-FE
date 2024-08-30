'use client';
import { css } from '@emotion/react';
import { Txt } from '@sambad/sds/components';
import { borderRadiusVariants, colors, size } from '@sambad/sds/theme';
import { Attributes, useEffect, useState } from 'react';

import { AnswerQuestionOptionType } from '@/answer/common/apis/schema/AnswerQuestion';

interface MultipleDescriptiveAnswerQuestionProps {
  answerOptionList: Array<AnswerQuestionOptionType>;
  onChangeAnswerList?: (answerIdList: number[]) => void;
}

const buttonStyles: Record<'selected' | 'default', Attributes['css']> = {
  selected: {
    border: 'none',
    borderRadius: borderRadiusVariants.large,
    height: '64px',
    backgroundColor: colors.primary500,
    color: colors.white,
  },
  default: {
    border: 'none',
    borderRadius: borderRadiusVariants.large,
    height: '64px',
    backgroundColor: colors.grey400,
    color: colors.grey700,
  },
};

const baseButtonStyle = css({
  padding: `${size['5xs']} ${size['4xs']}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  wordBreak: 'keep-all',
  cursor: 'pointer',
});

export const MultipleDescriptiveAnswerQuestion = ({
  answerOptionList,
  onChangeAnswerList,
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
  };

  useEffect(() => {
    const answerIdList = selectedOption.map((option) => option.answerId);
    onChangeAnswerList?.(answerIdList);
  }, [selectedOption]);

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
          <button
            onClick={handleClickAnswer(answer)}
            css={[baseButtonStyle, isSelected(answer) ? buttonStyles['selected'] : buttonStyles['default']]}
          >
            <Txt typography="title2" color={isSelected(answer) ? colors.white : colors.grey700}>
              {answer.content}
            </Txt>
          </button>
        </li>
      ))}
    </ul>
  );
};
