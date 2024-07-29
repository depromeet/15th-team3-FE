'use client';

import { Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import Image from 'next/image';

import Logo from '../../../common/assets/images/logo.png';
import { BackGround } from '../components/BackgroundImage/BackGround';
import { KakaoLoginButton } from '../components/KakaoLoginButton/KakaoLoginButton';

export const LoginContainer = () => {
  return (
    <section
      css={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100dvh',
      }}
    >
      <div
        css={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '310px',
          zIndex: 10,
        }}
      >
        <Image src={Logo} alt="logo" width={146} height={46} priority />
        <Txt typography="subTitle2" color={colors.grey600} css={{ marginTop: size['6xs'] }}>
          모임원들과 더 가까워지는 공간
        </Txt>
      </div>
      <BackGround />
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
    </section>
  );
};
