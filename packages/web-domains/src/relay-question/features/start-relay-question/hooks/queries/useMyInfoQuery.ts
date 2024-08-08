import { QueryClient, useQuery } from '@tanstack/react-query';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { Http } from '../../../../../common/apis/base.api';
import { MyInfoResponse } from '../../types';

export const MY_INFO_QUERY_KEY = 'USERS_QUERY_KEY';

const _getMyInfo = async (cookie?: ReadonlyRequestCookies) =>
  await Http.GET<MyInfoResponse>('/v1/users/me', {
    headers: {
      Cookie: cookie?.toString(),
    },
  });

export const useMyInfoQuery = () => {
  const { data, ...rest } = useQuery<MyInfoResponse>({
    queryKey: [MY_INFO_QUERY_KEY],
    queryFn: () => _getMyInfo(),
  });

  return { myInfo: data, ...rest };
};

export const useMyInfoQueryPrefetch = (queryClient: QueryClient, cookie: ReadonlyRequestCookies) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [MY_INFO_QUERY_KEY],
    queryFn: () => _getMyInfo(cookie),
  });

  return prefetch;
};
