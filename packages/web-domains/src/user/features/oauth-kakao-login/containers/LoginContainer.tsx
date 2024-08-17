'use client';

import { Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';

import { LogoIcon } from '@/user/common/assets/icons/LogoIcon';

import { BackGround } from '../components/BackgroundImage/BackGround';

export const LoginContainer = () => {
  return (
    <section
      css={{
        position: 'relative',
        width: '100%',
        height: '100dvh',
      }}
    >
      <div
        css={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <LogoIcon />
        <Txt typography="subTitle2" color={colors.grey600} css={{ marginTop: size['6xs'] }}>
          모임원들과 더 가까워지는 공간
        </Txt>
      </div>
      <BackGround />
    </section>
  );
};
