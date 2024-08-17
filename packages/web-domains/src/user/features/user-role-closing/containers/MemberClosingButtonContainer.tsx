'use client';

import { HomeButton } from '../components/HomeButton';

export const MemberClosingButtonContainer = () => {
  return (
    <div css={{ position: 'absolute', bottom: '40px', width: '100%', maxWidth: '600px', padding: '0 20px' }}>
      <HomeButton />
    </div>
  );
};
