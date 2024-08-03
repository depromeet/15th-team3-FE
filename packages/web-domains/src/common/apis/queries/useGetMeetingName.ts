import { useQuery, QueryClient, UseQueryOptions } from '@tanstack/react-query';

import { Http } from '../base.api';

export interface MeetingNameResponse {
  name: string;
}

export interface Params {
  inviteCode: string;
}

export interface QueryProps extends Params {
  options?: UseQueryOptions<MeetingNameResponse>;
}

export const MEETING_NAME_QUERY_KEY = 'MEETING_NAME_QUERY_KEY';

const getMeetingName = ({ inviteCode }: Params) =>
  Http.GET<MeetingNameResponse>(`/v1/meetings/name?code=${inviteCode}`);

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
}

export const getMeetingNamePrefetch = (props: PrefetchProps) => {
  const { queryClient, ...params } = props;
  return queryClient.prefetchQuery({
    queryKey: [MEETING_NAME_QUERY_KEY, params],
    queryFn: () => getMeetingName(params),
  });
};
