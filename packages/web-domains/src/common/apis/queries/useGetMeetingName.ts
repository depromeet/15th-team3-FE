import { QueryClient, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { Http } from '../base.api';

export interface MeetingNameResponse {
  name: string;
  joined: boolean;
}

export interface Params {
  inviteCode: string;
  cookie?: ReadonlyRequestCookies;
}

export interface QueryProps extends Params {
  options?: UseQueryOptions<MeetingNameResponse>;
}

export const MEETING_NAME_QUERY_KEY = 'MEETING_NAME_QUERY_KEY';

const getMeetingName = ({ inviteCode, cookie }: Params) =>
  Http.GET<MeetingNameResponse>(`/v1/meetings/name?code=${inviteCode}`, {
    headers: {
      Cookie: cookie?.toString(),
    },
  });

export const useGetMeetingName = (props: QueryProps) => {
  const { options, ...params } = props;

  return useQuery({
    queryKey: [MEETING_NAME_QUERY_KEY, params],
    queryFn: () => getMeetingName(params),
    ...options,
  });
};

export interface PrefetchProps extends Params {
  queryClient: QueryClient;
  cookie: ReadonlyRequestCookies;
}

export const getMeetingNamePrefetch = (props: PrefetchProps) => {
  const { queryClient, ...params } = props;

  return queryClient.fetchQuery({
    queryKey: [MEETING_NAME_QUERY_KEY, params],
    queryFn: () => getMeetingName(params),
  });
};
