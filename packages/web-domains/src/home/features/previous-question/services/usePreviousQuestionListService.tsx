import { keepPreviousData } from '@tanstack/react-query';
// import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useIntersect } from '@/common/hooks/useIntersect';
import { useGetPreviousQuestionList } from '@/home/common/apis/queries/useGetPreviousQuestionList';

export const usePreviousQuestionListService = () => {
  // const { meetingId } = useParams<{ meetingId: string }>();
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);

  const { data: previousQuestionList, isFetching } = useGetPreviousQuestionList({
    params: { meetingId: '1', page: 0 },
    options: {
      placeholderData: keepPreviousData,
      enabled: hasNextPage,
    },
  });

  const { targetRef } = useIntersect({
    onIntersect: (entry) => {
      if (entry.isIntersecting && hasNextPage && !isFetching) {
        fetchNextPage();
      }
    },
  });

  const fetchNextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (previousQuestionList?.pageable.isEnd) {
      setHasNextPage(false);
    }
  }, [previousQuestionList]);

  return { previousQuestionList, isFetching, targetRef, fetchNextPage };
};
