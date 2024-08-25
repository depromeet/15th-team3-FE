import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getSameSelectedPrefetch } from '@/result/common/apis/queries/useGetSameSelected';
import { BaseParams } from '@/result/common/types/BaseParams';

import { SelectedSameListContainer } from '../containers/SelectedSameListContainer';

export const SelectedSameListScreen = async (params: BaseParams) => {
  const { queryClient } = await getServerSideProps(params);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SelectedSameListContainer />
    </HydrationBoundary>
  );
};

const getServerSideProps = async (params: BaseParams) => {
  const queryClient = new QueryClient();

  try {
    await getSameSelectedPrefetch({
      queryClient,
      meetingId: Number(params.meetingId),
      questionId: Number(params.questionId),
    });
  } catch (error) {
    console.error(error);
  }

  return { queryClient };
};
