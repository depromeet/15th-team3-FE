import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { cookies } from 'next/headers';

import { CurrentRelayQuestionCountContainer } from '../features/share-group/containers/CurrentRelayQuestionCountContainer/CurrentRelayQuestionCountContainer';
import { getActiveQuestionPrefetch } from '../features/share-group/hooks/useActiveQuestionQuery';

interface MeetingId {
  meetingId: number;
}

interface Params {
  params: MeetingId;
}

export const ShareGroupScreen = async ({ params: { meetingId } }: Params) => {
  const queryClient = await getServerSideProps({ meetingId });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CurrentRelayQuestionCountContainer />
    </HydrationBoundary>
  );
};

const getServerSideProps = async ({ meetingId }: MeetingId) => {
  const queryClient = new QueryClient();

  try {
    const cookie = cookies();

    const activeQuestionPrefetch = getActiveQuestionPrefetch(meetingId, queryClient, cookie);

    await Promise.all([activeQuestionPrefetch]);
  } catch (error: unknown) {
    console.log(error);
  }

  return queryClient;
};
