import { axiosInstance } from '@/common/apis/base.api';
import { UseQueryOptionsExcludedQueryKey } from '@sambad/types-utils/tanstack';
import { useQuery } from '@tanstack/react-query';
import { MeetingCommentListResponse } from '../schema/MeetingCommentListResponse';

interface Params {
  meetingId: number;
  questionId: number;
}

interface QueryProps extends Params {
  options: UseQueryOptionsExcludedQueryKey<MeetingCommentListResponse>;
}

export const COMMENTS_QUERY_KEY = 'COMMENTS_QUERY_KEY';

const queryFn = ({ questionId, meetingId }: Params) =>
  axiosInstance(`/meetings/${meetingId}/questions/${questionId}/comments`);

export const useGetComments = (props: QueryProps) => {
  const { options, ...params } = props;

  return useQuery({
    queryKey: [COMMENTS_QUERY_KEY],
    queryFn: () => queryFn(params),
    ...options,
  });
};
