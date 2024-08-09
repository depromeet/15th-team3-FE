import { isAxiosError } from 'axios';
import { useAtomValue } from 'jotai';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

import { useAnswerQuestionMutation } from '@/answer/common/apis/mutations/useAnswerQuestionMutation';
import { useCommentMutation } from '@/answer/common/apis/mutations/useCommentMutation';
import { answerAtoms } from '@/answer/common/atoms/answer.atom';
import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';

export const useCommentService = () => {
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
