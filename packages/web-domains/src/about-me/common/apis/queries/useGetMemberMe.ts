import { QueryClient, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { Http } from '@/common/apis/base.api';

import { MeetingMemberResponse } from '../schema/MeetingMemberResponse';

interface Params {
  meetingId: number;
}

interface QueryProps extends Params {
  options?: UseQueryOptions<MeetingMemberResponse>;
}

export const MEMBER_ME_QUERY_KEY = 'MEMBER_ME_QUERY_KEY';

const queryFn = ({ meetingId }: Params) => Http.GET<MeetingMemberResponse>(`/v1/meetings/${meetingId}/members/me`);

export const useGetMemberMe = (props: QueryProps) => {
  const { options, ...params } = props;

  return useQuery({
    queryKey: [MEMBER_ME_QUERY_KEY, params],
    queryFn: () => queryFn(params),
    enabled: params.meetingId !== -1,
    ...options,
  });
};

interface PrefetchProps extends Params {
  queryClient: QueryClient;
}

export const getMemberMePrefetch = (props: PrefetchProps) => {
  const { queryClient, ...params } = props;

  const prefetch = queryClient.prefetchQuery({
    queryKey: [MEMBER_ME_QUERY_KEY, params],
    queryFn: () => queryFn(params),
  });

  return prefetch;
};
