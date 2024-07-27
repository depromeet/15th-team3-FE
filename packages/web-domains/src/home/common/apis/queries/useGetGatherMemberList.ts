// import { Http } from '../../../../common/apis/base.api';
import { UseQueryOptions, useQuery, QueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

import { Http } from '../../../../common/apis/base.api';
import { GatherMemberListType } from '../schema/useGetGatherMemberListQuery.type';

interface Args {
  options?: Omit<
    UseQueryOptions<GatherMemberListType | undefined, unknown, GatherMemberListType | undefined>,
    'queryKey'
  >;
}

export const GATHER_MEMBER_QUERY_KEY = 'GATHER_MEMBER_QUERY_KEY';

export const useGetGatherMemberList = ({ options }: Args) => {
  return useQuery({
    queryKey: [GATHER_MEMBER_QUERY_KEY],
    queryFn: async () => {
      try {
        return await getGatherMemberList();
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error);
        }
      }
    },
    ...options,
  });
};

export const getGatherMemberListPrefetch = (queryClient: QueryClient, cookies?: RequestCookie) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [GATHER_MEMBER_QUERY_KEY],
    queryFn: async () => {
      try {
        return await getGatherMemberList(cookies);
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error);
        }
      }
    },
  });

  return prefetch;
};

export async function getGatherMemberList(cookies?: RequestCookie): Promise<GatherMemberListType> {
  const data = await Http.GET<GatherMemberListType>('/v1/meetings/1/members', {
    headers: { Cookie: `access_token'=${cookies?.value}` },
  });
  console.log('@@@@@@@@@@@@@@@@', { data });
  return {
    content: data.content,
  };
}
