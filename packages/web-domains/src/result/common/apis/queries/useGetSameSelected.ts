import { QueryClient, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { Http } from '@/common/apis/base.api';

import { SelectedAnswerResponse } from '../schema/SelectedAnswerResponse';

interface Params {
  meetingId: number;
  questionId: number;
}

interface QueryProps extends Params {
  options?: UseQueryOptions<SelectedAnswerResponse>;
}

export const SAME_SELECTED_QUERY_KEY = 'SAME_SELECTED_QUERY_KEY';

const queryFn = ({ questionId, meetingId }: Params) =>
  Http.GET<SelectedAnswerResponse>(`/v1/meetings/${meetingId}/questions/${questionId}/answers/selected-same`);

export const useGetSameSelected = (props: QueryProps) => {
  const { options, ...params } = props;

  return useQuery({
    queryKey: [SAME_SELECTED_QUERY_KEY, params],
    queryFn: () => queryFn(params),
    enabled: params.meetingId !== -1,
    ...options,
  });
};

interface PrefetchProps extends Params {
  queryClient: QueryClient;
}

export const getSameSelectedPrefetch = (props: PrefetchProps) => {
  const { queryClient, ...params } = props;

  const prefetch = queryClient.prefetchQuery({
    queryKey: [SAME_SELECTED_QUERY_KEY, params],
    queryFn: () => queryFn(params),
  });

  return prefetch;
};
