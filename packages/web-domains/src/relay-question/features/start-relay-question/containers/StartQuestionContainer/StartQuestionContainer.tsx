'use client';

import { Button } from '@sambad/sds/components';
import { useRouter } from 'next/navigation';

import { RelayStartBackground } from '../../../../assets/RelayStartBackground';
import { Z_INDEX } from '../../../../constants';
import { Profile } from '../../components/Profile/Profile';
import { useMyInfoQuery } from '../../hooks/queries/useMyInfoQuery';

import { startQuestionBackgroundCss, startQuestionContainerCss } from './StartQuestionContainer.styles';

export const StartQuestionContainer = () => {
  const router = useRouter();
  const { myInfo } = useMyInfoQuery();

  return (
    <div css={startQuestionContainerCss}>
      <Profile profileImageUrl={myInfo.profileImageFileUrl} />

      <section css={startQuestionBackgroundCss}>
        <Button
          style={{ zIndex: Z_INDEX.relayStartButton }}
          onClick={() => router.push('/select-relay-question?current-step=1')}
        >
          시작하기
        </Button>
        <RelayStartBackground css={{ width: '100%', position: 'absolute', bottom: 0 }} />
      </section>
    </div>
  );
};
