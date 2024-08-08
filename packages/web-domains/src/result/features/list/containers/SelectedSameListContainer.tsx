'use client';

import { useGetSameSelected } from '@/result/common/apis/queries/useGetSameSelected';
import { BaseParams } from '@/result/common/types/BaseParams';

import { MemberList } from '../components';

export const SelectedSameListContainer = (params: BaseParams) => {
  const { questionId } = params;
  const { data } = useGetSameSelected({ meetingId: 1, questionId });

  return <MemberList members={data?.selectedMembers} />;
};
