import { useQueryClient } from '@tanstack/react-query';

import { Params as CreateMeetingParams, useCreateMeeting } from '@/common/apis/queries/useCreateMeeting';
import { Params as CreateMeetingMemberParams } from '@/common/apis/queries/useCreateMeetingMember';
import { useUpdateLastMeeting } from '@/home/common/apis/mutations/useUpdateLastMeeting';
import { MEETING_INFO_QUERY_KEY } from '@/home/common/apis/queries/useGetMeetingName';

import { useMeetingMemberService } from './useMeetingMemberService';

export const useCreateMeetingService = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useCreateMeeting();
  const { participateMeeting } = useMeetingMemberService();
  const { mutateAsync: updateLastMeeting } = useUpdateLastMeeting({
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [MEETING_INFO_QUERY_KEY] });
      },
    },
  });

  const createMeeting = async (meetingParams: CreateMeetingParams, meetingMemberParams: CreateMeetingMemberParams) => {
    const { data } = await mutateAsync(meetingParams, {
      onError: (res) => {
        if (res.response?.status === 400) {
          alert('생성할 수 있는 모임을 초과했습니다.');
        }
      },
    });

    if (data) {
      const { inviteCode, meetingId } = data;
      meetingMemberParams.inviteCode = inviteCode;
      await participateMeeting(meetingMemberParams);
      await updateLastMeeting({ meetingId });
    }
  };

  return { createMeeting };
};
