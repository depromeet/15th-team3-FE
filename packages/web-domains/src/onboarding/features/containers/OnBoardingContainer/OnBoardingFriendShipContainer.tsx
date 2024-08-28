'use client';

import { Fragment } from 'react/jsx-runtime';

import { HandIcon } from '@/onboarding/common/assets/icons/HandIcon';
import BgImage from '@/onboarding/common/assets/images/bg-friendship.png';
import OnBoardingImage from '@/onboarding/common/assets/images/onboarding-friendship.png';

import { Header } from '../../components/Header/Header';
import { OnBoardingContent } from '../../components/OnBoardingContent/OnBoardingContent';

export const OnBoardingFriendShipContainer = () => {
  return (
    <Fragment>
      <Header Icon={<HandIcon />} title="친해지고 싶은 모임원을 찾아" subTitle="손 흔들어 인사해보세요!" />
      <OnBoardingContent imageUrl={OnBoardingImage} imageWidth="50%" imageTopPosition={-69} bgImageUrl={BgImage} />
    </Fragment>
  );
};
