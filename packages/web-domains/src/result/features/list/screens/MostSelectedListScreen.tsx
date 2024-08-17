import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getMeetingsPrefetch, MEETINGS_QUERY_KEY } from '@/result/common/apis/queries/useGetMeetings';
import { getMostSelectedPrefetch } from '@/result/common/apis/queries/useGetMostSelected';
import { MeetingResponse } from '@/result/common/apis/schema/MeetingResponse';
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

  try {
    await getMeetingsPrefetch({ queryClient });
    const data = queryClient.getQueryData<MeetingResponse>([MEETINGS_QUERY_KEY]);
    const meetingId = data?.meetings[0]?.meetingId;

    if (!meetingId) {
      throw new Error('No meetingId found');
    }

    const prefetchParams = { queryClient, meetingId, questionId: params.questionId };

    await getMostSelectedPrefetch(prefetchParams);
  } catch (error) {
    console.error(error);
  }

  return { queryClient };
};
