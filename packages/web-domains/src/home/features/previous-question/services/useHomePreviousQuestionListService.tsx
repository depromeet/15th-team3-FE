import { useGetPreviousQuestionList } from '../../../common/apis/queries/useGetPreviousQuestionList';

export const useHomePreviousQuestionListService = () => {
  const { data: previousQuestionList } = useGetPreviousQuestionList({
    options: {
      select: (data) => {
        console.log({ data });
        return data;
      },
    },
  });

  return {
    previousQuestionList,
  };
};
