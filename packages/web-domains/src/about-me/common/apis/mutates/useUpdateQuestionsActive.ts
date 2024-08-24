import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';

import { Http } from '@/common/apis/base.api';

import { ANSWERS_ME_QUERY_KEY } from '../queries/useGetAnswersMe';

interface Request {
  meetingId: number;
  activeMeetingQuestionIds: Array<number>;
}

interface MutationProps {
  options?: UseMutationOptions<unknown, unknown, Request>;
}

export const useUpdateQuestionsActive = ({ options }: MutationProps = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ meetingId, activeMeetingQuestionIds }: Request) => {
      // NOTE: PATCH지만, params로 넘겨줘야 해서 전처리
      const params = activeMeetingQuestionIds.map((id) => `activeMeetingQuestionIds=${id}`).join('&');
      return Http.PATCH(`/v1/meetings/${meetingId}/questions/active?${params}`);
    },
    onSuccess: (data, variable, context) => {
      queryClient.invalidateQueries({ queryKey: [ANSWERS_ME_QUERY_KEY, variable.meetingId] });

      options?.onSuccess?.(data, variable, context);
    },
  });
};
