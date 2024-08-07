import { useGetMeetingTypes } from '@/common/apis/queries/useGetMeetingTypes';

export const useMeetingTypesService = () => {
  const response = useGetMeetingTypes();

  return response;
};
