import { useQuery } from '@tanstack/react-query';

import { Http } from '../../../../../common/apis/base.api';
import { RelayQuestionResponse } from '../../types';

const RANDOM_QUESTION_QUERY_KEY = 'RANDOM_QUESTION_QUERY_KEY';

const _getRandomQuestion = async (excludeQuestionIds: number[]) =>
  await Http.GET<RelayQuestionResponse>(`/v1/questions/random?excludeQuestionIds=${excludeQuestionIds.join(',')}`);

export const useRandomQuestionQuery = (excludeQuestionIds: number[]) => {
  const { data, ...rest } = useQuery({
    queryKey: [RANDOM_QUESTION_QUERY_KEY, excludeQuestionIds],
    queryFn: () => _getRandomQuestion(excludeQuestionIds),
    enabled: false,
  });

  return { question: data, ...rest };
};
