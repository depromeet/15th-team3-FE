import { useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useAtomValue } from 'jotai';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

import { useAnswerQuestionMutation } from '@/answer/common/apis/mutations/useAnswerQuestionMutation';
import { useCommentMutation } from '@/answer/common/apis/mutations/useCommentMutation';
import { PROGRESSING_QUESTION_QUERY_KEY } from '@/answer/common/apis/queries/useGetProgressingQuestion';
import { answerAtoms } from '@/answer/common/atoms/answer.atom';
import { GATHER_MEMBER_QUERY_KEY } from '@/home/common/apis/queries/useGetGatherMemberList';
import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';
import { TOP_PREVIOUS_QUESTION_QUERY_KEY } from '@/home/common/apis/queries/useGetTopPreviousQuestionList';

export const useCommentService = () => {
  const queryClient = useQueryClient();
  const { push } = useRouter();
  const [comment, setComment] = useState<string>('');
  const answerList = useAtomValue(answerAtoms.answerList);
  const { questionId } = useParams<{ questionId: string }>();
  const { mutateAsync: sendCommentMutate } = useCommentMutation({});
  const { mutateAsync: sendAnswerMutate } = useAnswerQuestionMutation({});

  const { data: meetingInfo } = useGetMeetingInfo({
    options: { gcTime: Infinity },
  });

  const handleSubmit = async () => {
    const meetingId = meetingInfo?.meetingIds[0] ?? 1;

    try {
      await sendAnswerMutate({ meetingId: meetingId.toString(), meetingQuestionId: questionId, answerIds: answerList });
      if (comment.length) {
        await sendCommentMutate({ content: comment, meetingId, meetingQuestionId: questionId });
      }

      queryClient.invalidateQueries({
        queryKey: [PROGRESSING_QUESTION_QUERY_KEY, TOP_PREVIOUS_QUESTION_QUERY_KEY, GATHER_MEMBER_QUERY_KEY],
      });
      push('/answer/closing');
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error);
      }
    }
  };

  const handleChangeComment = (comment: string) => {
    setComment(comment);
  };

  return {
    comment,
    handleSubmit,
    handleChangeComment,
  };
};
