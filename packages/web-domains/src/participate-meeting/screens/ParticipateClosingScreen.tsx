import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { getMeetingNamePrefetch } from '@/common/apis/queries/useGetMeetingName';

import { ParticipateClosingContainer } from '../features/participate-meeting-closing/containers/ParticipateClosingContainer';

// import { getMeetingNamePrefetch } from '@/common/apis/queries/useGetMeetingName';

interface SearchParams {
  inviteCode: string;
}

export const ParticipateClosingScreen = async (searchParams: SearchParams) => {
  const { inviteCode } = searchParams;

  const { queryClient } = await getServerSideProps(inviteCode);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ParticipateClosingContainer inviteCode={inviteCode} />
    </HydrationBoundary>
  );
};

// async (searchParams: SearchParams) => {
const getServerSideProps = async (inviteCode: string) => {
  const queryClient = new QueryClient();
  let isJoinedMeeting = null;

  try {
    const cookie = cookies();
    const { joined } = await getMeetingNamePrefetch({ queryClient, cookie, inviteCode });

    isJoinedMeeting = joined;
  } catch (error) {
    console.error(error);
  }

  if (isJoinedMeeting) {
    redirect('/home');
  }

  return { queryClient };
};
