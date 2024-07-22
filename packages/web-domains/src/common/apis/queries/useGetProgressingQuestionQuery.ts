import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { ProgressingQuestionType } from '../schema/useGetProgressingQuestionQuery.type';

interface Args {
  options?: Omit<UseQueryOptions<ProgressingQuestionType, unknown, ProgressingQuestionType>, 'queryKey'>;
}

export const PROGRESSING_QUESTION_QUERY_KEY = 'PROGRESSING_QUESTION_QUERY_KEY';

export const useGetProgressingQuestionQuery = ({ options }: Args) => {
  return useQuery({
    queryKey: [PROGRESSING_QUESTION_QUERY_KEY],
    queryFn: () => getProgressingQuestion(),
    ...options,
  });
};

async function getProgressingQuestion(): Promise<ProgressingQuestionType> {
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
