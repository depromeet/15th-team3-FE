import { useGetAnswers } from '@/about-me/common/apis/queries/useGetAnswers';
import { useGetAnswersMe } from '@/about-me/common/apis/queries/useGetAnswersMe';

import { useConvertTypeParams } from './useConvertTypeParams';
import { useIsMyByParams } from './useIsMyByParams';

export const useGetAnswersByParams = () => {
  const { meetingId, meetingMemberId } = useConvertTypeParams();
  const { isMy } = useIsMyByParams();

  const useGetAnswerQuery = isMy ? useGetAnswersMe : useGetAnswers;

  const query = useGetAnswerQuery({ meetingId, meetingMemberId });

  return query;
};
