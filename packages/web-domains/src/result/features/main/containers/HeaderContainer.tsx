'use client';

import { useGetDetailedQuestionData } from '@/result/common/apis/queries/useGetDetailedQuestionData';
import { useGetMeetings } from '@/result/common/apis/queries/useGetMeetings';
import { HeaderBanner } from '@/result/common/components/HeaderBanner/HeaderBanner';
import { BaseParams } from '@/result/common/types/BaseParams';

export const HeaderContainer = (params: BaseParams) => {
  const { questionId } = params;
  const { data: meetingsIdsData } = useGetMeetings();
  // NOTE: 현재 스팩에서는 하나의 모임에만 가입할 수 있습니다.
  const meetingId = meetingsIdsData?.meetingIds[0] || -1;
  const { data } = useGetDetailedQuestionData({ meetingId, questionId });

  return <HeaderBanner title={data?.title} thumbnail={data?.questionImageFileUrl} />;
};
