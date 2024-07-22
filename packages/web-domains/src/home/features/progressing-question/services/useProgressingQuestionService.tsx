import { useGetProgressingQuestionQuery } from '../../../../common/apis/queries/useGetProgressingQuestionQuery';

export const useProgressingQuestionService = () => {
  const gatherName = '삼봤드의 모험';

  const { data: progressingQuestion } = useGetProgressingQuestionQuery({
    options: {
      select: (data) => {
        console.log({ data });
        return data;
      },
    },
  });

  return {
    gatherName,
    progressingQuestion,
  };
};
