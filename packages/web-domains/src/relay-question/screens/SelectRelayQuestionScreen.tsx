// import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
// import { Suspense } from 'react';

import { ContentContainer } from '../features/select-relay-question/containers/ContentContainer/ContentContainer';
import { ProgressIndicatorContainer } from '../features/select-relay-question/containers/ProgressIndicatorContainer/ProgressIndicatorContainer';
import { RandomPickContainer } from '../features/select-relay-question/containers/RandomPickContainer/RandomPickContainer';
import { QueryStringProvider } from '../features/select-relay-question/contexts/QueryStringContext';
// import { useRelayQuestionListQueryPrefetch } from '../features/select-relay-question/hooks/queries/useRelayQuestionListQuery';
// import { MY_MEETINGS_QUERY_KEY } from '../features/start-relay-question/hooks/queries/useMyMeetingsQuery';
// import { MyMeetingsResponse } from '../features/start-relay-question/types';

export const SelectRelayQuestionScreen = async () => {
  // const queryClient = await getServerSideProps();

  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    // <Suspense>
    <QueryStringProvider>
      <ProgressIndicatorContainer />
      <ContentContainer />
      <RandomPickContainer />
    </QueryStringProvider>
    // </Suspense>
    // </HydrationBoundary>
  );
};

// const getServerSideProps = async () => {
//   const queryClient = new QueryClient();

//   try {
//     const meetingId = queryClient.getQueryData<MyMeetingsResponse>([MY_MEETINGS_QUERY_KEY])?.meetingIds[0];
//     const relayQuestionListPrefetch = useRelayQuestionListQueryPrefetch({ queryClient, meetingId: meetingId || -1 });

//     await Promise.all([relayQuestionListPrefetch]);
//   } catch (error: unknown) {
//     console.log(error);
//   }

//   return queryClient;
// };
