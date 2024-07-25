import { useGetPreviousQuestionListQuery } from '../../../../common/apis/queries/useGetPreviousQuestionListQuery';

export const usePreviousQuestionListService = () => {
  const { data: previousQuestionList } = useGetPreviousQuestionListQuery({
    options: {
      select: (data) => {
        console.log({ data });
        return data;
      },
    },
  });

  return { previousQuestionList };
};
