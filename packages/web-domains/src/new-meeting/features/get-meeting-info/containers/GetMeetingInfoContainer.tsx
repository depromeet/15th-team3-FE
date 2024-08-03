'use client';

import { Header, GetMeetingInfo } from '../components/GetMeetingInfo';
import { useMeetingTypesService } from '../services/useMeetingTypesService';

export const GetMeetingInfoContainer = () => {
  const { meetingTypes } = useMeetingTypesService();

  return (
    <>
      <Header />
      <GetMeetingInfo meetingTypes={meetingTypes} />
    </>
  );
};
