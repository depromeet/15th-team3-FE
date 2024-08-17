import { QueryClient, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { Http } from '@/common/apis/base.api';

import { MeetingCommentListResponse } from '../schema/MeetingCommentListResponse';

interface Params {
  meetingId: number;
  questionId: number;
}

interface QueryProps extends Params {
  options?: UseQueryOptions<MeetingCommentListResponse>;
}

export const COMMENTS_QUERY_KEY = 'COMMENTS_QUERY_KEY';

const queryFn = ({ questionId, meetingId }: Params) =>
  Http.GET<MeetingCommentListResponse>(`/v1/meetings/${meetingId}/questions/${questionId}/comments`);

export const useGetComments = (props: QueryProps) => {
  const { options, ...params } = props;

  return useQuery({
    queryKey: [COMMENTS_QUERY_KEY, params],
    queryFn: () => queryFn(params),
    enabled: params.meetingId !== -1,
    ...options,
  });
};

interface PrefetchProps extends Params {
  queryClient: QueryClient;
}

export const getCommentsPrefetch = (props: PrefetchProps) => {
  const { queryClient, ...params } = props;

  const prefetch = queryClient.prefetchQuery({
    queryKey: [COMMENTS_QUERY_KEY, params],
    queryFn: () => queryFn(params),
  });

  return prefetch;
};
