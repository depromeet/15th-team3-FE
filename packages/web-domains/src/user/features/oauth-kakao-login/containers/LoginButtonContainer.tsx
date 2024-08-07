'use client';
import { KakaoLoginButton } from '../components/KakaoLoginButton/KakaoLoginButton';

export const LoginButtonContainer = () => {
  return (
    <div
      css={{
        position: 'fixed',
        bottom: '40px',
        margin: '0 auto',
        width: '100%',
        maxWidth: '600px',
        padding: '0 20px',
      }}
    >
      <KakaoLoginButton />
    </div>
  );
};
