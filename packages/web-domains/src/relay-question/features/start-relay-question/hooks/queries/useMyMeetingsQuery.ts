import { QueryClient, useQuery } from '@tanstack/react-query';

import { Http } from '../../../../../common/apis/base.api';
import { MyMeetingsResponse } from '../../types';

export const MY_MEETINGS_QUERY_KEY = 'MY_MEETINGS_QUERY_KEY';

const _getMyMeetings = () => Http.GET<MyMeetingsResponse>('/v1/meetings');

export const useMyMeetingsQuery = () => {
  const { data, ...rest } = useQuery({
    queryKey: [MY_MEETINGS_QUERY_KEY],
    queryFn: _getMyMeetings,
  });

  return { myMeetings: data, ...rest };
};

export const useMyMeetingsPrefetch = (queryClient: QueryClient) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [MY_MEETINGS_QUERY_KEY],
    queryFn: _getMyMeetings,
  });

  return prefetch;
};
