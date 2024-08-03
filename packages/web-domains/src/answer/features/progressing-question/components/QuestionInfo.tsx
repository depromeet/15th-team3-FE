import { Txt } from '@sambad/sds/components';
import { borderRadiusVariants, colors } from '@sambad/sds/theme';

import { ProgressingQuestionType } from '@/home/common/apis/schema/useGetProgressingQuestionQuery.type';
import { Avatar } from '@/home/common/components/Avatar/Avatar';

interface QuestionInfoProps {
  question: ProgressingQuestionType;
}

export const QuestionInfo = ({ question }: QuestionInfoProps) => {
  const { targetMember, questionImageFileUrl, title, questionNumber } = question;

  return (
    <div css={{ width: '100%', padding: '12px 40px' }}>
      <div css={{ backgroundColor: colors.white, padding: '20px 20px 28px 20px', borderRadius: '16px' }}>
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
              imageUrl={question.questionImageFileUrl ?? ''}
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
            padding: '8px 0',
          }}
        >
          <Avatar
            imageUrl={questionImageFileUrl ?? ''}
            alt="question-image"
            width={64}
            height={64}
            css={{ borderRadius: borderRadiusVariants.medium }}
          />
          <Txt typography="heading2" css={{ marginTop: '8px' }}>
            {title}
          </Txt>
        </div>
      </div>
    </div>
  );
};
