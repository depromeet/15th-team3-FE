'use client';

import { Button } from '@sambad/sds/components';
import { useRouter } from 'next/navigation';

import { RelayStartBackground } from '../../../../assets/RelayStartBackground';
import { Z_INDEX } from '../../../../constants';
import { useQueryString } from '../../../../hooks/useQueryString';
import { Profile } from '../../components/Profile/Profile';
import { useMyInfoQuery } from '../../hooks/queries/useMyInfoQuery';

import { startQuestionBackgroundCss, startQuestionContainerCss } from './StartQuestionContainer.styles';

// function setCookie(name: string, value: string, days: number) {
//   let date = new Date();
//   date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//   let expires = 'expires=' + date.toUTCString();
//   document.cookie = name + '=' + value + ';' + expires + ';path=/';
// }

// setCookie(
//   'access_token',
//   'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMyIsImlhdCI6MTcyMjU2OTgwOCwiZXhwIjoxNzIyNTcxNjA4fQ.Tz4aH5d2lbARqN0n_BANdRHlwdsS1aNJFc0YLSjB9Wg',
//   7,
// );

export const StartQuestionContainer = () => {
  const router = useRouter();
  const { addQueryString } = useQueryString();
  const { myInfo } = useMyInfoQuery();

  return (
    <div css={startQuestionContainerCss}>
      <Profile profileImageUrl={myInfo.profileImageUrl} />

      <section css={startQuestionBackgroundCss}>
        <Button
          style={{ zIndex: Z_INDEX.relayStartButton }}
          onClick={() => router.push(`/select-relay-question?${addQueryString({ key: 'current-step', value: '1' })}`)}
        >
          시작하기
        </Button>
        <RelayStartBackground css={{ width: '100%', position: 'absolute', bottom: 0 }} />
      </section>
    </div>
  );
};
