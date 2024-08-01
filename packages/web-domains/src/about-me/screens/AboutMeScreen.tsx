import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

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
  // NOTE: 현재 스팩에서는 1개의 그룹에 속할 수 있으므로 모든 유저의 meetingId는 1입니다.
  const MEETING_ID = 1;

  try {
    await getMemberMePrefetch({ meetingId: MEETING_ID, queryClient });
  } catch (error: unknown) {
    console.error(error);
  }

  return { queryClient };
};
