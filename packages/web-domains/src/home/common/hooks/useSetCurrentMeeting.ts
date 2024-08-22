import { useAtom } from 'jotai';
import { useEffect } from 'react';

import { getCurrentMeeting } from '@/common/utils/getCurrentMeeting';

import { useUpdateLastMeeting } from '../apis/mutations/useUpdateLastMeeting';
import { useGetMeetingInfo } from '../apis/queries/useGetMeetingName';
import { HomeAtoms } from '../atoms/home.atom';

export const useSetCurrentMeeting = () => {
  const [currentMeeting, setCurrentMeeting] = useAtom(HomeAtoms.currentMeeting);

  const { data: meetingInfo } = useGetMeetingInfo({});

  const { mutateAsync } = useUpdateLastMeeting();

  useEffect(() => {
    if (!currentMeeting) {
      const lastVisitedMeeting = getCurrentMeeting(meetingInfo);

      try {
        if (lastVisitedMeeting) {
          mutateAsync({ meetingId: lastVisitedMeeting.meetingId });
        }
      } catch (error) {
        console.log(error);
      }
      setCurrentMeeting(lastVisitedMeeting);
    }
  }, [meetingInfo]);

  return {
    meetingInfo,
    meetingId: currentMeeting?.meetingId,
    gatherName: currentMeeting?.name,
  };
};
