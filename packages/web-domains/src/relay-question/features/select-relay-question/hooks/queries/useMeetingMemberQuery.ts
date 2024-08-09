import { useQuery } from '@tanstack/react-query';

import { Http } from '../../../../../common/apis/base.api';
import { MeetingMemberResponse } from '../../types';

export const RELAY_MEET_MEMBER_QUERY_KEY = 'RELAY_MEET_MEMBER_QUERY_KEY';

const _getMeetingMember = async (meetingId: number) =>
  await Http.GET<MeetingMemberResponse>(`/v1/meetings/${meetingId}/members`);

export const useMeetingMemberQuery = (meetingId: number) => {
  const { data, ...rest } = useQuery({
    queryKey: [RELAY_MEET_MEMBER_QUERY_KEY, meetingId],
    queryFn: () => _getMeetingMember(meetingId),
    enabled: !!meetingId,
  });

  return { meetingMembers: data?.contents, ...rest };
};
