import { MostAnsweredContainers, WithMyMembersContainers, CommentListContainer } from '../features/main/containers';
import { BaseLayout } from '../features/common/components';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getMostSelectedPrefetch } from '../features/common/apis/queries/useGetMostSelected';
import { getSameSelectedPrefetch } from '../features/common/apis/queries/useGetSameSelected';
import { getCommentsPrefetch } from '../features/common/apis/queries/useGetComments';

interface Params {
  meetingId: number;
  questionId: number;
}

export const ResultMainScreen = async (params: Params) => {
  const { queryClient } = await getServerSideProps(params);

  return (
    <BaseLayout>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MostAnsweredContainers {...params} />
        <WithMyMembersContainers {...params} />
        <CommentListContainer {...params} />
      </HydrationBoundary>
    </BaseLayout>
  );
};

const getServerSideProps = async (params: Params) => {
  const queryClient = new QueryClient();

  try {
    await Promise.all([
      getMostSelectedPrefetch({ queryClient, ...params }),
      getSameSelectedPrefetch({ queryClient, ...params }),
      getCommentsPrefetch({ queryClient, ...params }),
    ]);
  } catch (error: unknown) {
    console.log(error);
  }
  return { queryClient };
};
