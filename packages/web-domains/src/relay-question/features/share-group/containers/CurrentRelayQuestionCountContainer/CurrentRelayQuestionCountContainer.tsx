'use client';

import { ShareGroupBackground } from '../../../../assets/ShareGroupBackground';
import { CurrentQuestionInfo } from '../../components/CurrentQuestionInfo/CurrentQuestionInfo';

import { backgroundWrapperCss, wrapperCss } from './CurrentRelayQuestionCountContainer.styles';

export const CurrentRelayQuestionCountContainer = () => {
  return (
    <section css={wrapperCss}>
      <div css={backgroundWrapperCss}>
        <ShareGroupBackground style={{ width: '100%' }} />
        <CurrentQuestionInfo questionCount={0} questioner={{ name: '장종오', imageUrl: '' }} />
      </div>
    </section>
  );
};
