import { useGetTopPreviousQuestionList } from '@/home/common/apis/queries/useGetTopPreviousQuestionList';

export const useTopPreviousQuestionListService = () => {
  const { data: previousQuestionList } = useGetTopPreviousQuestionList({
    params: { meetingId: '1' },
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
