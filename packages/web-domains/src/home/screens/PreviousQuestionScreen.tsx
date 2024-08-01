// import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

// import { getPreviousQuestionListPrefetch } from '../common/apis/queries/useGetPreviousQuestionList';
import { PreviousQuestionListContainer } from '../features/previous-question/containers/PreviousQuestionListContainer';

// export const PreviousQuestionScreen = async ({params}: {params: {meetingId: string}}) => {
export const PreviousQuestionScreen = async () => {
  // const { queryClient } = await getServerSideProps({ meetingId: '1' });

  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    <PreviousQuestionListContainer />
    // </HydrationBoundary>
  );
};

// const getServerSideProps = async (params: { meetingId: string }) => {
//   const queryClient = new QueryClient();
//   try {
//     // const { meetingId } = params;
//     // await getPreviousQuestionListPrefetch({ meetingId, page: 0 }, queryClient);
//   } catch (error: unknown) {
//     console.log(error);
//   }
//   return { queryClient };
// };
