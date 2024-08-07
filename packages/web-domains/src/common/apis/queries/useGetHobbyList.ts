import { QueryClient, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { Http } from '../base.api';

export type HobbyType = {
  hobbyId: number;
  content: string;
};

export type HobbyListResponse = {
  contents: HobbyType[];
};

interface QueryProps {
  options?: Omit<UseQueryOptions<HobbyListResponse, unknown, HobbyListResponse>, 'queryKey'>;
}

export const HOBBY_LIST_QUERY_KEY = 'HOBBY_LIST_QUERY_KEY';

const getHobbyList = () => Http.GET<HobbyListResponse>('/v1/hobbies');

export const useGetHobbyList = (props: QueryProps) => {
  const { options } = props;

  return useQuery({
    queryKey: [HOBBY_LIST_QUERY_KEY],
    queryFn: getHobbyList,
    ...options,
  });
};

export const getHobbyListPrefetch = (queryClient: QueryClient) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [HOBBY_LIST_QUERY_KEY],
    queryFn: getHobbyList,
  });
  return prefetch;
};

// export async function getHobbyList(): Promise<HobbyListResponse> {
//   return {
//     contents: [
//       {
//         hobbyId: 1,
//         content: '\uD83C\uDFCA 수영',
//       },
//       {
//         hobbyId: 2,
//         content: '\uD83D\uDCFA 넷플릭스',
//       },
//       {
//         hobbyId: 3,
//         content: '\uD83D\uDCDA 독서',
//       },
//       {
//         hobbyId: 4,
//         content: '\uD83E\uDD7E 등산',
//       },
//       {
//         hobbyId: 5,
//         content: '\uD83C\uDFA4 노래',
//       },
//       {
//         hobbyId: 6,
//         content: '⚾ 야구',
//       },
//       {
//         hobbyId: 7,
//         content: '\uD83C\uDFC2 스노우보드',
//       },
//       {
//         hobbyId: 8,
//         content: '\uD83C\uDFA8 그림',
//       },
//       {
//         hobbyId: 9,
//         content: '\uD83C\uDFAE 게임',
//       },
//       {
//         hobbyId: 10,
//         content: '\uD83D\uDD7A 춤',
//       },
//       {
//         hobbyId: 11,
//         content: '\uD83D\uDCF8 사진',
//       },
//       {
//         hobbyId: 12,
//         content: '\uD83C\uDF56 음식',
//       },
//       {
//         hobbyId: 13,
//         content: '\uD83D\uDDA5 ️유튜브',
//       },
//       {
//         hobbyId: 14,
//         content: '\uD83E\uDDD1‍\uD83D\uDCBB 자기계발',
//       },
//       {
//         hobbyId: 15,
//         content: '\uD83C\uDFC3 조깅',
//       },
//       {
//         hobbyId: 16,
//         content: '\uD83D\uDE0D 덕질',
//       },
//     ],
//   };
// }
