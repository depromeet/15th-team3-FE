import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getAnswersMePrefetch } from '../common/apis/queries/useGetAnswersMe';
import { getMeetingsPrefetch, MEETINGS_QUERY_KEY } from '../common/apis/queries/useGetMeetings';
import { getMemberMePrefetch } from '../common/apis/queries/useGetMemberMe';
import { MeetingResponse } from '../common/apis/schema/MeetingResponse';
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

  try {
    await getMeetingsPrefetch({ queryClient });
    const data = queryClient.getQueryData<MeetingResponse>([MEETINGS_QUERY_KEY]);
    const meetingId = data?.meetingIds[0];

    if (!meetingId) {
      throw new Error('No meetingId found');
    }

    await Promise.all([
      getMemberMePrefetch({ meetingId, queryClient }),
      getAnswersMePrefetch({ meetingId, queryClient }),
    ]);
  } catch (error: unknown) {
    console.error(error);
  }

  return { queryClient };
};
