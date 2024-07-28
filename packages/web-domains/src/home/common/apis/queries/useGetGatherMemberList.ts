import { UseQueryOptionsExcludedQueryKey } from '@sambad/types-utils/tanstack';
import { useQuery, QueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import { Http } from '../../../../common/apis/base.api';
import { GatherMemberListType } from '../schema/useGetGatherMemberListQuery.type';

type Params = { meetingId: string };
interface Args {
  params: Params;
  options?: UseQueryOptionsExcludedQueryKey<GatherMemberListType | undefined>;
}

export const GATHER_MEMBER_QUERY_KEY = 'GATHER_MEMBER_QUERY_KEY';

export const useGetGatherMemberList = ({ params, options }: Args) => {
  return useQuery({
    queryKey: [GATHER_MEMBER_QUERY_KEY, params.meetingId],
    queryFn: async () => {
      try {
        const data = await getGatherMemberList(params);
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

export const getGatherMemberListPrefetch = (params: Params, queryClient: QueryClient) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [GATHER_MEMBER_QUERY_KEY, params.meetingId],
    queryFn: async () => {
      try {
        return await getGatherMemberList(params);
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error);
        }
      }
    },
  });

  return prefetch;
};

export async function getGatherMemberList(params: Params): Promise<GatherMemberListType> {
  const { meetingId } = params;
  const { contents } = await Http.GET<GatherMemberListType>(`/v1/meetings/${meetingId}/members`);
  return {
    contents,
  };
}
