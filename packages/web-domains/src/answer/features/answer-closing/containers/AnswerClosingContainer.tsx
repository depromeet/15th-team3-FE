'use client';

import { KakaoShareModal } from '@/common';

import { AnswerCountDown } from '../../../common/components/AnswerCountdown';
import { ClosingButton } from '../../floating-button/components/ClosingButton';
import { ClosingMessage } from '../components/ClosingMessage';
import { useAnswerClosingService } from '../services/useAnswerClosingService';

export const AnswerClosingContainer = () => {
  const { answerGlobalTime, isOpen, basePath, close } = useAnswerClosingService();

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
          shareLink={`${basePath}/answer/opening`}
        />
      </section>
    </>
  );
};
