import { Button } from '@sds/components';
import { useRouter, useSearchParams } from 'next/navigation';

import { StepType, STEPS } from '@/onboarding/common/constants/steps';

import { onBoardingButtonCss } from './styles';

const stepOrder: StepType[] = [STEPS.QUESTION, STEPS.RESULT, STEPS.FRIENDSHIP, STEPS.ABOUT_ME];

export const NextButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentStep = searchParams.get('step') as StepType;

  const currentStepIndex = stepOrder.indexOf(currentStep);
  const nextStep = stepOrder[currentStepIndex + 1] || stepOrder[0];

  const handleGoToNextPage = () => {
    router.push(`?step=${nextStep}`);
  };

  return (
    <Button size="large" css={onBoardingButtonCss} onClick={handleGoToNextPage}>
      다음
    </Button>
  );
};
