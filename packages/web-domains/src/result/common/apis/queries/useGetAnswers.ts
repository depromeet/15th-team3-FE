import { QueryClient, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { Http } from '@/common/apis/base.api';

import { MeetingMemberListResponse } from '../schema/MeetingMemberListResponse';

interface Params {
  meetingId: number;
  questionId: number;
}

interface QueryProps extends Params {
  options?: UseQueryOptions<MeetingMemberListResponse>;
}

export const ANSWERS_QUERY_KEY = 'ANSWERS_QUERY_KEY';

const queryFn = ({ questionId, meetingId }: Params) =>
  Http.GET<MeetingMemberListResponse>(`/v1/meetings/${meetingId}/questions/${questionId}/members`);

export const useGetAnswers = (props: QueryProps) => {
  const { options, ...params } = props;

  return useQuery({
    queryKey: [ANSWERS_QUERY_KEY, params],
    queryFn: () => queryFn(params),
    enabled: params.meetingId !== -1,
    ...options,
  });
};

interface PrefetchProps extends Params {
  queryClient: QueryClient;
}

export const getAnswersPrefetch = (props: PrefetchProps) => {
  const { queryClient, ...params } = props;

  const prefetch = queryClient.prefetchQuery({
    queryKey: [ANSWERS_QUERY_KEY, params],
    queryFn: () => queryFn(params),
  });

  return prefetch;
};
