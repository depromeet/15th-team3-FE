import { useAtom } from 'jotai';
import { useParams, useRouter } from 'next/navigation';

import { useGetQuestion } from '@/answer/common/apis/queries/useGetQuestion';
import { answerAtoms } from '@/answer/common/atoms/answer.atom';
import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';

export const useAnswerQuestionService = () => {
  const { questionId } = useParams<{ questionId: string }>();
  const [answerList, setAnswerList] = useAtom(answerAtoms.answerList);
  const { push } = useRouter();
  const { data: meetingInfo } = useGetMeetingInfo({
    options: { gcTime: Infinity },
  });

  const meetingId = meetingInfo?.meetings[0]?.meetingId;

  const { data: question } = useGetQuestion({
    params: { meetingId: meetingId! },
    options: {
      enabled: !!meetingId,
    },
  });

  const moveToCommentPage = async () => {
    push(`/answer/${questionId}/comment`);
  };

  const handleAnswerList = (answerIdList: number[]) => {
    setAnswerList(answerIdList);
  };

  return {
    isNotAnswerd: !answerList.length,
    question: question?.content,
    questionType: question?.questionType,
    moveToCommentPage,
    handleAnswerList,
  };
};