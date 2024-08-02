import { useQuery } from '@tanstack/react-query';

import { Http } from '../../../../../common/apis/base.api';
import { RelayQuestionResponse } from '../../types';

const RELAY_QUESTION_QUERY_KEY = 'RELAY_QUESTION_QUERY_KEY';

const _getRelayQuestion = async (questionId: number) =>
  await Http.GET<RelayQuestionResponse>(`/v1/questions/${questionId}`);

export const useRelayQuestionQuery = (questionId: number) => {
  const { data, ...rest } = useQuery({
    queryKey: [RELAY_QUESTION_QUERY_KEY],
    queryFn: () => _getRelayQuestion(questionId),
    enabled: false,
  });

  return { question: data, ...rest };
};
