import { useGetGatherMemberListQuery } from '../../../../common/apis/queries/useGetGatherMemberListQuery';

export const useGatherMemberProfileListService = () => {
  const { data } = useGetGatherMemberListQuery({});

  const gatherMemberList = data?.content.sort((cur) => {
    if (cur.role === 'OWNER') {
      return -1;
    } else {
      return 1;
    }
  });

  return {
    gatherMemberList: gatherMemberList,
  };
};
