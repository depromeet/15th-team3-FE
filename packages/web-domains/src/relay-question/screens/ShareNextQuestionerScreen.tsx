import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { cookies } from 'next/headers';

import { getActiveQuestionPrefetch } from '../features/share-group/hooks/useActiveQuestionQuery';
import { ShareNextQuestionerContainer } from '../features/share-next-questioner/containers/ShareNextQuestionerContainer/ShareNextQuestionerContainer';

interface MeetingId {
  meetingId: number;
}

interface Params {
  params: MeetingId;
}

export const ShareNextQuestionerScreen = async ({ params: { meetingId } }: Params) => {
  const queryClient = await getServerSideProps({ meetingId });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ShareNextQuestionerContainer />
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
