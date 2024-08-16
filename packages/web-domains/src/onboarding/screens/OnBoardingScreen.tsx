import { notFound } from 'next/navigation';

import { STEPS, StepType } from '../common/constants/steps';
import { OnBoardingLayout } from '../features/components/Layout/OnBoardingLayout';
import { FloatingButtonContainer } from '../features/containers/FloatingButtonContainer/FloatingButtonContainer';
import { OnBoardingContainer } from '../features/containers/OnBoardingContainer/OnBoardingContainer';
import { ProgressIndicatorContainer } from '../features/containers/ProgressIndicatorContainer/ProgressIndicatorContainer';

interface OnBoardingScreenProps {
  step: StepType;
}

const STEPS_VALUES = Object.values(STEPS);

export const OnBoardingScreen = ({ step }: OnBoardingScreenProps) => {
  if (!STEPS_VALUES.includes(step)) {
    notFound();
  }

  return (
    <OnBoardingLayout step={step}>
      <ProgressIndicatorContainer step={step} />
      <OnBoardingContainer step={step} />
      <FloatingButtonContainer step={step} />
    </OnBoardingLayout>
  );
};
