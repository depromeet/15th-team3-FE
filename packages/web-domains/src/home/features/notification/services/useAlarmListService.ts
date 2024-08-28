import { useQueryClient } from '@tanstack/react-query';

import { HAND_WAVINGS_STATUS_QUERY_KEY } from '@/about-me/common/apis/queries/useGetHandWavingsStatus';
import { useHandWavingIgonoreMutation } from '@/home/common/apis/mutations/useHandWavingIgnoreMutation';
import { useHandWavingResponseMutation } from '@/home/common/apis/mutations/useHandWavingResponseMutation';
import { EVENTS_QUERY_KEY, useGetEvents } from '@/home/common/apis/queries/useGetEvents';
import { GATHER_MEMBER_QUERY_KEY } from '@/home/common/apis/queries/useGetGatherMemberList';
import { useGetMyInfo } from '@/home/common/apis/queries/useGetMyInfo';
import { useSetCurrentMeeting } from '@/home/common/hooks/useSetCurrentMeeting';

export const useAlarmListService = () => {
  const queryClient = useQueryClient();
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

  const { mutate: ignoreHandWaving } = useHandWavingIgonoreMutation({
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY] });
        queryClient.invalidateQueries({ queryKey: [GATHER_MEMBER_QUERY_KEY] });
        queryClient.invalidateQueries({ queryKey: [HAND_WAVINGS_STATUS_QUERY_KEY] });
      },
    },
  });

  const { mutate: handWavingResponse } = useHandWavingResponseMutation({
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY] });
        queryClient.invalidateQueries({ queryKey: [GATHER_MEMBER_QUERY_KEY] });
        queryClient.invalidateQueries({ queryKey: [HAND_WAVINGS_STATUS_QUERY_KEY] });
      },
    },
  });

  return {
    meetingId,
    notificationList: data?.contents ?? [],
    myMemberId: myInfo?.meetingMemberId,
    ignoreHandWaving,
    handWavingResponse,
  };
};
