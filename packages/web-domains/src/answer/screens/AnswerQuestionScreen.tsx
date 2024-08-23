import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';
import { cookies } from 'next/headers';

import { getMeetingInfoPrefetch } from '@/home/common/apis/queries/useGetMeetingName';

import { getProgressingQuestionPrefetch } from '../common/apis/queries/useGetProgressingQuestion';
import { AnswerQuestionContainer } from '../features/answer-question/containers/AnswerQuestionContainer';

interface Params {
  meetingId: number;
}

export const AnswerQuestionScreen = async ({ meetingId }: Params) => {
  const { queryClient } = await getServerSideProps({ meetingId });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnswerQuestionContainer />
    </HydrationBoundary>
  );
};

const getServerSideProps = async ({ meetingId }: Params) => {
  const queryClient = new QueryClient();

  try {
    const cookie = cookies();

    await getMeetingInfoPrefetch(queryClient, cookie);
    await getProgressingQuestionPrefetch({ meetingId }, queryClient, cookie);
  } catch (error: unknown) {
    console.log(error);
  }
  return { queryClient };
};
