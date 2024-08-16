'use client';

import { Fragment } from 'react/jsx-runtime';

import { HumanIcon } from '@/onboarding/common/assets/icons/HumanIcon';
import BgImage from '@/onboarding/common/assets/images/bg-about-me.png';
import OnBoardingImage from '@/onboarding/common/assets/images/onboarding-about-me.png';

import { BackGroundImage } from '../../components/BackGroundImage/BackGroundImage';
import { Header } from '../../components/Header/Header';
import { OnBoardingContent } from '../../components/OnBoardingContent/OnBoardingContent';

export const OnBoardingAboutMeContainer = () => {
  return (
    <Fragment>
      <Header Icon={<HumanIcon />} title="릴레이 질문으로" subTitle="나만의 자기소개서 완성!" />
      <OnBoardingContent imageUrl={OnBoardingImage} />
      <BackGroundImage imageUrl={BgImage} />
    </Fragment>
  );
};
