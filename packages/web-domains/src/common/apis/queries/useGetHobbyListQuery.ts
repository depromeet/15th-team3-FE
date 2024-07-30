import { QueryClient, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { HobbyListType } from '../schema/useGetHobbyList.type';

export const hobbyListQuerykey = 'HOBBY_LIST_QUERY_KEY';

interface Args {
  options?: Omit<UseQueryOptions<HobbyListType, unknown, HobbyListType>, 'queryKey'>;
}

export const useGetHobbyListQuery = ({ options }: Args) => {
  return useQuery({
    queryKey: [hobbyListQuerykey],
    queryFn: () => getHobbyList(),
    ...options,
  });
};

export const getHobbyListPrefetchQuery = (queryClient: QueryClient) => () => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [hobbyListQuerykey],
    queryFn: getHobbyList,
  });
  return prefetch;
};

// export async function getHobbyList(): Promise<HobbyListType> {
//   return await Http.GET('/v1/hobbies');
// }

export async function getHobbyList(): Promise<HobbyListType> {
  return {
    contents: [
      { id: 1, content: '🍖 음식' },
      { id: 2, content: '📚 독서' },
      { id: 3, content: '🏂️ 스노우보드' },
      { id: 4, content: '🎨 그림' },
      { id: 5, content: '🎮 게임' },
      { id: 6, content: '🎤 노래' },
      { id: 7, content: '🧑‍💻 자기개발' },
      { id: 8, content: '😍 덕질' },
      { id: 9, content: '🖥️ 유튜브' },
      { id: 10, content: '🏊 수영' },
    ],
  };
}
