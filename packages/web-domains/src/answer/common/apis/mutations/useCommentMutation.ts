import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import { Http } from '@/common/apis/base.api';

type Params = { meetingId: number; meetingQuestionId: number; content: string };

interface Args {
  options?: UseMutationOptions<{} | undefined, unknown, any>;
}

export const useCommentMutation = ({ options }: Args) => {
  return useMutation({
    mutationFn: async (params: Params) => {
      try {
        const data = await sendComment(params);
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

export async function sendComment(params: Params): Promise<{}> {
  const { meetingId, meetingQuestionId, content } = params;
  const data = await Http.POST<Params, {}>(`/v1/meetings/${meetingId}/questions/comments`, {
    meetingQuestionId,
    content,
  });
  return data;
}
