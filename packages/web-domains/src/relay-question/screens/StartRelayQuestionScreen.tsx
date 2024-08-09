import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { cookies } from 'next/headers';

import { StartQuestionContainer } from '../features/start-relay-question/containers/StartQuestionContainer/StartQuestionContainer';
import { useMyInfoQueryPrefetch } from '../features/start-relay-question/hooks/queries/useMyInfoQuery';
import { useMyMeetingsPrefetch } from '../features/start-relay-question/hooks/queries/useMyMeetingsQuery';

export const StartRelayQuestionScreen = async () => {
  const queryClient = await getServerSideProps();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StartQuestionContainer />
    </HydrationBoundary>
  );
};

const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  const cookie = cookies();

  try {
    const myInfoPrefetch = useMyInfoQueryPrefetch(queryClient, cookie);
    const myMeetingsPrefetch = useMyMeetingsPrefetch(queryClient, cookie);

    await Promise.all([myInfoPrefetch, myMeetingsPrefetch]);
  } catch (error: unknown) {
    console.log(error);
  }

  return queryClient;
};
