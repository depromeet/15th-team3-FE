import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getCommentsPrefetch } from '../common/apis/queries/useGetComments';
import { getDetailedQuestionDataPrefetch } from '../common/apis/queries/useGetDetailedQuestionData';
import { getMostSelectedPrefetch } from '../common/apis/queries/useGetMostSelected';
import { getSameSelectedPrefetch } from '../common/apis/queries/useGetSameSelected';
import { BaseLayout } from '../common/components';
import {
  MostAnsweredContainers,
  WithMyMembersContainers,
  CommentListContainer,
  HeaderContainer,
} from '../features/main/containers';

interface Params {
  meetingId: number;
  questionId: number;
}

export const ResultMainScreen = async (params: Params) => {
  const { queryClient } = await getServerSideProps(params);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BaseLayout header={<HeaderContainer {...params} />}>
        <MostAnsweredContainers {...params} />
        <WithMyMembersContainers {...params} />
        <CommentListContainer {...params} />
      </BaseLayout>
    </HydrationBoundary>
  );
};

const getServerSideProps = async (params: Params) => {
  const queryClient = new QueryClient();

  const prefetchParams = { queryClient, ...params };

  try {
    await Promise.all([
      getMostSelectedPrefetch(prefetchParams),
      getSameSelectedPrefetch(prefetchParams),
      getCommentsPrefetch(prefetchParams),
      getDetailedQuestionDataPrefetch(prefetchParams),
    ]);
  } catch (error: unknown) {
    console.error(error);
  }
  return { queryClient };
};
