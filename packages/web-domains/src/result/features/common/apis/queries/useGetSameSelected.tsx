import { axiosInstance } from '@/common/apis/base.api';
import { UseQueryOptionsExcludedQueryKey } from '@sambad/types-utils/tanstack';
import { useQuery } from '@tanstack/react-query';
import { SelectedAnswerResponse } from '../schema/SelectedAnswerResponse';

interface Params {
  meetingId: number;
  questionId: number;
}

interface QueryProps extends Params {
  options: UseQueryOptionsExcludedQueryKey<SelectedAnswerResponse>;
}

export const SAME_SELECTED_QUERY_KEY = 'SAME_SELECTED_QUERY_KEY';

const queryFn = ({ questionId, meetingId }: Params) =>
  axiosInstance(`/meetings/${meetingId}/questions/${questionId}/answers/selected-same`);

export const useGetSameSelected = (props: QueryProps) => {
  const { options, ...params } = props;

  return useQuery({
    queryKey: [SAME_SELECTED_QUERY_KEY],
    queryFn: () => queryFn(params),
    ...options,
  });
};
