import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';
import { cookies } from 'next/headers';

import { DialogContextProvider } from '@/common/contexts/DialogProvider';

import { getGatherMemberListPrefetch } from '../common/apis/queries/useGetGatherMemberList';
import { getMeetingInfoPrefetch } from '../common/apis/queries/useGetMeetingName';
import { getMyInfoPrefetch } from '../common/apis/queries/useGetMyInfo';
import { getProgressingQuestionPrefetch } from '../common/apis/queries/useGetProgressingQuestion';
import { getTopPreviousQuestionPrefetch } from '../common/apis/queries/useGetTopPreviousQuestionList';
import { FloatingButtonContainer } from '../features/floating-button/containers/FloatingButtonContainer';
import { GatherMemberProfileListContainer } from '../features/gather-member/containers/GatherMemberProfileListContainer';
import { NotificationContainer } from '../features/notification/containers/NotificationContainer';
import { TopPreviousQuestionListContainer } from '../features/previous-question/containers/TopPreviousQuestionListContainer';
import { ProgressingQuestionContainer } from '../features/progressing-question/containers/ProgressingQuestionContainer';

// export const HomeScreen = async ({params}: {params: {meetingId: string}}) => {
export const HomeScreen = async () => {
  const { queryClient } = await getServerSideProps({ meetingId: 2 });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProgressingQuestionContainer />
      <TopPreviousQuestionListContainer />
      <GatherMemberProfileListContainer />
      <DialogContextProvider>
        <FloatingButtonContainer />
      </DialogContextProvider>
      <DialogContextProvider>
        <NotificationContainer />
      </DialogContextProvider>
    </HydrationBoundary>
  );
};

const getServerSideProps = async (params: { meetingId: number }) => {
  const queryClient = new QueryClient();
  try {
    const cookie = cookies();
    console.log(cookie);
    await getMeetingInfoPrefetch(queryClient, cookie);
    const myInfoPrefetch = getMyInfoPrefetch(params, queryClient, cookie);
    const gatherMemberPrefetch = getGatherMemberListPrefetch(params, queryClient, cookie);
    const topPreviousQuestionListPrefetch = getTopPreviousQuestionPrefetch(params, queryClient, cookie);
    const progressingQuestionPrefetch = getProgressingQuestionPrefetch(params, queryClient, cookie);
    await Promise.all([
      myInfoPrefetch,
      gatherMemberPrefetch,
      topPreviousQuestionListPrefetch,
      progressingQuestionPrefetch,
    ]);
  } catch (error: unknown) {
    console.log(error);
  }
  return { queryClient };
};
