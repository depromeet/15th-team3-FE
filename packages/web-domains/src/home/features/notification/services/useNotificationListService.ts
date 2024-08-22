import { useGetEvents } from '@/home/common/apis/queries/useGetEvents';
import { useGetMyInfo } from '@/home/common/apis/queries/useGetMyInfo';
import { useSetCurrentMeeting } from '@/home/common/hooks/useSetCurrentMeeting';

export const useNotificationListService = () => {
  const { meetingId, meetingInfo } = useSetCurrentMeeting();

  console.log(meetingId);
  const { data: myInfo } = useGetMyInfo({
    params: { meetingId: meetingId! },
    options: { enabled: !!meetingId },
  });

  const { data } = useGetEvents({
    params: { meetingId: meetingId! },
    options: {
      enabled: !!meetingId,
    },
  });

  return {
    notficationList: data?.contents ?? [],
    myMemberId: myInfo?.meetingMemberId,
  };
};
