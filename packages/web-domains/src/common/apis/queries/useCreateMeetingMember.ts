import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { Http } from '../base.api';

import { MbtiType } from '@/user/common/constants/mbti';

interface MeetingMemberReponse {
  meetingId: number;
  meetingMemberId: number;
}

interface ErrorMeetingMemberResponse {
  code: string;
  message: string;
}

export interface Params {
  role: 'MEMBER' | 'OWNER';
  name: string;
  gender: 'FEMALE' | 'MALE';
  birth: string;
  job: string;
  location: string;
  hobbyIds: number[];
  mbti?: MbtiType;
  introduction?: string;
  inviteCode: string;
}

export const useCreateMeetingMember = (
  options?: UseMutationOptions<AxiosResponse<MeetingMemberReponse>, AxiosError, Params>,
) => {
  return useMutation<AxiosResponse<MeetingMemberReponse>, AxiosError<ErrorMeetingMemberResponse>, Params>({
    mutationFn: (params) => {
      const { inviteCode, ...bodyParams } = params;
      return Http.POST(`v1/meetings/members?code=${inviteCode}`, bodyParams);
    },
    ...options,
  });
};
