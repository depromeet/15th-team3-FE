import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';
import { cookies } from 'next/headers';

import { getCurrentMeeting } from '@/common/utils/getCurrentMeeting';

import { getEventsPrefetch } from '../common/apis/queries/useGetEvents';
import { getMeetingInfoPrefetch } from '../common/apis/queries/useGetMeetingName';
import { HomeNavigationConatiner } from '../features/home-navigation/containers/HomeNavigationContainer';
import { AlarmListContainer } from '../features/notification/containers/AlarmListContainer';

export const AlarmScreen = async () => {
  const { queryClient } = await getServerSideProps();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AlarmListContainer />
      <HomeNavigationConatiner />
    </HydrationBoundary>
  );
};

const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  try {
    const cookie = cookies();
    const data = await getMeetingInfoPrefetch(queryClient, cookie);
    const meetingId = getCurrentMeeting(data)?.meetingId;

    if (typeof meetingId === 'number') {
      const params = { meetingId };
      const eventsPrefetch = getEventsPrefetch(params, queryClient, cookie);
      await Promise.all([eventsPrefetch]);
    }
  } catch (error: unknown) {
    console.log(error);
  }
  return { queryClient };
};
