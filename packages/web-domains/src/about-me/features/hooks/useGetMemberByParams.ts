import { useParams } from 'next/navigation';

import { useGetMeetings } from '@/about-me/common/apis/queries/useGetMeetings';
import { useGetMember } from '@/about-me/common/apis/queries/useGetMember';
import { useGetMemberMe } from '@/about-me/common/apis/queries/useGetMemberMe';

export const useGetMemberByParams = () => {
  const { data: meetingsIdsData } = useGetMeetings();
  // NOTE: 현재 스팩에서는 하나의 모임에만 가입할 수 있습니다.
  const meetingId = meetingsIdsData?.meetings[0]?.meetingId || -1;

  const params = useParams<{ meetingMemberId?: string }>();
  const meetingMemberId = Number(params.meetingMemberId);

  const isMe = !!meetingMemberId === false;

  const useGetMemberQuery = isMe ? useGetMemberMe : useGetMember;

  const query = useGetMemberQuery({ meetingId, meetingMemberId: Number(params.meetingMemberId) });

  return query;
};
