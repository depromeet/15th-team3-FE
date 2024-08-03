import { useQuery } from '@tanstack/react-query';

import { Http } from '../../../../common/apis/base.api';
import { ActiveQuestionResponse } from '../types';

export const ACTIVE_QUESTION_QUERY_KEY = 'ACTIVE_QUESTION_QUERY_KEY';

const _getActiveQuestion = async (meetingId: number) =>
  await Http.GET<ActiveQuestionResponse>(`/v1/meetings/${meetingId}/questions/active`);

export const useActiveQuestionQuery = (meetingId: number) => {
  const { data, ...rest } = useQuery({
    queryKey: [ACTIVE_QUESTION_QUERY_KEY],
    queryFn: () => _getActiveQuestion(meetingId),
    enabled: !!meetingId,
  });

  return { activeQuestion: data, ...rest };
};
