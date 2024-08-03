import { QueryClient, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { Http } from '@/common/apis/base.api';

import { MeetingQuestionStatisticsResponse } from '../schema/MeetingQuestionStatisticsResponse';

import { ANSWERS_QUERY_KEY } from './useGetAnswers';

interface Params {
  meetingId: number;
  questionId: number;
}

interface QueryProps extends Params {
  options?: UseQueryOptions<MeetingQuestionStatisticsResponse>;
}

export const STATISTICS_QUERY_KEY = 'STATISTICS_QUERY_KEY';

const queryFn = ({ questionId, meetingId }: Params) =>
  Http.GET<MeetingQuestionStatisticsResponse>(`/v1/meetings/${meetingId}/questions/${questionId}/statistics`);

export const useGetStatistics = (props: QueryProps) => {
  const { options, ...params } = props;

  return useQuery({
    queryKey: [ANSWERS_QUERY_KEY, params],
    queryFn: () => queryFn(params),
    ...options,
  });
};

interface PrefetchProps extends Params {
  queryClient: QueryClient;
}

export const getStatisticsPrefetch = (props: PrefetchProps) => {
  const { queryClient, ...params } = props;

  const prefetch = queryClient.prefetchQuery({
    queryKey: [STATISTICS_QUERY_KEY, params],
    queryFn: () => queryFn(params),
  });

  return prefetch;
};
