import { ReactNode, forwardRef } from 'react';

import { PreviousQuestionType } from '../../../../common/apis/schema/useGetPreviousQuestionListQuery.type';

interface PreviousQuestionListProps {
  renderItem: (item: PreviousQuestionType) => ReactNode;
  questionList: PreviousQuestionType[];
}

export const PreviousQuestionList = forwardRef<HTMLDivElement, PreviousQuestionListProps>(
  ({ questionList, renderItem }, targetRef) => {
    console.log(targetRef);

    return (
      <>
        <ul>{questionList.map((question) => renderItem(question))}</ul>
        <div ref={targetRef}></div>
      </>
    );
  },
);

PreviousQuestionList.displayName = 'PreviousQuestionList';
