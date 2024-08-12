import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';
import { cookies } from 'next/headers';

import { getMeetingInfoPrefetch } from '@/home/common/apis/queries/useGetMeetingName';

import { getProgressingQuestionPrefetch } from '../common/apis/queries/useGetProgressingQuestion';
import { AnswerQuestionContainer } from '../features/answer-question/containers/AnswerQuestionContainer';

export const AnswerQuestionScreen = async () => {
  const { queryClient } = await getServerSideProps();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnswerQuestionContainer />
    </HydrationBoundary>
  );
};

const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  try {
    const cookie = cookies();
    const data = await getMeetingInfoPrefetch(queryClient, cookie);
    const meetingId = data?.meetingIds[0];

    if (typeof meetingId === 'number') {
      const params = { meetingId };
      await getMeetingInfoPrefetch(queryClient, cookie);
      await getProgressingQuestionPrefetch(params, queryClient, cookie);
    }
  } catch (error: unknown) {
    console.log(error);
  }
  return { queryClient };
};
