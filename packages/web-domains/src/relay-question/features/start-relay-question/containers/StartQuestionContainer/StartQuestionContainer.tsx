'use client';

import { Button } from '@sambad/sds/components';
import { useRouter } from 'next/navigation';

import { ActionBar } from '@/relay-question/common/ActionBar/ActionBar';

import { RelayStartBackground } from '../../../../assets/RelayStartBackground';
import { Z_INDEX } from '../../../../constants';
import { Profile } from '../../components/Profile/Profile';
import { useMyInfoQuery } from '../../hooks/queries/useMyInfoQuery';

import {
  startQuestionBackgroundCss,
  startQuestionContainerCss,
  startQuestionContentCss,
} from './StartQuestionContainer.styles';

export const StartQuestionContainer = () => {
  const router = useRouter();
  const { myInfo } = useMyInfoQuery();

  if (!myInfo) return <div>loading</div>;

  return (
    <>
      <div css={startQuestionContainerCss}>
        <ActionBar css={{ paddingTop: '8px' }} />

        <div css={startQuestionContentCss}>
          <Profile profileImageUrl={myInfo.profileImageFileUrl} />

          <section css={startQuestionBackgroundCss}>
            <Button
              size="large"
              style={{ zIndex: Z_INDEX.relayStartButton }}
              onClick={() => router.push('/select-relay-question?current-step=1')}
            >
              시작하기
            </Button>
            <RelayStartBackground css={{ width: '100%', position: 'absolute', bottom: 0 }} />
          </section>
        </div>
      </div>
    </>
  );
};
