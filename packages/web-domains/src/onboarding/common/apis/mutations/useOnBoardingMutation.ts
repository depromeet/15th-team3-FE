import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import { Http } from '@/common/apis/base.api';

interface OnBoardingCompleteResponse {
  isNotEnteredAnyMeeting: boolean;
}

interface Args {
  options?: UseMutationOptions<OnBoardingCompleteResponse | undefined, unknown>;
}

export const useOnBoardingCompleteMutation = ({ options }: Args = {}) => {
  return useMutation({
    mutationFn: async () => {
      try {
        const data = await onBoardingComplete();
        return data;
      } catch (error) {
        if (isAxiosError(error)) {
          console.error(error);
        }
      }
    },
    ...options,
  });
};

export async function onBoardingComplete(): Promise<OnBoardingCompleteResponse> {
  const data = await Http.PATCH<unknown, OnBoardingCompleteResponse>(`/v1/users/onboarding/complete`);
  return data;
}
