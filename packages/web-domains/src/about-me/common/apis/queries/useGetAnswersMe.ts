import { QueryClient, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { Http } from '@/common/apis/base.api';

import { MyMeetingAnswerListResponse } from '../schema/MyMeetingAnswerListReponse';

interface Params {
  meetingId: number;
}

interface QueryProps extends Params {
  options?: UseQueryOptions<MyMeetingAnswerListResponse>;
}

export const ANSWERS_ME_QUERY_KEY = 'ANSWERS_ME_QUERY_KEY';

const queryFn = ({ meetingId }: Params) =>
  Http.GET<MyMeetingAnswerListResponse>(`/v1/meetings/${meetingId}/questions/answers/me`);

export const useGetAnswersMe = (props: QueryProps) => {
  const { options, ...params } = props;

  return useQuery({
    queryKey: [ANSWERS_ME_QUERY_KEY, params],
    queryFn: () => queryFn(params),
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
