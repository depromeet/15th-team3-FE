import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';

export const useMeetingIntroService = () => {
  const { data: meetingInfo } = useGetMeetingInfo({
    options: { gcTime: Infinity },
  });

  const meetingId = meetingInfo?.meetings[0]?.meetingId;
  const meetingTitle = meetingInfo?.meetings[0]?.name;

  return {
    meetingId,
    gatherName: meetingTitle,
  };
};
