import { useGetGatherMemberList } from '../../../common/apis/queries/useGetGatherMemberList';

export const useGatherMemberProfileListService = () => {
  const { data } = useGetGatherMemberList({ params: { meetingId: '1' } });

  return {
    gatherMemberList: data?.contents,
  };
};
