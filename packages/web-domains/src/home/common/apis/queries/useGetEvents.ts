import { UseQueryOptionsExcludedQueryKey } from '@sambad/types-utils/tanstack';
import { useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { Http } from '../../../../common/apis/base.api';
import { AlarmEventListResponseType } from '../schema/Notification.schema';

type Params = { meetingId: number };
interface Args {
  params: Params;
  options?: UseQueryOptionsExcludedQueryKey<AlarmEventListResponseType | undefined>;
}

export const EVENTS_QUERY_KEY = 'EVENTS_QUERY_KEY';

export const useGetEvents = ({ params, options }: Args) => {
  return useQuery({
    queryKey: [EVENTS_QUERY_KEY, params.meetingId],
    queryFn: async () => {
      try {
        const data = await getEvents(params);
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

export async function getEvents(params: Params, cookie?: ReadonlyRequestCookies): Promise<AlarmEventListResponseType> {
  const { meetingId } = params;

  const data = await Http.GET<AlarmEventListResponseType>(`/v1/events/meetings/${meetingId}`, {
    headers: {
      Cookie: cookie?.toString(),
    },
  });

  return data;
}
