import { QueryClient, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { Http } from '@/common/apis/base.api';

import { MyMeetingAnswerListResponse } from '../schema/MyMeetingAnswerListReponse';

interface Params {
  meetingId: number;
  meetingMemberId: number;
}

interface QueryProps extends Params {
  options?: UseQueryOptions<MyMeetingAnswerListResponse>;
}

export const ANSWERS_QUERY_KEY = 'ANSWERS_QUERY_KEY';

const queryFn = ({ meetingId, meetingMemberId }: Params) =>
  Http.GET<MyMeetingAnswerListResponse>(`/v1/meetings/${meetingId}/members/${meetingMemberId}/questions/answers`);

export const useGetAnswers = (props: QueryProps) => {
  const { options, ...params } = props;

  return useQuery({
    queryKey: [ANSWERS_QUERY_KEY, params],
    queryFn: () => queryFn(params),
    enabled: params.meetingId !== -1,
    staleTime: 1000 * 60 * 60,
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
