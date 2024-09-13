'use client';

import { If } from '@sambad/react-utils';
import { Skeleton, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Image from 'next/image';

import { Confetti } from '@/common';
import { useGetMeetingName } from '@/common/apis/queries/useGetMeetingName';

import MemberCharacter from '../../../common/assets/images/member-closing-character.png';

interface MemberClosingContainerProps {
  inviteCode: string;
}

export const MemberClosingContainer = (props: MemberClosingContainerProps) => {
  const { inviteCode } = props;

  const { data, isLoading, isSuccess } = useGetMeetingName({ inviteCode });

  return (
    <>
      <If condition={isSuccess}>
        <Confetti position={{ top: 0, left: 0 }} height={350} />
      </If>
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
          <If condition={isLoading}>
            <Skeleton width={200} height={36} />
          </If>
          <If condition={isSuccess}>
            {data?.name && (
              <Txt as="p" color={colors.primary500} typography="heading1" css={{ textAlign: 'center' }}>
                {data?.name}
              </Txt>
            )}
          </If>
          <Txt as="p" color={colors.black} typography="heading1" css={{ textAlign: 'center' }}>
            가입이 완료되었어요!
          </Txt>
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
    </>
  );
};
