import { Txt } from '@sambad/sds/components';
import { borderRadiusVariants, colors } from '@sambad/sds/theme';
import dayjs from 'dayjs';
import Link from 'next/link';

import { PreviousQuestionType } from '../../../../common/apis/schema/useGetPreviousQuestionListQuery.type';
import { Avatar } from '../../../../common/components/Avatar/Avatar';

interface PreviousQuestionItemProps {
  meetingId?: number;
  question: PreviousQuestionType;
}

export const PreviousQuestionItem = ({ question }: PreviousQuestionItemProps) => {
  const { title, questionNumber, targetMember, questionImageFileUrl, startDate, meetingQuestionId } = question;

  const questionTime = dayjs(startDate).format('YYYY-MM-DD');

  return (
    <li
      css={{
        width: '100%',
        height: '94px',
        padding: '12px 20px',
        listStyle: 'none',
      }}
    >
      <Link href={`/question-result/${meetingQuestionId}`} css={{ display: 'flex' }}>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '10px',
            flexShrink: 0,
          }}
        >
          <Avatar
            imageUrl={questionImageFileUrl ?? ''}
            width={64}
            height={64}
            css={{ borderRadius: borderRadiusVariants.medium }}
          />
        </div>
        <div
          css={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            marginBottom: '4px',
          }}
        >
          <Txt
            as="p"
            typography="title2"
            css={{
              display: '-webkit-box',
              textOverflow: 'ellipsis',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {title}
          </Txt>
          <div css={{ display: 'flex', alignItems: 'center' }}>
            <Txt
              typography="body4"
              color={colors.grey700}
              css={{
                textWrap: 'nowrap',
                '::after': {
                  content: '"|"',
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0 8px',
                  overflow: 'hidden',
                  height: '12px',
                  color: colors.grey600,
                },
              }}
            >
              {questionNumber}번째
            </Txt>
            <Txt
              typography="body4"
              color={colors.grey700}
              css={{
                textWrap: 'nowrap',
                '::after': {
                  content: '"|"',
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0 8px',
                  overflow: 'hidden',
                  height: '12px',
                  color: colors.grey600,
                },
              }}
            >
              {questionTime}
            </Txt>
            <Avatar
              imageUrl={targetMember.profileImageFileUrl ?? ''}
              width={16}
              height={16}
              css={{ marginRight: '4px', borderRadius: '50%' }}
            />
            <Txt typography="body4" color={colors.grey700} css={{ textWrap: 'nowrap', display: 'inline-flex' }}>
              {targetMember.name}
            </Txt>
          </div>
        </div>
      </Link>
    </li>
  );
};
