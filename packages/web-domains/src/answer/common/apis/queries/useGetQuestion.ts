import { UseQueryOptionsExcludedQueryKey } from '@sambad/types-utils/tanstack';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

// import { Http } from '@/common/apis/base.api';

import { Http } from '@/common/apis/base.api';

import { QuestionResponseType } from '../schema/Question.schema';

type Params = { meetingId: number };

interface Args {
  params: Params;
  options?: UseQueryOptionsExcludedQueryKey<QuestionResponseType>;
}

export const GET_QUESTION_QUERY_KEY = 'GET_QUESTION_QUERY_KEY';

export const useGetQuestion = ({ params, options }: Args) => {
  return useQuery({
    queryKey: [GET_QUESTION_QUERY_KEY, params.meetingId],
    queryFn: async () => {
      try {
        const data = await getQuestion(params);
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

export const getGetQuestionPrefetch = (params: Params, queryClient: QueryClient) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [GET_QUESTION_QUERY_KEY, params.meetingId],
    queryFn: async () => {
      try {
        const data = await getQuestion(params);
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

export async function getQuestion(params: Params): Promise<QuestionResponseType> {
  const { meetingId } = params;

  const data = await Http.GET<QuestionResponseType>(`/v1/meetings/${meetingId}/questions/active/answers`);
  return data;
}

//  {
//   meetingQuestionId: 1,
//   questionType: 'MULTIPLE_DESCRIPTIVE_CHOICE',
//   content: {
//     questionId: 1,
//     questionImageFileUrl: '',
//     title: '갖고 싶은 초능력은?',
//     answers: [
//       {
//         answerId: 1,
//         content: '분신술',
//       },
//       {
//         answerId: 2,
//         content: '순간이동',
//       },
//       {
//         answerId: 3,
//         content: '잠자기',
//       },
//       {
//         answerId: 4,
//         content: '달리기',
//       },
//       {
//         answerId: 5,
//         content: '외치기',
//       },
//       {
//         answerId: 6,
//         content: '점프킹',
//       },
//     ],
//   },
//  }
// return {
//   meetingQuestionId: 1,
//   questionType: 'SINGLE_CHOICE',
//   content: {
//     questionId: 1,
//     questionImageFileUrl: '',
//     title: '갖고 싶은 초능력은?',
//     answers: [
//       {
//         answerId: 1,
//         content: '분신술',
//       },
//       {
//         answerId: 2,
//         content: '순간이동',
//       },
//     ],
//   },
// };
// }
