import { useState } from 'react';

import { useSetCurrentMeeting } from '@/home/common/hooks/useSetCurrentMeeting';

export const useMeetingIntroService = () => {
  const { meetingId, meetingInfo, gatherName, handleChangeCurrentMeeting } = useSetCurrentMeeting();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenBottmSheet = () => {
    setIsOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    meetingInfo,
    meetingId,
    gatherName,
    handleOpenBottmSheet,
    handleCloseBottomSheet,
    handleChangeCurrentMeeting,
  };
};
