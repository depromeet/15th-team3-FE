'use client';
import { css, Interpolation, Theme } from '@emotion/react';
import { Txt, fontWeightVariants } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { ButtonHTMLAttributes, useEffect, useState } from 'react';

import { AnswerQuestionOptionType } from '@/answer/common/apis/schema/AnswerQuestion';

interface BalanceQuestionProps {
  answerOptionList: [AnswerQuestionOptionType, AnswerQuestionOptionType];
  onChangeAnswerList?: (answerIdList: number[]) => void;
}

export const BalanceQuestion = ({ answerOptionList, onChangeAnswerList }: BalanceQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<AnswerQuestionOptionType | null>(answerOptionList[0] || null);

  const topQuestion = answerOptionList[0];
  const bottomQuestion = answerOptionList[1];

  const handleClickAnswer = (answer: AnswerQuestionOptionType) => () => {
    setSelectedOption(answer);
  };

  useEffect(() => {
    if (selectedOption) {
      onChangeAnswerList?.([selectedOption.answerId]);
    }
  }, [selectedOption]);

  return (
    <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <SelectButton
        isSelected={selectedOption?.answerId === topQuestion.answerId}
        onClick={handleClickAnswer(topQuestion)}
      >
        {topQuestion.content}
      </SelectButton>
      <Txt typography="heading2" css={{ display: 'inline-block', padding: '12px 0' }}>
        VS
      </Txt>
      <SelectButton
        isSelected={selectedOption?.answerId === bottomQuestion.answerId}
        onClick={handleClickAnswer(bottomQuestion)}
      >
        {bottomQuestion.content}
      </SelectButton>
    </div>
  );
};

interface SelectButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected: boolean;
}

export const SelectButton = (props: SelectButtonProps) => {
  const { isSelected, ...restProps } = props;

  return (
    <button css={[buttonBaseStyle, isSelected ? buttonStyles['selected'] : buttonStyles['default']]} {...restProps} />
  );
};

const buttonBaseStyle = css({
  width: '100%',
  cursor: 'pointer',
});

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
