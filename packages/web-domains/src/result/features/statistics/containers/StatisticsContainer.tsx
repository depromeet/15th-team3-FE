'use client';

import { borderRadiusVariants, colors } from '@sambad/sds/theme';
import { Fragment } from 'react';

import { useGetMeetings } from '@/result/common/apis/queries/useGetMeetings';
import { useGetStatistics } from '@/result/common/apis/queries/useGetStatistics';
import { BaseParams } from '@/result/common/types/BaseParams';

import { RankListHeader, RankListItem } from '../components';

export const StatisticsContainer = (params: BaseParams) => {
  const { data: meetingsIdsData } = useGetMeetings();
  // NOTE: 현재 스팩에서는 하나의 모임에만 가입할 수 있습니다.
  const meetingId = meetingsIdsData?.meetings[0]?.meetingId || -1;
  const { data } = useGetStatistics({ meetingId, questionId: params.questionId });

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
