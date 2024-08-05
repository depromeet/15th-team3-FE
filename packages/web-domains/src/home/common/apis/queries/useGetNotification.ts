import { UseQueryOptionsExcludedQueryKey } from '@sambad/types-utils/tanstack';
import { useQuery, QueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { Http } from '../../../../common/apis/base.api';
import { NotificationResponseType } from '../schema/Notification.schema';

type Params = { meetingId: number };

interface Args {
  params: Params;
  options?: UseQueryOptionsExcludedQueryKey<NotificationResponseType>;
}

export const NOTIFICATION_QUERY_KEY = 'NOTIFICATION_QUERY_KEY';

export const useGetNotification = ({ params, options }: Args) => {
  return useQuery({
    queryKey: [NOTIFICATION_QUERY_KEY, params.meetingId],
    queryFn: async () => {
      try {
        const data = await getNotification(params);
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

export const getNotificationPrefetch = (params: Params, queryClient: QueryClient, cookie: ReadonlyRequestCookies) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [NOTIFICATION_QUERY_KEY, params.meetingId],
    queryFn: async () => {
      try {
        return await getNotification(params, cookie);
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error);
        }
      }
    },
  });

  return prefetch;
};

export async function getNotification(
  params: Params,
  cookie?: ReadonlyRequestCookies,
): Promise<NotificationResponseType> {
  const { meetingId } = params;
  const data = await Http.GET<NotificationResponseType>(`/v1/events/${meetingId}`, {
    headers: {
      Cookie: cookie?.toString(),
    },
  });

  return data;
}
