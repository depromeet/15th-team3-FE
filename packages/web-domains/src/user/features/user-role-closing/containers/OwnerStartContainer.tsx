'use client';

import { Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';

import { CheckIcon } from '@/user/common/assets/icons/CheckIcon';
import { OnwerCaracter } from '@/user/common/assets/icons/OnwerCharacter';

export const OwnerStartContainer = () => {
  return (
    <section
      css={{
        position: 'relative',
        width: '100%',
        height: '100dvh',
        overflow: 'hidden',

        backgroundColor: colors.primary50,
      }}
    >
      <div
        css={{
          marginTop: '118px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CheckIcon />
        <Txt as="p" color={colors.black} typography="heading1" css={{ textAlign: 'center', marginTop: size['3xs'] }}>
          모임 정보 입력이
        </Txt>
        <Txt as="p" color={colors.black} typography="heading1" css={{ textAlign: 'center' }}>
          완료되었어요!
        </Txt>
      </div>
      <div
        css={{
          position: 'absolute',
          width: '100%',
          bottom: '140px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <OnwerCaracter />
      </div>
    </section>
  );
};
