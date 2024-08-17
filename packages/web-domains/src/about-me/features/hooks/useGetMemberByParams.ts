import { useGetMeetings } from '@/about-me/common/apis/queries/useGetMeetings';
import { useGetMember } from '@/about-me/common/apis/queries/useGetMember';
import { useGetMemberMe } from '@/about-me/common/apis/queries/useGetMemberMe';

import { useIsMyByParams } from './useIsMyByParams';

export const useGetMemberByParams = () => {
  const { data: meetingsIdsData } = useGetMeetings();
  // NOTE: 현재 스팩에서는 하나의 모임에만 가입할 수 있습니다.
  const meetingId = meetingsIdsData?.meetings[0]?.meetingId || -1;

  const { isMy, meetingMemberId } = useIsMyByParams();

  const useGetMemberQuery = isMy ? useGetMemberMe : useGetMember;

  const query = useGetMemberQuery({ meetingId, meetingMemberId });

  return query;
};
