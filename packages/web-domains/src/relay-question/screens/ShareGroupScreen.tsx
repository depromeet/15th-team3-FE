import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { cookies } from 'next/headers';

import { getMyInfoPrefetch } from '@/home/common/apis/queries/useGetMyInfo';

import { CurrentRelayQuestionCountContainer } from '../features/share-group/containers/CurrentRelayQuestionCountContainer/CurrentRelayQuestionCountContainer';

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

    const params = { meetingId };
    const myInfoPrefetch = getMyInfoPrefetch(params, queryClient, cookie);

    await Promise.all([myInfoPrefetch]);
  } catch (error: unknown) {
    console.log(error);
  }

  return queryClient;
};
