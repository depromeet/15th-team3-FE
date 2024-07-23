import { Txt } from '@sambad/sds/components';
import { borderRadius, colors } from '@sambad/sds/theme';
import Link from 'next/link';

import { AngleRightIcon } from '../../../../../../../core/sds/src/components/Icon/assets/AngleRight';
import { PreviousQuestionType } from '../../../../../common/apis/schema/useGetPreviousQuestionListQuery.type';

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
        <Question key={question.meetingQuestionId} question={question} />
      ))}
    </ul>
  );
};

const Question = ({ question }: { question: PreviousQuestionType }) => {
  const { mostResponse, title } = question;

  return (
    <li
      css={{
        width: '100%',
        padding: '16px 20px',
        listStyle: 'none',
        '& + &': {
          borderTop: `1px solid ${colors.grey400}`,
        },
      }}
    >
      <Link
        href="/home"
        css={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <div css={{ flex: '1' }}>
          <Txt as="p" typography="heading3" color={colors.tertiary500} css={{ marginBottom: '4px' }}>
            {mostResponse}
            <Txt typography="title2">이/가 가장 많았어요.</Txt>
          </Txt>
          <Txt as="p" typography="body3" color={colors.grey600} css={{ marginBottom: '8px' }}>
            {title}
          </Txt>
          <Txt
            as="span"
            typography="title4"
            color={colors.grey600}
            css={{
              display: 'inline',
              backgroundColor: colors.grey300,
              height: '18px',
              textAlign: 'center',
              padding: '0 8px',
              borderRadius: borderRadius.medium,
              lineHeight: '16px',
            }}
          >
            참여율 70%
          </Txt>
        </div>
        <div>
          <AngleRightIcon size={16} color={colors.grey600} />
        </div>
      </Link>
    </li>
  );
};
