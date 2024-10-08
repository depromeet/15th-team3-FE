import { useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useAtomValue, useSetAtom } from 'jotai';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

import { ANSWERS_ME_QUERY_KEY } from '@/about-me/common/apis/queries/useGetAnswersMe';
import { useAnswerQuestionMutation } from '@/answer/common/apis/mutations/useAnswerQuestionMutation';
import { useCommentMutation } from '@/answer/common/apis/mutations/useCommentMutation';
import { PROGRESSING_QUESTION_QUERY_KEY } from '@/answer/common/apis/queries/useGetProgressingQuestion';
import { answerAtoms } from '@/answer/common/atoms/answer.atom';
import { GATHER_MEMBER_QUERY_KEY } from '@/home/common/apis/queries/useGetGatherMemberList';
import { NOTIFICATION_QUERY_KEY } from '@/home/common/apis/queries/useGetNotification';
import { TOP_PREVIOUS_QUESTION_QUERY_KEY } from '@/home/common/apis/queries/useGetTopPreviousQuestionList';
import { HomeAtoms } from '@/home/common/atoms/home.atom';

export const useCommentService = () => {
  const queryClient = useQueryClient();
  const { push } = useRouter();
  const [comment, setComment] = useState<string>('');
  const answerList = useAtomValue(answerAtoms.answerList);
  const { meetingId, questionId } = useParams<{ meetingId: string; questionId: string }>();
  const { mutateAsync: sendCommentMutate, isPending: isSendCommentPending } = useCommentMutation({});
  const { mutateAsync: sendAnswerMutate, isPending: isAnswerQuestionPending } = useAnswerQuestionMutation({});

  const setIsProgressingQuestion = useSetAtom(HomeAtoms.isProgessingQuestionAtom);
  const setHomeGlobalTime = useSetAtom(HomeAtoms.homeGlobalTimeAtom);
  const setSelectedTarget = useSetAtom(HomeAtoms.isSelectedTargetAtom);
  const setIsNextTarget = useSetAtom(HomeAtoms.isNextTargetAtom);

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
      const myAnswersInvalidate = queryClient.invalidateQueries({
        queryKey: [ANSWERS_ME_QUERY_KEY, meetingId],
      });

      Promise.all([
        questionInvalidate,
        topPreviousQuestionInvalidate,
        gatherMemberInvalidate,
        notificationInvalidate,
        myAnswersInvalidate,
      ]);

      setIsNextTarget(false);
      setSelectedTarget(false);
      setHomeGlobalTime(null);
      setIsProgressingQuestion(false);

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
    isAnswerQuestionPending,
    isSendCommentPending,
  };
};
