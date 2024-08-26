import { useConvertTypeParams } from './useConvertTypeParams';

/**
 * isMy가 true인 경우 meetingMemberId가 NaN입니다.
 */
export const useIsMyByParams = () => {
  const { meetingMemberId } = useConvertTypeParams();

  const isMy = !!meetingMemberId === false;

  return { isMy };
};
