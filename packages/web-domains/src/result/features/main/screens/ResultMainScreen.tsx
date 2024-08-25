import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getCommentsPrefetch } from '@/result/common/apis/queries/useGetComments';
import { getDetailedQuestionDataPrefetch } from '@/result/common/apis/queries/useGetDetailedQuestionData';
import { getMeetingsPrefetch } from '@/result/common/apis/queries/useGetMeetings';
import { getMostSelectedPrefetch } from '@/result/common/apis/queries/useGetMostSelected';
import { getSameSelectedPrefetch } from '@/result/common/apis/queries/useGetSameSelected';
import { BaseLayout } from '@/result/common/components';
import { BaseParams } from '@/result/common/types/BaseParams';

import { CommentListContainer, HeaderContainer, MostAnsweredContainers, WithMyMembersContainers } from '../containers';

export const ResultMainScreen = async (params: BaseParams) => {
  const { queryClient } = await getServerSideProps(params);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BaseLayout title="릴레이 질문 결과" header={<HeaderContainer />}>
        <MostAnsweredContainers />
        <WithMyMembersContainers />
        <CommentListContainer {...params} />
      </BaseLayout>
    </HydrationBoundary>
  );
};

const getServerSideProps = async (params: BaseParams) => {
  const queryClient = new QueryClient();

  try {
    await getMeetingsPrefetch({ queryClient });

    const prefetchParams = { queryClient, meetingId: Number(params.meetingId), questionId: Number(params.questionId) };

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
