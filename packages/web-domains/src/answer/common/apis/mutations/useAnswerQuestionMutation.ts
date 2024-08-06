// import { UseQueryOptionsExcludedQueryKey } from '@sambad/types-utils/tanstack';
// import { QueryClient, UseMutationOptions, useMutation, useQuery } from '@tanstack/react-query';
// import { isAxiosError } from 'axios';
// // import error from 'next/error';

// import { Http } from '@/common/apis/base.api';

// import { GET_QUESTION_QUERY_KEY } from '../queries/useGetQuestion';
// import { QuestionResponseType } from '../schema/Question.schema';

// type Params = { meetingId: number; meetingQuestionId: number };

// interface Args {
//   options?: UseMutationOptions<{}, unknown, any>;
// }

// export const useAnswerQuestionMutation = ({ options }: Args) => {
//   return useMutation(async (params: Params) => {
//     try {
//     } catch (error) {
//       if (isAxiosError(error)) {
//         console.error(error);
//       }
//     }
//   });
// };

// export async function answerQuestion(params: Params): Promise<QuestionResponseType> {
//   const { meetingId, meetingQuestionId } = params;
//   const data = await Http.POST<QuestionResponseType, {}>(
//     `/v1/meetings/${meetingId}/questions/${meetingQuestionId}/answers`,
//     {
//       meetingQuestionId,
//     },
//   );
//   // return data;

//   return {
//     meetingQuestionId: 2,
//     questionType: 'MULTIPLE_DESCRIPTIVE_CHOICE',
//     content: {
//       questionId: 1,
//       questionImageFileUrl: '',
//       title: '갖고 싶은 초능력은?',
//       answers: [
//         {
//           answerId: 1,
//           content: '분신술',
//         },
//         {
//           answerId: 2,
//           content: '순간이동',
//         },
//         {
//           answerId: 3,
//           content: '잠자기',
//         },
//         {
//           answerId: 4,
//           content: '달리기',
//         },
//         {
//           answerId: 5,
//           content: '외치기',
//         },
//         {
//           answerId: 6,
//           content: '점프킹',
//         },
//       ],
//     },
//   };

//   // return {
//   //   meetingQuestionId: 1,
//   //   questionType: 'SINGLE_CHOICE',
//   //   content: {
//   //     questionId: 1,
//   //     questionImageFileUrl: '',
//   //     title: '갖고 싶은 초능력은?',
//   //     answers: [
//   //       {
//   //         answerId: 1,
//   //         content: '분신술',
//   //       },
//   //       {
//   //         answerId: 2,
//   //         content: '순간이동',
//   //       },
//   //     ],
//   //   },
//   // };
// }
