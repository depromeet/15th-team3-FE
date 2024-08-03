import { useGetMostSelected } from '@/result/common/apis/queries/useGetMostSelected';
import { BaseParams } from '@/result/common/types/BaseParams';

import { MemberList } from '../components';

export const MostSelectedListContainer = (params: BaseParams) => {
  const { questionId } = params;
  const { data } = useGetMostSelected({ meetingId: 1, questionId });

  return <MemberList members={data?.selectedMembers} />;
};
