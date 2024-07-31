import { QueryClient, useSuspenseInfiniteQuery } from '@tanstack/react-query';

import PNGQuestionImage1 from '../../../../assets/png/question-image-1.png';
import { RelayQuestionListResponse } from '../../types';

interface RelayQuestionListPrefetch {
  queryClient: QueryClient;
  meetingId: number;
}

const RELAY_QUESTION_LIST_QUERY_KEY = 'RELAY_QUESTION_LIST_QUERY_KEY';
const SIZE_PER_PAGE = 10;

// const _getRelayQuestionList = async (meetingId: number, { page, size }: { page: number; size: number }) =>
//   await Http.GET<RelayQuestionListResponse>(`/v1/meetings/${meetingId}/questions?page=${page}&size=${size}`);

let tempId = 1;

const _getRelayQuestionList = async (
  meetingId: number,
  { page, size }: { page: number; size: number },
): Promise<RelayQuestionListResponse> => ({
  content: new Array(10).fill({
    questionId: tempId++,
    questionImageFileUrl: PNGQuestionImage1,
    title: '국내 여행지 중에서 추천하고 싶은 곳은?',
    usedCount: 12,
  }),
  pageable: {
    page,
    size,
    totalPages: 0,
    isEnd: false,
  },
});

export const useRelayQuestionListQuery = (meetingId: number) => {
  const { data, ...rest } = useSuspenseInfiniteQuery({
    queryKey: [RELAY_QUESTION_LIST_QUERY_KEY],
    initialPageParam: { page: 0, size: SIZE_PER_PAGE },
    queryFn: ({ pageParam }) => _getRelayQuestionList(meetingId, pageParam),
    getNextPageParam: (lastPage, _, lastPageParam) => {
      const nextPageParam = { page: lastPageParam.page + 1, size: SIZE_PER_PAGE };

      return lastPage.content.length === 0 || lastPage.content.length < SIZE_PER_PAGE ? undefined : nextPageParam;
    },
  });

  return { questions: data.pages.flatMap((page) => page.content), ...rest };
};

export const useRelayQuestionListQueryPrefetch = ({ queryClient, meetingId }: RelayQuestionListPrefetch) => {
  const prefetch = queryClient.prefetchInfiniteQuery({
    queryKey: [RELAY_QUESTION_LIST_QUERY_KEY],
    queryFn: ({ pageParam }) => _getRelayQuestionList(meetingId, pageParam),
    initialPageParam: { page: 0, size: SIZE_PER_PAGE },
  });

  return prefetch;
};
