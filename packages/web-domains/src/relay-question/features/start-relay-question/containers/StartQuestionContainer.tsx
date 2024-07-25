'use client';

import { Button } from '@sambad/sds/components';
import { useRouter } from 'next/navigation';

import { RelayStartBackground } from '../../../assets/RelayStartBackground';
import { Z_INDEX } from '../../../constants';
import { Profile } from '../components/Profile/Profile';

import { StartQuestionBackgroundCss, StartQuestionContainerCss } from './StartQuestionContainer.styles';

export const StartQuestionContainer = () => {
  const router = useRouter();

  return (
    <div css={StartQuestionContainerCss}>
      <Profile />

      <section css={StartQuestionBackgroundCss}>
        <Button style={{ zIndex: Z_INDEX.relayStartButton }} onClick={() => router.push('/select-relay-question')}>
          시작하기
        </Button>
        <RelayStartBackground css={{ width: '100%', position: 'absolute', bottom: 0 }} />
      </section>
    </div>
  );
};
