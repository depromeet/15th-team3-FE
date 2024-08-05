import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';

import { useGetGatherMemberList } from '../../../common/apis/queries/useGetGatherMemberList';

export const useGatherMemberProfileListService = () => {
  const { data: meetingInfo } = useGetMeetingInfo({
    options: { gcTime: Infinity },
  });

  const { data } = useGetGatherMemberList({
    params: { meetingId: meetingInfo?.meetingIds[0]! },
    options: {
      enabled: !!meetingInfo?.meetingIds[0],
    },
  });

  return {
    gatherMemberList: data?.contents,
  };
};
