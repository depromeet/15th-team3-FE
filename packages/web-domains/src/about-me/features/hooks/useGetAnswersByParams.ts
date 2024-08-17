import { useGetAnswers } from '@/about-me/common/apis/queries/useGetAnswers';
import { useGetAnswersMe } from '@/about-me/common/apis/queries/useGetAnswersMe';
import { useGetMeetings } from '@/about-me/common/apis/queries/useGetMeetings';

import { useIsMyByParams } from './useIsMyByParams';

export const useGetAnswersByParams = () => {
  const { data: meetingsIdsData } = useGetMeetings();
  // NOTE: 현재 스팩에서는 하나의 모임에만 가입할 수 있습니다.
  const meetingId = meetingsIdsData?.meetings[0]?.meetingId || -1;

  const { isMy, meetingMemberId } = useIsMyByParams();

  const useGetAnswerQuery = isMy ? useGetAnswersMe : useGetAnswers;

  const query = useGetAnswerQuery({ meetingId, meetingMemberId });

  return query;
};
