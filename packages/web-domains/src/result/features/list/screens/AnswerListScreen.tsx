import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getAnswersPrefetch } from '@/result/common/apis/queries/useGetAnswers';
import { getMeetingsPrefetch } from '@/result/common/apis/queries/useGetMeetings';
import { BaseParams } from '@/result/common/types/BaseParams';

import { AnswerListContainer } from '../containers/AnswerListContainer';

export const AnswerListScreen = async (params: BaseParams) => {
  const { queryClient } = await getServerSideProps(params);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnswerListContainer />
    </HydrationBoundary>
  );
};

const getServerSideProps = async (params: BaseParams) => {
  const queryClient = new QueryClient();

  try {
    await getMeetingsPrefetch({ queryClient });

    await getAnswersPrefetch({
      queryClient,
      meetingId: Number(params.meetingId),
      questionId: Number(params.questionId),
    });
  } catch (error) {
    console.error(error);
  }

  return { queryClient };
};
