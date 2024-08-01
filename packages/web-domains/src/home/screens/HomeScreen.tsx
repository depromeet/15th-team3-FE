// import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import { DialogContextProvider } from '../../common/contexts/DialogProvider';
// import { getGatherMemberListPrefetch } from '../common/apis/queries/useGetGatherMemberList';
// import { getProgressingQuestionPrefetch } from '../common/apis/queries/useGetProgressingQuestion';
// import { getTopPreviousQuestionPrefetch } from '../common/apis/queries/useGetTopPreviousQuestionList';
import { FloatingButtonContainer } from '../features/floating-button/containers/FloatingButtonContainer';
import { GatherMemberProfileListContainer } from '../features/gather-member/containers/GatherMemberProfileListContainer';
// import { NotificationContainer } from '../features/notification/containers/NotificationContainer';
import { TopPreviousQuestionListContainer } from '../features/previous-question/containers/TopPreviousQuestionListContainer';
import { ProgressingQuestionContainer } from '../features/progressing-question/containers/ProgressingQuestionContainer';
// import { getServerSideProps } from 'next/dist/build/templates/pages';

// export const HomeScreen = async ({params}: {params: {meetingId: string}}) => {
export const HomeScreen = async () => {
  // const { queryClient } = await getServerSideProps({ meetingId: '1' });

  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    <DialogContextProvider>
      <ProgressingQuestionContainer />
      <TopPreviousQuestionListContainer />
      <GatherMemberProfileListContainer />
      <FloatingButtonContainer />
      {/* <NotificationContainer /> */}
    </DialogContextProvider>
    // </HydrationBoundary>
  );
};

// const getServerSideProps = async (params: { meetingId: string }) => {
//   const queryClient = new QueryClient();
//   try {
//     // const gatherMemberPrefetch = getGatherMemberListPrefetch(params, queryClient);
//     // const topPreviousQuestionListPrefetch = getTopPreviousQuestionPrefetch(params, queryClient);
//     // const progressingQuestionPrefetch = getProgressingQuestionPrefetch(params, queryClient);
//     // await Promise.all([gatherMemberPrefetch, topPreviousQuestionListPrefetch, progressingQuestionPrefetch]);
//   } catch (error: unknown) {
//     console.log(error);
//   }
//   return { queryClient };
// };
