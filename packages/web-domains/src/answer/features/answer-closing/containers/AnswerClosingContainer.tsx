'use client';

import { KakaoShareModal } from '@/common';

import { AnswerCountDown } from '../../../common/components/Countdown/AnswerCountdown';
import { ClosingButton } from '../../floating-button/components/ClosingButton';
import { ClosingMessage } from '../components/ClosingMessage';
import { useAnswerClosingService } from '../services/useAnswerClosingService';

const KAKAO_SHARE_IMAGE_URL = 'https://file.moring.one/defaults/question_narrow.png';

export const AnswerClosingContainer = () => {
  const { meetingId, meetingName, answerGlobalTime, isOpen, basePath, close } = useAnswerClosingService();

  return (
    <>
      <section
        css={{
          paddingTop: '64px',
          marginTop: '64px',
        }}
      >
        <ClosingMessage />
        <AnswerCountDown timer={answerGlobalTime} css={{ marginTop: '26px', padding: '12px 40px' }} />
        <ClosingButton />

        <KakaoShareModal
          isOpen={isOpen}
          onClose={close}
          topTitle="모임원들에게 릴레이 질문을"
          bottomTitle="공유해보세요!"
          shareDescription={`${meetingName} 모임 질문을 잊진 않으셨나요?`}
          shareImageUrl={KAKAO_SHARE_IMAGE_URL}
          shareLink={`${basePath}/${meetingId}/answer/opening`}
        />
      </section>
    </>
  );
};
