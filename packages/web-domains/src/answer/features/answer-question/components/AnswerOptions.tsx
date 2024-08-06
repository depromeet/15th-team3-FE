import { AnswerQuestionOptionType } from '@/answer/common/apis/schema/AnswerQuestion';

import { BalanceQuestion } from './BalanceQuestion';
import { MultipleDescriptiveAnswerQuestion } from './MultipleDescriptiveAnswerQuestion';
import { MultipleShortAnswerQuestion } from './MultipleShortAnswerQuestion';

interface AnswerOptionsProps {
  questionType?: 'MULTIPLE_SHORT_CHOICE' | 'SINGLE_CHOICE' | 'MULTIPLE_DESCRIPTIVE_CHOICE';
  answerOptionList: Array<AnswerQuestionOptionType>;
}

export const AnswerOptions = ({ questionType, answerOptionList }: AnswerOptionsProps) => {
  if (answerOptionList.length < 2) {
    return null;
  }

  switch (questionType) {
    case 'MULTIPLE_DESCRIPTIVE_CHOICE':
      return <MultipleDescriptiveAnswerQuestion answerOptionList={answerOptionList} />;

    case 'MULTIPLE_SHORT_CHOICE':
      return <MultipleShortAnswerQuestion answerOptionList={answerOptionList} />;
    case 'SINGLE_CHOICE':
      return (
        <BalanceQuestion answerOptionList={answerOptionList as [AnswerQuestionOptionType, AnswerQuestionOptionType]} />
      );
  }

  return null;
};
