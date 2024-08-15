import { QueryClient, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { Http } from '@/common/apis/base.api';

import { QuestionResponse } from '../schema/QuestionResponse';

interface Params {
  meetingId: number;
  questionId: number;
}

interface QueryProps extends Params {
  options?: UseQueryOptions<QuestionResponse>;
}

export const DETAILED_QUESTION_DATA_QUERY_KEY = 'DETAILED_QUESTION_DATA_QUERY_KEY';

const queryFn = ({ questionId, meetingId }: Params) =>
  Http.GET<QuestionResponse>(`/v1/meetings/${meetingId}/questions/${questionId}`);

export const useGetDetailedQuestionData = (props: QueryProps) => {
  const { options, ...params } = props;

  return useQuery({
    queryKey: [DETAILED_QUESTION_DATA_QUERY_KEY, params],
    queryFn: () => queryFn(params),
    enabled: params.meetingId !== -1,
    ...options,
  });
};

interface PrefetchProps extends Params {
  queryClient: QueryClient;
}

export const getDetailedQuestionDataPrefetch = (props: PrefetchProps) => {
  const { queryClient, ...params } = props;

  const prefetch = queryClient.prefetchQuery({
    queryKey: [DETAILED_QUESTION_DATA_QUERY_KEY, params],
    queryFn: () => queryFn(params),
  });

  return prefetch;
};
