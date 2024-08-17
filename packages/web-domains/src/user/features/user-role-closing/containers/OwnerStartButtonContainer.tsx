'use client';

import { StartGetOwnerInfoButton } from '../components/StartGetOwnerInfoButton';

export const OwnerStartButtonContainer = () => {
  return (
    <div css={{ position: 'absolute', bottom: '40px', width: '100%', maxWidth: '600px', padding: '0 20px' }}>
      <StartGetOwnerInfoButton />
    </div>
  );
};
