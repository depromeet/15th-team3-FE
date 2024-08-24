import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { Http } from '@/common/apis/base.api';

import { ANSWERS_ME_QUERY_KEY } from '../queries/useGetAnswersMe';

interface Request {
  meetingId: number;
  activeMeetingQuestionIds: Array<number>;
}

export const useUpdateQuestionsActive = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutationFn = ({ meetingId, activeMeetingQuestionIds }: Request) => {
    const params =
      activeMeetingQuestionIds.length > 0
        ? `?${activeMeetingQuestionIds.map((id) => `activeMeetingQuestionIds=${id}`).join('&')}`
        : '';

    return Http.PATCH(`/v1/meetings/${meetingId}/questions/active${params}`);
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ANSWERS_ME_QUERY_KEY] });
      router.push('/about/me');
    },
  });
};
