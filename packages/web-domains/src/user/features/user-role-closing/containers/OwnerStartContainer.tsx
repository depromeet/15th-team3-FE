'use client';

import { mobileMediaQuery } from '@sambad/css-utils';
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
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          height: `calc(100% - 116px)`,
        }}
      >
        <div
          css={{
            marginTop: size['4xl'],
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: `${size.xl} ${size['2xs']} ${size.xs}`,
            ...mobileMediaQuery({ marginTop: 0 }),
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
            width: '100%',
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            css={{
              position: 'relative',
              width: '80%',
              ...mobileMediaQuery({ marginTop: 0 }),
            }}
          >
            <OnwerCaracter css={{ position: 'absolute', height: '100%', width: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
};
