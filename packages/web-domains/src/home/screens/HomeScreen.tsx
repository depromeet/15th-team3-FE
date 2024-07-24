import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import { getGatherMemberListPrefetchQuery } from '../../common/apis/queries/useGetGatherMemberListQuery';
import { getPreviousQuestionListPrefetchQuery } from '../../common/apis/queries/useGetPreviousQuestionListQuery';
import { getProgressingQuestionPrefetchQuery } from '../../common/apis/queries/useGetProgressingQuestionQuery';
import { GatherMemberProfileListContainer } from '../features/gather-member/containers/GatherMemberProfileListContainer';
import { HomePreviousQuestionListContainer } from '../features/previous-question/containers/HomePreviousQuestionListContainer';
import { ProgressingQuestionContainer } from '../features/progressing-question/containers/ProgressingQuestionContainer';

export const HomeScreen = async () => {
  const { queryClient } = await getServerSideProps();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProgressingQuestionContainer />
      <HomePreviousQuestionListContainer />
      <GatherMemberProfileListContainer />
    </HydrationBoundary>
  );
};

const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  const gatherMemberPrefetch = getGatherMemberListPrefetchQuery(queryClient);
  const previousQuestionListPrefetch = getPreviousQuestionListPrefetchQuery(queryClient);
  const progressingQuestionPrefetch = getProgressingQuestionPrefetchQuery(queryClient);

  await Promise.all([gatherMemberPrefetch(), previousQuestionListPrefetch(), progressingQuestionPrefetch()]);

  return { queryClient };
};
