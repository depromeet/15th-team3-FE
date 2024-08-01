import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Suspense } from 'react';

import { StartQuestionContainer } from '../features/start-relay-question/containers/StartQuestionContainer/StartQuestionContainer';
import { useMyInfoQueryPrefetch } from '../features/start-relay-question/hooks/queries/useMyInfoQuery';
import { useMyMeetingsPrefetch } from '../features/start-relay-question/hooks/queries/useMyMeetingsQuery';

export const StartRelayQuestionScreen = async () => {
  const queryClient = await getServerSideProps();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense>
        <StartQuestionContainer />
      </Suspense>
    </HydrationBoundary>
  );
};

const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  try {
    const myInfoPrefetch = useMyInfoQueryPrefetch(queryClient);
    const myMeetingsPrefetch = useMyMeetingsPrefetch(queryClient);

    await Promise.all([myInfoPrefetch, myMeetingsPrefetch]);
  } catch (error: unknown) {
    console.log(error);
  }

  return queryClient;
};
