'use client';

import { useGetDetailedQuestionData } from '@/result/common/apis/queries/useGetDetailedQuestionData';
import { HeaderBanner } from '@/result/common/components/HeaderBanner/HeaderBanner';

import { BasePageParams } from './types';

export const HeaderContainer = (params: BasePageParams) => {
  const { data } = useGetDetailedQuestionData(params);

  return <HeaderBanner title={data?.title} thumbnail={data?.questionImageFileUrl} />;
};
