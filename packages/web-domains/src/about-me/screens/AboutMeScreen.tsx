import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getAnswersMePrefetch } from '../common/apis/queries/useGetAnswersMe';
import { getMeetingsPrefetch, MEETINGS_QUERY_KEY } from '../common/apis/queries/useGetMeetings';
import { getMemberPrefetch } from '../common/apis/queries/useGetMember';
import { getMemberMePrefetch } from '../common/apis/queries/useGetMemberMe';
import { MeetingResponse } from '../common/apis/schema/MeetingResponse';
import { ScreenContainer } from '../features/containers/ScreenContainer';

interface AboutMeScreenParams {
  meetingMemberId?: number;
}

export const AboutMeScreen = async (params: AboutMeScreenParams) => {
  const { meetingMemberId } = params;
  const { queryClient } = await getServerSideProps(meetingMemberId);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ScreenContainer />
    </HydrationBoundary>
  );
};

export const getServerSideProps = async (meetingMemberId?: number) => {
  const queryClient = new QueryClient();

  try {
    await getMeetingsPrefetch({ queryClient });
    const data = queryClient.getQueryData<MeetingResponse>([MEETINGS_QUERY_KEY]);
    const meetingId = data?.meetings[0]?.meetingId;

    if (!meetingId) {
      throw new Error('No meetingId found');
    }

    if (meetingMemberId) {
      await Promise.all([
        getMemberPrefetch({ meetingId, meetingMemberId, queryClient }),
        getAnswersMePrefetch({ meetingId, queryClient }),
      ]);
    } else {
      await Promise.all([
        getMemberMePrefetch({ meetingId, queryClient }),
        getAnswersMePrefetch({ meetingId, queryClient }),
      ]);
    }
  } catch (error: unknown) {
    console.error(error);
  }

  return { queryClient };
};
