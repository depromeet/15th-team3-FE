import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Http } from '@/common/apis/base.api';

import { HAND_WAVINGS_STATUS_QUERY_KEY } from '../queries/useGetHandWavingsStatus';

interface Request {
  meetingId: number;
  receiverMemberId: number;
}

export const useCreateHandWavings = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ meetingId, receiverMemberId }: Request) =>
      Http.POST(`/v1/meetings/${meetingId}/hand-wavings`, { receiverMemberId }),
    onSuccess: (_, variable) => queryClient.invalidateQueries({ queryKey: [HAND_WAVINGS_STATUS_QUERY_KEY, variable] }),
  });
};
