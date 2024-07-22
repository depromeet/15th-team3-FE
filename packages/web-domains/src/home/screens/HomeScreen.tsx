import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import { ProgressingQuestionContainer } from '../features/progressing-question/containers/ProgressingQuestionContainer';

export const HomeScreen = async () => {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProgressingQuestionContainer />
    </HydrationBoundary>
  );
};
