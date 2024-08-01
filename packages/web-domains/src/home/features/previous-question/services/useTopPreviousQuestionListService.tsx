import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';
import { useGetTopPreviousQuestionList } from '@/home/common/apis/queries/useGetTopPreviousQuestionList';

export const useTopPreviousQuestionListService = () => {
  const { data: meetingInfo } = useGetMeetingInfo({
    options: { gcTime: Infinity },
  });

  const { data: previousQuestionList } = useGetTopPreviousQuestionList({
    params: { meetingId: meetingInfo?.meetingId ?? 1 },
    options: {
      select: (data) => {
        console.log({ data });
        return data;
      },
    },
  });

  return {
    previousQuestionList,
  };
};
