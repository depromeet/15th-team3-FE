import { UseQueryOptionsExcludedQueryKey } from '@sambad/types-utils/tanstack';
import { useQuery, QueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import { Http } from '../../../../common/apis/base.api';
import { MeetingInfoResponse } from '../schema/Meeting.schema';
import { NotificationType } from '../schema/Notification.schema';

import { getMeetingInfo } from './useGetMeetingName';

interface Args {
  options?: UseQueryOptionsExcludedQueryKey<MeetingInfoResponse>;
}

export const NOTIFICATION_QUERY_KEY = 'NOTIFICATION_QUERY_KEY';

export const useGetNotification = ({ options }: Args) => {
  return useQuery({
    queryKey: [NOTIFICATION_QUERY_KEY],
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

export const getNotificationPrefetch = (queryClient: QueryClient) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [NOTIFICATION_QUERY_KEY],
    queryFn: async () => {
      try {
        return await getNotification();
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error);
        }
      }
    },
  });

  return prefetch;
};

export async function getNotification(): Promise<NotificationType> {
  const data = await Http.GET<NotificationType>(`/v1/meetings/types`);

  return data;
}
