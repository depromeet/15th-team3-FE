import { LoginButtonContainer } from '../features/oauth-kakao-login/containers/LoginButtonContainer';
import { LoginContainer } from '../features/oauth-kakao-login/containers/LoginContainer';

export const LoginScreen = () => {
  return (
    <>
      <LoginContainer />
      <LoginButtonContainer />
    </>
  );
};
