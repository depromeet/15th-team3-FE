import { UseQueryOptionsExcludedQueryKey } from '@sambad/types-utils/tanstack';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import { Http } from '@/common/apis/base.api';

import { PreviousQuestionListType } from '../schema/useGetPreviousQuestionListQuery.type';

type Params = { meetingId: string; page: number };
interface Args<T, K = T> {
  params: Params;
  options?: UseQueryOptionsExcludedQueryKey<T, K>;
}

export const PREVIOUS_QUESTION_QUERY_KEY = 'PREVIOUS_QUESTION_QUERY_KEY';

export const useGetPreviousQuestionList = <K = PreviousQuestionListType | undefined>({
  params,
  options,
}: Args<PreviousQuestionListType | undefined, K>) => {
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
      }
    },
    ...options,
  });
};

export const getPreviousQuestionListPrefetch = (params: Params, queryClient: QueryClient) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [PREVIOUS_QUESTION_QUERY_KEY, params.meetingId, params.page],
    queryFn: async () => {
      try {
        const data = await getPreviousQuestionList(params);
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

export async function getPreviousQuestionList(params: Params): Promise<PreviousQuestionListType | undefined> {
  const { meetingId, page } = params;
  const data = await Http.GET<PreviousQuestionListType>(`/v1/meetings/${meetingId}/questions/inactive?page=${page}`);

  return data;
  // return {
  //   totalMeetingMemberCount: 6,
  //   content: [
  //     {
  //       meetingQuestionId: 0,
  //       questionImageFileUrl: null,
  //       isAnswered: false,
  //       questionNumber: 4,
  //       responseCount: 6,
  //       targetMember: {
  //         meetingMemberId: 1,
  //         name: '이한음',
  //         profileImageFileUrl: 'https://example.com',
  //         role: 'OWNER',
  //       },
  //       title: '갖고 싶은 초능력은?',
  //       totalMeetingMemberCount: 10,
  //       mostResponse: '순간이동',
  //     },
  //     {
  //       meetingQuestionId: 1,
  //       questionImageFileUrl: null,
  //       isAnswered: false,
  //       questionNumber: 4,
  //       responseCount: 6,
  //       targetMember: {
  //         meetingMemberId: 1,
  //         name: '이한음',
  //         profileImageFileUrl: 'https://example.com',
  //         role: 'OWNER',
  //       },
  //       title: '가봤던 국내 여행지 중에서 가장 좋았던 곳은?',
  //       totalMeetingMemberCount: 10,
  //       mostResponse: '제주도',
  //     },
  //     {
  //       meetingQuestionId: 2,
  //       questionImageFileUrl: null,
  //       isAnswered: false,
  //       questionNumber: 4,
  //       responseCount: 6,
  //       targetMember: {
  //         meetingMemberId: 1,
  //         name: '김도은',
  //         profileImageFileUrl: 'https://example.com',
  //         role: 'OWNER',
  //       },
  //       title: '연봉 1000만원 올리기 VS 퇴근할 때 집으로 순간이동할 수 있는 초능력 가지기',
  //       totalMeetingMemberCount: 10,
  //       mostResponse: '제주도',
  //     },
  //     {
  //       meetingQuestionId: 3,
  //       questionImageFileUrl: null,
  //       isAnswered: false,
  //       questionNumber: 4,
  //       responseCount: 6,
  //       targetMember: {
  //         meetingMemberId: 1,
  //         name: '이한음',
  //         profileImageFileUrl: 'https://example.com',
  //         role: 'OWNER',
  //       },
  //       title: '즐겨하는 스포츠는?',
  //       totalMeetingMemberCount: 10,
  //       mostResponse: '제주도',
  //     },
  //     {
  //       meetingQuestionId: 4,
  //       questionImageFileUrl: null,
  //       isAnswered: false,
  //       questionNumber: 4,
  //       responseCount: 6,
  //       targetMember: {
  //         meetingMemberId: 1,
  //         name: '이한음',
  //         profileImageFileUrl: 'https://example.com',
  //         role: 'OWNER',
  //       },
  //       title: '술을 싫어하는 애인 VS 좋아하는 애인',
  //       totalMeetingMemberCount: 10,
  //       mostResponse: '제주도',
  //     },
  //     {
  //       meetingQuestionId: 5,
  //       questionImageFileUrl: null,
  //       isAnswered: false,
  //       questionNumber: 4,
  //       responseCount: 6,
  //       targetMember: {
  //         meetingMemberId: 1,
  //         name: '이한음',
  //         profileImageFileUrl: 'https://example.com',
  //         role: 'OWNER',
  //       },
  //       title: '탕수육 부먹 VS 찍먹',
  //       totalMeetingMemberCount: 10,
  //       mostResponse: '제주도',
  //     },
  //   ],
  //   pageable: {
  //     isEnd: false,
  //     page: 0,
  //     size: 10,
  //     totalPages: 3,
  //   },
  // };
  //   return await Http.GET('/v1/meeting-questions/active')
}
