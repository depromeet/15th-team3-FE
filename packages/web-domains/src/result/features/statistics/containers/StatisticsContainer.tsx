'use client';

import { borderRadiusVariants, colors } from '@sambad/sds/theme';
import { Fragment } from 'react';

import { useGetMeetings } from '@/result/common/apis/queries/useGetMeetings';
import { BaseParams } from '@/result/common/types/BaseParams';

import { RankListHeader, RankListItem } from '../components';

export const StatisticsContainer = (params: BaseParams) => {
  const { data: meetingsIdsData } = useGetMeetings();
  // NOTE: 현재 스팩에서는 하나의 모임에만 가입할 수 있습니다.
  const meetingId = meetingsIdsData?.meetingIds[0] || -1;
  //   const { data } = useGetStatistics({ meetingId, questionId: params.questionId });

  const style = {
    backgroundColor: colors.white,
    borderRadius: `0 0 ${borderRadiusVariants.medium} ${borderRadiusVariants.medium}`,
  };

  const data = {
    contents: [
      {
        rank: 1,
        answerContent: '💩 똥',
        count: 14,
        percentage: 50,
      },
      {
        rank: 2,
        answerContent: '💩 똥',
        count: 14,
        percentage: 50,
      },
      {
        rank: 3,
        answerContent: '💩 똥',
        count: 14,
        percentage: 50,
      },
      {
        rank: 4,
        answerContent: '💩 똥',
        count: 14,
        percentage: 50,
      },
      {
        rank: 5,
        answerContent: '💩 똥',
        count: 14,
        percentage: 50,
      },
    ],
  };

  return (
    <div>
      <RankListHeader />
      <div style={style}>
        {data?.contents.map((data, index) => <RankListItem key={index} {...data} content={data.answerContent} />)}
      </div>
    </div>
  );
};
