import { useQuery, QueryClient, UseQueryOptions } from '@tanstack/react-query';

import { Http } from '../base.api';
import { MeetingTypesResponse } from '../schema/MeetingTypesResponse';

interface QueryProps {
  options?: UseQueryOptions<MeetingTypesResponse>;
}

export const MEETING_TYPES_QUERY_KEY = 'MEETING_TYPES_QUERY_KEY';

const getMeetingTypes = () => Http.GET<MeetingTypesResponse>(`/v1/meetings/types`);

export const useGetMeetingTypes = (props: QueryProps) => {
  const { options } = props;
  return useQuery({
    queryKey: [MEETING_TYPES_QUERY_KEY],
    queryFn: getMeetingTypes,
    ...options,
  });
};

interface PrefetchProps {
  queryClient: QueryClient;
}

export const getMeetingTypesPrefetch = (props: PrefetchProps) => {
  const { queryClient } = props;
  return queryClient.prefetchQuery({
    queryKey: [MEETING_TYPES_QUERY_KEY],
    queryFn: getMeetingTypes,
  });
};
