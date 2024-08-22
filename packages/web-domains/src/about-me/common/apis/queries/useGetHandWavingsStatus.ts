import { QueryClient, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { Http } from '@/common/apis/base.api';

import { HandWavingStatusResponse } from '../schema/HandWavingStatusResponse';

interface Params {
  meetingId: number;
  receiverMemberId: number;
}

interface QueryProps extends Params {
  options?: UseQueryOptions<HandWavingStatusResponse>;
}

const queryFn = ({ meetingId, receiverMemberId }: Params) =>
  Http.GET<HandWavingStatusResponse>(`/v1/meetings/${meetingId}/hand-wavings/receiver/${receiverMemberId}/status`);

export const HAND_WAVINGS_STATUS_QUERY_KEY = 'HAND_WAVINGS_STATUS_QUERY_KEY ';

export const useGetHandWavingsStatus = (props: QueryProps) => {
  const { options, ...params } = props;

  return useQuery({
    queryKey: [HAND_WAVINGS_STATUS_QUERY_KEY, params],
    queryFn: () => queryFn(params),
    enabled: params.meetingId > 0,
    staleTime: 1000 * 60 * 10, // 10분
    ...options,
  });
};

interface PrefetchProps extends Params {
  queryClient: QueryClient;
}

export const getHandWavingsStatusPrefetch = (props: PrefetchProps) => {
  const { queryClient, ...params } = props;

  const prefetch = queryClient.prefetchQuery({
    queryKey: [HAND_WAVINGS_STATUS_QUERY_KEY, params],
    queryFn: () => queryFn(params),
  });

  return prefetch;
};
