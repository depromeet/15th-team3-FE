import { useParams } from 'next/navigation';

/**
 * isMy가 true인 경우 meetingMemberId가 NaN입니다.
 */
export const useIsMyByParams = () => {
  const params = useParams<{ meetingMemberId?: string }>();
  const meetingMemberId = Number(params.meetingMemberId);

  const isMy = !!meetingMemberId === false;

  return { isMy, meetingMemberId };
};
