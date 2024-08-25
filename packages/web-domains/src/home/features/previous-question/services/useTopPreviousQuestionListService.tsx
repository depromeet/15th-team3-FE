import { useAtomValue } from 'jotai';

import { useGetTopPreviousQuestionList } from '@/home/common/apis/queries/useGetTopPreviousQuestionList';
import { HomeAtoms } from '@/home/common/atoms/home.atom';

export const useTopPreviousQuestionListService = () => {
  const currentMeeting = useAtomValue(HomeAtoms.currentMeeting);

  const meetingId = currentMeeting?.meetingId;

  const { data: previousQuestionList, isLoading } = useGetTopPreviousQuestionList({
    params: { meetingId: meetingId! },
    options: {
      select: (data) => {
        return data;
      },
      enabled: !!meetingId,
    },
  });

  return {
    isLoading,
    previousQuestionList,
    meetingId,
  };
};
