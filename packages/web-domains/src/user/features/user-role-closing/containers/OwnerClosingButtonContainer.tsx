'use client';

import { CreateMeetingButton } from '../components/CreateMeetingButton';

export const OwnerClosingButtonContainer = () => {
  return (
    <div css={{ position: 'absolute', bottom: '40px', width: '100%', maxWidth: '600px', padding: '0 20px' }}>
      <CreateMeetingButton />
    </div>
  );
};
