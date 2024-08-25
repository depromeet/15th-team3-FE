import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';
import { cookies } from 'next/headers';

import { getMeetingInfoPrefetch } from '@/home/common/apis/queries/useGetMeetingName';

import { getProgressingQuestionPrefetch } from '../common/apis/queries/useGetProgressingQuestion';
import { AnswerQuestionContainer } from '../features/answer-question/containers/AnswerQuestionContainer';

type Params = {
  params: {
    meetingId: string;
    questionId: string;
  };
};

export const AnswerQuestionScreen = async ({ params: { meetingId, questionId } }: Params) => {
  const { queryClient } = await getServerSideProps({ meetingId, questionId });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnswerQuestionContainer />
    </HydrationBoundary>
  );
};

const getServerSideProps = async ({ meetingId }: Params['params']) => {
  const queryClient = new QueryClient();

  try {
    const cookie = cookies();

    await getMeetingInfoPrefetch(queryClient, cookie);
    await getProgressingQuestionPrefetch({ meetingId: parseInt(meetingId) }, queryClient, cookie);
  } catch (error: unknown) {
    console.log(error);
  }
  return { queryClient };
};
