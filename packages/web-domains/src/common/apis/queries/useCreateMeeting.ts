import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { Http } from '../base.api';

interface CreateMeetingReponse {
  meetingId: number;
  inviteCode: string;
}

interface ErrorCreateMeetingResponse {
  code: string;
  message: string;
}

export interface Params {
  name: string;
  meetingTypeIds: number[];
}

export const useCreateMeeting = (
  options?: UseMutationOptions<AxiosResponse<CreateMeetingReponse>, AxiosError, Params>,
) => {
  return useMutation<AxiosResponse<CreateMeetingReponse>, AxiosError<ErrorCreateMeetingResponse>, Params>({
    mutationFn: (params) => {
      return Http.POST(`v1/meetings`, params);
    },
    ...options,
  });
};
