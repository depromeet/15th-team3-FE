import { QueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { Http } from '../../../../../common/apis/base.api';
import { RelayQuestionListResponse } from '../../types';

interface RelayQuestionListPrefetch {
  queryClient: QueryClient;
  meetingId: number;
  cookie: ReadonlyRequestCookies;
}

const RELAY_QUESTION_LIST_QUERY_KEY = 'RELAY_QUESTION_LIST_QUERY_KEY';
const SIZE_PER_PAGE = 10;

const _getRelayQuestionList = (
  meetingId: number,
  { page, size }: { page: number; size: number },
  cookie?: ReadonlyRequestCookies,
) => {
  return Http.GET<RelayQuestionListResponse>(`/v1/meetings/${meetingId}/questions?page=${page}&size=${size}`, {
    headers: {
      Cookie: cookie?.toString(),
    },
  });
};

export const useRelayQuestionListQuery = (meetingId: number) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: [RELAY_QUESTION_LIST_QUERY_KEY, meetingId],
    initialPageParam: { page: 0, size: SIZE_PER_PAGE },
    queryFn: ({ pageParam }) => {
      return _getRelayQuestionList(meetingId, pageParam);
    },
    getNextPageParam: (lastPage, _, lastPageParam) => {
      const nextPageParam = { page: lastPageParam.page + 1, size: SIZE_PER_PAGE };

      return lastPage.contents.length === 0 || lastPage.contents.length < SIZE_PER_PAGE ? undefined : nextPageParam;
    },
    enabled: !!meetingId,
  });

  const questions = data?.pages.flatMap((page) => page.contents);

  return { questions, ...rest };
};

export const useRelayQuestionListQueryPrefetch = ({ queryClient, meetingId, cookie }: RelayQuestionListPrefetch) => {
  const prefetch = queryClient.prefetchInfiniteQuery({
    queryKey: [RELAY_QUESTION_LIST_QUERY_KEY],
    queryFn: ({ pageParam }) => _getRelayQuestionList(meetingId, pageParam, cookie),
    initialPageParam: { page: 0, size: SIZE_PER_PAGE },
  });

  return prefetch;
};
