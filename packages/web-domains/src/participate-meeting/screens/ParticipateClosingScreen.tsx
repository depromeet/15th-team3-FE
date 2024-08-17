import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';

import { ParticipateClosingContainer } from '../features/participate-meeting-closing/containers/ParticipateClosingContainer';

// import { getMeetingNamePrefetch } from '@/common/apis/queries/useGetMeetingName';

interface SearchParams {
  inviteCode: string;
}

export const ParticipateClosingScreen = async (searchParams: SearchParams) => {
  const { inviteCode } = searchParams;

  const { queryClient } = await getServerSideProps();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ParticipateClosingContainer inviteCode={inviteCode} />
    </HydrationBoundary>
  );
};

// async (searchParams: SearchParams) => {
const getServerSideProps = async () => {
  // const { inviteCode } = searchParams;
  const queryClient = new QueryClient();

  // const prefetchProps = {
  //   queryClient: queryClient,
  //   inviteCode,
  // };

  // await getMeetingNamePrefetch(prefetchProps);

  return { queryClient };
};
