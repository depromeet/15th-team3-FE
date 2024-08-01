'use client';

import { Button } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

import { BackgroundImage } from '../components/BackgroundImage';
import { InviteCodeHeader } from '../components/InviteCodeHeader';
import { InviteCodeInput } from '../components/InviteCodeInput';

export const GetInviteCodeContainer = () => {
  // 초대 코드 확인 후 소개 페이지로 이동
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
      <div
        css={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '40px',
        }}
      >
        <InviteCodeInput placeholder="초대 코드 입력" />
      </div>
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
        <Button size="large">완료</Button>
      </div>
    </div>
  );
};
