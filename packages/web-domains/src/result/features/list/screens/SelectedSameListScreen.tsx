import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getMeetingsPrefetch, MEETINGS_QUERY_KEY } from '@/result/common/apis/queries/useGetMeetings';
import { getSameSelectedPrefetch } from '@/result/common/apis/queries/useGetSameSelected';
import { MeetingResponse } from '@/result/common/apis/schema/MeetingResponse';
import { BaseParams } from '@/result/common/types/BaseParams';

import { SelectedSameListContainer } from '../containers/SelectedSameListContainer';

export const SelectedSameListScreen = async (params: BaseParams) => {
  const { queryClient } = await getServerSideProps(params);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SelectedSameListContainer {...params} />
    </HydrationBoundary>
  );
};

const getServerSideProps = async (params: BaseParams) => {
  const queryClient = new QueryClient();

  try {
    await getMeetingsPrefetch({ queryClient });
    const data = queryClient.getQueryData<MeetingResponse>([MEETINGS_QUERY_KEY]);
    const meetingId = data?.meetingIds[0];

    if (!meetingId) {
      throw new Error('No meetingId found');
    }

    const prefetchParams = { queryClient, meetingId, questionId: params.questionId };

    await getSameSelectedPrefetch(prefetchParams);
  } catch (error) {
    console.error(error);
  }

  return { queryClient };
};
