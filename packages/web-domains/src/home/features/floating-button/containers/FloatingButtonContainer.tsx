'use client';

import dayjs from 'dayjs';

import { AlreadyProgressingQuestionButton } from '../components/AlreadyProgressingQuestionButton';
import { StartRelayQuestionButton } from '../components/StartRelayQuestionButton';

export const FloatingButtonContainer = () => {
  return (
    <div
      css={{ position: 'fixed', bottom: '40px', margin: '0 auto', width: '100%', maxWidth: '600px', padding: '0 20px' }}
    >
      <AlreadyProgressingQuestionButton time={dayjs().valueOf()} />
      <StartRelayQuestionButton />
    </div>
  );
};
