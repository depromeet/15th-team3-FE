import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';

import { useGetGatherMemberList } from '../../../common/apis/queries/useGetGatherMemberList';

export const useGatherMemberProfileListService = () => {
  const { data: meetingInfo } = useGetMeetingInfo({
    options: { gcTime: Infinity },
  });

  const meetingId = meetingInfo?.meetings[0]?.meetingId;

  const { data } = useGetGatherMemberList({
    params: { meetingId: meetingId! },
    options: {
      enabled: !!meetingId,
    },
  });

  return {
    gatherMemberList: data?.contents,
  };
};
