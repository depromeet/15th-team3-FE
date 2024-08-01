'use client';

import { Button } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

import { BackgroundImage } from '../components/BackgroundImage';
import { ClosingHeader } from '../components/ClosingHeader';

export const ParticipateClosingContainer = () => {
  const meetingName = '삼밧드의 모험';
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
      <ClosingHeader meetingName={meetingName} />
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
        <Button size="large">자기소개 입력하러 가기</Button>
      </div>
    </div>
  );
};
