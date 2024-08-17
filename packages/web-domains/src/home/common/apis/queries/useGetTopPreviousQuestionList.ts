import { UseQueryOptionsExcludedQueryKey } from '@sambad/types-utils/tanstack';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { Http } from '@/common/apis/base.api';

import { TopPreviousQuestionResponseType } from '../schema/useGetPreviousQuestionListQuery.type';

type Params = { meetingId: number };

interface Args {
  params: Params;
  options?: UseQueryOptionsExcludedQueryKey<TopPreviousQuestionResponseType | undefined>;
}

export const TOP_PREVIOUS_QUESTION_QUERY_KEY = 'TOP_PREVIOUS_QUESTION_QUERY_KEY';

export const useGetTopPreviousQuestionList = ({ params, options }: Args) => {
  return useQuery({
    queryKey: [TOP_PREVIOUS_QUESTION_QUERY_KEY, params.meetingId],
    queryFn: async () => {
      try {
        const data = await getTopPreviousQuestionList(params);
        return data;
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error);
        }
      }
    },
    ...options,
  });
};

export const getTopPreviousQuestionPrefetch = (
  params: Params,
  queryClient: QueryClient,
  cookie?: ReadonlyRequestCookies,
) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [TOP_PREVIOUS_QUESTION_QUERY_KEY, params.meetingId],
    queryFn: async () => {
      try {
        const data = await getTopPreviousQuestionList(params, cookie);
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

export async function getTopPreviousQuestionList(
  params: Params,
  cookie?: ReadonlyRequestCookies,
): Promise<TopPreviousQuestionResponseType> {
  const { meetingId } = params;
  const data = await Http.GET<TopPreviousQuestionResponseType>(`/v1/meetings/${meetingId}/questions/inactive/top`, {
    headers: {
      Cookie: cookie?.toString(),
    },
  });
  console.log(data);

  return data;
}
