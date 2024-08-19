import { useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useEffect } from 'react';

import { PROGRESSING_QUESTION_QUERY_KEY } from '@/answer/common/apis/queries/useGetProgressingQuestion';
import { ProgressingQuestionType } from '@/answer/common/apis/schema/useGetProgressingQuestionQuery.type';
import { useDialogContext } from '@/common/contexts/DialogProvider';
import { useInActiveEventMutation } from '@/home/common/apis/mutations/useInActiveEventMutation';
import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';
import { useGetNotification } from '@/home/common/apis/queries/useGetNotification';

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

  const { mutateAsync } = useInActiveEventMutation();

  const handleClose = () => {
    close();
  };

  const handleClickActionLater = async () => {
    try {
      if (meetingId) {
        await mutateAsync({ eventId: meetingId });
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error);
      }
    }
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
    handleClickActionLater,
    isRefetching,
    isNotAnswerd: !progressingQuestionData?.isAnswered,
    isNotRegistered: !progressingQuestionData?.isQuestionRegistered,
  };
};
