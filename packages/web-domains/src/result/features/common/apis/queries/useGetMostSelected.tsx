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

export const MOST_SELECTED_QUERY_KEY = 'MOST_SELECTED_QUERY_KEY';

const queryFn = ({ questionId, meetingId }: Params) =>
  axiosInstance(`/v1/meetings/${meetingId}/questions/${questionId}/answers/most-selected`);

export const useGetMostSelected = (props: QueryProps) => {
  const { options, ...params } = props;

  return useQuery({
    queryKey: [MOST_SELECTED_QUERY_KEY],
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
    queryKey: [MOST_SELECTED_QUERY_KEY],
    queryFn: () => queryFn(params),
  });

  return prefetch;
};
