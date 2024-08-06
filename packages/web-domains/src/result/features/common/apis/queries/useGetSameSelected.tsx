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

export const SAME_SELECTED_QUERY_KEY = 'SAME_SELECTED_QUERY_KEY';

const queryFn = ({ questionId, meetingId }: Params) =>
  axiosInstance(`/meetings/${meetingId}/questions/${questionId}/answers/selected-same`);

export const useGetSameSelected = (props: QueryProps) => {
  const { options, ...params } = props;

  return useQuery({
    queryKey: [SAME_SELECTED_QUERY_KEY],
    queryFn: () => queryFn(params),
    ...options,
  });
};

interface PrefetchProps extends Params {
  queryClient: QueryClient;
}

export const getSameSelectedPrefetch = (props: PrefetchProps) => {
  const { queryClient, ...params } = props;

  const prefetch = queryClient.prefetchQuery({
    queryKey: [SAME_SELECTED_QUERY_KEY],
    queryFn: () => queryFn(params),
  });

  return prefetch;
};
