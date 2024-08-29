import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import { Http } from '@/common/apis/base.api';

type Params = { meetingId: number };

interface Args {
  options?: UseMutationOptions<{} | undefined, unknown, Params>;
}

export const useUpdateLastMeeting = ({ options }: Args = {}) => {
  return useMutation({
    mutationFn: async (params: Params) => {
      const data = await updateLastMeeting(params);
      return data;
    },
    ...options,
  });
};

export async function updateLastMeeting(params: Params): Promise<{}> {
  const { meetingId } = params;
  const data = await Http.PATCH<Params, {}>(`/v1/users/last-meeting`, {
    meetingId,
  });
  return data;
}
