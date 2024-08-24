import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { cookies } from 'next/headers';

import { getAnswersMePrefetch } from '@/about-me/common/apis/queries/useGetAnswersMe';
import { getMemberMePrefetch } from '@/about-me/common/apis/queries/useGetMemberMe';
import { getCurrentMeeting } from '@/common/utils/getCurrentMeeting';

import { getMeetingInfoPrefetch } from '../common/apis/queries/useGetMeetingName';
import { HomeNavigationConatiner } from '../features/home-navigation/containers/HomeNavigationContainer';
import { MyprofileContainer } from '../features/my-profile/containers/MyprofileContainer';

export const HomeMeScreen = async () => {
  const { queryClient } = await getServerSideProps();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MyprofileContainer />
      <HomeNavigationConatiner />
    </HydrationBoundary>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  try {
    const cookie = cookies();
    const data = await getMeetingInfoPrefetch(queryClient, cookie);
    const meetingId = getCurrentMeeting(data)?.meetingId;

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
