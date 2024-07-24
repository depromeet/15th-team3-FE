'use client';

import { Button } from '@sambad/sds/components';

import { RelayStartBackground } from '../../../assets/RealyStartBackground';
import { Profile } from '../components/Profile/Profile';
import { Z_INDEX } from '../constants';

import { StartQuestionBackgroundCss, StartQuestionContainerCss } from './StartQuestionContainer.styles';

export const StartQuestionContainer = () => {
  return (
    <div css={StartQuestionContainerCss}>
      <Profile />

      <section css={StartQuestionBackgroundCss}>
        <Button style={{ zIndex: Z_INDEX.relayStartButton }}>시작하기</Button>
        <RelayStartBackground css={{ width: '100%', position: 'absolute', bottom: 0 }} />
      </section>
    </div>
  );
};
