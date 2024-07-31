import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getCommentsPrefetch } from '../common/apis/queries/useGetComments';
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
      <BaseLayout header={<HeaderContainer />}>
        <MostAnsweredContainers {...params} />
        <WithMyMembersContainers {...params} />
        <CommentListContainer {...params} />
      </BaseLayout>
    </HydrationBoundary>
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
    console.error(error);
  }
  return { queryClient };
};
