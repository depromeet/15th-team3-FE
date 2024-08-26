'use client';

import { useGetDetailedQuestionData } from '@/result/common/apis/queries/useGetDetailedQuestionData';
import { HeaderBanner } from '@/result/common/components/HeaderBanner/HeaderBanner';
import { useConvertTypeParams } from '@/result/common/hooks/useConvertTypeParams';
import { BaseParams } from '@/result/common/types/BaseParams';

export const HeaderContainer = () => {
  const { meetingId, questionId } = useConvertTypeParams<BaseParams>();
  const { data } = useGetDetailedQuestionData({ meetingId, questionId });

  return <HeaderBanner title={data?.title} thumbnail={data?.questionImageFileUrl} />;
};
