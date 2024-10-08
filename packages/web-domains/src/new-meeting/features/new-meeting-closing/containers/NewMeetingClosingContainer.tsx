'use client';

import { mobileMediaQuery } from '@sambad/css-utils';
import { colors } from '@sambad/sds/theme';
import Image from 'next/image';

import Character from '../../../common/assets/images/meeting-character.png';
import { InviteCodeShareButton } from '../components/Button/InviteCodeShareButton';
import { ClosingMessage } from '../components/ClosingMessage';

interface NewMeetingClosingContainerProps {
  inviteCode: string;
}

const NewMeetingClosingContainer = (props: NewMeetingClosingContainerProps) => {
  const { inviteCode } = props;

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
      <ClosingMessage inviteCode={inviteCode} />
      <div
        css={{
          position: 'relative',
          zIndex: '10',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <InviteCodeShareButton inviteCode={inviteCode} />
      </div>
      <div
        css={{
          position: 'absolute',
          width: '100%',
          aspectRatio: '11/5',
          bottom: '184px',
          transform: 'translate(-3%, 0)',
          ...mobileMediaQuery({ display: 'none' }),
        }}
      >
        <Image src={Character} alt="meeting-character" priority fill />
      </div>
    </div>
  );
};

export default NewMeetingClosingContainer;
