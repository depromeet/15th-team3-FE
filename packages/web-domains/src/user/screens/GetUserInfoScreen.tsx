import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Suspense } from 'react';

import { GetUserInfoContainer } from '../features/get-user-info/containers/GetUserInfoContainer';

// import { getHobbyListPrefetch } from '@/common/apis/queries/useGetHobbyList';

export const GetUserInfoScreen = async () => {
  const { queryClient } = await getServerSideProps();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense>
        <GetUserInfoContainer />
      </Suspense>
    </HydrationBoundary>
  );
};

const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  // await getHobbyListPrefetch(queryClient);

  return { queryClient };
};
