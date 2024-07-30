import { useGetHobbyListQuery } from '../../../../common/apis/queries/useGetHobbyListQuery';

export const useHobbyListService = () => {
  const { data: hobbyList } = useGetHobbyListQuery({
    options: {
      select: (data) => {
        return data;
      },
    },
  });

  return {
    hobbyList,
  };
};
