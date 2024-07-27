import { UseQueryOptionsExcludedQueryKey } from '@sambad/types-utils/tanstack';
import { useQuery, QueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import { Http } from '../../../../common/apis/base.api';
import { MeetingInfoResponse, MeetingTypeResponse } from '../schema/Meeting.schema';

interface Args {
  options?: UseQueryOptionsExcludedQueryKey<MeetingInfoResponse>;
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

export const getGatherMeetingInfoPrefetch = (queryClient: QueryClient) => {
  const prefetch = queryClient.prefetchQuery({
    queryKey: [MEETING_INFO_QUERY_KEY],
    queryFn: async () => {
      try {
        return await getMeetingInfo();
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error);
        }
      }
    },
  });

  return prefetch;
};

export async function getMeetingInfo(): Promise<MeetingInfoResponse> {
  const data = await Http.GET<MeetingTypeResponse>(`/v1/meetings/types`);

  if (data) {
    return {
      meetingName: '삼봤드의 모험',
      meetingId: data.contents[0]?.meetingTypeId ?? 1,
    };
  }
  return data;
}