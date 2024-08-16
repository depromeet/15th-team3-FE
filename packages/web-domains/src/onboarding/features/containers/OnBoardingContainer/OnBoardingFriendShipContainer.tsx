'use client';

import { HandIcon } from '@/onboarding/common/assets/icons/HandIcon';
import BgImage from '@/onboarding/common/assets/images/bg-friendship.png';

import { BackGroundImage } from '../../components/BackGroundImage/BackGroundImage';
import { Header } from '../../components/Header/Header';
import { OnBoardingContent } from '../../components/OnBoardingContent/OnBoardingContent';

export const OnBoardingFriendShipContainer = () => {
  return (
    <>
      <Header Icon={<HandIcon />} title="릴레이 질문으로" subTitle="나만의 자기소개서 완성!" />
      <OnBoardingContent />
      <BackGroundImage src={BgImage} />
    </>
  );
};
