'use client';

import { Button } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { BackgroundImage } from '../components/BackgroundImage';
import { InviteCodeHeader } from '../components/InviteCodeHeader';
import { InviteCodeInput } from '../components/InviteCodeInput';

interface InviteCode {
  inviteCode: string;
}

export const GetInviteCodeContainer = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<InviteCode>({
    defaultValues: {
      inviteCode: '',
    },
  });

  const goToParticipateMeeting = handleSubmit(({ inviteCode }) => {
    router.push(`/meeting/participate/closing?inviteCode=${inviteCode}`);
  });

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
      <InviteCodeHeader />
      <form
        css={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '40px',
        }}
      >
        <InviteCodeInput placeholder="초대 코드 입력" {...register('inviteCode', { required: true })} />
      </form>
      <BackgroundImage />
      <div
        css={{
          position: 'absolute',
          bottom: '40px',
          width: '100%',
          maxWidth: '600px',
          padding: '0 20px',
        }}
      >
        <Button size="large" disabled={!isValid} onClick={goToParticipateMeeting}>
          완료
        </Button>
      </div>
    </div>
  );
};
