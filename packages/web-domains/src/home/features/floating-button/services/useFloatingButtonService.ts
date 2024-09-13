import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

import { useDialogContext } from '@/common/contexts/DialogProvider';
import { useGetGatherMemberList } from '@/home/common/apis/queries/useGetGatherMemberList';
import { HomeAtoms } from '@/home/common/atoms/home.atom';
import { MEETING_ACTIVATED_LIMIT } from '@/home/common/constants/meetingActivatedLimit';

export const useFloatingButtonService = () => {
  const currentMeeting = useAtomValue(HomeAtoms.currentMeeting);
  const [buttonType, setButtonType] = useState<'start' | 'countdown' | null>(null);

  const { isOpen, open, close } = useDialogContext();

  const homeGlobalTime = useAtomValue(HomeAtoms.homeGlobalTimeAtom);
  const isProgessingQuestion = useAtomValue(HomeAtoms.isProgessingQuestionAtom);
  const isSelectedTarget = useAtomValue(HomeAtoms.isSelectedTargetAtom);
  const isNextTarget = useAtomValue(HomeAtoms.isNextTargetAtom);

  const { data: memberList } = useGetGatherMemberList({
    params: { meetingId: currentMeeting?.meetingId! },
    options: {
      enabled: !!currentMeeting?.meetingId,
    },
  });

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

  const isOnlyOne = !!memberList && memberList.contents.length < MEETING_ACTIVATED_LIMIT;

  return {
    meetingId: currentMeeting?.meetingId,
    isOpen,
    buttonType,
    homeGlobalTime: homeGlobalTime ?? 0,
    open,
    handleClose,
    isOnlyOne,
  };
};
