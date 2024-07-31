import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Suspense } from 'react';

import { ContentContainer } from '../features/select-relay-question/containers/ContentContainer/ContentContainer';
import { ProgressIndicatorContainer } from '../features/select-relay-question/containers/ProgressIndicatorContainer/ProgressIndicatorContainer';
import { RandomPickContainer } from '../features/select-relay-question/containers/RandomPickContainer/RandomPickContainer';
import { QueryStringProvider } from '../features/select-relay-question/contexts/QueryStringContext';
import { useRelayQuestionListQueryPrefetch } from '../features/select-relay-question/hooks/queries/useRelayQuestionListQuery';

const MEETING_ID = 1;

export const SelectRelayQuestionScreen = async () => {
  const queryClient = await getServerSideProps();

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

const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  try {
    const gatherMemberPrefetch = useRelayQuestionListQueryPrefetch({ queryClient, meetingId: MEETING_ID });

    await Promise.all([gatherMemberPrefetch]);
  } catch (error: unknown) {
    console.log(error);
  }

  return queryClient;
};
