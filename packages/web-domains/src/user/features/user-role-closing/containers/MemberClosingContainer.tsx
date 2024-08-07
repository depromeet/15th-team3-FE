'use client';

import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Image from 'next/image';

import { useGetMeetingName } from '@/common/apis/queries/useGetMeetingName';

import ClosingBackground from '../../../common/assets/images/member-closing-background.png';
import MemberCharacter from '../../../common/assets/images/member-closing.png';

interface MemberClosingContainerProps {
  inviteCode: string;
}

export const MemberClosingContainer = (props: MemberClosingContainerProps) => {
  const { inviteCode } = props;

  const { data } = useGetMeetingName({ inviteCode });

  return (
    <section
      css={{
        width: '100%',
        height: '100dvh',
        overflow: 'hidden',
        backgroundColor: colors.primary50,
      }}
    >
      <div
        css={{
          position: 'relative',
          marginTop: '28px',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          height: '280px',
          zIndex: '10',
        }}
      >
        {data?.name && (
          <Txt as="p" color={colors.primary500} typography="heading1" css={{ textAlign: 'center' }}>
            {data?.name}
          </Txt>
        )}
        <Txt as="p" color={colors.black} typography="heading1" css={{ textAlign: 'center' }}>
          가입이 완료되었어요!
        </Txt>
        <Image
          alt="background"
          src={ClosingBackground}
          quality={100}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <Image
        src={MemberCharacter}
        width={240}
        height={240}
        alt="character"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </section>
  );
};
