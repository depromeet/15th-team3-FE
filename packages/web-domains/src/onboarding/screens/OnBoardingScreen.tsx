import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

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
    redirect(`/onboarding/?step=${STEPS.QUESTION}`);
  }

  const cookieStore = cookies();
  const redirectUrl = cookieStore.get('redirect_url')?.value ?? '';

  return (
    <OnBoardingLayout step={step}>
      <Suspense>
        <ProgressIndicatorContainer step={step} />
        <OnBoardingContainer step={step} />
        <FloatingButtonContainer step={step} redirectUrl={redirectUrl} />
      </Suspense>
    </OnBoardingLayout>
  );
};
