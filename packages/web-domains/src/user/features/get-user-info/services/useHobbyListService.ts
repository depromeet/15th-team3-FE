import { useGetHobbyList } from '@/common/apis/queries/useGetHobbyList';

export const useHobbyListService = () => {
  const queryParams = {
    staleTime: 60 * 1000,
  };

  const { data } = useGetHobbyList({
    options: queryParams,
  });

  return {
    hobbyList: data?.contents,
  };
};
