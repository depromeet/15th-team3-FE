import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getMeetingsPrefetch } from '@/result/common/apis/queries/useGetMeetings';
import { getMostSelectedPrefetch } from '@/result/common/apis/queries/useGetMostSelected';
import { BaseParams } from '@/result/common/types/BaseParams';

import { MostSelectedListContainer } from '../containers/MostSelectedListContainer';

export const MostSelectedListScreen = async (params: BaseParams) => {
  const { queryClient } = await getServerSideProps(params);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MostSelectedListContainer />
    </HydrationBoundary>
  );
};

const getServerSideProps = async (params: BaseParams) => {
  const queryClient = new QueryClient();

  try {
    await getMeetingsPrefetch({ queryClient });
    await getMostSelectedPrefetch({
      queryClient,
      meetingId: Number(params.meetingId),
      questionId: Number(params.questionId),
    });
  } catch (error) {
    console.error(error);
  }

  return { queryClient };
};
