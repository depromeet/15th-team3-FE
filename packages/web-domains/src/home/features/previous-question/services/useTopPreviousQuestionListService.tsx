import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';
import { useGetTopPreviousQuestionList } from '@/home/common/apis/queries/useGetTopPreviousQuestionList';

export const useTopPreviousQuestionListService = () => {
  const { data: meetingInfo } = useGetMeetingInfo({
    options: { gcTime: Infinity },
  });

  const meetingId = meetingInfo && meetingInfo.meetings[0] && meetingInfo.meetings[0].meetingId;

  const { data: previousQuestionList } = useGetTopPreviousQuestionList({
    params: { meetingId: meetingId! },
    options: {
      select: (data) => {
        return data;
      },
      enabled: !!meetingId,
    },
  });

  return {
    previousQuestionList,
    meetingId,
  };
};
