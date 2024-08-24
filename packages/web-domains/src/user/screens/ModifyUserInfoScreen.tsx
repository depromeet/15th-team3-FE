import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { Suspense } from 'react';

import { ModifyUserInfoContainer } from '../features/modify-user-info/containers/ModifyUserInfoContainer';
// import { getHobbyListPrefetch } from '@/common/apis/queries/useGetHobbyList';

export const ModifyUserInfoScreen = async () => {
  const { queryClient } = await getServerSideProps();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense>
        <ModifyUserInfoContainer />
      </Suspense>
    </HydrationBoundary>
  );
};

const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  // await getHobbyListPrefetch(queryClient);

  return { queryClient };
};
