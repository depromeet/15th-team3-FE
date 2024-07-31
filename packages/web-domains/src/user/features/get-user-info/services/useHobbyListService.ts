import { useGetHobbyListQuery } from '../../../../common/apis/queries/useGetHobbyListQuery';

export const useHobbyListService = () => {
  const { data } = useGetHobbyListQuery({
    options: {
      select: (data) => data,
      staleTime: 60 * 1000,
    },
  });

  console.log(data);

  return {
    hobbyList: data?.contents,
  };
};
