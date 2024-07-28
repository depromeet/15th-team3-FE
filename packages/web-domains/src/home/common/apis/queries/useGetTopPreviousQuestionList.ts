import { UseQueryOptionsExcludedQueryKey } from '@sambad/types-utils/tanstack';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import { Http } from '@/common/apis/base.api';

import { PreviousQuestionType } from '../schema/useGetPreviousQuestionListQuery.type';

type Params = { meetingId: string };

interface Args {
  params: Params;
  options?: UseQueryOptionsExcludedQueryKey<[PreviousQuestionType, PreviousQuestionType] | undefined>;
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

export const getTopPreviousQuestionPrefetch = (params: Params, queryClient: QueryClient) => {
  const prefetch = queryClient.prefetchQuery({
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
  });

  return prefetch;
};

export async function getTopPreviousQuestionList(
  params: Params,
): Promise<[PreviousQuestionType, PreviousQuestionType]> {
  const { meetingId } = params;
  const data = await Http.GET<[PreviousQuestionType, PreviousQuestionType]>(
    `/v1/meetings/${meetingId}/questions/inactive/top`,
  );

  return data;
}
