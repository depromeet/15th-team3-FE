import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { useAnswerQuestionMutation } from '@/answer/common/apis/mutations/useAnswerQuestionMutation';
import { useCommentMutation } from '@/answer/common/apis/mutations/useCommentMutation';
import { useGetQuestion } from '@/answer/common/apis/queries/useGetQuestion';
import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';

export const useAnswerQuestionService = () => {
  const [answerList, setAnswerList] = useState<number[]>([]);
  const { push } = useRouter();
  const { data: meetingInfo } = useGetMeetingInfo({
    options: { gcTime: Infinity },
  });

  const { data: question } = useGetQuestion({
    params: { meetingId: meetingInfo?.meetingIds[0]! },
    options: {
      enabled: !!meetingInfo?.meetingIds[0],
    },
  });

  const { mutateAsync: sendCommentMutate } = useCommentMutation({});
  const { mutateAsync: sendAnswerMutate } = useAnswerQuestionMutation({});

  const handleSubmitComment = async (content: string) => {
    const meetingId = meetingInfo?.meetingIds[0] ?? 1;

    try {
      if (question?.meetingQuestionId) {
        await sendCommentMutate({ content, meetingId, meetingQuestionId: question.meetingQuestionId });
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error);
      }
    }
  };

  const handleSubmitAnswer = async () => {
    const meetingId = meetingInfo?.meetingIds[0] ?? 1;
    if (question?.meetingQuestionId) {
      await sendAnswerMutate({ meetingId, meetingQuestionId: question.meetingQuestionId, answerIds: answerList });
    }

    push('/answer/closing');
  };

  const handleAnswerList = (answerIdList: number[]) => {
    setAnswerList(answerIdList);
  };

  return {
    question: question?.content,
    questionType: question?.questionType,
    handleSubmitComment,
    handleSubmitAnswer,
    handleAnswerList,
  };
};
