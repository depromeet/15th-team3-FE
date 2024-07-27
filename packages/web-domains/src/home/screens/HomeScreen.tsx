import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import { DialogContextProvider } from '../../common/contexts/DialogProvider';
import { getGatherMemberListPrefetch } from '../common/apis/queries/useGetGatherMemberList';
import { getPreviousQuestionListPrefetch } from '../common/apis/queries/useGetPreviousQuestionList';
import { getProgressingQuestionPrefetch } from '../common/apis/queries/useGetProgressingQuestion';
import { FloatingButtonContainer } from '../features/floating-button/containers/FloatingButtonContainer';
import { GatherMemberProfileListContainer } from '../features/gather-member/containers/GatherMemberProfileListContainer';
import { NotifyContainer } from '../features/notify/containers/NotifyContainer';
import { HomePreviousQuestionListContainer } from '../features/previous-question/containers/HomePreviousQuestionListContainer';
import { ProgressingQuestionContainer } from '../features/progressing-question/containers/ProgressingQuestionContainer';

export const HomeScreen = async () => {
  const { queryClient } = await getServerSideProps();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DialogContextProvider>
        <ProgressingQuestionContainer />
        <HomePreviousQuestionListContainer />
        <GatherMemberProfileListContainer />
        <NotifyContainer />
        <FloatingButtonContainer />
      </DialogContextProvider>
    </HydrationBoundary>
  );
};

const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  try {
    const gatherMemberPrefetch = getGatherMemberListPrefetch(queryClient);
    const previousQuestionListPrefetch = getPreviousQuestionListPrefetch(queryClient);
    const progressingQuestionPrefetch = getProgressingQuestionPrefetch(queryClient);

    await Promise.all([gatherMemberPrefetch, previousQuestionListPrefetch, progressingQuestionPrefetch]);
  } catch (error: unknown) {
    console.log(error);
  }
  return { queryClient };
};
