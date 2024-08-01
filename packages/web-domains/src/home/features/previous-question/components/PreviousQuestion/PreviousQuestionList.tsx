import { forwardRef } from 'react';

import { PreviousQuestionType } from '../../../../common/apis/schema/useGetPreviousQuestionListQuery.type';

import { PreviousQuestionItem } from './PreviousQuestionItem';

interface PreviousQuestionListProps {
  questionList: PreviousQuestionType[];
}

export const PreviousQuestionList = forwardRef<HTMLDivElement, PreviousQuestionListProps>(
  ({ questionList }, targetRef) => {
    console.log(targetRef);

    return (
      <>
        <ul>
          {questionList.map((question) => (
            <PreviousQuestionItem key={question.meetingQuestionId} question={question} />
          ))}
        </ul>
        <div ref={targetRef}></div>
      </>
    );
  },
);

PreviousQuestionList.displayName = 'PreviousQuestionList';
