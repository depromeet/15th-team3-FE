'use client';

import { HomeButton } from '../components/HomeButton';
import { ShareButton } from '../components/ShareButton';

export const ClosingButtonContainer = () => {
  return (
    <div
      css={{ position: 'fixed', bottom: '40px', margin: '0 auto', width: '100%', maxWidth: '600px', padding: '0 20px' }}
    >
      <ShareButton />
      <HomeButton />
    </div>
  );
};
