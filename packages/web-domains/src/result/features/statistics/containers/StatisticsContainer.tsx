'use client';

import { borderRadiusVariants, colors } from '@sambad/sds/theme';
import { Fragment } from 'react';

import { useGetStatistics } from '@/result/common/apis/queries/useGetStatistics';
import { useConvertTypeParams } from '@/result/common/hooks/useConvertTypeParams';
import { BaseParams } from '@/result/common/types/BaseParams';

import { RankListHeader, RankListItem } from '../components';

export const StatisticsContainer = () => {
  const { meetingId, questionId } = useConvertTypeParams<BaseParams>();
  const { data } = useGetStatistics({ meetingId, questionId: questionId });

  const style = {
    backgroundColor: colors.white,
    borderRadius: `0 0 ${borderRadiusVariants.medium} ${borderRadiusVariants.medium}`,
  };

  return (
    <Fragment>
      <RankListHeader />
      <div style={style}>
        {data?.contents.map((data, index) => <RankListItem key={index} {...data} content={data.answerContent} />)}
      </div>
    </Fragment>
  );
};
