'use client';

import { Fragment } from 'react';

import { MemberList } from '../components';

import { ActionBar } from '@/common/components/ActionBar/ActionBar';
import { useGetMeetings } from '@/result/common/apis/queries/useGetMeetings';
import { useGetMostSelected } from '@/result/common/apis/queries/useGetMostSelected';
import { BaseParams } from '@/result/common/types/BaseParams';

export const MostSelectedListContainer = (params: BaseParams) => {
  const { questionId } = params;
  const { data: meetingsIdsData } = useGetMeetings();
  // NOTE: 현재 스팩에서는 하나의 모임에만 가입할 수 있습니다.
  const meetingId = meetingsIdsData?.meetings[0]?.meetingId || -1;
  const { data } = useGetMostSelected({ meetingId, questionId });

  return (
    <Fragment>
      <ActionBar title="가장 많은 답을 한 모임원" />
      <MemberList members={data?.selectedMembers} />
    </Fragment>
  );
};
