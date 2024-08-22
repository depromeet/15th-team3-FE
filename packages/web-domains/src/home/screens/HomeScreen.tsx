import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';
import { cookies } from 'next/headers';

import { getCurrentMeeting } from '@/common/utils/getCurrentMeeting';

import { getGatherMemberListPrefetch } from '../common/apis/queries/useGetGatherMemberList';
import { getMeetingInfoPrefetch } from '../common/apis/queries/useGetMeetingName';
import { GatherMemberProfileListContainer } from '../features/gather-member/containers/GatherMemberProfileListContainer';
import { HomeNavigationConatiner } from '../features/home-navigation/containers/HomeNavigationContainer';
import { MeetingIntroContainer } from '../features/meeting-intro/containers/MeetingIntroContainer';

export const HomeScreen = async () => {
  const { queryClient } = await getServerSideProps();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MeetingIntroContainer />
      <GatherMemberProfileListContainer />
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
      const gatherMemberPrefetch = getGatherMemberListPrefetch(params, queryClient, cookie);
      await Promise.all([gatherMemberPrefetch]);
    }
  } catch (error: unknown) {
    console.log(error);
  }
  return { queryClient };
};
