import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getStatisticsPrefetch } from '@/result/common/apis/queries/useGetStatistics';
import { BaseLayout } from '@/result/common/components';
import { BaseParams } from '@/result/common/types/BaseParams';

import { HeaderContainer } from '../../main/containers';
import { StatisticsContainer } from '../containers/StatisticsContainer';

export const StatisticsScreen = async (params: BaseParams) => {
  const { queryClient } = await getServerSideProps(params);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BaseLayout title="전체 통계 결과" header={<HeaderContainer />}>
        <StatisticsContainer />
      </BaseLayout>
    </HydrationBoundary>
  );
};

const getServerSideProps = async (params: BaseParams) => {
  const queryClient = new QueryClient();

  try {
    getStatisticsPrefetch({ queryClient, meetingId: Number(params.meetingId), questionId: Number(params.questionId) });
  } catch (error) {
    console.error(error);
  }

  return { queryClient };
};
