'use client';

import { Fragment } from 'react';

import { MemberList } from '../components';

import { ActionBar } from '@/common/components/ActionBar/ActionBar';
import { useGetAnswers } from '@/result/common/apis/queries/useGetAnswers';
import { useGetMeetings } from '@/result/common/apis/queries/useGetMeetings';
import { BaseParams } from '@/result/common/types/BaseParams';

export const AnswerListContainer = (params: BaseParams) => {
  const { questionId } = params;
  const { data: meetingsIdsData } = useGetMeetings();
  // NOTE: 현재 스팩에서는 하나의 모임에만 가입할 수 있습니다.
  const meetingId = meetingsIdsData?.meetings[0]?.meetingId || -1;
  const { data } = useGetAnswers({ meetingId, questionId });

  return (
    <Fragment>
      <ActionBar title="참여 현황" />
      <MemberList members={data?.contents} />
    </Fragment>
  );
};
