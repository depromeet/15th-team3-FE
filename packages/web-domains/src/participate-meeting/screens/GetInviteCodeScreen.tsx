import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';

import { GetInviteCodeContainer } from '../features/get-invite-code/containers/GetInviteCodeContainer';

export const GetInviteCodeScreen = async () => {
  const { queryClient } = await getServerSideProps();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GetInviteCodeContainer />
    </HydrationBoundary>
  );
};

const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  return { queryClient };
};
