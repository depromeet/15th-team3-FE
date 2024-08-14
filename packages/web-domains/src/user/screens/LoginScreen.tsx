import { cookies } from 'next/headers';

import { LoginButtonContainer } from '../features/oauth-kakao-login/containers/LoginButtonContainer';
import { LoginContainer } from '../features/oauth-kakao-login/containers/LoginContainer';

export const LoginScreen = () => {
  const cookieStore = cookies();
  const redirectUrl = cookieStore.get('client_redirect_url')?.value ?? '';

  return (
    <>
      <LoginContainer />
      <LoginButtonContainer redirectUrl={redirectUrl} />
    </>
  );
};
