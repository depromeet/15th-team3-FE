import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { cookies } from 'next/headers';

import { getProgressingQuestionPrefetch } from '../common/apis/queries/useGetProgressingQuestion';
import { ProgressingQuestionContainer } from '../features/progressing-question/containers/ProgressingQuestionContainer';
import { TobBarContainer } from '../features/top-bar/containers/TopBarContainer';

interface Params {
  params: { meetingId: number };
}

export const AnswerOpeningScreen = async ({ params: { meetingId } }: Params) => {
  const { queryClient } = await getServerSideProps({ meetingId });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TobBarContainer />
      <ProgressingQuestionContainer />
    </HydrationBoundary>
  );
};

const getServerSideProps = async ({ meetingId }: Params['params']) => {
  const queryClient = new QueryClient();

  try {
    const cookie = cookies();
    const params = { meetingId };
    await getProgressingQuestionPrefetch(params, queryClient, cookie);
  } catch (error: unknown) {
    console.log(error);
  }
  return { queryClient };
};
