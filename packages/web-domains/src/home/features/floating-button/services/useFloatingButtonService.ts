import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

import { useDialogContext } from '@/common/contexts/DialogProvider';
import { HomeAtoms } from '@/home/common/atoms/home.atom';

export const useFloatingButtonService = () => {
  const currentMeeting = useAtomValue(HomeAtoms.currentMeeting);
  const [buttonType, setButtonType] = useState<'start' | 'countdown' | null>(null);

  const { isOpen, open, close } = useDialogContext();

  const homeGlobalTime = useAtomValue(HomeAtoms.homeGlobalTimeAtom);
  const isProgessingQuestion = useAtomValue(HomeAtoms.isProgessingQuestionAtom);
  const isSelectedTarget = useAtomValue(HomeAtoms.isSelectedTargetAtom);
  const isNextTarget = useAtomValue(HomeAtoms.isNextTargetAtom);

  useEffect(() => {
    const showButton = isProgessingQuestion;
    const startButtonActive = !showButton && isSelectedTarget;
    const countDownButtonActive = showButton && isNextTarget;

    if (startButtonActive) {
      setButtonType('start');
      return;
    }

    if (countDownButtonActive) {
      setButtonType('countdown');
      return;
    }

    setButtonType(null);
  }, [isProgessingQuestion, isSelectedTarget, isNextTarget]);

  useEffect(() => {
    close();
  }, [currentMeeting]);

  const handleClose = () => {
    close();
  };

  // const handleClickRelayStartButton = () => {
  //   if (isProgessingQuestion) {
  //     open();
  //     return;
  //   }
  //   push(`${currentMeeting?.meetingId}/start-relay-question`);
  // };

  return {
    isOpen,
    buttonType,
    homeGlobalTime: homeGlobalTime ?? 0,
    open,
    handleClose,
    // handleClickRelayStartButton,
  };
};
