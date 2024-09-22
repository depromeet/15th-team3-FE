'use client';
import { colors } from '@sambad/sds/theme';
import { Fragment } from 'react/jsx-runtime';

import { QuestionIcon } from '@/onboarding/common/assets/icons/QuestionIcon';
import BgImage from '@/onboarding/common/assets/images/bg-result.png';
import OnBoardingImage from '@/onboarding/common/assets/images/onboarding-result.png';

import { Header } from '../../components/Header/Header';
import { OnBoardingContent } from '../../components/OnBoardingContent/OnBoardingContent';

export const OnBoardingResultContainer = () => {
  return (
    <Fragment>
      <Header
        Icon={<QuestionIcon color={colors.tertiary500} />}
        title="우리 모임원들이"
        subTitle="어떤 답변을 했는지 볼 수 있고"
      />
      <OnBoardingContent imageUrl={OnBoardingImage} bgImageUrl={BgImage} />
    </Fragment>
  );
};
