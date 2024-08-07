import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import { Http } from '@/common/apis/base.api';

type Params = { meetingId: number; meetingQuestionId: number; answerIds: number[] };

interface Args {
  options?: UseMutationOptions<{} | undefined, unknown, Params>;
}

export const useAnswerQuestionMutation = ({ options }: Args) => {
  return useMutation({
    mutationFn: async (params: Params) => {
      try {
        const data = await answerQuestion(params);
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

export async function answerQuestion(params: Params): Promise<{}> {
  const { meetingId, meetingQuestionId, answerIds } = params;
  const data = await Http.POST<Params, {}>(`/v1/meetings/${meetingId}/questions/${meetingQuestionId}/answers`, {
    answerIds,
  });
  return data;
}
