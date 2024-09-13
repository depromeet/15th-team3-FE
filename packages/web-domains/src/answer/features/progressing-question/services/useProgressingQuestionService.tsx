import { useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useSetAtom } from 'jotai';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

import { answerAtoms } from '@/answer/common/atoms/answer.atom';
import { useUpdateLastMeeting } from '@/home/common/apis/mutations/useUpdateLastMeeting';
import { MEETING_INFO_QUERY_KEY } from '@/home/common/apis/queries/useGetMeetingName';
import { PROGRESSING_QUESTION_QUERY_KEY } from '@/home/common/apis/queries/useGetProgressingQuestion';

import { useGetProgressingQuestion } from '../../../common/apis/queries/useGetProgressingQuestion';

export const useProgressingQuestionService = () => {
  const queryClient = useQueryClient();
  const { meetingId } = useParams<{ meetingId: string }>();
  const setAnswerGlobalTime = useSetAtom(answerAtoms.answerGlobalTime);
  const { mutateAsync } = useUpdateLastMeeting({
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [MEETING_INFO_QUERY_KEY] });
        queryClient.invalidateQueries({ queryKey: [PROGRESSING_QUESTION_QUERY_KEY] });
      },
      onError: (error) => {
        console.log(error);
      },
    },
  });

  const { data: progressingQuestion, isFetching } = useGetProgressingQuestion({
    params: { meetingId: parseInt(meetingId) },
    options: {
      enabled: !!meetingId,
    },
  });

  useEffect(() => {
    if (progressingQuestion?.startTime) {
      setAnswerGlobalTime(dayjs(progressingQuestion.startTime).valueOf());
    }
  }, [progressingQuestion]);

  useEffect(() => {
    mutateAsync({ meetingId: parseInt(meetingId) });
  }, []);

  return {
    meetingId,
    isFetching,
    gatherName: '삼봤드의 모험',
    progressingQuestion,
  };
};
