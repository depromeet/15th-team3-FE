import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getAnswersMePrefetch } from '../common/apis/queries/useGetAnswersMe';
import { getMemberMePrefetch } from '../common/apis/queries/useGetMemberMe';
import { ScreenContainer } from '../features/containers/ScreenContainer';

export const AboutMeScreen = async () => {
  const { queryClient } = await getServerSideProps();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ScreenContainer />
    </HydrationBoundary>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  const MEETING_ID = 1;

  try {
    await Promise.all([
      getMemberMePrefetch({ meetingId: MEETING_ID, queryClient }),
      getAnswersMePrefetch({ meetingId: MEETING_ID, queryClient }),
    ]);
  } catch (error: unknown) {
    console.error(error);
  }

  return { queryClient };
};
