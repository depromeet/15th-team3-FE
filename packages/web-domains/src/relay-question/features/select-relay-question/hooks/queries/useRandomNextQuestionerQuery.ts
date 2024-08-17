import { useQuery } from '@tanstack/react-query';

import { Http } from '../../../../../common/apis/base.api';
import { NextRelayQuestionerResponse } from '../../types';

interface Params {
  meetingId: number;
  excludeMemberIds: number[];
}

export const RANDOM_NEXT_QUESTION_QUERY_KEY = 'RANDOM_NEXT_QUESTION_QUERY_KEY';

const _getRandomNextQuestioner = async ({ meetingId, excludeMemberIds }: Params) =>
  await Http.GET<NextRelayQuestionerResponse>(
    `/v1/meetings/${meetingId}/members/questions/target?excludeMemberIds=${excludeMemberIds.join(',')}`,
  );

export const useRandomNextQuestionerQuery = ({ meetingId, excludeMemberIds }: Params) => {
  const { data, refetch, ...rest } = useQuery({
    queryKey: [RANDOM_NEXT_QUESTION_QUERY_KEY, meetingId, excludeMemberIds],
    queryFn: () => _getRandomNextQuestioner({ meetingId, excludeMemberIds }),
    enabled: false,
  });

  return { questioner: data, refetchQuestioner: refetch, ...rest };
};
