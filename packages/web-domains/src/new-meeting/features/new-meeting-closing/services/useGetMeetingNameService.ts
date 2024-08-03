import { Params, useGetMeetingName } from '@/common/apis/queries/useGetMeetingName';

export const useGetMeetingNameService = (params: Params) => {
  const response = useGetMeetingName(params);

  return response;
};
