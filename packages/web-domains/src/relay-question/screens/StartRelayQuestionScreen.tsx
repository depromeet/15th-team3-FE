import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { cookies } from 'next/headers';

import { getMyInfoPrefetch } from '@/home/common/apis/queries/useGetMyInfo';

import { StartQuestionContainer } from '../features/start-relay-question/containers/StartQuestionContainer/StartQuestionContainer';

interface Params {
  params: { meetingId: number };
}

export const StartRelayQuestionScreen = async ({ params: { meetingId } }: Params) => {
  const queryClient = await getServerSideProps({ meetingId });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StartQuestionContainer />
    </HydrationBoundary>
  );
};

const getServerSideProps = async ({ meetingId }: Params['params']) => {
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
