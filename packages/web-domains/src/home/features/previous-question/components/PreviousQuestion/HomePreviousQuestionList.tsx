import { borderRadiusVariants, colors } from '@sambad/sds/theme';
import { ReactNode } from 'react';

import { TopPreviousQuestionType } from '../../../../common/apis/schema/useGetPreviousQuestionListQuery.type';

interface HomePreviousQuestionListProps {
  renderItem: (item: TopPreviousQuestionType) => ReactNode;
  questionList: [TopPreviousQuestionType, TopPreviousQuestionType];
}

export const HomePreviousQuestionList = ({ renderItem, questionList }: HomePreviousQuestionListProps) => {
  return (
    <ul
      css={{
        width: '100%',
        borderRadius: borderRadiusVariants.medium,
        border: `1px solid ${colors.grey300}`,
      }}
    >
      {questionList.map((question) => renderItem(question))}
    </ul>
  );
};
