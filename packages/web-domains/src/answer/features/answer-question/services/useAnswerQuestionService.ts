import { useAtom } from 'jotai';
import { useParams, useRouter } from 'next/navigation';

import { useGetQuestion } from '@/answer/common/apis/queries/useGetQuestion';
import { answerAtoms } from '@/answer/common/atoms/answer.atom';

export const useAnswerQuestionService = () => {
  const { meetingId, questionId } = useParams<{ meetingId: string; questionId: string }>();
  const [answerList, setAnswerList] = useAtom(answerAtoms.answerList);
  const { push } = useRouter();

  const { data: question } = useGetQuestion({
    params: { meetingId: parseInt(meetingId) },
    options: {
      enabled: !!meetingId,
    },
  });

  const moveToCommentPage = async () => {
    push(`/${meetingId}/answer/${questionId}/comment`);
  };

  const handleAnswerList = (answerIdList: number[]) => {
    setAnswerList(answerIdList);
  };

  return {
    meetingId,
    isNotAnswerd: !answerList.length,
    question: question?.content,
    questionType: question?.questionType,
    moveToCommentPage,
    handleAnswerList,
  };
};
