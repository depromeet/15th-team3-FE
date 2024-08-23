import dayjs from 'dayjs';
import { useSetAtom } from 'jotai';
import { useParams } from 'next/navigation';

import { answerAtoms } from '@/answer/common/atoms/answer.atom';
import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';

import { useGetProgressingQuestion } from '../../../common/apis/queries/useGetProgressingQuestion';

export const useProgressingQuestionService = () => {
  const { meetingId } = useParams<{ meetingId: string }>();
  const setAnswerGlobalTime = useSetAtom(answerAtoms.answerGlobalTime);
  const { data: meetingInfo } = useGetMeetingInfo({
    options: { gcTime: Infinity },
  });

  const { data: progressingQuestion } = useGetProgressingQuestion({
    params: { meetingId: parseInt(meetingId) },
    options: {
      select: (data) => {
        if (data?.startTime) {
          setAnswerGlobalTime(dayjs(data.startTime).valueOf());
        }
        return data;
      },
      enabled: !!meetingInfo,
    },
  });

  return {
    meetingId,
    gatherName: '삼봤드의 모험',
    progressingQuestion,
  };
};
