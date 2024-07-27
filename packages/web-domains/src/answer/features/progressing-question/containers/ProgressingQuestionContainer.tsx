'use client';

import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import dayjs from 'dayjs';

import { AnswerCountDown } from '../components/AnswerCountdown';
import { QuestionInfo } from '../components/QuestionInfo';
import { ResponseGuageBar } from '../components/ResponseGuageBar';
import { useProgressingQuestionService } from '../services/useProgressingQuestionService';

export const ProgressingQuestionContainer = () => {
  const { progressingQuestion } = useProgressingQuestionService();

  if (!progressingQuestion) {
    return null;
  }

  return (
    <section css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div css={{ padding: '14px 20px', textAlign: 'center' }}>
        <Txt as="p" typography="body3" css={{ marginBottom: '8px' }} color={colors.black}>
          모임원들이 답변 중이에요
        </Txt>
        <Txt as="p" typography="heading1" color={colors.black}>
          릴레이 질문에 답변해보세요!
        </Txt>
      </div>
      <QuestionInfo question={progressingQuestion} />
      <ResponseGuageBar
        responseCount={progressingQuestion.responseCount}
        totalMeetingMemberCount={progressingQuestion.totalMeetingMemberCount}
      />
      <AnswerCountDown timer={dayjs().valueOf()} />
    </section>
  );
};
