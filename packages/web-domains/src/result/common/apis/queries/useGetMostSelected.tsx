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

export const MOST_SELECTED_QUERY_KEY = 'MOST_SELECTED_QUERY_KEY';

const queryFn = ({ questionId, meetingId }: Params) =>
  Http.GET<SelectedAnswerResponse>(`/v1/meetings/${meetingId}/questions/${questionId}/answers/most-selected`);

export const useGetMostSelected = (props: QueryProps) => {
  const { options, ...params } = props;

  return useQuery({
    queryKey: [MOST_SELECTED_QUERY_KEY, params],
    queryFn: () => queryFn(params),
    ...options,
  });
};

interface PrefetchProps extends Params {
  queryClient: QueryClient;
}

export const getMostSelectedPrefetch = (props: PrefetchProps) => {
  const { queryClient, ...params } = props;

  const prefetch = queryClient.prefetchQuery({
    queryKey: [MOST_SELECTED_QUERY_KEY, params],
    queryFn: () => queryFn(params),
  });

  return prefetch;
};
