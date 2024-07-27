'use client';

import { StartButton } from '../components/StartButton';

export const FloatingButtonContainer = () => {
  return (
    <div
      css={{ position: 'fixed', bottom: '40px', margin: '0 auto', width: '100%', maxWidth: '600px', padding: '0 20px' }}
    >
      <StartButton />
    </div>
  );
};
