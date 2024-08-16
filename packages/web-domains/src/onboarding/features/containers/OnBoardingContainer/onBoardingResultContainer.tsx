'use client';
import { colors } from '@sds/theme';

import { QuestionIcon } from '@/onboarding/common/assets/icons/QuestionIcon';
import BgImage from '@/onboarding/common/assets/images/bg-result.png';
import OnBoardingImage from '@/onboarding/common/assets/images/onboarding-result.png';

import { BackGroundImage } from '../../components/BackGroundImage/BackGroundImage';
import { Header } from '../../components/Header/Header';
import { OnBoardingContent } from '../../components/OnBoardingContent/OnBoardingContent';

export const OnBoardingResultContainer = () => {
  return (
    <>
      <Header
        Icon={<QuestionIcon color={colors.tertiary500} />}
        title="우리 모임원들이"
        subTitle="어떤 답변을 했는지 볼 수 있고"
      />
      <OnBoardingContent src={OnBoardingImage} />
      <BackGroundImage src={BgImage} />
    </>
  );
};
