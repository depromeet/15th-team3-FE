import dayjs from 'dayjs';
import { useAtom } from 'jotai';
import { useParams } from 'next/navigation';

import { useGetProgressingQuestion } from '@/answer/common/apis/queries/useGetProgressingQuestion';
import { answerAtoms } from '@/answer/common/atoms/answer.atom';
import { getWebDomain } from '@/common';
import { useDialogContext } from '@/common/contexts/DialogProvider';
import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';

export const useAnswerClosingService = () => {
  const { meetingId } = useParams<{ meetingId: string }>();
  const [answerGlobalTime, setAnswerGlobalTime] = useAtom(answerAtoms.answerGlobalTime);
  const { data: meetingInfo } = useGetMeetingInfo({});

  const { close, isOpen } = useDialogContext();
  const meetingName = meetingInfo?.meetings.find(({ meetingId }) => meetingId === Number(meetingId))?.name;
  const basePath = getWebDomain();

  useGetProgressingQuestion({
    params: { meetingId: parseInt(meetingId) },
    options: {
      select: (data) => {
        if (data?.startTime) {
          setAnswerGlobalTime(dayjs(data.startTime).valueOf());
        }
        return data;
      },
      enabled: !!meetingId,
    },
  });

  return {
    meetingId,
    meetingName,
    answerGlobalTime: answerGlobalTime ?? 0,
    isOpen,
    close,
    basePath,
  };
};
