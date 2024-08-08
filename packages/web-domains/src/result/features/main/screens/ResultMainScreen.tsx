import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getCommentsPrefetch } from '@/result/common/apis/queries/useGetComments';
import { getDetailedQuestionDataPrefetch } from '@/result/common/apis/queries/useGetDetailedQuestionData';
import { getMostSelectedPrefetch } from '@/result/common/apis/queries/useGetMostSelected';
import { getSameSelectedPrefetch } from '@/result/common/apis/queries/useGetSameSelected';
import { BaseLayout } from '@/result/common/components';
import { BaseParams } from '@/result/common/types/BaseParams';

import { HeaderContainer, MostAnsweredContainers, WithMyMembersContainers, CommentListContainer } from '../containers';

export const ResultMainScreen = async (params: BaseParams) => {
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

const getServerSideProps = async (params: BaseParams) => {
  const queryClient = new QueryClient();

  const prefetchParams = { queryClient, meetingId: 1, questionId: params.questionId };

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
