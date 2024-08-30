import { useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { getCurrentMeeting } from '@/common/utils/getCurrentMeeting';

import { useUpdateLastMeeting } from '../apis/mutations/useUpdateLastMeeting';
import { MEETING_INFO_QUERY_KEY, useGetMeetingInfo } from '../apis/queries/useGetMeetingName';
import { MeetingInfoType } from '../apis/schema/Meeting.schema';
import { HomeAtoms } from '../atoms/home.atom';

export const useSetCurrentMeeting = () => {
  const queryClient = useQueryClient();
  const [currentMeeting, setCurrentMeeting] = useAtom(HomeAtoms.currentMeeting);
  const setIsProgressingQuestion = useSetAtom(HomeAtoms.isProgessingQuestionAtom);
  const setHomeGlobalTime = useSetAtom(HomeAtoms.homeGlobalTimeAtom);
  const setSelectedTarget = useSetAtom(HomeAtoms.isSelectedTargetAtom);
  const setIsNextTarget = useSetAtom(HomeAtoms.isNextTargetAtom);

  const { data: meetingInfo, isLoading: isLoadingMeetingInfo } = useGetMeetingInfo({});

  const { mutateAsync } = useUpdateLastMeeting({
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [MEETING_INFO_QUERY_KEY] });
      },
    },
  });

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
      await mutateAsync({ meetingId: meeting.meetingId });
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const lastVisitedMeeting = getCurrentMeeting(meetingInfo);
    try {
      if (lastVisitedMeeting) {
        mutateAsync({ meetingId: lastVisitedMeeting.meetingId });
        setCurrentMeeting(lastVisitedMeeting);
      }
    } catch (error) {
      console.log(error);
    }

    return () => {
      setCurrentMeeting(null);
    };
  }, [meetingInfo]);

  return {
    meetingInfo,
    isLoadingMeetingInfo,
    meetingId: currentMeeting ? currentMeeting?.meetingId : getCurrentMeeting(meetingInfo)?.meetingId,
    gatherName: currentMeeting ? currentMeeting?.name : getCurrentMeeting(meetingInfo)?.name,
    handleChangeCurrentMeeting,
  };
};
