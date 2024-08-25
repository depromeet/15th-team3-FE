import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getAnswersPrefetch } from '../common/apis/queries/useGetAnswers';
import { getAnswersMePrefetch } from '../common/apis/queries/useGetAnswersMe';
import { getMemberPrefetch } from '../common/apis/queries/useGetMember';
import { getMemberMePrefetch } from '../common/apis/queries/useGetMemberMe';
import { ScreenContainer } from '../features/containers/ScreenContainer';

interface AboutMeScreenParams {
  meetingId: string;
  meetingMemberId?: string;
}

export const AboutMeScreen = async (params: AboutMeScreenParams) => {
  const { queryClient } = await getServerSideProps(params);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ScreenContainer />
    </HydrationBoundary>
  );
};

export const getServerSideProps = async (params: AboutMeScreenParams) => {
  const { meetingId: _meetingId, meetingMemberId: _meetingMemberId } = params;
  const meetingId = Number(_meetingId);
  const meetingMemberId = Number(_meetingMemberId);

  const queryClient = new QueryClient();

  try {
    if (meetingMemberId) {
      await Promise.all([
        getMemberPrefetch({ meetingId, meetingMemberId, queryClient }),
        getAnswersPrefetch({ meetingId, meetingMemberId, queryClient }),
      ]);
    } else {
      await Promise.all([
        getMemberMePrefetch({ meetingId, queryClient }),
        getAnswersMePrefetch({ meetingId, queryClient }),
      ]);
    }
  } catch (error: unknown) {
    console.error(error);
  }

  return { queryClient };
};
