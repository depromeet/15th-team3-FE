import { isAxiosError } from 'axios';
import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { getCurrentMeeting } from '@/common/utils/getCurrentMeeting';

import { useUpdateLastMeeting } from '../apis/mutations/useUpdateLastMeeting';
import { useGetMeetingInfo } from '../apis/queries/useGetMeetingName';
import { MeetingInfoType } from '../apis/schema/Meeting.schema';
import { HomeAtoms } from '../atoms/home.atom';

export const useSetCurrentMeeting = () => {
  const [currentMeeting, setCurrentMeeting] = useAtom(HomeAtoms.currentMeeting);
  const setIsProgressingQuestion = useSetAtom(HomeAtoms.isProgessingQuestionAtom);
  const setHomeGlobalTime = useSetAtom(HomeAtoms.homeGlobalTimeAtom);
  const setSelectedTarget = useSetAtom(HomeAtoms.isSelectedTargetAtom);
  const setIsNextTarget = useSetAtom(HomeAtoms.isNextTargetAtom);

  const { data: meetingInfo } = useGetMeetingInfo({});

  const { mutateAsync } = useUpdateLastMeeting();

  const handleChangeCurrentMeeting = async (meeting: MeetingInfoType) => {
    if (meeting.meetingId === currentMeeting?.meetingId) {
      return;
    }
    setIsNextTarget(false);
    setSelectedTarget(false);
    setHomeGlobalTime(null);
    setIsProgressingQuestion(false);
    try {
      setCurrentMeeting(meeting);
      mutateAsync({ meetingId: meeting.meetingId });
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    if (currentMeeting) {
      setCurrentMeeting(null);
    }
  }, []);

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
    meetingId: currentMeeting ? currentMeeting?.meetingId : getCurrentMeeting(meetingInfo)?.meetingId,
    gatherName: currentMeeting ? currentMeeting?.name : getCurrentMeeting(meetingInfo)?.name,
    handleChangeCurrentMeeting,
  };
};
