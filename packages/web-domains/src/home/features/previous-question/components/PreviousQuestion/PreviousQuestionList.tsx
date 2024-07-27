import { PreviousQuestionType } from '../../../../common/apis/schema/useGetPreviousQuestionListQuery.type';

import { PreviousQuestionItem } from './PreviousQuestionItem';

interface PreviousQuestionListProps {
  questionList: PreviousQuestionType[];
}

export const PreviousQuestionList = ({ questionList }: PreviousQuestionListProps) => {
  return (
    <ul>
      {questionList.map((question) => (
        <PreviousQuestionItem key={question.meetingQuestionId} question={question} />
      ))}
    </ul>
  );
};
