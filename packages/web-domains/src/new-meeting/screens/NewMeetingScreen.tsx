// import { getMeetingTypesPrefetch } from '@/common/apis/queries/useGetMeetingTypes';

import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';
import { Suspense } from 'react';

import { GetMeetingInfoContainer } from '../features/get-meeting-info/containers/GetMeetingInfoContainer';

export const NewMeetingScreen = async () => {
  const { queryClient } = await getServerSideProps();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense>
        <GetMeetingInfoContainer />
      </Suspense>
    </HydrationBoundary>
  );
};

const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  // await getMeetingTypesPrefetch({ queryClient: queryClient });

  return { queryClient };
};
