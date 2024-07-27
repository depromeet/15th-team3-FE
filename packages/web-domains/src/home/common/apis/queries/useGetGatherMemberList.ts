import { QueryClient, UseQueryOptions, useQuery } from '@tanstack/react-query';

// import { Http } from '../../../../common/apis/base.api';
import { GatherMemberListType } from '../schema/useGetGatherMemberListQuery.type';

interface Args {
  options?: Omit<UseQueryOptions<GatherMemberListType, unknown, GatherMemberListType>, 'queryKey'>;
}

export const GATHER_MEMBER_QUERY_KEY = 'GATHER_MEMBER_QUERY_KEY';

export const useGetGatherMemberList = ({ options }: Args) => {
  return useQuery({
    queryKey: [GATHER_MEMBER_QUERY_KEY],
    queryFn: () => getGatherMemberList(),
    ...options,
  });
};

export const getGatherMemberListPrefetch = (queryClient: QueryClient) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [GATHER_MEMBER_QUERY_KEY],
    queryFn: getGatherMemberList,
  });

  return prefetch;
};

export async function getGatherMemberList(): Promise<GatherMemberListType> {
  // const data = await Http.GET<GatherMemberListType>('/v1/meetings/1/members');

  return {
    content: [
      {
        id: 1,
        name: '이한음',
        profileImageFileUrl: 'https://example.com',
        role: 'MEMBER',
      },
      {
        id: 2,
        name: '장종오',
        profileImageFileUrl: 'https://example.com',
        role: 'OWNER',
      },
      {
        id: 3,
        name: '이세민',
        profileImageFileUrl: 'https://example.com',
        role: 'MEMBER',
      },
      {
        id: 4,
        name: '이서영',
        profileImageFileUrl: 'https://example.com',
        role: 'MEMBER',
      },
      {
        id: 5,
        name: '김시은',
        profileImageFileUrl: 'https://example.com',
        role: 'MEMBER',
      },
      {
        id: 6,
        name: '김나현',
        profileImageFileUrl: 'https://example.com',
        role: 'MEMBER',
      },
      {
        id: 7,
        name: '김도은',
        profileImageFileUrl: 'https://example.com',
        role: 'MEMBER',
      },
      {
        id: 8,
        name: '유준상',
        profileImageFileUrl: 'https://example.com',
        role: 'MEMBER',
      },
      {
        id: 9,
        name: '권기준',
        profileImageFileUrl: 'https://example.com',
        role: 'MEMBER',
      },
      {
        id: 10,
        name: '조유진',
        profileImageFileUrl: 'https://example.com',
        role: 'MEMBER',
      },
    ],
  };
}
