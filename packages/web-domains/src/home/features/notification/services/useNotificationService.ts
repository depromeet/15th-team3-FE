import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

import { PROGRESSING_QUESTION_QUERY_KEY } from '@/answer/common/apis/queries/useGetProgressingQuestion';
import { useDialogContext } from '@/common/contexts/DialogProvider';
import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';
import { useGetNotification } from '@/home/common/apis/queries/useGetNotification';
import { ProgressingQuestionType } from '@/home/common/apis/schema/useGetProgressingQuestionQuery.type';

export const useNotificationService = () => {
  const queryClient = useQueryClient();

  const { isOpen, close, open } = useDialogContext();
  const { data: meetingInfo } = useGetMeetingInfo({
    options: { gcTime: Infinity },
  });

  const meetingId = meetingInfo?.meetings[0]?.meetingId;

  const progressingQuestionData: ProgressingQuestionType | undefined = queryClient.getQueryData([
    PROGRESSING_QUESTION_QUERY_KEY,
    meetingId,
  ]);

  const { data: notfication, isRefetching } = useGetNotification({
    params: { meetingId: meetingId! },
    options: {
      enabled: !!meetingId,
      refetchInterval: 1000 * 30,
      select: (data) => {
        if (!data?.contents.length) {
          close();
        }

        return data;
      },
    },
  });

  const handleClose = () => {
    close();
  };

  useEffect(() => {
    if (notfication?.contents[0]) {
      open();
    }
  }, [notfication]);

  return {
    notfication: notfication?.contents[0],
    isOpen,
    handleClose,
    isRefetching,
    isNotAnswerd: !progressingQuestionData?.isAnswered,
    isNotRegistered: !progressingQuestionData?.isQuestionRegistered,
  };
};
