import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';
import { cookies } from 'next/headers';

import { DialogContextProvider } from '@/common/contexts/DialogProvider';

import { getMeetingInfoPrefetch } from '../common/apis/queries/useGetMeetingName';
import { getMyInfoPrefetch } from '../common/apis/queries/useGetMyInfo';
import { getProgressingQuestionPrefetch } from '../common/apis/queries/useGetProgressingQuestion';
import { getTopPreviousQuestionPrefetch } from '../common/apis/queries/useGetTopPreviousQuestionList';
import { FloatingButtonContainer } from '../features/floating-button/containers/FloatingButtonContainer';
import { HomeNavigationConatiner } from '../features/home-navigation/containers/HomeNavigationContainer';
import { NotificationContainer } from '../features/notification/containers/NotificationContainer';
import { TopPreviousQuestionListContainer } from '../features/previous-question/containers/TopPreviousQuestionListContainer';
import { ProgressingQuestionContainer } from '../features/progressing-question/containers/ProgressingQuestionContainer';

export const QuestionScreen = async () => {
  const { queryClient } = await getServerSideProps();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProgressingQuestionContainer />
      <TopPreviousQuestionListContainer />
      <DialogContextProvider>
        <FloatingButtonContainer />
      </DialogContextProvider>
      <DialogContextProvider>
        <NotificationContainer />
      </DialogContextProvider>
      <HomeNavigationConatiner />
    </HydrationBoundary>
  );
};

const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  try {
    const cookie = cookies();
    const data = await getMeetingInfoPrefetch(queryClient, cookie);
    const meetingId = data?.meetings[0]?.meetingId;
    if (typeof meetingId === 'number') {
      const params = { meetingId };
      const myInfoPrefetch = getMyInfoPrefetch(params, queryClient, cookie);
      const topPreviousQuestionListPrefetch = getTopPreviousQuestionPrefetch(params, queryClient, cookie);
      const progressingQuestionPrefetch = getProgressingQuestionPrefetch(params, queryClient, cookie);
      await Promise.all([myInfoPrefetch, topPreviousQuestionListPrefetch, progressingQuestionPrefetch]);
    }
  } catch (error: unknown) {
    console.log(error);
  }
  return { queryClient };
};
