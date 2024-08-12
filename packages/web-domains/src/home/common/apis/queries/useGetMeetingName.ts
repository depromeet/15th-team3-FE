import { UseQueryOptionsExcludedQueryKey } from '@sambad/types-utils/tanstack';
import { useQuery, QueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { Http } from '../../../../common/apis/base.api';
import { MeetingIdListResponseType } from '../schema/Meeting.schema';

interface Args {
  options?: UseQueryOptionsExcludedQueryKey<MeetingIdListResponseType>;
}

export const MEETING_INFO_QUERY_KEY = 'MEETING_NAME_QUERY_KEY';

export const useGetMeetingInfo = ({ options }: Args) => {
  return useQuery({
    queryKey: [MEETING_INFO_QUERY_KEY],
    queryFn: async () => {
      try {
        const data = await getMeetingInfo();
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

export const getMeetingInfoPrefetch = (queryClient: QueryClient, cookie?: ReadonlyRequestCookies) => {
  const prefetch = queryClient.fetchQuery({
    queryKey: [MEETING_INFO_QUERY_KEY],
    queryFn: async () => {
      try {
        const data = await getMeetingInfo(cookie);
        console.log({ data });
        return data;
        // return await getMeetingInfo(cookie);
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error);
        }
      }
    },
  });

  return prefetch;
};

export async function getMeetingInfo(cookie?: ReadonlyRequestCookies): Promise<MeetingIdListResponseType> {
  const data = await Http.GET<MeetingIdListResponseType>(`/v1/meetings`, {
    headers: {
      Cookie: cookie?.toString(),
    },
  });

  return data;
}
