import { QueryClient, useQuery } from '@tanstack/react-query';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { Http } from '../../../../common/apis/base.api';
import { ActiveQuestionResponse } from '../types';

export const ACTIVE_QUESTION_QUERY_KEY = 'ACTIVE_QUESTION_QUERY_KEY';

const _getActiveQuestion = async (meetingId: number, cookie?: ReadonlyRequestCookies) =>
  await Http.GET<ActiveQuestionResponse>(`/v1/meetings/${meetingId}/questions/active`, {
    headers: {
      Cookie: cookie?.toString(),
    },
  });

export const useActiveQuestionQuery = (meetingId: number) => {
  const { data, ...rest } = useQuery({
    queryKey: [ACTIVE_QUESTION_QUERY_KEY, meetingId],
    queryFn: () => _getActiveQuestion(meetingId),
    enabled: !!meetingId,
  });

  return { activeQuestion: data, ...rest };
};

export const getActiveQuestionPrefetch = (
  meetingId: number,
  queryClient: QueryClient,
  cookie: ReadonlyRequestCookies,
) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [ACTIVE_QUESTION_QUERY_KEY, meetingId],
    queryFn: () => _getActiveQuestion(meetingId, cookie),
  });

  return prefetch;
};
