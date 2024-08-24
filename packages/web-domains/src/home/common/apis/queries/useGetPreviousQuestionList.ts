import { UseQueryOptionsExcludedQueryKey } from '@sambad/types-utils/tanstack';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { Http } from '@/common/apis/base.api';

import { PreviousQuestionListResponseType } from '../schema/useGetPreviousQuestionListQuery.type';

type Params = { meetingId: number; page: number };
interface Args<T, K = T> {
  params: Params;
  options?: UseQueryOptionsExcludedQueryKey<T, K>;
}

export const PREVIOUS_QUESTION_QUERY_KEY = 'PREVIOUS_QUESTION_QUERY_KEY';

export const useGetPreviousQuestionList = <T = PreviousQuestionListResponseType | undefined>({
  params,
  options,
}: Args<PreviousQuestionListResponseType | undefined, T>) => {
  return useQuery({
    queryKey: [PREVIOUS_QUESTION_QUERY_KEY, params.meetingId, params.page],
    queryFn: async () => {
      try {
        const data = await getPreviousQuestionList(params);
        return data;
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error);
        }
        throw Error('PREVIOUS_QUESTION_QUERY_KEY error');
      }
    },
    ...options,
  });
};

export const getPreviousQuestionListPrefetch = (
  params: Params,
  queryClient: QueryClient,
  cookie: ReadonlyRequestCookies,
) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [PREVIOUS_QUESTION_QUERY_KEY, params.meetingId, params.page],
    queryFn: async () => {
      try {
        const data = await getPreviousQuestionList(params, cookie);
        return data;
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error);
        }
      }
    },
  });

  return prefetch;
};

export async function getPreviousQuestionList(
  params: Params,
  cookie?: ReadonlyRequestCookies,
): Promise<PreviousQuestionListResponseType | undefined> {
  const { meetingId, page } = params;
  const data = await Http.GET<PreviousQuestionListResponseType>(
    `/v1/meetings/${meetingId}/questions/inactive?page=${page}`,
    {
      headers: {
        Cookie: cookie?.toString(),
      },
    },
  );

  return data;
}
