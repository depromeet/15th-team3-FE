import { QueryClient, useSuspenseQuery } from '@tanstack/react-query';

import { Me } from '../../types';

interface PrefetchProps {
  queryClient: QueryClient;
}

const USERS_QUERY_KEY = 'USERS_QUERY_KEY';

// const _getMyInfo = async () => await Http.GET<Me>('/v1/users/me');
const _getMyInfo = async (): Promise<Me> => ({
  name: '이세민',
  email: 'sambad@me.com',
  profileImageUrl: '',
  createdAt: '2022-01-01T00:00:00.000Z',
  updatedAt: '2022-01-01T00:00:00.000Z',
});

export const useMyInfoQuery = () => {
  const { data } = useSuspenseQuery<Me>({
    queryKey: [USERS_QUERY_KEY],
    queryFn: _getMyInfo,
  });

  return { data };
};

export const useMyInfoQueryPrefetch = ({ queryClient }: PrefetchProps) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [USERS_QUERY_KEY],
    queryFn: _getMyInfo,
  });

  return prefetch;
};
