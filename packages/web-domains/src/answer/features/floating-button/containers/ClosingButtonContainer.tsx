'use client';

import { HomeButton } from '../components/HomeButton';
import { ShareButton } from '../components/ShareButton';

export const ClosingButtonContainer = () => {
  return (
    <div css={{ position: 'absolute', bottom: '40px', width: '100%', maxWidth: '600px', padding: '0 20px' }}>
      <ShareButton />
      <HomeButton />
    </div>
  );
};
