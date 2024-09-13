'use client';

import { Button } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { useRouter } from 'next/navigation';

import { useGetMeetingName } from '@/common/apis/queries/useGetMeetingName';

import { BackgroundImage } from '../components/BackgroundImage';
import { ClosingHeader } from '../components/ClosingHeader';

interface ParticipateClosingContainerProps {
  inviteCode: string;
}

export const ParticipateClosingContainer = (props: ParticipateClosingContainerProps) => {
  const { inviteCode } = props;
  const router = useRouter();
  const { data } = useGetMeetingName({ inviteCode });

  const goToGetMemberInfo = () => {
    router.push(`/user/member/?inviteCode=${inviteCode}&step=basic-info`);
  };

  return (
    <div
      css={{
        position: 'relative',
        height: '100dvh',
        width: '100%',
        backgroundColor: colors.primary50,
        overflow: 'hidden',
        zIndex: 10,
      }}
    >
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          height: `calc(100% - 116px)`,
        }}
      >
        <ClosingHeader meetingName={data?.name} />
        <BackgroundImage />
      </div>

      <div
        css={{
          position: 'fixed',
          bottom: '40px',
          width: '100%',
          maxWidth: '600px',
          padding: '0 20px',
        }}
      >
        <Button size="large" onClick={goToGetMemberInfo}>
          자기소개 입력하러 가기
        </Button>
      </div>
    </div>
  );
};
