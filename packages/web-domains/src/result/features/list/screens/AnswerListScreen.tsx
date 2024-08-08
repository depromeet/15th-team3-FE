import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getAnswersPrefetch } from '@/result/common/apis/queries/useGetAnswers';
import { getMeetingsPrefetch, MEETINGS_QUERY_KEY } from '@/result/common/apis/queries/useGetMeetings';
import { MeetingResponse } from '@/result/common/apis/schema/MeetingResponse';
import { BaseParams } from '@/result/common/types/BaseParams';

import { AnswerListContainer } from '../containers/AnswerListContainer';

export const AnswerListScreen = async (params: BaseParams) => {
  const { queryClient } = await getServerSideProps(params);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnswerListContainer {...params} />
    </HydrationBoundary>
  );
};

const getServerSideProps = async (params: BaseParams) => {
  const queryClient = new QueryClient();

  try {
    await getMeetingsPrefetch({ queryClient });
    const data = queryClient.getQueryData<MeetingResponse>([MEETINGS_QUERY_KEY]);
    const meetingId = data?.meetingIds[0];

    if (!meetingId) {
      throw new Error('No meetingId found');
    }

    await getAnswersPrefetch({ queryClient, meetingId, questionId: params.questionId });
  } catch (error) {
    console.error(error);
  }

  return { queryClient };
};
