'use client';

import { StartButton } from '../components/StartButton';

export const OpeningButtonContainer = () => {
  return (
    <div
      css={{
        position: 'absolute',
        bottom: '40px',
        margin: '0 auto',
        width: '100%',
        maxWidth: '600px',
        padding: '0 20px',
      }}
    >
      <StartButton />
    </div>
  );
};
