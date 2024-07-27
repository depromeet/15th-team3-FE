import { useGetGatherMemberList } from '../../../common/apis/queries/useGetGatherMemberList';

export const useGatherMemberProfileListService = () => {
  const { data } = useGetGatherMemberList({});

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
