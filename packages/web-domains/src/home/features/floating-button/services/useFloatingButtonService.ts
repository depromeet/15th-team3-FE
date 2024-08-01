import { useAtomValue } from 'jotai';

import { homeGlobalTimeAtom, isProgessingQuestionAtom, isSelectedTargetAtom } from '@/home/common/atoms/home.atom';

export const useFloatingButtonService = () => {
  const homeGlobalTime = useAtomValue(homeGlobalTimeAtom);
  const isProgessingQuestion = useAtomValue(isProgessingQuestionAtom);
  const isSelectedTarget = useAtomValue(isSelectedTargetAtom);
  let buttonType: 'start' | 'countdown' | null = null;

  const showButton = isProgessingQuestion;

  const startButtonActive = showButton && isSelectedTarget;
  const countDownButtonActive = showButton && !isSelectedTarget;

  if (startButtonActive) {
    buttonType = 'start';
  }

  if (countDownButtonActive) {
    buttonType = 'countdown';
  }

  return {
    buttonType,
    homeGlobalTime: homeGlobalTime ?? 0,
  };
};
