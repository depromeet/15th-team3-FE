// import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

// import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';
// import { cookies } from 'next/headers';

import { DialogContextProvider } from '@/common/contexts/DialogProvider';

// import { FloatingButtonContainer } from '../features/floating-button/containers/FloatingButtonContainer';
// import { GatherMemberProfileListContainer } from '../features/gather-member/containers/GatherMemberProfileListContainer';
// import { NotificationContainer } from '../features/notification/containers/NotificationContainer';
// import { TopPreviousQuestionListContainer } from '../features/previous-question/containers/TopPreviousQuestionListContainer';
// import { getGatherMemberListPrefetch } from '../common/apis/queries/useGetGatherMemberList';
// import { getGatherMeetingInfoPrefetch } from '../common/apis/queries/useGetMeetingName';
// import { getProgressingQuestionPrefetch } from '../common/apis/queries/useGetProgressingQuestion';
// import { getTopPreviousQuestionPrefetch } from '../common/apis/queries/useGetTopPreviousQuestionList';
import { FloatingButtonContainer } from '../features/floating-button/containers/FloatingButtonContainer';
import { GatherMemberProfileListContainer } from '../features/gather-member/containers/GatherMemberProfileListContainer';
// import { NotificationContainer } from '../features/notification/containers/NotificationContainer';
import { NotificationContainer } from '../features/notification/containers/NotificationContainer';
import { TopPreviousQuestionListContainer } from '../features/previous-question/containers/TopPreviousQuestionListContainer';
import { ProgressingQuestionContainer } from '../features/progressing-question/containers/ProgressingQuestionContainer';

// import { DialogContextProvider } from '../../common/contexts/DialogProvider';
// import { getGatherMemberListPrefetch } from '../common/apis/queries/useGetGatherMemberList';
// import { getProgressingQuestionPrefetch } from '../common/apis/queries/useGetProgressingQuestion';
// import { getTopPreviousQuestionPrefetch } from '../common/apis/queries/useGetTopPreviousQuestionList';
// import { FloatingButtonContainer } from '../features/floating-button/containers/FloatingButtonContainer';
// import { GatherMemberProfileListContainer } from '../features/gather-member/containers/GatherMemberProfileListContainer';
// import { NotificationContainer } from '../features/notification/containers/NotificationContainer';
// import { TopPreviousQuestionListContainer } from '../features/previous-question/containers/TopPreviousQuestionListContainer';
// import { ProgressingQuestionContainer } from '../features/progressing-question/containers/ProgressingQuestionContainer';
// import { getServerSideProps } from 'next/dist/build/templates/pages';

// export const HomeScreen = async ({params}: {params: {meetingId: string}}) => {
export const HomeScreen = async () => {
  // const { queryClient } = await getServerSideProps({ meetingId: 1 });

  return (
    // <></>
    // <HydrationBoundary state={dehydrate(queryClient)}>
    <DialogContextProvider>
      <ProgressingQuestionContainer />
      <TopPreviousQuestionListContainer />
      <GatherMemberProfileListContainer />
      <FloatingButtonContainer />
      <NotificationContainer />
    </DialogContextProvider>
    // </HydrationBoundary>
  );
};

// const getServerSideProps = async (params: { meetingId: number }) => {
//   const queryClient = new QueryClient();
//   try {
//     const { meetingId } = params;
//     const cookie = cookies();
//     // console.log({ cookie });

//     const gatherMeetingInfoPrefetch = await getGatherMeetingInfoPrefetch(queryClient, cookie);
//     const gatherMemberPrefetch = getGatherMemberListPrefetch({ meetingId }, queryClient, cookie);
//     const topPreviousQuestionListPrefetch = getTopPreviousQuestionPrefetch(params, queryClient, cookie);
//     const progressingQuestionPrefetch = getProgressingQuestionPrefetch(params, queryClient, cookie);
//     await Promise.all([gatherMemberPrefetch, topPreviousQuestionListPrefetch, progressingQuestionPrefetch]);
//   } catch (error: unknown) {
//     console.log(error);
//   }
//   return { queryClient };
// };
