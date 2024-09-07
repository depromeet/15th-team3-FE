import { ToolTip, Txt } from '@sambad/sds/components';
import { borderRadiusVariants, colors, size } from '@sambad/sds/theme';
import Link from 'next/link';

import { ArrowIcon } from '../../../../../common/asset/arrow';
import { Avatar } from '../../../../../common/components/Avatar/Avatar';
import { ProgressingQuestionType } from '../../../../common/apis/schema/useGetProgressingQuestionQuery.type';

interface ActiveQuestionProps {
  meetingId?: number;
  question: ProgressingQuestionType;
}

export const ActiveQuestion = ({ meetingId, question }: ActiveQuestionProps) => {
  const {
    responseCount,
    targetMember,
    questionImageFileUrl,
    title,
    totalMeetingMemberCount,
    questionNumber,
    isAnswered,
  } = question;

  return (
    <div css={{ backgroundColor: colors.white, padding: '20px', borderRadius: '16px', position: 'relative' }}>
      {!isAnswered && <ToolTip style={{ position: 'absolute', top: 16, right: 72 }}>답변을 아직 안했어요!</ToolTip>}
      <div css={{ display: 'flex', justifyContent: 'space-between' }}>
        <Txt
          typography="title4"
          color={colors.primary500}
          css={{ height: '18px', borderRadius: '100px', padding: '0 8px', backgroundColor: colors.primary100 }}
        >
          {questionNumber}번째 질문
        </Txt>
        <span css={{ display: 'flex', alignItems: 'center' }}>
          <Txt typography="title4" color={colors.grey600} css={{ marginRight: '4px' }}>
            {targetMember.name}
          </Txt>
          <Avatar
            imageUrl={targetMember.profileImageFileUrl ?? ''}
            width={20}
            height={20}
            css={{ borderRadius: '50%' }}
          />
        </span>
      </div>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 0',
        }}
      >
        <Avatar
          imageUrl={questionImageFileUrl ?? ''}
          alt="question-image"
          width={64}
          height={64}
          css={{ borderRadius: borderRadiusVariants.medium }}
        />
        <Txt typography="heading2" css={{ marginTop: '24px' }}>
          {title}
        </Txt>
      </div>
      <div css={{ display: 'flex' }}>
        <div css={{ width: '100%', marginRight: '16px' }}>
          <Txt typography="body4" css={{ marginRight: '4px' }}>
            {totalMeetingMemberCount}명 중
          </Txt>
          <Txt typography="subtitle1">{responseCount}명 완료</Txt>
          <span
            css={{
              padding: 0,
              width: '100%',
              display: 'inline-block',
              backgroundColor: colors.grey400,
              borderRadius: borderRadiusVariants.round,
              height: size['7xs'],
              ':after': {
                content: '""',
                display: 'block',
                width: `${Math.min(1, responseCount / totalMeetingMemberCount) * 100}%`,
                height: size['7xs'],
                backgroundColor: colors.primary500,
              },
            }}
          />
        </div>
        {!isAnswered && (
          <Link href={`/${meetingId}/answer/opening`}>
            <button
              css={{
                flexShrink: 0,
                width: '48px',
                height: '48px',
                borderRadius: borderRadiusVariants.round,
                backgroundColor: colors.primary500,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                ':hover': {
                  backgroundColor: colors.primary600,
                },
                ':pressed': {
                  backgroundColor: colors.primary600,
                },
              }}
            >
              <ArrowIcon />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
