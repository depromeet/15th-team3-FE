import { useQuery } from '@tanstack/react-query';

import { Http } from '../../../../../common/apis/base.api';
import { MemberMeDto } from '../../types';

export const MEETING_MEMBER_ME = 'MEETING_MEMBER_ME';

const _getMeetingMember = async (meetingId: number) =>
  await Http.GET<MemberMeDto>(`/v1/meetings/${meetingId}/members/me`);

export const useMemberMeQuery = (meetingId: number) => {
  const { data, ...rest } = useQuery({
    queryKey: [MEETING_MEMBER_ME, meetingId],
    queryFn: () => _getMeetingMember(meetingId),
    enabled: !!meetingId,
  });

  return { memberMe: data, ...rest };
};
