import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getMostSelectedPrefetch } from '@/result/common/apis/queries/useGetMostSelected';
import { BaseParams } from '@/result/common/types/BaseParams';

import { MostSelectedListContainer } from '../containers/MostSelectedListContainer';

export const MostSelectedListScreen = async (params: BaseParams) => {
  const { queryClient } = await getServerSideProps(params);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MostSelectedListContainer {...params} />
    </HydrationBoundary>
  );
};

const getServerSideProps = async (params: BaseParams) => {
  const queryClient = new QueryClient();

  const prefetchParams = { queryClient, meetingId: 1, questionId: params.questionId };

  try {
    await getMostSelectedPrefetch(prefetchParams);
  } catch (error) {
    console.error(error);
  }

  return { queryClient };
};
