import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';

import { useGetGatherMemberList } from '../../../common/apis/queries/useGetGatherMemberList';

export const useGatherMemberProfileListService = () => {
  const { data: meetingInfo } = useGetMeetingInfo({
    options: { gcTime: Infinity },
  });

  const { data } = useGetGatherMemberList({ params: { meetingId: meetingInfo?.meetingId ?? 1 } });

  return {
    gatherMemberList: data?.contents,
  };
};
