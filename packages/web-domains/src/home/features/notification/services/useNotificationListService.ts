import { useHandWavingIgonoreMutation } from '@/home/common/apis/mutations/useHandWavingIgnoreMutation';
import { useHandWavingResponseMutation } from '@/home/common/apis/mutations/useHandWavingResponseMutation';
import { useGetEvents } from '@/home/common/apis/queries/useGetEvents';
import { useGetMyInfo } from '@/home/common/apis/queries/useGetMyInfo';
import { useSetCurrentMeeting } from '@/home/common/hooks/useSetCurrentMeeting';

export const useNotificationListService = () => {
  const { meetingId } = useSetCurrentMeeting();

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

  const { mutate: ignoreHandWaving } = useHandWavingIgonoreMutation();

  const { mutate: handWavingResponse } = useHandWavingResponseMutation();

  return {
    meetingId,
    notficationList: data?.contents ?? [],
    myMemberId: myInfo?.meetingMemberId,
    ignoreHandWaving,
    handWavingResponse,
  };
};
