import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import { GatherMemberProfileListContainer } from '../features/gather-member/containers/GatherMemberProfileListContainer';
import { HomePreviousQuestionListContainer } from '../features/previous-question/containers/HomePreviousQuestionListContainer';
import { ProgressingQuestionContainer } from '../features/progressing-question/containers/ProgressingQuestionContainer';

export const HomeScreen = async () => {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProgressingQuestionContainer />
      <HomePreviousQuestionListContainer />
      <GatherMemberProfileListContainer />
    </HydrationBoundary>
  );
};
