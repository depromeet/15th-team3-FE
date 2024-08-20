import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';

import { useDialogContext } from '@/common/contexts/DialogProvider';
import {
  homeGlobalTimeAtom,
  isNextTargetAtom,
  isProgessingQuestionAtom,
  isSelectedTargetAtom,
} from '@/home/common/atoms/home.atom';

export const useFloatingButtonService = () => {
  const { isOpen, open, close } = useDialogContext();
  const { push } = useRouter();

  const homeGlobalTime = useAtomValue(homeGlobalTimeAtom);
  const isProgessingQuestion = useAtomValue(isProgessingQuestionAtom);
  const isSelectedTarget = useAtomValue(isSelectedTargetAtom);
  const isNextTarget = useAtomValue(isNextTargetAtom);
  let buttonType: 'start' | 'countdown' | null = null;

  const showButton = isProgessingQuestion;

  const startButtonActive = !showButton && isSelectedTarget;
  const countDownButtonActive = showButton && isNextTarget;

  if (startButtonActive) {
    buttonType = 'start';
  }

  if (countDownButtonActive) {
    buttonType = 'countdown';
  }

  const handleClose = () => {
    close();
  };

  const handleClickRelayStartButton = () => {
    if (isProgessingQuestion) {
      open();
      return;
    }
    push('/start-relay-question');
  };

  return {
    isOpen,
    buttonType,
    homeGlobalTime: homeGlobalTime ?? 0,
    open,
    handleClose,
    handleClickRelayStartButton,
  };
};
