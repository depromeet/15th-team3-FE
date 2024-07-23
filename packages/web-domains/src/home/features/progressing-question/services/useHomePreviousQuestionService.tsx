import { useGetPreviousQuestionListQuery } from '../../../../common/apis/queries/useGetPreviousQuestionListQuery';

export const useHomePreviousQuestionService = () => {
  const { data: previousQuestionList } = useGetPreviousQuestionListQuery({
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
