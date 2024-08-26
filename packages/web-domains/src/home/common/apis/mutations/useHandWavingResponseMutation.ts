import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import { Http } from '@/common/apis/base.api';

type Params = { meetingId: number; handWavingId: number };

interface Args {
  options?: UseMutationOptions<{} | undefined, unknown, Params>;
}

export const useHandWavingResponseMutation = ({ options }: Args = {}) => {
  return useMutation({
    mutationFn: async (params: Params) => {
      const data = await handWavingResponse(params);
      return data;
    },
    ...options,
  });
};

export async function handWavingResponse(params: Params): Promise<{}> {
  const { handWavingId, meetingId } = params;
  const data = await Http.PATCH<Params, {}>(`/v1/meetings/${meetingId}/hand-wavings/${handWavingId}/accept`, {});
  return data;
}
