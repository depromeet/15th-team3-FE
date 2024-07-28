'use client';

import dayjs from 'dayjs';

import { AnswerCountDown } from '../../../common/components/AnswerCountdown';
import { ClosingMessage } from '../components/ClosingMessage';

export const AnswerClosingContainer = () => {
  return (
    <>
      <section
        css={{
          paddingTop: '64px',
          marginTop: '64px',
        }}
      >
        <ClosingMessage />
        <AnswerCountDown timer={dayjs().valueOf()} css={{ marginTop: '26px', padding: '12px 40px' }} />
      </section>
    </>
  );
};
