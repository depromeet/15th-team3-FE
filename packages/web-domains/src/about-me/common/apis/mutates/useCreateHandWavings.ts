import { useMutation } from '@tanstack/react-query';

import { Http } from '@/common/apis/base.api';

interface Request {
  meetingId: number;
  receiverMemberId: number;
}

export const useCreateHandWavings = () => {
  return useMutation({
    mutationFn: ({ meetingId, receiverMemberId }: Request) =>
      Http.POST(`/v1/meetings/${meetingId}/hand-wavings`, { receiverMemberId }),
  });
};
