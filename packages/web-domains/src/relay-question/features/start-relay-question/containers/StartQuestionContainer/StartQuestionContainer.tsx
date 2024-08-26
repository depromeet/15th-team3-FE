'use client';

import { Button } from '@sambad/sds/components';
import { useParams, useRouter } from 'next/navigation';

import { useGetMyInfo } from '@/home/common/apis/queries/useGetMyInfo';
import { ActionBar } from '@/relay-question/common/ActionBar/ActionBar';

import { RelayStartBackground } from '../../../../assets/RelayStartBackground';
import { Z_INDEX } from '../../../../constants';
import { Profile } from '../../components/Profile/Profile';

import {
  startQuestionBackgroundCss,
  startQuestionContainerCss,
  startQuestionContentCss,
} from './StartQuestionContainer.styles';

export const StartQuestionContainer = () => {
  const { meetingId } = useParams<{ meetingId: string }>();
  const router = useRouter();
  const { data: myInfo } = useGetMyInfo({ params: { meetingId: Number(meetingId) } });

  if (!myInfo) return;

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
              onClick={() => router.push(`/${meetingId}/select-relay-question?current-step=1`)}
            >
              시작하기
            </Button>
            <RelayStartBackground css={{ width: '100%', height: 'auto', position: 'absolute', bottom: 0 }} />
          </section>
        </div>
      </div>
    </>
  );
};
