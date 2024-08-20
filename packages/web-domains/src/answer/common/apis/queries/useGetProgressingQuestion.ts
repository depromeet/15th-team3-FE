import { UseQueryOptionsExcludedQueryKey } from '@sambad/types-utils/tanstack';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { Http } from '@/common/apis/base.api';
import { ProgressingQuestionType } from '@/home/common/apis/schema/useGetProgressingQuestionQuery.type';

type Params = { meetingId: number };

interface Args {
  params: Params;
  options?: UseQueryOptionsExcludedQueryKey<ProgressingQuestionType | undefined>;
}

export const PROGRESSING_QUESTION_QUERY_KEY = 'PROGRESSING_QUESTION_QUERY_KEY';

export const useGetProgressingQuestion = ({ params, options }: Args) => {
  return useQuery({
    queryKey: [PROGRESSING_QUESTION_QUERY_KEY, params.meetingId],
    queryFn: async () => {
      try {
        const data = await getProgressingQuestion(params);
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

export const getProgressingQuestionPrefetch = (
  params: Params,
  queryClient: QueryClient,
  cookie: ReadonlyRequestCookies,
) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [PROGRESSING_QUESTION_QUERY_KEY, params.meetingId],
    queryFn: async () => {
      try {
        const data = await getProgressingQuestion(params, cookie);
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

export async function getProgressingQuestion(
  params: Params,
  cookie?: ReadonlyRequestCookies,
): Promise<ProgressingQuestionType> {
  const { meetingId } = params;
  const data = await Http.GET<ProgressingQuestionType>(`/v1/meetings/${meetingId}/questions/active`, {
    headers: {
      Cookie: cookie?.toString(),
    },
  });

  return data;
}
