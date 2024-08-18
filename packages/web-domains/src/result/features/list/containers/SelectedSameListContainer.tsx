'use client';

import { Fragment } from 'react';

import { MemberList } from '../components';

import { ActionBar } from '@/common/components/ActionBar/ActionBar';
import { useGetMeetings } from '@/result/common/apis/queries/useGetMeetings';
import { useGetSameSelected } from '@/result/common/apis/queries/useGetSameSelected';
import { BaseParams } from '@/result/common/types/BaseParams';

export const SelectedSameListContainer = (params: BaseParams) => {
  const { questionId } = params;
  const { data: meetingsIdsData } = useGetMeetings();
  // NOTE: 현재 스팩에서는 하나의 모임에만 가입할 수 있습니다.
  const meetingId = meetingsIdsData?.meetings[0]?.meetingId || -1;
  const { data } = useGetSameSelected({ meetingId, questionId });

  return (
    <Fragment>
      <ActionBar title="나와 같은 답을 한 모임원" />
      <MemberList members={data?.selectedMembers} />
    </Fragment>
  );
};
