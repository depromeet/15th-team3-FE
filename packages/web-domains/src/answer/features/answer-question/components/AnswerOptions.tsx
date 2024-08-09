import { AnswerQuestionOptionType } from '@/answer/common/apis/schema/AnswerQuestion';

import { BalanceQuestion } from './BalanceQuestion';
import { MultipleDescriptiveAnswerQuestion } from './MultipleDescriptiveAnswerQuestion';
import { MultipleShortAnswerQuestion } from './MultipleShortAnswerQuestion';

interface AnswerOptionsProps {
  questionType?: 'MULTIPLE_SHORT_CHOICE' | 'SINGLE_CHOICE' | 'MULTIPLE_DESCRIPTIVE_CHOICE';
  answerOptionList: Array<AnswerQuestionOptionType>;
  onChangeAnswer: (answerIdList: number[]) => void;
}

export const AnswerOptions = ({ questionType, answerOptionList, onChangeAnswer }: AnswerOptionsProps) => {
  if (answerOptionList.length < 2) {
    return null;
  }

  switch (questionType) {
    case 'MULTIPLE_DESCRIPTIVE_CHOICE':
      return (
        <MultipleDescriptiveAnswerQuestion answerOptionList={answerOptionList} onChangeAnswerList={onChangeAnswer} />
      );

    case 'MULTIPLE_SHORT_CHOICE':
      return <MultipleShortAnswerQuestion answerOptionList={answerOptionList} onChangeAnswerList={onChangeAnswer} />;
    case 'SINGLE_CHOICE':
      return (
        <BalanceQuestion
          answerOptionList={answerOptionList as [AnswerQuestionOptionType, AnswerQuestionOptionType]}
          onChangeAnswerList={onChangeAnswer}
        />
      );
  }

  return null;
};
