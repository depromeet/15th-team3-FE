'use client';

import { useDialogContext } from '@/common/contexts/DialogProvider';
import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';

import { HomeButton } from '../components/Button/HomeButton';
import { ShareMeetingButton } from '../components/Button/ShareMeetingButton';

export default function NewMeetingButtonContainer() {
  const { open } = useDialogContext();
  useGetMeetingInfo({});

  const handleOpen = () => {
    open();
  };

  return (
    <div
      css={{
        position: 'absolute',
        bottom: '40px',
        width: '100%',
        maxWidth: '600px',
        padding: '0 20px',
      }}
    >
      <ShareMeetingButton onClick={handleOpen} />
      <HomeButton />
    </div>
  );
}
