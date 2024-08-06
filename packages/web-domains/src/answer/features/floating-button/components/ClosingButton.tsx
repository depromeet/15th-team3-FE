'use client';

import { HomeButton } from './HomeButton';
import { ShareButton } from './ShareButton';

export const ClosingButton = () => {
  return (
    <div css={{ position: 'absolute', bottom: '40px', width: '100%', maxWidth: '600px', padding: '0 20px' }}>
      <ShareButton />
      <HomeButton />
    </div>
  );
};
