import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';
import { cookies } from 'next/headers';

import { getGetQuestionPrefetch } from '../common/apis/queries/useGetQuestion';
import { AnswerQuestionContainer } from '../features/answer-question/containers/AnswerQuestionContainer';

type Params = {
  params: {
    meetingId: string;
    questionId: string;
  };
};

export const AnswerQuestionScreen = async ({ params: { meetingId, questionId } }: Params) => {
  const { queryClient } = await getServerSideProps({ meetingId, questionId });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnswerQuestionContainer />
    </HydrationBoundary>
  );
};

const getServerSideProps = async ({ meetingId }: Params['params']) => {
  const queryClient = new QueryClient();

  try {
    const cookie = cookies();

    await getGetQuestionPrefetch({ meetingId: parseInt(meetingId) }, queryClient, cookie);
  } catch (error: unknown) {
    console.log(error);
  }
  return { queryClient };
};
