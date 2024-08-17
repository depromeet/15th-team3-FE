'use client';

import { useGetMeetings } from '@/result/common/apis/queries/useGetMeetings';
import { useGetSameSelected } from '@/result/common/apis/queries/useGetSameSelected';
import { BaseParams } from '@/result/common/types/BaseParams';

import { MemberList } from '../components';

export const SelectedSameListContainer = (params: BaseParams) => {
  const { questionId } = params;
  const { data: meetingsIdsData } = useGetMeetings();
  // NOTE: 현재 스팩에서는 하나의 모임에만 가입할 수 있습니다.
  const meetingId = meetingsIdsData?.meetings[0]?.meetingId || -1;
  const { data } = useGetSameSelected({ meetingId, questionId });

  return <MemberList members={data?.selectedMembers} />;
};
