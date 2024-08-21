import dayjs from 'dayjs';
import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';
import { useGetMyInfo } from '@/home/common/apis/queries/useGetMyInfo';
import {
  homeGlobalTimeAtom,
  isNextTargetAtom,
  isProgessingQuestionAtom,
  isSelectedTargetAtom,
} from '@/home/common/atoms/home.atom';

import { useGetProgressingQuestion } from '../../../common/apis/queries/useGetProgressingQuestion';

export const useProgressingQuestionService = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const setIsProgressingQuestion = useSetAtom(isProgessingQuestionAtom);
  const setHomeGlobalTime = useSetAtom(homeGlobalTimeAtom);
  const setSelectedTarget = useSetAtom(isSelectedTargetAtom);
  const setIsNextTarget = useSetAtom(isNextTargetAtom);
  const { data: meetingInfo } = useGetMeetingInfo({
    options: { gcTime: Infinity },
  });

  const meetingId = meetingInfo?.meetings[0]?.meetingId;
  const meetingTitle = meetingInfo?.meetings[0]?.name;

  const { data: myInfo } = useGetMyInfo({
    params: { meetingId: meetingId! },
    options: { enabled: !!meetingId },
  });

  const { data: progressingQuestion } = useGetProgressingQuestion({
    params: { meetingId: meetingId! },
    options: {
      refetchInterval: 1000 * 30,
      select: (data) => {
        if (data?.isQuestionRegistered) {
          setIsProgressingQuestion(true);
        }

        if (data?.targetMember.meetingMemberId === myInfo?.meetingMemberId) {
          setSelectedTarget(true);
        }

        if (data?.startTime) {
          setHomeGlobalTime(dayjs(data.startTime).valueOf());
        }

        if (data?.nextTargetMember?.meetingMemberId === myInfo?.meetingMemberId) {
          setIsNextTarget(true);
        }
        return data;
      },
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

  return {
    isOpen,
    meetingId,
    gatherName: meetingTitle,
    progressingQuestion,
    handleCloseBottomSheet,
    handleOpenBottmSheet,
  };
};
