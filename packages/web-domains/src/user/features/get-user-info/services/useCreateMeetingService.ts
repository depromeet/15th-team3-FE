import { Params as CreateMeetingParams, useCreateMeeting } from '@/common/apis/queries/useCreateMeeting';
import { Params as CreateMeetingMemberParams } from '@/common/apis/queries/useCreateMeetingMember';

import { useMeetingMemberService } from './useMeetingMemberService';

export const useCreateMeetingService = () => {
  const { mutateAsync } = useCreateMeeting();
  const { participateMeeting } = useMeetingMemberService();

  const createMeeting = async (meetingParams: CreateMeetingParams, meetingMemberParams: CreateMeetingMemberParams) => {
    await mutateAsync(meetingParams, {
      onSuccess: (res) => {
        const { inviteCode } = res.data;
        meetingMemberParams.inviteCode = inviteCode;
        participateMeeting(meetingMemberParams);
      },
      onError: (res) => {
        if (res.response?.status === 400) {
          alert('생성할 수 있는 모임을 초과했습니다.');
        }
      },
    });
  };

  return { createMeeting };
};
