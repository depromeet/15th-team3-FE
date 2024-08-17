import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { MemberClosingButtonContainer } from '../features/user-role-closing/containers/MemberClosingButtonContainer';
import { MemberClosingContainer } from '../features/user-role-closing/containers/MemberClosingContainer';

interface SearchParams {
  inviteCode: string;
}

export const MemberClosingScreen = async (searchParams: SearchParams) => {
  const { inviteCode } = searchParams;

  // const { queryClient } = await getServerSideProps(searchParams);
  const { queryClient } = await getServerSideProps();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MemberClosingContainer inviteCode={inviteCode} />
      <MemberClosingButtonContainer />
    </HydrationBoundary>
  );
};

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
