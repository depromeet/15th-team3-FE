'use client';

import { Button, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Link from 'next/link';

import { EmptyView } from '@/common/components';

import { AnswerCountDown } from '../../../common/components/Countdown/AnswerCountdown';
import { StartButton } from '../../floating-button/components/StartButton';
import { QuestionInfo } from '../components/QuestionInfo';
import { ResponseGuageBar } from '../components/ResponseGuageBar';
import { ProgressingQuestionContainerSkeleton } from '../components/Skeleton/ProgressingQuestionContainerSkeleton';
import { useProgressingQuestionService } from '../services/useProgressingQuestionService';

export const ProgressingQuestionContainer = () => {
  const { progressingQuestion, meetingId, isLoading } = useProgressingQuestionService();

  const isNowAnswered = !progressingQuestion?.isAnswered;

  if (isLoading) return <ProgressingQuestionContainerSkeleton />;

  if (!progressingQuestion) {
    return null;
  }

  if (!progressingQuestion.isQuestionRegistered) {
    return (
      <section css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <EmptyView
          title={
            !progressingQuestion?.isQuestionRegistered ? '답변 시간이 만료되었어요!' : '현재 진행중인 질문이 없어요!'
          }
          style={{ height: '50%' }}
          css={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
        />
        <Link
          href="/home"
          css={{
            position: 'fixed',
            bottom: '40px',
            margin: '0 auto',
            width: '100%',
            maxWidth: '600px',
            padding: '0 20px',
          }}
        >
          <Button size="large">
            <Txt typography="subtitle1" color={colors.white}>
              홈으로 가기
            </Txt>
          </Button>
        </Link>
      </section>
    );
  }

  return (
    <section css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div css={{ padding: '14px 20px', textAlign: 'center' }}>
        <Txt as="p" typography="body3" css={{ marginBottom: '8px' }} color={colors.black}>
          모임원들이 답변 중이에요
        </Txt>
        <Txt as="p" typography="heading1" color={colors.black}>
          {isNowAnswered ? '릴레이 질문에 답변해보세요!' : '이미 답변한 질문이에요!'}
        </Txt>
      </div>
      <QuestionInfo question={progressingQuestion} />
      <ResponseGuageBar
        responseCount={progressingQuestion.responseCount}
        totalMeetingMemberCount={progressingQuestion.totalMeetingMemberCount}
      />
      <AnswerCountDown timer={progressingQuestion.startTime} css={{ marginTop: '40px', paddingBottom: '100px' }} />
      {isNowAnswered && (
        <StartButton questionId={progressingQuestion.meetingQuestionId} meetingId={parseInt(meetingId)} />
      )}
    </section>
  );
};
