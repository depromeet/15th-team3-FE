import { QueryClient, useQuery } from '@tanstack/react-query';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { Http } from '../../../../../common/apis/base.api';
import { MyMeetingsResponse } from '../../types';

export const MY_MEETINGS_QUERY_KEY = 'MY_MEETINGS_QUERY_KEY';

const _getMyMeetings = (cookie?: ReadonlyRequestCookies) =>
  Http.GET<MyMeetingsResponse>('/v1/meetings', {
    headers: {
      Cookie: cookie?.toString(),
    },
  });

export const useMyMeetingsQuery = () => {
  const { data, ...rest } = useQuery({
    queryKey: [MY_MEETINGS_QUERY_KEY],
    queryFn: () => _getMyMeetings(),
  });

  return { myMeetings: data, ...rest };
};

export const useMyMeetingsPrefetch = (queryClient: QueryClient, cookie: ReadonlyRequestCookies) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [MY_MEETINGS_QUERY_KEY],
    queryFn: () => _getMyMeetings(cookie),
  });

  return prefetch;
};
