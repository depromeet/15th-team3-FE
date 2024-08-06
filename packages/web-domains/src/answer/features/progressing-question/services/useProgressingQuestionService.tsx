import dayjs from 'dayjs';
import { useSetAtom } from 'jotai';

import { answerAtoms } from '@/answer/common/atoms/answer.atom';
import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';

import { useGetProgressingQuestion } from '../../../common/apis/queries/useGetProgressingQuestion';

export const useProgressingQuestionService = () => {
  const setAnswerGlobalTime = useSetAtom(answerAtoms.answerGlobalTime);
  const { data: meetingInfo } = useGetMeetingInfo({
    options: { gcTime: Infinity },
  });

  const { data: progressingQuestion } = useGetProgressingQuestion({
    params: { meetingId: meetingInfo?.meetingIds[0]! },
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
    meetingId: meetingInfo?.meetingIds[0],
    gatherName: '삼봤드의 모험',
    progressingQuestion,
  };
};
