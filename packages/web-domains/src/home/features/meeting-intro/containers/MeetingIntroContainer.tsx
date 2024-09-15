'use client';

import { colors } from '@sambad/sds/theme';

import { HomeNavigationConatiner } from '../../home-navigation/containers/HomeNavigationContainer';
import { MeetingChoiceBottomSheet } from '../../meeting-choice/components/MeetingChoiceBottomSheet';
import { GatherName } from '../../progressing-question/components/GatherName/GatherName';
import { useMeetingIntroService } from '../services/useMeetingIntroService';

export const MeetingIntroContainer = () => {
  const {
    meetingInfo,
    meetingId,
    gatherName,
    isOpen,
    handleCloseBottomSheet,
    handleOpenBottmSheet,
    handleChangeCurrentMeeting,
  } = useMeetingIntroService();

  return (
    <section css={{ width: '100%', backgroundColor: colors.primary50, padding: '0 20px' }}>
      <GatherName gatherName={gatherName} subTitle="우리 모임의 모임원들이에요!" onClick={handleOpenBottmSheet} />
      <MeetingChoiceBottomSheet
        isOpen={isOpen}
        currentMeetingId={meetingId}
        meetingList={meetingInfo?.meetings ?? []}
        onClose={handleCloseBottomSheet}
        onChange={handleChangeCurrentMeeting}
      />

      <HomeNavigationConatiner />
    </section>
  );
};
