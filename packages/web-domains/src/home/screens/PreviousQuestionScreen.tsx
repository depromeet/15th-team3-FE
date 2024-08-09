import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import { PreviousQuestionListContainer } from '../features/previous-question/containers/PreviousQuestionListContainer';

// export const PreviousQuestionScreen = async ({params}: {params: {meetingId: string}}) => {
export const PreviousQuestionScreen = async () => {
  const queryClient = new QueryClient();
  // const { queryClient } = await getServerSideProps({ meetingId: 2 });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PreviousQuestionListContainer />
    </HydrationBoundary>
  );
};

// const getServerSideProps = async (params: { meetingId: number }) => {
//   const queryClient = new QueryClient();
//   try {
//     const cookie = cookies();
//     await getMeetingInfoPrefetch(queryClient, cookie);
//     await getPreviousQuestionListPrefetch({ meetingId: params.meetingId, page: 0 }, queryClient, cookie);
//   } catch (error: unknown) {
//     console.log(error);
//   }
//   return { queryClient };
// };
