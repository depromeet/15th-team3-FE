import { keepPreviousData } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

import { useIntersect } from '@/common/hooks/useIntersect';
import { useGetPreviousQuestionList } from '@/home/common/apis/queries/useGetPreviousQuestionList';
import { PreviousQuestionType } from '@/home/common/apis/schema/useGetPreviousQuestionListQuery.type';
import { HomeAtoms } from '@/home/common/atoms/home.atom';
import { useSetCurrentMeeting } from '@/home/common/hooks/useSetCurrentMeeting';

export const usePreviousQuestionListService = () => {
  const currentMeeting = useAtomValue(HomeAtoms.currentMeeting);
  const { meetingId: existMeetingId } = useSetCurrentMeeting();
  const [previousQuestionList, setPreviousQuestionList] = useState<Array<PreviousQuestionType>>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const meetingId = currentMeeting?.meetingId ?? existMeetingId;

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
