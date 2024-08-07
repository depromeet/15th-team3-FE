import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

// import { getMeetingTypesPrefetch } from '@/common/apis/queries/useGetMeetingTypes';

import { GetMeetingInfoContainer } from '../features/get-meeting-info/containers/GetMeetingInfoContainer';

export const NewMeetingScreen = async () => {
  const { queryClient } = await getServerSideProps();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GetMeetingInfoContainer />
    </HydrationBoundary>
  );
};

const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  // await getMeetingTypesPrefetch({ queryClient: queryClient });

  return { queryClient };
};
