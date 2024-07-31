import { useGetMeetingTypes } from '@/common/apis/queries/useGetMeetingTypes';

export const useMeetingTypesService = () => {
  const res = useGetMeetingTypes();

  return {
    meetingTypes: res.data?.contents,
  };
};
