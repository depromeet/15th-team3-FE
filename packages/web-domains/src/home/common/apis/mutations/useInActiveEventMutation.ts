import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import { Http } from '@/common/apis/base.api';

type Params = { eventId: number };

interface Args {
  options?: UseMutationOptions<{} | undefined, unknown, Params>;
}

export const useInActiveEventMutation = ({ options }: Args = {}) => {
  return useMutation({
    mutationFn: async (params: Params) => {
      try {
        const data = await inactiveEvent(params);
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

export async function inactiveEvent(params: Params): Promise<{}> {
  const { eventId } = params;
  const data = await Http.PATCH<Params, {}>(`/v1/events/${eventId}/inactive`, {});
  return data;
}
