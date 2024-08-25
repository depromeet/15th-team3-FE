import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { cookies } from 'next/headers';
import { Suspense } from 'react';

import { ContentContainer } from '../features/select-relay-question/containers/ContentContainer/ContentContainer';
import { ProgressIndicatorContainer } from '../features/select-relay-question/containers/ProgressIndicatorContainer/ProgressIndicatorContainer';
import { RandomPickContainer } from '../features/select-relay-question/containers/RandomPickContainer/RandomPickContainer';
import { QueryStringProvider } from '../features/select-relay-question/contexts/QueryStringContext';
import { useRelayQuestionListQueryPrefetch } from '../features/select-relay-question/hooks/queries/useRelayQuestionListQuery';

interface MeetingId {
  meetingId: number;
}

interface Params {
  params: MeetingId;
}

export const SelectRelayQuestionScreen = async ({ params: { meetingId } }: Params) => {
  const queryClient = await getServerSideProps({ meetingId });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense>
        <QueryStringProvider>
          <ProgressIndicatorContainer />
          <ContentContainer />
          <RandomPickContainer />
        </QueryStringProvider>
      </Suspense>
    </HydrationBoundary>
  );
};

const getServerSideProps = async ({ meetingId }: MeetingId) => {
  const queryClient = new QueryClient();

  try {
    const cookie = cookies();

    const relayQuestionListPrefetch = useRelayQuestionListQueryPrefetch({
      queryClient,
      meetingId,
      cookie,
    });

    await Promise.all([relayQuestionListPrefetch]);
  } catch (error: unknown) {
    console.log(error);
  }

  return queryClient;
};
