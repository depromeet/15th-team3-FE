import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { Http } from '../../../../../common/apis/base.api';

interface Payload {
  questionId: number;
  meetingMemberId: number;
}

interface PostRelayQuestionInfoParams {
  meetingId: number;
  payload: Payload;
}

const _postRelayQuestionInfo = async ({ meetingId, payload }: PostRelayQuestionInfoParams) =>
  await Http.POST(`/v1/meetings/${meetingId}/questions`, payload);

export const usePostRelayQuestionInfo = (meetingId: number) => {
  const { mutate: postRelayQuestionInfo, ...rest } = useMutation({
    mutationFn: (payload: Payload) => _postRelayQuestionInfo({ meetingId, payload }),
    onSuccess: () => {},
    onError: (error: AxiosError<{ message: string }>) => {
      alert(error.response?.data.message ?? '댓글 수정에 실패했습니다.');
    },
  });

  return { postRelayQuestionInfo, ...rest };
};
