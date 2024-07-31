import { QueryClient, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { Http } from '../base.api';
import { HobbyListResponse } from '../schema/HobbyListResponse';

export const HOBBY_LIST_QUERY_KEY = 'HOBBY_LIST_QUERY_KEY';

interface Args {
  options?: Omit<UseQueryOptions<HobbyListResponse, unknown, HobbyListResponse>, 'queryKey'>;
}

export const useGetHobbyListQuery = ({ options }: Args) => {
  return useQuery({
    queryKey: [HOBBY_LIST_QUERY_KEY],
    queryFn: getHobbyList,
    ...options,
  });
};

export const getHobbyListPrefetchQuery = (queryClient: QueryClient) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [HOBBY_LIST_QUERY_KEY],
    queryFn: getHobbyList,
  });
  return prefetch;
};

export async function getHobbyList(): Promise<HobbyListResponse> {
  return await Http.GET('/v1/hobbies');
}

// export async function getHobbyList(): Promise<HobbyListResponse> {
//   return {
//     contents: [
//       { hobbyId: 1, content: '🍖 음식' },
//       { hobbyId: 2, content: '📚 독서' },
//       { hobbyId: 3, content: '🏂️ 스노우보드' },
//       { hobbyId: 4, content: '🎨 그림' },
//       { hobbyId: 5, content: '🎮 게임' },
//       { hobbyId: 6, content: '🎤 노래' },
//       { hobbyId: 7, content: '🧑‍💻 자기개발' },
//       { hobbyId: 8, content: '😍 덕질' },
//       { hobbyId: 9, content: '🖥️ 유튜브' },
//       { hobbyId: 10, content: '🏊 수영' },
//     ],
//   };
// }
