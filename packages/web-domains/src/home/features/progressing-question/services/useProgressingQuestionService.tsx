import dayjs from 'dayjs';
import { useSetAtom } from 'jotai';

import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';
import { useGetMyInfo } from '@/home/common/apis/queries/useGetMyInfo';
import { homeGlobalTimeAtom, isProgessingQuestionAtom } from '@/home/common/atoms/home.atom';

import { useGetProgressingQuestion } from '../../../common/apis/queries/useGetProgressingQuestion';

export const useProgressingQuestionService = () => {
  const setIsProgressingQuestion = useSetAtom(isProgessingQuestionAtom);
  const setHomeGlobalTime = useSetAtom(homeGlobalTimeAtom);
  const { data: meetingInfo } = useGetMeetingInfo({
    options: { gcTime: Infinity },
  });

  const { data: myInfo } = useGetMyInfo({
    params: { meetingId: meetingInfo?.meetingIds[0]! },
    options: { enabled: !!meetingInfo?.meetingIds[0] },
  });

  const { data: progressingQuestion } = useGetProgressingQuestion({
    params: { meetingId: meetingInfo?.meetingIds[0]! },
    options: {
      select: (data) => {
        if (data?.isQuestionRegistered) {
          setIsProgressingQuestion(true);
        }

        if (data?.startTime) {
          setHomeGlobalTime(dayjs(data.startTime).valueOf());
        }
        return data;
      },
      enabled: !!meetingInfo?.meetingIds[0],
    },
  });

  return {
    meetingId: meetingInfo?.meetingIds[0],
    gatherName: '삼봤드의 모험',
    progressingQuestion,
    myInfo,
  };
};
