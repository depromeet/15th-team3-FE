'use client';

import { Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import Image from 'next/image';

import ClosingBackground from '../../../common/assets/images/closing-background.png';
import Character from '../../../common/assets/images/meeting-character.png';
import { InviteCodeShareButton } from '../components/Button/InviteCodeShareButton';
import { useGetMeetingNameService } from '../services/useGetMeetingNameService';

interface NewMeetingClosingContainerProps {
  inviteCode: string;
}
const NewMeetingClosingContainer = (props: NewMeetingClosingContainerProps) => {
  const { inviteCode } = props;

  const { data } = useGetMeetingNameService({ inviteCode });

  return (
    <div
      css={{
        position: 'relative',
        height: '100dvh',
        width: '100%',
        backgroundColor: colors.primary50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        css={{
          position: 'absolute',
          top: '108px',
          width: '100%',
          zIndex: '1',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div css={{ transform: 'translate(0, 20%)' }}>
          <Txt as="h1" color={colors.primary500} typography="heading1">
            {data?.name}
          </Txt>
          <Txt as="h2" color={colors.black} typography="heading1">
            모임을 만들었어요!
          </Txt>
          <Txt as="p" color={colors.grey600} typography="body3" css={{ marginTop: size['6xs'] }}>
            이제 모임원을 초대해보세요!
          </Txt>
        </div>

        <div
          css={{
            position: 'absolute',
            width: '80%',
            aspectRatio: '3/2',
            maxWidth: '500px',
          }}
        >
          <Image alt="background-image" src={ClosingBackground} quality={100} fill style={{ objectFit: 'contain' }} />
        </div>
      </div>
      <div
        css={{
          position: 'relative',
          zIndex: '10',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Txt typography="title2" color={colors.grey600}>
          초대 코드 복사하기
        </Txt>
        <InviteCodeShareButton inviteCode={inviteCode} />
      </div>

      <div
        css={{
          position: 'absolute',
          width: '100%',
          aspectRatio: '11/5',
          bottom: '184px',
          transform: 'translate(-3%, 0)',
        }}
      >
        <Image src={Character} alt="meeting-character" priority fill />
      </div>
    </div>
  );
};

export default NewMeetingClosingContainer;
