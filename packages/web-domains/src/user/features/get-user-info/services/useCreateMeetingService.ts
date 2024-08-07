import { Params as CreateMeetingParams, useCreateMeeting } from '@/common/apis/queries/useCreateMeeting';
import { Params as CreateMeetingMemberParams } from '@/common/apis/queries/useCreateMeetingMember';

import { useMeetingMemberService } from './useMeetingMemberService';

export const useCreateMeetingService = () => {
  const { mutateAsync } = useCreateMeeting();
  const { participateMeeting } = useMeetingMemberService();

  const createMeeting = async (meetingParams: CreateMeetingParams, meetingMemberParams: CreateMeetingMemberParams) => {
    console.log(meetingParams);
    console.log(meetingMemberParams);
    await mutateAsync(meetingParams, {
      onSuccess: (res) => {
        const { inviteCode } = res.data;
        meetingMemberParams.inviteCode = inviteCode;
        participateMeeting(meetingMemberParams);
      },
      onError: (res) => {
        console.log(res);
      },
    });
  };

  return { createMeeting };
};
