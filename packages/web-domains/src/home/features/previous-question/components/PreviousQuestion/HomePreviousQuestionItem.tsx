import { Txt } from '@sambad/sds/components';
import { borderRadiusVariants, colors } from '@sambad/sds/theme';
import { AngleRightIcon } from '@sds/components/Icon/assets/AngleRight';
import Link from 'next/link';

import { TopPreviousQuestionType } from '@/home/common/apis/schema/useGetPreviousQuestionListQuery.type';

interface HomePreviousQuestionItemProps {
  meetingId?: number;
  question: TopPreviousQuestionType;
}

export const HomePreviousQuestionItem = ({ meetingId, question }: HomePreviousQuestionItemProps) => {
  const { content, engagementRate, title, meetingQuestionId } = question;

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
        href={`/${meetingId}/question-result/${meetingQuestionId}`}
        css={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <div css={{ flex: '1' }}>
          {content ? (
            <Txt as="p" typography="heading3" color={colors.primary500} css={{ marginBottom: '4px' }}>
              {content}
              <Txt typography="title2" color={colors.black}>
                이/가 가장 많았어요.
              </Txt>
            </Txt>
          ) : (
            <Txt typography="title2">아무도 답변하지 않았어요...</Txt>
          )}
          <Txt as="p" typography="body3" color={colors.grey600} css={{ marginBottom: '8px' }}>
            {title}
          </Txt>
          <Txt
            as="span"
            typography="title4"
            color={colors.grey600}
            css={{
              display: 'inline-block',
              backgroundColor: colors.grey300,
              height: '18px',
              textAlign: 'center',
              padding: '0 8px',
              borderRadius: borderRadiusVariants.medium,
            }}
          >
            참여율 {engagementRate}%
          </Txt>
        </div>
        <div css={{ marginLeft: '20px' }}>
          <AngleRightIcon size={16} color={colors.grey600} />
        </div>
      </Link>
    </li>
  );
};
