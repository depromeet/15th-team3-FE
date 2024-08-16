'use client';
import { QuestionIcon } from '@/onboarding/common/assets/icons/QuestionIcon';
import BgImage from '@/onboarding/common/assets/images/bg-question.png';
import OnBoardingImage from '@/onboarding/common/assets/images/onboarding-question.png';

import { BackGroundImage } from '../../components/BackGroundImage/BackGroundImage';
import { Header } from '../../components/Header/Header';
import { OnBoardingContent } from '../../components/OnBoardingContent/OnBoardingContent';

export const OnBoardingQuestionContainer = () => {
  return (
    <>
      <Header Icon={<QuestionIcon />} title="모임원들에게" subTitle="궁금한 것을 물어보면" />
      <OnBoardingContent src={OnBoardingImage} />
      <BackGroundImage src={BgImage} />
    </>
  );
};
