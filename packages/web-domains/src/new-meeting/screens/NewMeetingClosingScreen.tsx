import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getMeetingNamePrefetch } from '@/common/apis/queries/useGetMeetingName';
import { DialogContextProvider } from '@/common/contexts/DialogProvider';

import { ToastProvider } from '../common/components/Toast/ToastProvider';
import { InviteLinkShareContainer } from '../features/new-meeting-closing/containers/InviteLinkShareContainer';
import NewMeetingButtonContainer from '../features/new-meeting-closing/containers/NewMeetingButtonContainer';
import NewMeetingClosingContainer from '../features/new-meeting-closing/containers/NewMeetingClosingContainer';

interface SearchParams {
  inviteCode: string;
}

export const NewMeetingClosingScreen = async (searchParams: SearchParams) => {
  const { inviteCode } = searchParams;

  const { queryClient } = await getServerSideProps(searchParams);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DialogContextProvider>
        <ToastProvider>
          <NewMeetingClosingContainer inviteCode={inviteCode} />
          <NewMeetingButtonContainer />
          <InviteLinkShareContainer inviteCode={inviteCode} />
        </ToastProvider>
      </DialogContextProvider>
    </HydrationBoundary>
  );
};

const getServerSideProps = async (searchParams: SearchParams) => {
  const { inviteCode } = searchParams;
  const queryClient = new QueryClient();

  const prefetchProps = {
    queryClient: queryClient,
    inviteCode,
  };

  await getMeetingNamePrefetch(prefetchProps);

  return { queryClient };
};
