import dayjs from 'dayjs';
import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { useGetMyInfo } from '@/home/common/apis/queries/useGetMyInfo';
import { HomeAtoms } from '@/home/common/atoms/home.atom';
import { useSetCurrentMeeting } from '@/home/common/hooks/useSetCurrentMeeting';

import { useGetProgressingQuestion } from '../../../common/apis/queries/useGetProgressingQuestion';

export const useProgressingQuestionService = () => {
  const { meetingId, gatherName, meetingInfo, handleChangeCurrentMeeting } = useSetCurrentMeeting();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const setIsProgressingQuestion = useSetAtom(HomeAtoms.isProgessingQuestionAtom);
  const setHomeGlobalTime = useSetAtom(HomeAtoms.homeGlobalTimeAtom);
  const setSelectedTarget = useSetAtom(HomeAtoms.isSelectedTargetAtom);
  const setIsNextTarget = useSetAtom(HomeAtoms.isNextTargetAtom);

  const { data: myInfo } = useGetMyInfo({
    params: { meetingId: meetingId! },
    options: { enabled: !!meetingId },
  });

  const { data: progressingQuestion } = useGetProgressingQuestion({
    params: { meetingId: meetingId! },
    options: {
      refetchInterval: 1000 * 30,

      enabled: !!meetingId,
    },
  });

  const handleOpenBottmSheet = () => {
    setIsOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpen]);

  useEffect(() => {
    if (progressingQuestion) {
      if (progressingQuestion?.isQuestionRegistered) {
        setIsProgressingQuestion(true);
      }

      if (progressingQuestion?.startTime) {
        setHomeGlobalTime(dayjs(progressingQuestion.startTime).valueOf());
      }
    }

    if (progressingQuestion && myInfo) {
      if (progressingQuestion?.targetMember?.meetingMemberId === myInfo?.meetingMemberId) {
        setSelectedTarget(true);
      }

      if (progressingQuestion?.nextTargetMember?.meetingMemberId === myInfo?.meetingMemberId) {
        setIsNextTarget(true);
      }
    }
  }, [progressingQuestion, myInfo]);

  return {
    meetingInfo,
    isOpen,
    meetingId,
    gatherName,
    progressingQuestion,
    handleCloseBottomSheet,
    handleOpenBottmSheet,
    handleChangeCurrentMeeting,
  };
};
