import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getHobbyListPrefetchQuery } from '../../common/apis/queries/useGetHobbyListQuery';
import { GetUserInfoContainer } from '../features/get-user-info/containers/GetUserInfoContainer';

export const GetUserInfoScreen = async () => {
  const { queryClient } = await getServerSideProps();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GetUserInfoContainer />
    </HydrationBoundary>
  );
};

const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  const getHobbyListPrefetch = getHobbyListPrefetchQuery(queryClient);

  await getHobbyListPrefetch();

  return { queryClient };
};
