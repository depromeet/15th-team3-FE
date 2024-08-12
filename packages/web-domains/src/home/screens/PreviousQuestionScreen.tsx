import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import { PreviousQuestionListContainer } from '../features/previous-question/containers/PreviousQuestionListContainer';

export const PreviousQuestionScreen = async () => {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PreviousQuestionListContainer />
    </HydrationBoundary>
  );
};
