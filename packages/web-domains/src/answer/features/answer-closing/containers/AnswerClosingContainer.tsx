'use client';

import { AnswerCountDown } from '../../../common/components/AnswerCountdown';
import { ClosingButton } from '../../floating-button/components/ClosingButton';
import { ClosingMessage } from '../components/ClosingMessage';
import { useAnswerClosingService } from '../services/useAnswerClosingService';

export const AnswerClosingContainer = () => {
  const { answerGlobalTime } = useAnswerClosingService();

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
      </section>
    </>
  );
};
