import console from 'console';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Suspense } from 'react';

import { StartQuestionContainer } from '../features/start-relay-question/containers/StartQuestionContainer/StartQuestionContainer';
import { useMyInfoQueryPrefetch } from '../features/start-relay-question/hooks/queries/useMyInfoQuery';

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
    const gatherMemberPrefetch = useMyInfoQueryPrefetch({ queryClient });

    await Promise.all([gatherMemberPrefetch]);
  } catch (error: unknown) {
    console.log(error);
  }

  return queryClient;
};
