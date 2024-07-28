import { useGetProgressingQuestion } from '../../../common/apis/queries/useGetProgressingQuestion';

export const useProgressingQuestionService = () => {
  const gatherName = '삼봤드의 모험';

  const { data: progressingQuestion } = useGetProgressingQuestion({
    params: { meetingId: '1' },
    options: {
      select: (data) => {
        console.log({ data });
        return data;
      },
    },
  });

  // const {} =

  return {
    gatherName,
    progressingQuestion,
  };
};
