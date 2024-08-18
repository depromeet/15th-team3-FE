import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { CommentListContainer, HeaderContainer, MostAnsweredContainers, WithMyMembersContainers } from '../containers';

import { getCommentsPrefetch } from '@/result/common/apis/queries/useGetComments';
import { getDetailedQuestionDataPrefetch } from '@/result/common/apis/queries/useGetDetailedQuestionData';
import { getMeetingsPrefetch, MEETINGS_QUERY_KEY } from '@/result/common/apis/queries/useGetMeetings';
import { getMostSelectedPrefetch } from '@/result/common/apis/queries/useGetMostSelected';
import { getSameSelectedPrefetch } from '@/result/common/apis/queries/useGetSameSelected';
import { MeetingResponse } from '@/result/common/apis/schema/MeetingResponse';
import { BaseLayout } from '@/result/common/components';
import { BaseParams } from '@/result/common/types/BaseParams';

export const ResultMainScreen = async (params: BaseParams) => {
  const { queryClient } = await getServerSideProps(params);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BaseLayout title="릴레이 질문 결과" header={<HeaderContainer {...params} />}>
        <MostAnsweredContainers {...params} />
        <WithMyMembersContainers {...params} />
        <CommentListContainer {...params} />
      </BaseLayout>
    </HydrationBoundary>
  );
};

const getServerSideProps = async (params: BaseParams) => {
  const queryClient = new QueryClient();

  try {
    await getMeetingsPrefetch({ queryClient });
    const data = queryClient.getQueryData<MeetingResponse>([MEETINGS_QUERY_KEY]);
    const meetingId = data?.meetings[0]?.meetingId;

    if (!meetingId) {
      throw new Error('No meetingId found');
    }

    const prefetchParams = { queryClient, meetingId, questionId: params.questionId };

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
