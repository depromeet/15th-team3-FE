import { useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';

import { PROGRESSING_QUESTION_QUERY_KEY } from '@/answer/common/apis/queries/useGetProgressingQuestion';
import { useDialogContext } from '@/common/contexts/DialogProvider';
import { useInActiveEventMutation } from '@/home/common/apis/mutations/useInActiveEventMutation';
import { useGetGatherMemberList } from '@/home/common/apis/queries/useGetGatherMemberList';
import { useGetNotification } from '@/home/common/apis/queries/useGetNotification';
import { NotificationType } from '@/home/common/apis/schema/Notification.schema';
import { ProgressingQuestionType } from '@/home/common/apis/schema/useGetProgressingQuestionQuery.type';
import { HomeAtoms } from '@/home/common/atoms/home.atom';
import { MEETING_ACTIVATED_LIMIT } from '@/home/common/constants/meetingActivatedLimit';

export const useNotificationService = () => {
  const queryClient = useQueryClient();
  const currentMeeting = useAtomValue(HomeAtoms.currentMeeting);

  const { isOpen, close, open } = useDialogContext();

  const meetingId = currentMeeting?.meetingId;

  const progressingQuestionData: ProgressingQuestionType | undefined = queryClient.getQueryData([
    PROGRESSING_QUESTION_QUERY_KEY,
    meetingId,
  ]);

  const { data: memberList } = useGetGatherMemberList({
    params: { meetingId: meetingId! },
    options: {
      enabled: !!meetingId,
    },
  });

  const { data: notfication } = useGetNotification<NotificationType[] | null>({
    params: { meetingId: meetingId! },
    options: {
      enabled: !!meetingId,
      refetchInterval: 1000 * 30,
      select: (data) => {
        if (data) {
          return data.contents.filter((notify) => notify.eventType !== 'HAND_WAVING_REQUESTED');
        }
        return null;
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
    if (notfication?.[0]) {
      open();
    } else {
      close();
    }
  }, [notfication, currentMeeting]);

  const isOnlyOne = !!memberList && memberList.contents.length < MEETING_ACTIVATED_LIMIT;

  return {
    meetingId,
    notfication: notfication?.[0],
    isOpen,
    handleClose,
    handleClickActionLater,
    isOnlyOne,
    isNotAnswerd: !progressingQuestionData?.isAnswered,
    isNotRegistered: !progressingQuestionData?.isQuestionRegistered,
  };
};
