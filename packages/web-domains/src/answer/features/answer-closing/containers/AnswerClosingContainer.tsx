'use client';

import dayjs from 'dayjs';

import { AnswerCountDown } from '../../../common/components/AnswerCountdown';
import { Character } from '../../../common/components/Character';
import { ClosingMessage } from '../components/ClosingMessage';

export const AnswerClosingContainer = () => {
  return (
    <section css={{ paddingTop: '64px', marginTop: '64px' }}>
      <ClosingMessage />
      <AnswerCountDown timer={dayjs().valueOf()} css={{ marginTop: '26px', padding: '12px 40px' }} />
      <div css={{ display: 'flex', justifyContent: 'center', padding: '0 40px' }}>
        <Character />
      </div>
    </section>
  );
};
