import { axiosInstance } from '@/common/apis/base.api';
import { UseQueryOptionsWithAxios } from '@sambad/types-utils/tanstack';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { MeetingCommentListResponse } from '../schema/MeetingCommentListResponse';

interface Params {
  meetingId: number;
  questionId: number;
}

interface QueryProps extends Params {
  options?: UseQueryOptionsWithAxios<MeetingCommentListResponse>;
}

export const COMMENTS_QUERY_KEY = 'COMMENTS_QUERY_KEY';

const queryFn = ({ questionId, meetingId }: Params) =>
  axiosInstance(`/v1/meetings/${meetingId}/questions/${questionId}/comments`);

export const useGetComments = (props: QueryProps) => {
  const { options, ...params } = props;

  return useQuery({
    queryKey: [COMMENTS_QUERY_KEY],
    queryFn: () => queryFn(params),
    ...options,
  });
};

interface PrefetchProps extends Params {
  queryClient: QueryClient;
}

export const getCommentsPrefetch = (props: PrefetchProps) => {
  const { queryClient, ...params } = props;

  const prefetch = queryClient.prefetchQuery({
    queryKey: [COMMENTS_QUERY_KEY],
    queryFn: () => queryFn(params),
  });

  return prefetch;
};
