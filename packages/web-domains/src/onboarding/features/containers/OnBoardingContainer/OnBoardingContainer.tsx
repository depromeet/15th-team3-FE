import { notFound } from 'next/navigation';

import { STEPS, StepType } from '@/onboarding/common/constants/steps';

import { OnBoardingAboutMeContainer } from './OnBoardingAboutMeContainer';
import { OnBoardingFriendShipContainer } from './OnBoardingFriendShipContainer';
import { OnBoardingQuestionContainer } from './OnBoardingQuestionContainer';
import { OnBoardingResultContainer } from './onBoardingResultContainer';

interface OnBoardingContainerProps {
  step: StepType;
}

export const OnBoardingContainer = (props: OnBoardingContainerProps) => {
  const { step } = props;

  switch (step) {
    case STEPS.QUESTION:
      return <OnBoardingQuestionContainer />;
    case STEPS.RESULT:
      return <OnBoardingResultContainer />;
    case STEPS.FRIENDSHIP:
      return <OnBoardingFriendShipContainer />;
    case STEPS.ABOUT_ME:
      return <OnBoardingAboutMeContainer />;
    default:
      return notFound();
  }
};
