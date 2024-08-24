import dayjs from 'dayjs';
import { useAtom } from 'jotai';
import { useParams } from 'next/navigation';

import { useGetProgressingQuestion } from '@/answer/common/apis/queries/useGetProgressingQuestion';
import { answerAtoms } from '@/answer/common/atoms/answer.atom';
import { getWebDomain } from '@/common';
import { useDialogContext } from '@/common/contexts/DialogProvider';

export const useAnswerClosingService = () => {
  const { meetingId } = useParams<{ meetingId: string }>();
  const [answerGlobalTime, setAnswerGlobalTime] = useAtom(answerAtoms.answerGlobalTime);

  const { close, isOpen } = useDialogContext();
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
    answerGlobalTime: answerGlobalTime ?? 0,
    isOpen,
    close,
    basePath,
  };
};
