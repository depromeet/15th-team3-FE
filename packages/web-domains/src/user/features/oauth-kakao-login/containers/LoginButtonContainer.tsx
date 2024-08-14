'use client';

import { KakaoLoginButton } from '../components/KakaoLoginButton/KakaoLoginButton';

interface LoginButtonContainerProps {
  redirectUrl: string;
}

export const LoginButtonContainer = (props: LoginButtonContainerProps) => {
  const { redirectUrl } = props;
  return (
    <div
      css={{
        position: 'fixed',
        bottom: '40px',
        margin: '0 auto',
        zIndex: 10,
        width: '100%',
        maxWidth: '600px',
        padding: '0 20px',
      }}
    >
      <KakaoLoginButton redirectUrl={redirectUrl} />
    </div>
  );
};
