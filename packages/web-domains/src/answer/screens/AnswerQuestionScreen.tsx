// import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

// import { getProgressingQuestionPrefetch } from '../common/apis/queries/useGetProgressingQuestion';
// import { CommentBottomSheet } from '../features/answer-question/components/CommentBottomSheet';
import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';

import { AnswerQuestionContainer } from '../features/answer-question/containers/AnswerQuestionContainer';
// import { OpeningButtonContainer } from '../features/floating-button/components/StartButton';
// import { ProgressingQuestionContainer } from '../features/progressing-question/containers/ProgressingQuestionContainer';
// import { TobBarContainer } from '../features/top-bar/containers/TopBarContainer';

export const AnswerQuestionScreen = async () => {
  const { queryClient } = await getServerSideProps();

  return (
    // <></>
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnswerQuestionContainer />

      {/* <ProgressingQuestionContainer />
    // <OpeningButtonContainer /> */}
    </HydrationBoundary>
  );
};

const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  // await getProgressingQuestionPrefetch(queryClient);
  // try {
  //   console.log('');
  // } catch (error: unknown) {
  //   console.log(error);
  // }
  return { queryClient };
};
