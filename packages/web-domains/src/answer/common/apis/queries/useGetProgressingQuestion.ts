import { QueryClient, useQuery } from '@tanstack/react-query';

import { ProgressingQuestionType } from '../schema/useGetProgressingQuestionQuery.type';

interface Args {
  options?: UseQueryOptionsExcludedQueryKey<ProgressingQuestionType, ProgressingQuestionType>;
}

export const PROGRESSING_QUESTION_QUERY_KEY = 'PROGRESSING_QUESTION_QUERY_KEY';

export const useGetProgressingQuestion = ({ options }: Args) => {
  return useQuery({
    queryKey: [PROGRESSING_QUESTION_QUERY_KEY],
    queryFn: () => getProgressingQuestion(),
    ...options,
  });
};

export const getProgressingQuestionPrefetch = (queryClient: QueryClient) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [PROGRESSING_QUESTION_QUERY_KEY],
    queryFn: getProgressingQuestion,
  });

  return prefetch;
};

export async function getProgressingQuestion(): Promise<ProgressingQuestionType> {
  return {
    meetingQuestionId: 0,
    questionImageFileUrl: '',
    title: '초능력을 가질 수 있다면?',
    questionNumber: 4,
    totalMeetingMemberCount: 15,
    responseCount: 9,
    isAnswered: true,
    targetMember: {
      id: 1,
      name: '이한음',
      profileImageFileUrl: 'https://example.com',
      role: 'OWNER',
    },
  };
  //   return await Http.GET('/v1/meeting-questions/active')
}
