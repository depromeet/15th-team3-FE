import { borderRadiusVariants, colors } from '@sambad/sds/theme';

import { PreviousQuestionType } from '../../../../../common/apis/schema/useGetPreviousQuestionListQuery.type';

import { HomePreviousQuestionItem } from './HomePreviousQuestionItem';

interface HomePreviousQuestionListProps {
  questionList: PreviousQuestionType[];
}

export const HomePreviousQuestionList = ({ questionList }: HomePreviousQuestionListProps) => {
  const twicePreviousQuestionList = questionList.slice(0, 2);

  return (
    <ul
      css={{
        width: '100%',
        borderRadius: borderRadiusVariants.medium,
        border: `1px solid ${colors.grey300}`,
      }}
    >
      {twicePreviousQuestionList.map((question) => (
        <HomePreviousQuestionItem key={question.meetingQuestionId} question={question} />
      ))}
    </ul>
  );
};
