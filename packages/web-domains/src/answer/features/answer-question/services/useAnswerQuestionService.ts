import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { useCommentMutation } from '@/answer/common/apis/mutations/useCommentMutation';
import { useGetQuestion } from '@/answer/common/apis/queries/useGetQuestion';
import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';

export const useAnswerQuestionService = () => {
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

  const handleSubmitComment = async (content: string) => {
    const meetingId = meetingInfo?.meetingIds[0] ?? 1;

    try {
      // if (question?.meetingQuestionId) {
      await sendCommentMutate({ content, meetingId, meetingQuestionId: 1 });
      // }
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error);
      }
    }
  };

  const handleSubmitAnswer = () => {
    // onAnswerSubmit?.();
    push('/answer/closing');
  };

  return { question: question?.content, questionType: question?.questionType, handleSubmitComment, handleSubmitAnswer };
};
