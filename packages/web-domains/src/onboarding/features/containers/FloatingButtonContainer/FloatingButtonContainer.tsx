'use client';

import { css } from '@emotion/react';

import { STEPS, StepType } from '@/onboarding/common/constants/steps';

import { NextButton } from '../../components/Button/NextButton';
import { StartButton } from '../../components/Button/StartButton';

interface FloatingButtonContainerProps {
  step: StepType;
}

export const FloatingButtonContainer = (props: FloatingButtonContainerProps) => {
  const { step } = props;

  return (
    <div css={buttonWrapperCss} style={{ background: backGroundStyles[step] || 'none' }}>
      {step === STEPS.ABOUT_ME ? <StartButton /> : <NextButton />}
    </div>
  );
};

const backGroundStyles: Record<StepType, string> = {
  [STEPS.QUESTION]: 'linear-gradient(180deg, rgba(255, 187, 162, 0.00) 0%, #FFBBA2 100%)',
  [STEPS.RESULT]: 'linear-gradient(180deg, rgba(194, 164, 252, 0.00)0%, #C2A4FC 100%)',
  [STEPS.FRIENDSHIP]: 'linear-gradient(180deg, rgba(201, 243, 60, 0.00)0%, #C9F33C 100%)',
  [STEPS.ABOUT_ME]: 'linear-gradient(180deg, rgba(254, 237, 155, 0.00)0%, #FEED9B 100%)',
};

const buttonWrapperCss = css({
  position: 'fixed',
  zIndex: '10',
  bottom: '0',
  width: '100%',
  maxWidth: '600px',
  padding: '20px 106px 40px',
});
