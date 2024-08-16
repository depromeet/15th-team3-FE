import { keepPreviousData } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { useIntersect } from '@/common/hooks/useIntersect';
import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';
import { useGetPreviousQuestionList } from '@/home/common/apis/queries/useGetPreviousQuestionList';
import { PreviousQuestionType } from '@/home/common/apis/schema/useGetPreviousQuestionListQuery.type';

export const usePreviousQuestionListService = () => {
  const [previousQuestionList, setPreviousQuestionList] = useState<Array<PreviousQuestionType>>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);

  const { data: meetingInfo } = useGetMeetingInfo({
    options: { gcTime: Infinity },
  });

  const meetingId = meetingInfo && meetingInfo?.meetings[0]?.meetingId;

  const { data, isFetching } = useGetPreviousQuestionList({
    params: { meetingId: meetingId!, page },
    options: {
      placeholderData: keepPreviousData,
      enabled: hasNextPage && !!meetingId,
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
    }
  }, [data]);

  return { previousQuestionList, isFetching, targetRef, meetingId, fetchNextPage };
};
