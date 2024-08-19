import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';

import { NotificationListContainer } from '../features/notification/containers/NotificationListContainer';

export const NotificationScreen = async () => {
  const { queryClient } = await getServerSideProps();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotificationListContainer />
    </HydrationBoundary>
  );
};

const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  try {
    // const cookie = cookies();
    // const data = await getMeetingInfoPrefetch(queryClient, cookie);
    // const meetingId = data?.meetings[0]?.meetingId;
    // if (typeof meetingId === 'number') {
    //   const params = { meetingId };
    //   const gatherMemberPrefetch = getGatherMemberListPrefetch(params, queryClient, cookie);
    //   await Promise.all([gatherMemberPrefetch]);
    // }
  } catch (error: unknown) {
    console.log(error);
  }
  return { queryClient };
};
