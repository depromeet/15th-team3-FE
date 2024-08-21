import { useState } from 'react';

import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';

export const useMeetingIntroService = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data: meetingInfo } = useGetMeetingInfo({
    options: { gcTime: Infinity },
  });

  const meetingId = meetingInfo?.meetings[0]?.meetingId;
  const meetingTitle = meetingInfo?.meetings[0]?.name;

  const handleOpenBottmSheet = () => {
    setIsOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    meetingId,
    gatherName: meetingTitle,
    handleOpenBottmSheet,
    handleCloseBottomSheet,
  };
};
