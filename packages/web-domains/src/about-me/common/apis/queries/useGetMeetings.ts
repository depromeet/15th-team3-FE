import { QueryClient, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { Http } from '@/common/apis/base.api';

import { MeetingResponse } from '../schema/MeetingResponse';

interface QueryProps {
  options?: UseQueryOptions<MeetingResponse>;
}

export const MEETINGS_QUERY_KEY = 'MEETINGS_QUERY_KEY';

const queryFn = () => Http.GET<MeetingResponse>(`/v1/meetings`);

export const useGetMeetings = (props: QueryProps = {}) => {
  const { options } = props;

  return useQuery({
    queryKey: [MEETINGS_QUERY_KEY],
    queryFn,
    ...options,
  });
};

interface PrefetchProps {
  queryClient: QueryClient;
}

export const getMeetingsPrefetch = (props: PrefetchProps) => {
  const { queryClient } = props;

  const prefetch = queryClient.prefetchQuery({
    queryKey: [MEETINGS_QUERY_KEY],
    queryFn,
  });

  return prefetch;
};
