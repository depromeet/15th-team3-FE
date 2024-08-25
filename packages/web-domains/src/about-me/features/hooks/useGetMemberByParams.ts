import { useGetMember } from '@/about-me/common/apis/queries/useGetMember';
import { useGetMemberMe } from '@/about-me/common/apis/queries/useGetMemberMe';

import { useConvertTypeParams } from './useConvertTypeParams';
import { useIsMyByParams } from './useIsMyByParams';

export const useGetMemberByParams = () => {
  const { meetingId, meetingMemberId } = useConvertTypeParams();
  const { isMy } = useIsMyByParams();

  const useGetMemberQuery = isMy ? useGetMemberMe : useGetMember;

  const query = useGetMemberQuery({ meetingId, meetingMemberId });

  return query;
};
