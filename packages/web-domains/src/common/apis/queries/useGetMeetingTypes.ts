import { useQuery, QueryClient } from '@tanstack/react-query';

import { Http } from '../base.api';
import { MeetingTypesResponse } from '../schema/MeetingTypesResponse';

export const MEETING_TYPES_QUERY_KEY = 'MEETING_TYPES_QUERY_KEY';

const getMeetingTypes = () => Http.GET<MeetingTypesResponse>(`/v1/meetings/types`);

export const useGetMeetingTypes = () => {
  return useQuery({
    queryKey: [MEETING_TYPES_QUERY_KEY],
    queryFn: getMeetingTypes,
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
