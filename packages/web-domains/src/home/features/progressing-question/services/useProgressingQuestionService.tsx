import dayjs from 'dayjs';
import { useSetAtom } from 'jotai';

import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';
import { homeGlobalTimeAtom, isProgessingQuestionAtom } from '@/home/common/atoms/home.atom';

import { useGetProgressingQuestion } from '../../../common/apis/queries/useGetProgressingQuestion';

export const useProgressingQuestionService = () => {
  const setIsProgressingQuestion = useSetAtom(isProgessingQuestionAtom);
  const setHomeGlobalTime = useSetAtom(homeGlobalTimeAtom);
  const { data: meetingInfo } = useGetMeetingInfo({
    options: { gcTime: Infinity },
  });

  const { data: progressingQuestion } = useGetProgressingQuestion({
    params: { meetingId: meetingInfo?.meetingId ?? 1 },
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
      enabled: !!meetingInfo,
    },
  });

  return {
    meetingId: meetingInfo?.meetingId,
    gatherName: meetingInfo?.meetingName ?? '',
    progressingQuestion,
  };
};
