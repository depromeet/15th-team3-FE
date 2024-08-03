import { QueryClient, useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { Http } from '../../../../../common/apis/base.api';
import { RelayQuestionListResponse } from '../../types';

interface RelayQuestionListPrefetch {
  queryClient: QueryClient;
  meetingId: number;
}

const RELAY_QUESTION_LIST_QUERY_KEY = 'RELAY_QUESTION_LIST_QUERY_KEY';
const SIZE_PER_PAGE = 10;

const _getRelayQuestionList = async (meetingId: number, { page, size }: { page: number; size: number }) =>
  await Http.GET<RelayQuestionListResponse>(`/v1/meetings/${meetingId}/questions?page=${page}&size=${size}`);

export const useRelayQuestionListQuery = (meetingId: number) => {
  const { data, ...rest } = useSuspenseInfiniteQuery({
    queryKey: [RELAY_QUESTION_LIST_QUERY_KEY],
    initialPageParam: { page: 0, size: SIZE_PER_PAGE },
    queryFn: ({ pageParam }) => _getRelayQuestionList(meetingId, pageParam),
    getNextPageParam: (lastPage, _, lastPageParam) => {
      const nextPageParam = { page: lastPageParam.page + 1, size: SIZE_PER_PAGE };

      return lastPage.contents.length === 0 || lastPage.contents.length < SIZE_PER_PAGE ? undefined : nextPageParam;
    },
  });

  const questions = data?.pages.flatMap((page) => page.contents);

  return { questions, ...rest };
};

export const useRelayQuestionListQueryPrefetch = ({ queryClient, meetingId }: RelayQuestionListPrefetch) => {
  const prefetch = queryClient.prefetchInfiniteQuery({
    queryKey: [RELAY_QUESTION_LIST_QUERY_KEY],
    queryFn: ({ pageParam }) => _getRelayQuestionList(meetingId, pageParam),
    initialPageParam: { page: 0, size: SIZE_PER_PAGE },
  });

  return prefetch;
};
