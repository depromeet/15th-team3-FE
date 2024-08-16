import dayjs from 'dayjs';
import { useSetAtom } from 'jotai';

import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';
import { useGetMyInfo } from '@/home/common/apis/queries/useGetMyInfo';
import { homeGlobalTimeAtom, isProgessingQuestionAtom, isSelectedTargetAtom } from '@/home/common/atoms/home.atom';

import { useGetProgressingQuestion } from '../../../common/apis/queries/useGetProgressingQuestion';

export const useProgressingQuestionService = () => {
  const setIsProgressingQuestion = useSetAtom(isProgessingQuestionAtom);
  const setHomeGlobalTime = useSetAtom(homeGlobalTimeAtom);
  const setSelectedTarget = useSetAtom(isSelectedTargetAtom);
  const { data: meetingInfo } = useGetMeetingInfo({
    options: { gcTime: Infinity },
  });

  const meetingId = meetingInfo?.meetings[0]?.meetingId;

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
        return data;
      },
      enabled: !!meetingId,
    },
  });

  return {
    meetingId,
    gatherName: '삼봤드의 모험',
    progressingQuestion,
  };
};
