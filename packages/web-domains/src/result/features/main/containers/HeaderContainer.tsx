'use client';

import { useGetDetailedQuestionData } from '@/result/common/apis/queries/useGetDetailedQuestionData';
import { HeaderBanner } from '@/result/common/components/HeaderBanner/HeaderBanner';
import { BaseParams } from '@/result/common/types/BaseParams';

export const HeaderContainer = (params: BaseParams) => {
  const { questionId } = params;
  const { data } = useGetDetailedQuestionData({ meetingId: 1, questionId });

  return <HeaderBanner title={data?.title} thumbnail={data?.questionImageFileUrl} />;
};
