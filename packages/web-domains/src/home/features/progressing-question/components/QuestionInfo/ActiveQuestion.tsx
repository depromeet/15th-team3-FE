import { Txt } from '@sambad/sds/components';
import { borderRadiusVariants, colors, size } from '@sambad/sds/theme';

import { ArrowIcon } from '../../../../../common/asset/arrow';
import { ProfileImage } from '../../../../../common/asset/profile';
import { QuestionImage } from '../../../../../common/asset/question';
import { ProgressingQuestionType } from '../../../../common/apis/schema/useGetProgressingQuestionQuery.type';
import { Avatar } from '../../../../common/Avatar/Avatar';

interface ActiveQuestionProps {
  question: ProgressingQuestionType;
}

export const ActiveQuestion = ({ question }: ActiveQuestionProps) => {
  const { responseCount, targetMember, questionImageFileUrl, title, totalMeetingMemberCount, questionNumber } =
    question;

  return (
    <div css={{ backgroundColor: colors.white, padding: '20px', borderRadius: '16px' }}>
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
          <Avatar size={20} Icon={ProfileImage} />
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
        <Avatar imageUrl={questionImageFileUrl} alt="question-image" Icon={QuestionImage} />
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
                width: `${(responseCount / totalMeetingMemberCount) * 100}%`,
                height: size['7xs'],
                backgroundColor: colors.primary500,
              },
            }}
          />
        </div>
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
      </div>
    </div>
  );
};
