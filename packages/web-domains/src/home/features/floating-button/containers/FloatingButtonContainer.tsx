'use client';

import { AlreadyProgressingQuestionButton } from '../components/AlreadyProgressingQuestionButton';
import { ProgressingQuestionModal } from '../components/ProgressingQuestionModal';
import { StartRelayQuestionButton } from '../components/StartRelayQuestionButton';
import { useFloatingButtonService } from '../services/useFloatingButtonService';

export const FloatingButtonContainer = () => {
  const { buttonType, homeGlobalTime, handleClose, isOpen, handleClickRelayStartButton, open } =
    useFloatingButtonService();

  return (
    <div
      css={{
        position: 'fixed',
        bottom: '98px',
        margin: '0 auto',
        width: '100%',
        maxWidth: '600px',
        padding: '0 20px',
      }}
    >
      {buttonType === 'start' && <StartRelayQuestionButton onClick={handleClickRelayStartButton} />}
      {buttonType === 'countdown' && <AlreadyProgressingQuestionButton time={homeGlobalTime} onClick={open} />}
      <ProgressingQuestionModal isOpen={isOpen} countdownTimer={homeGlobalTime} onClose={handleClose} />
    </div>
  );
};
