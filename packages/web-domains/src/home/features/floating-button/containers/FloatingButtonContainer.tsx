'use client';

import { AlreadyProgressingQuestionButton } from '../components/AlreadyProgressingQuestionButton';
import { StartRelayQuestionButton } from '../components/StartRelayQuestionButton';
import { useFloatingButtonService } from '../services/useFloatingButtonService';

export const FloatingButtonContainer = () => {
  const { buttonType, homeGlobalTime } = useFloatingButtonService();

  return (
    <div
      css={{ position: 'fixed', bottom: '40px', margin: '0 auto', width: '100%', maxWidth: '600px', padding: '0 20px' }}
    >
      {buttonType === 'start' && <StartRelayQuestionButton />}
      {buttonType === 'countdown' && <AlreadyProgressingQuestionButton time={homeGlobalTime} />}
    </div>
  );
};
