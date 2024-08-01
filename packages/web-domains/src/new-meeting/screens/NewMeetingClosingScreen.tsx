import { DialogContextProvider } from '@/common/contexts/DialogProvider';

import { ToastProvider } from '../common/components/Toast/ToastProvider';
import { InviteLinkShareContainer } from '../features/new-meeting-closing/containers/InviteLinkShareContainer';
import NewMeetingButtonContainer from '../features/new-meeting-closing/containers/NewMeetingButtonContainer';
import NewMeetingClosingContainer from '../features/new-meeting-closing/containers/NewMeetingClosingContainer';

export const NewMeetingClosingScreen = () => {
  return (
    <DialogContextProvider>
      <ToastProvider>
        <NewMeetingClosingContainer />
        <NewMeetingButtonContainer />
        <InviteLinkShareContainer />
      </ToastProvider>
    </DialogContextProvider>
  );
};
