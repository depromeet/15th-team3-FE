'use client';

import { useGetAnswers } from '@/result/common/apis/queries/useGetAnswers';
import { useGetMeetings } from '@/result/common/apis/queries/useGetMeetings';
import { BaseParams } from '@/result/common/types/BaseParams';

import { MemberList } from '../components';

export const AnswerListContainer = (params: BaseParams) => {
  const { questionId } = params;
  const { data: meetingsIdsData } = useGetMeetings();
  // NOTE: 현재 스팩에서는 하나의 모임에만 가입할 수 있습니다.
  const meetingId = meetingsIdsData?.meetings[0]?.meetingId || -1;
  const { data } = useGetAnswers({ meetingId, questionId });

  return <MemberList members={data?.contents} />;
};
