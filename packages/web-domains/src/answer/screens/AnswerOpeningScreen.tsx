import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import { getProgressingQuestionPrefetch } from '../common/apis/queries/useGetProgressingQuestion';
import { FloatingButtonContainer } from '../features/floating-button/containers/FloatingButtonContainer';
import { ProgressingQuestionContainer } from '../features/progressing-question/containers/ProgressingQuestionContainer';
import { TobBarContainer } from '../features/top-bar/containers/TopBarContainer';

export const AnswerOpeningScreen = async () => {
  const { queryClient } = await getServerSideProps();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TobBarContainer />
      <ProgressingQuestionContainer />
      <FloatingButtonContainer />
    </HydrationBoundary>
  );
};

const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await getProgressingQuestionPrefetch(queryClient);
  try {
    console.log('');
  } catch (error: unknown) {
    console.log(error);
  }
  return { queryClient };
};
