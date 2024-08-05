import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { useDialogContext } from '@/common/contexts/DialogProvider';
import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';
import { useGetNotification } from '@/home/common/apis/queries/useGetNotification';
import { isSelectedTargetAtom } from '@/home/common/atoms/home.atom';

export const useNotificationService = () => {
  const setSelectedTarget = useSetAtom(isSelectedTargetAtom);
  const { isOpen, close, open } = useDialogContext();
  const { data: meetingInfo } = useGetMeetingInfo({
    options: { gcTime: Infinity },
  });

  const { data: notfication, isRefetching } = useGetNotification({
    params: { meetingId: meetingInfo?.meetingIds[0]! },
    options: {
      enabled: !!meetingInfo?.meetingIds,
      refetchInterval: 1000 * 30,
      select: (data) => {
        if (data?.contents[0]?.eventType === 'TARGET_MEMBER') {
          setSelectedTarget(true);
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
  }, [notfication, isRefetching]);

  return {
    notfication: notfication?.contents[0],
    isOpen,
    handleClose,
    isRefetching,
  };
};
