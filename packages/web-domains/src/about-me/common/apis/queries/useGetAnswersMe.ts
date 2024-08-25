import { UseQueryOptionsExcludedQueryKey } from '@sambad/types-utils/tanstack';
import { QueryClient, useSuspenseQuery } from '@tanstack/react-query';

import { Http } from '@/common/apis/base.api';

import { MyMeetingAnswerListResponse } from '../schema/MyMeetingAnswerListReponse';

interface Params {
  meetingId: number;
}

interface QueryProps extends Params {
  options?: UseQueryOptionsExcludedQueryKey<MyMeetingAnswerListResponse>;
}

export const ANSWERS_ME_QUERY_KEY = 'ANSWERS_ME_QUERY_KEY';

const queryFn = ({ meetingId }: Params) =>
  Http.GET<MyMeetingAnswerListResponse>(`/v1/meetings/${meetingId}/questions/answers/me`);

export const useGetAnswersMe = (props: QueryProps) => {
  const { options, ...params } = props;

  return useSuspenseQuery({
    queryKey: [ANSWERS_ME_QUERY_KEY, params],
    queryFn: () => queryFn(params),
    enabled: params.meetingId !== -1,
    staleTime: 1000 * 60 * 60,
    ...options,
  });
};

interface PrefetchProps extends Params {
  queryClient: QueryClient;
}

export const getAnswersMePrefetch = (props: PrefetchProps) => {
  const { queryClient, ...params } = props;

  const prefetch = queryClient.prefetchQuery({
    queryKey: [ANSWERS_ME_QUERY_KEY, params],
    queryFn: () => queryFn(params),
  });

  return prefetch;
};
