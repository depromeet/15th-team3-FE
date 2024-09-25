'use client';

import { size } from '@sambad/sds/theme';

import { STEPS, StepType } from '@/onboarding/common/constants/steps';

import { ProgressIndicator } from '../../components/ProgressIndicator';

interface ProgressIndicatorContainerProps {
  step: StepType;
}

const stepToCurrentStepMap: Record<StepType, number> = {
  [STEPS.QUESTION]: 1,
  [STEPS.RESULT]: 2,
  [STEPS.FRIENDSHIP]: 3,
  [STEPS.ABOUT_ME]: 4,
};

export const ProgressIndicatorContainer = (props: ProgressIndicatorContainerProps) => {
  const { step } = props;

  const currentStep = stepToCurrentStepMap[step] || 1;

  return (
    <div css={{ padding: `${size['6xs']} ${size['2xs']}` }}>
      <ProgressIndicator totalStep={4} currentStep={currentStep} />
    </div>
  );
};
