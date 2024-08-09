import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { cookies } from 'next/headers';

import { getMeetingInfoPrefetch } from '@/home/common/apis/queries/useGetMeetingName';

import { getProgressingQuestionPrefetch } from '../common/apis/queries/useGetProgressingQuestion';
import { ProgressingQuestionContainer } from '../features/progressing-question/containers/ProgressingQuestionContainer';
import { TobBarContainer } from '../features/top-bar/containers/TopBarContainer';

export const AnswerOpeningScreen = async () => {
  const { queryClient } = await getServerSideProps({ meetingId: 2 });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TobBarContainer />
      <ProgressingQuestionContainer />
    </HydrationBoundary>
  );
};

const getServerSideProps = async (params: { meetingId: number }) => {
  const queryClient = new QueryClient();

  try {
    const cookie = cookies();
    await getMeetingInfoPrefetch(queryClient, cookie);
    await getProgressingQuestionPrefetch(params, queryClient, cookie);
  } catch (error: unknown) {
    console.log(error);
  }
  return { queryClient };
};
