import { borderRadius, colors } from '@sambad/sds/theme';

import { PreviousQuestionType } from '../../../../../common/apis/schema/useGetPreviousQuestionListQuery.type';

import { HomePreviousQuestionItem } from './HomePreviousQuestionItem';

interface HomePreviousQuestionListProps {
  questionList: PreviousQuestionType[];
}

export const HomePreviousQuestionList = ({ questionList }: HomePreviousQuestionListProps) => {
  return (
    <ul
      css={{
        width: '100%',
        borderRadius: borderRadius.medium,
        border: `1px solid ${colors.grey300}`,
      }}
    >
      {questionList.map((question) => (
        <HomePreviousQuestionItem key={question.meetingQuestionId} question={question} />
      ))}
    </ul>
  );
};
