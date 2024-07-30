import { QueryClient, useSuspenseQuery } from '@tanstack/react-query';

import { Http } from '../../../../../common/apis/base.api';
import { MyInfo } from '../../types';

const USERS_QUERY_KEY = 'USERS_QUERY_KEY';

const _getMyInfo = async () => await Http.GET<MyInfo>('/v1/users/me');

export const useMyInfoQuery = () => {
  const { data, ...rest } = useSuspenseQuery<MyInfo>({
    queryKey: [USERS_QUERY_KEY],
    queryFn: _getMyInfo,
  });

  return { myInfo: data, ...rest };
};

export const useMyInfoQueryPrefetch = (queryClient: QueryClient) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [USERS_QUERY_KEY],
    queryFn: _getMyInfo,
  });

  return prefetch;
};
