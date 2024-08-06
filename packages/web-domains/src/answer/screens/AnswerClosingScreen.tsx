// import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

// import { getProgressingQuestionPrefetch } from '../common/apis/queries/useGetProgressingQuestion';
import { AnswerClosingContainer } from '../features/answer-closing/containers/AnswerClosingContainer';

export const AnswerClosingScreen = async () => {
  // const { queryClient } = await getServerSideProps();

  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    <AnswerClosingContainer />

    // </HydrationBoundary>
  );
};

// const getServerSideProps = async () => {
//   const queryClient = new QueryClient();

//   await getProgressingQuestionPrefetch(queryClient);
//   try {
//     console.log('');
//   } catch (error: unknown) {
//     console.log(error);
//   }
//   return { queryClient };
// };
