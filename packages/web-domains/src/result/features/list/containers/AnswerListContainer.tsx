import { BaseParams } from '@/result/common/types/BaseParams';

import { MemberList } from '../components';

export const AnswerListContainer = (params: BaseParams) => {
  const { questionId } = params;
  const { data } = { meetingId: 1, questionId };

  return <MemberList members={data?.selectedMembers} />;
};
