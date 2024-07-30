import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { Http } from '../base.api';

interface JoinMemberResponse {
  meetingId: number;
  meetingMemberId: number;
}

interface JoinMemberData {
  role: string;
  name: string;
  gender: string;
  birth: string;
  job: string;
  location: string;
  hobbyIds: number[];
  mbti: string;
  introduction: string;
}

// 타입 다른 사람들 컨벤션 따라가기
export const useJoinMember = (
  options?: UseMutationOptions<AxiosResponse<JoinMemberResponse>, AxiosError, JoinMemberData>,
) => {
  return useMutation<AxiosResponse<JoinMemberResponse>, AxiosError, JoinMemberData>({
    mutationFn: (params) => Http.POST('v1/member', params),
    ...options,
  });
};
