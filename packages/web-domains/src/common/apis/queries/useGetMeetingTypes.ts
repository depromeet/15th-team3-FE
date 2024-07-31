import { useQuery, QueryClient } from '@tanstack/react-query';

import { Http } from '../base.api';
import { MeetingTypesResponse } from '../schema/MeetingTypesResponse';

export const MEETING_TYPES_KEY = 'MEETING_TYPES_KEY';

export const useGetMeetingTypes = () => {
  return useQuery({
    queryKey: [MEETING_TYPES_KEY],
    queryFn: () => getMeetingTypes(),
    staleTime: 60 * 1000,
    gcTime: 60 * 10000,
  });
};

export const getMeetingTypesPrefetch = (queryClient: QueryClient) => {
  return queryClient.prefetchQuery({
    queryKey: [MEETING_TYPES_KEY],
    queryFn: getMeetingTypes,
    staleTime: 60 * 1000,
    gcTime: 60 * 10000,
  });
};

export async function getMeetingTypes(): Promise<MeetingTypesResponse> {
  return Http.GET(`/v1/meetings/types`);
}
