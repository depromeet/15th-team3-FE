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
import { NOTIFICATION_QUERY_KEY } from '@/home/common/apis/queries/useGetNotification';
import { TOP_PREVIOUS_QUESTION_QUERY_KEY } from '@/home/common/apis/queries/useGetTopPreviousQuestionList';

export const useCommentService = () => {
  const queryClient = useQueryClient();
  const { push } = useRouter();
  const [comment, setComment] = useState<string>('');
  const answerList = useAtomValue(answerAtoms.answerList);
  const { meetingId, questionId } = useParams<{ meetingId: string; questionId: string }>();
  const { mutateAsync: sendCommentMutate } = useCommentMutation({});
  const { mutateAsync: sendAnswerMutate } = useAnswerQuestionMutation({});

  const handleSubmit = async () => {
    if (!meetingId) {
      return;
    }

    try {
      await sendAnswerMutate({ meetingId: meetingId, meetingQuestionId: questionId, answerIds: answerList });
      if (comment.length) {
        await sendCommentMutate({ content: comment, meetingId: parseInt(meetingId), meetingQuestionId: questionId });
      }

      const questionInvalidate = queryClient.invalidateQueries({
        queryKey: [PROGRESSING_QUESTION_QUERY_KEY],
      });
      const topPreviousQuestionInvalidate = queryClient.invalidateQueries({
        queryKey: [TOP_PREVIOUS_QUESTION_QUERY_KEY],
      });

      const gatherMemberInvalidate = queryClient.invalidateQueries({
        queryKey: [GATHER_MEMBER_QUERY_KEY],
      });

      const notificationInvalidate = queryClient.invalidateQueries({
        queryKey: [NOTIFICATION_QUERY_KEY],
      });

      Promise.all([questionInvalidate, topPreviousQuestionInvalidate, gatherMemberInvalidate, notificationInvalidate]);

      push(`/${meetingId}/answer/closing`);
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
