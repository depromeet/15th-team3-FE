import { keepPreviousData } from '@tanstack/react-query';
// import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useIntersect } from '@/common/hooks/useIntersect';
import { useGetPreviousQuestionList } from '@/home/common/apis/queries/useGetPreviousQuestionList';
import { PreviousQuestionType } from '@/home/common/apis/schema/useGetPreviousQuestionListQuery.type';

export const usePreviousQuestionListService = () => {
  // const { meetingId } = useParams<{ meetingId: string }>();
  const [previousQuestionList, setPreviousQuestionList] = useState<Array<PreviousQuestionType>>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);

  const { data, isFetching } = useGetPreviousQuestionList({
    params: { meetingId: '1', page },
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
    if (data?.pageable.isEnd) {
      setHasNextPage(false);
    }

    if (data?.contents.length) {
      setPreviousQuestionList([...previousQuestionList, ...data.contents]);
      console.log(previousQuestionList);
    }
  }, [data]);

  return { previousQuestionList, isFetching, targetRef, fetchNextPage };
};
