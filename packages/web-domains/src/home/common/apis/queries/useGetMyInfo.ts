import { UseQueryOptionsExcludedQueryKey } from '@sambad/types-utils/tanstack';
import { useQuery, QueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { Http } from '../../../../common/apis/base.api';
import { MeResponseType } from '../schema/Me.schema';

type Params = { meetingId: number };

interface Args {
  params: Params;
  options?: UseQueryOptionsExcludedQueryKey<MeResponseType>;
}

export const MY_INFO_QUERY_KEY = 'MY_INFO_QUERY_KEY';

export const useGetMyInfo = ({ params, options }: Args) => {
  return useQuery({
    queryKey: [MY_INFO_QUERY_KEY, params.meetingId],
    queryFn: async () => {
      try {
        const data = await getMyInfo(params);
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

export const getMyInfoPrefetch = (params: Params, queryClient: QueryClient, cookie: ReadonlyRequestCookies) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [MY_INFO_QUERY_KEY, params.meetingId],
    queryFn: async () => {
      try {
        return await getMyInfo(params, cookie);
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error);
        }
      }
    },
  });

  return prefetch;
};

export async function getMyInfo(params: Params, cookie?: ReadonlyRequestCookies): Promise<MeResponseType> {
  const { meetingId } = params;
  const data = await Http.GET<MeResponseType>(`/v1/meetings/${meetingId}/members/me`, {
    headers: {
      Cookie: cookie?.toString(),
    },
  });

  return data;
}
