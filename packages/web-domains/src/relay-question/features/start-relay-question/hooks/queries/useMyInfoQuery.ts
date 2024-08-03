import { QueryClient, useQuery } from '@tanstack/react-query';

import { Http } from '../../../../../common/apis/base.api';
import { MyInfoResponse } from '../../types';

export const MY_INFO_QUERY_KEY = 'USERS_QUERY_KEY';

const _getMyInfo = async () => await Http.GET<MyInfoResponse>('/v1/users/me');

export const useMyInfoQuery = () => {
  const { data, ...rest } = useQuery<MyInfoResponse>({
    queryKey: [MY_INFO_QUERY_KEY],
    queryFn: _getMyInfo,
  });

  return { myInfo: data, ...rest };
};

export const useMyInfoQueryPrefetch = (queryClient: QueryClient) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [MY_INFO_QUERY_KEY],
    queryFn: _getMyInfo,
  });

  return prefetch;
};
