import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Http } from '@/common/apis/base.api';
import { MbtiType } from '@/user/common/constants/mbti';

import { MeetingMemberResponse } from '../schema/MeetingMemberResponse';

export type Params = {
  meetingId: number;
  name: string;
  gender: 'FEMALE' | 'MALE';
  birth: string;
  job: string;
  location: string;
  hobbyIds: number[];
  mbti?: MbtiType;
  introduction?: string;
  // Todo: 삭제
  role: string;
};

interface ErrorModifyUserInfoResponse {
  code: string;
  message: string;
}

interface Args {
  options?: UseMutationOptions<MeetingMemberResponse | undefined, AxiosError<ErrorModifyUserInfoResponse>, Params>;
}

export const useModifyUserInfo = ({ options }: Args) => {
  return useMutation({
    mutationFn: async (params: Params) => {
      return await modifyUserInfo(params);
    },
    ...options,
  });
};

async function modifyUserInfo(params: Params): Promise<MeetingMemberResponse> {
  const { meetingId, ...restParams } = params;
  const data = await Http.PATCH<Params, MeetingMemberResponse>(`/v1/meetings/${meetingId}/members/me`, restParams);
  return data;
}
